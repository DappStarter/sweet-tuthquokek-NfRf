require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe struggle deny spider athlete install kitten sun strategy'; 
let testAccounts = [
"0x27977872ab0e73db7f55aa21465339d69e3053400b5016d81855c65a63414ded",
"0x0ff66cd0cb901f8211a07c2f6538f1f784bc40d39c96a578dc8946dd9aadbe73",
"0x01c7c73f346405890d8dd681e619205e11193969370c390bc272eba40eb531fc",
"0xf1f3b713b5a470824c05362ed399c40a0ee2bc12bc00c4ffddb6e49fb54e906c",
"0x5eaa2d2085b7b412d5f3d188280fc8ff000766237aaa877ac4c1def41aabc54d",
"0x79f49b10bf10886bed1eef2def946d5c629cd844f4bd4621f46b5e5fef361658",
"0x3798a769db34860dbf557798fa040f0f2bd9a678416d6493e38915af268c50a4",
"0x269b0fbb24bda01ef455468cfddc28631f463796ca0a3a7ec6f4b7c60ad59519",
"0x200f74e4513800d59403b45af547a5e6e527b6dc476936f623c7b6a31f22c7f9",
"0xd7115fbfac3702c4289588d12aaa4e805cb204d2e2394d2a528b18d46f62220e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

