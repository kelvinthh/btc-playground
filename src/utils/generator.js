let crypto = require('crypto');
let BIP39 = require('bip39');

export function getRandomBytes(wordCount) // Can be any of 12, 15, 18, 21, 24
{
    let fullEntropy = wordCount * 11;  // Max bit count
    let checksum = fullEntropy % 32;
    let initEntropy = fullEntropy - checksum;
    let byteCount = initEntropy / 8;

    //Generate Initial entropy starts.
    let randomBytes = crypto.randomBytes(byteCount).toString('hex');
    return randomBytes;
}