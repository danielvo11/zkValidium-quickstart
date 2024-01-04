const ethers = require('ethers');
const fs = require('fs');

const endpoint = 'http://localhost:8545'; // mainnet is 8545, testnet is 8123

let wallet = ethers.Wallet.fromEncryptedJsonSync(fs.readFileSync("../config/sequencer.keystore"), "testonly");
const provider = new ethers.providers.JsonRpcProvider(endpoint);
wallet = wallet.connect(provider);

async function main(){
  const res = await wallet.sendTransaction(tx = {
    to: "0x748A1b651Fb70Dd8ac3660Aa422e9cdd666BbEF3",
    value: ethers.utils.parseEther("10.0")
  });
  console.log(' result: ', res);
};

main();