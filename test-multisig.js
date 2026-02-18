const { expect } = require("chai");
const { ethers } = require("hardhat");

async function runTest() {
  const [owner1, owner2, recipient] = await ethers.getSigners();
  const MultiSig = await ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy([owner1.address, owner2.address], 2);

  console.log("MultiSig deployed to:", await wallet.getAddress());
  
  // Example: Submit a 1 ETH transaction
  await wallet.submitTransaction(recipient.address, ethers.parseEther("1.0"), "0x");
  console.log("Transaction 0 submitted.");
}

runTest().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
