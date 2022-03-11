let crypto = require("crypto");
let CryptoJS = require("crypto-js");
let BIP39 = require("bip39");
let HDKey = require("hdkey");
let createHash = require("create-hash");
let bs58check = require('bs58check');


export function getAddress(mnemonic, path) {
  console.log("Mnemonic", mnemonic);
  console.log("Path", path);
  let seed = '';

  // Check if the provided wods is valid
  if (!BIP39.validateMnemonic(mnemonic)) {
    return { valid: false };
  } else {
    seed = BIP39.mnemonicToSeedSync(mnemonic).toString('hex');
    console.log('seed',seed);

    const root = HDKey.fromMasterSeed(seed);
    //const masterPrivateKey = root.privateKey.toString("hex");

    // as defined by BIP-44
    const addrnode = root.derive(path);

    const sha256 = createHash("sha256").update(addrnode.publicKey).digest();
    const rmd160 = createHash("rmd160").update(sha256).digest();

    let address = Buffer.allocUnsafe(21);
    address.writeUInt8(0x00, 0);
    rmd160.copy(address, 1); 
    const base58Result = bs58check.encode(address);
    console.log("Base58Check: " + base58Result);

    return { valid: true, ret: {seed: seed, address: base58Result} };
  }
}
