let crypto = require("crypto");
let CryptoJS = require("crypto-js");
let BIP39 = require("bip39");

export function generateMnemonic(wordCount) // Word count can be any of 12, 15, 18, 21, 24
{
    let randomBytes = getRandomBytes(wordCount);
    let mnemonic = BIP39.entropyToMnemonic(randomBytes);
    if(BIP39.validateMnemonic(mnemonic))
    {
        console.log("Valid BIP39 Mnemonic, Length:",mnemonic.split(' ').length);
        return mnemonic;
    }
    else
    {
        console.log(mnemonic)
        return "ERROR, fail to validate the mnemonic words with BIP39 standard.";
    }
    
}

function getRandomBytes(wordCount) {
  // Can be any of 12, 15, 18, 21, 24
  let fullEntropy = wordCount * 11; // 11 being the max bit count
  let checksum = fullEntropy % 32; // Checksum = entropy length divided by 32
  let initEntropy = fullEntropy - checksum;
  let byteCount = initEntropy / 8;

  // Return 40 length hexa-decimal characters
  let randomBytes = crypto.randomBytes(byteCount).toString("hex");
  console.log("Random bytes is", randomBytes);
  return randomBytes;
}

/* UNUSED CODE

export function generateMnemonic(wordCount)
{
    let randomBytes = getRandomBytes(wordCount);
    let initEntropy = getInitEntropy(randomBytes);
    let hash = getHash(initEntropy);
    let checksumBits = parseInt(hash.substring(0,2), 16).toString(2).substring(0,5);
    let finalEntropy = initEntropy.concat(checksumBits)
    let mnemonic = getMnemonic(finalEntropy);
    if(validate(mnemonic))
    {
        return mnemonic;
    }
    else
    {
        console.log(mnemonic)
        return "ERROR, fail to validate the mnemonic words with BIP39 standard.";
    }
    
}

function getInitEntropy(randomBytes) {
  let initEntropy = "";
  for (let count = 0; count < randomBytes.length; count++) {
    let firstChar = randomBytes.charAt(count);
    let binary = parseInt(firstChar, 16).toString(2);
    initEntropy = initEntropy.concat("0000".slice(binary.length).concat(binary));
  }
  console.log("Initial entropy is", initEntropy);
  return initEntropy;
}

function getHash(string) {
  let hex = binaryToHex(string).result;
  console.log("hex is", hex);
  let hash = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(hex)).toString();
  console.log("hash is", hash);
  return hash;
}

function getMnemonic(finalEntropy) {
  let words = [];
  for (let count = 0, start = 0, end = 11; count < finalEntropy.length / 11; count++) {
    let bi = finalEntropy.slice(start, end);
    let biDec = parseInt(bi, 2);
    start = end;
    end = end + 11;
    //finalEntropy.push(BIP39.wordlists.english[biDec]);
    words.push(BIP39.wordlists.english[biDec]);
  }
  console.log(words);
  //console.log("Validating entropy", BIP39.validateMnemonic(words));
  return words.join(" ");
}

export function validate(mnemonic)
{
    return BIP39.validateMnemonic(mnemonic)
}

// Function for converting binary to hexadecimal bytes
function binaryToHex(s) {
  var i,
    k,
    part,
    accum,
    ret = "";
  for (i = s.length - 1; i >= 3; i -= 4) {
    // extract out in substrings of 4 and convert to hex
    part = s.substr(i + 1 - 4, 4);
    accum = 0;
    for (k = 0; k < 4; k += 1) {
      if (part[k] !== "0" && part[k] !== "1") {
        // invalid character
        return { valid: false };
      }
      // compute the length 4 substring
      accum = accum * 2 + parseInt(part[k], 10);
    }
    if (accum >= 10) {
      // 'A' to 'F'
      ret = String.fromCharCode(accum - 10 + "A".charCodeAt(0)) + ret;
    } else {
      // '0' to '9'
      ret = String(accum) + ret;
    }
  }
  // remaining characters, i = 0, 1, or 2
  if (i >= 0) {
    accum = 0;
    // convert from front
    for (k = 0; k <= i; k += 1) {
      if (s[k] !== "0" && s[k] !== "1") {
        return { valid: false };
      }
      accum = accum * 2 + parseInt(s[k], 10);
    }
    // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
    ret = String(accum) + ret;
  }
  return { valid: true, result: ret };
}

// Function for converting hexadecimal bytes to binary
function hexToBinary(s) {
  var i,
    k,
    part,
    ret = "";
  // lookup table for easier conversion. '0' characters are padded for '1' to '7'
  var lookupTable = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    a: "1010",
    b: "1011",
    c: "1100",
    d: "1101",
    e: "1110",
    f: "1111",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };
  for (i = 0; i < s.length; i += 1) {
    if (lookupTable.hasOwnProperty(s[i])) {
      ret += lookupTable[s[i]];
    } else {
      return { valid: false };
    }
  }
  return { valid: true, result: ret };
}

*/
