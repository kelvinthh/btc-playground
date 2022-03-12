import * as bip39 from "bip39";
import * as hdkey from "hdkey";
import * as bitcoin from "bitcoinjs-lib";

export function getSegwit(mnemonic, path) {
  console.log("Mnemonic", mnemonic);
  console.log("Path", path);

  // Check if the provided wods is valid
  if (!bip39.validateMnemonic(mnemonic)) {
    return { valid: false };
  } else {
    const seed = bip39.mnemonicToSeedSync(mnemonic).toString("hex");

    const root = hdkey.fromMasterSeed(seed);
    // as defined by BIP-44
    const addrnode = root.derive(path);
    const publicKey = addrnode.publicKey;
    const address = bitcoin.payments.p2wpkh({ pubkey: publicKey }).address ?? "";

    console.log("Seed", seed);
    console.log("Public key", publicKey.toString("hex"));
    return { valid: true, data: { seed: seed, address: address } };
  }
}

export function getMultiSeg(mValue, publicKeys) {
  console.log("M Length", mValue, "Public keys length", publicKeys.length);
  let pubkeys = publicKeys.map((hex) => Buffer.from(hex, "hex"));
  const { address } = bitcoin.payments.p2sh({redeem: bitcoin.payments.p2ms({ m: +mValue, pubkeys }),});
  return address ?? "";
}
