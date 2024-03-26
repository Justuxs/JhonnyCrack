const ethers = require("ethers");
const fs = require("fs/promises");

const API_KEY =
  "https://eth-mainnet.g.alchemy.com/v2/YBeDUICyTXE-TUDJCHuS3uD2tUM-cKU8"; // you need to put your web3 provider (Alchemy, Infura, Geth, etc) api url here
const provider = new ethers.JsonRpcProvider(API_KEY);

async function main() {
  let i = 1;
  while (1) {
    let wallet = ethers.Wallet.createRandom(); // create a new wallet
    let mnemonic = wallet.mnemonic.phrase; // mnemonic
    let address = wallet.address; // address
    let balance = ethers.formatEther(await provider.getBalance(wallet.address)); // balance
    if (i % 10000 === 0) {
        console.log(balance); // Log the balance
        i = 1;
    }

    i++;
    if (balance !== "0.0") {
      console.log(mnemonic);
      console.log(balance);
      console.log(wallet);
      console.log(address);
    }
  }
}


  try {
    main();
  } catch (error) {
        main();
  }

