# BitCoin Playground

It's just me messing with BitCoin/Blockchain stuff, created with React Native Web.
![demo](https://i.imgur.com/zk4soPk.png)
### Features:
1. Generate nmemonic words of your choice of length (12-24).
2. Generate HD SegWit BitCoin wallet address with mnemonic words or hex string seed.
3. Generate N-Out-Of-M MultiSig BitCoin wallet address with specified m & n value and public keys.

All generated mnemonic words follow the [BIP39](https://iancoleman.io/bip39/) standard. And all Bitcoin address generated using this web app can be validated with online tools like [this](https://awebanalysis.com/en/bitcoin-address-validate/).

## How to run it

### Live version

You can see a live version at [https://kelvinthh.github.io/btc-playground/](https://kelvinthh.github.io/btc-playground/)

### Or run on your own machine

To run the project on your own, simply clone this repository.

#### `npm install`

Installs all the required libraries and packages.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

## Third-party libraries/packages in-use

* [BIP39](https://github.com/bitcoinjs/bip39)
* [hdkey](https://github.com/cryptocoinjs/hdkey)
* [BitcoinJS (bitcoinjs-lib)](https://github.com/bitcoinjs/bitcoinjs-lib)
