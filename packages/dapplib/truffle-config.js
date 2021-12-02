require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth machine slow good clock metal gather'; 
let testAccounts = [
"0x396faf1e65627ee893f460d77ac06e96ba41927160cc5e62dc5ceb5dacd0505e",
"0xe3c1388aef73ef4ec507c4f6e7affdccaa6be9dd451cfde32a27c65246d82eaf",
"0x1f72fc9878cdc83b0eb3db6225f0c895bf456b7230a51df3913b9bdc245a2e7c",
"0x0b203a20f3d0ab1fd9f1bc09cbb39c2f1491bfb55a9e8ca1edd3e5f06ea61a5d",
"0xaf35322112d0cc5e83b955592d9dcf7efa998d6202cf64344535743b8e194fe1",
"0xc43512f1c6be5f5fea96805e0586d5d2dbe4a536b8d37580eb9ca0f68cc90244",
"0x91728a3492b3b3c616aaeaaa86a72fcadc101606a416a54e07f897269cbc27d3",
"0xfe3dcb297c3fb52f00002b817f75b17b63bb29010fcb1108f200db508ee6e3ac",
"0xf43836fceaa526bc52edef71eb3718133540de0b73b831a66e0fbac1bdd34648",
"0x4c934772a73358fdd42df8725f9a8845017265befd0ec48b7e5db484a7d535ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

