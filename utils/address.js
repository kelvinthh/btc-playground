import * as bip39 from "bip39";
import * as hdkey from "hdkey";
import * as bitcoin from "bitcoinjs-lib";

export function getAddress(mnemonic, path) {
  console.log("Mnemonic", mnemonic);
  console.log("Path", path);

  // Check if the provided wods is valid
  if (!bip39.validateMnemonic(mnemonic)) {
    return { valid: false };
  } else {
    const seed = bip39.mnemonicToSeedSync(mnemonic).toString("hex");
    console.log("seed", seed);

    const root = hdkey.fromMasterSeed(seed);
    // as defined by BIP-44
    const addrnode = root.derive(path);
    const publicKey = addrnode.publicKey;
    const address = bitcoin.payments.p2wpkh({ pubkey: publicKey }).address ?? "";

    return { valid: true, data: { seed: seed, address: address } };
  }
}
