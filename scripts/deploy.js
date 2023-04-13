const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const base_uri = 'https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/'
  const Contract = await ethers.getContractFactory('Contract')
  const contract = await Contract.deploy(base_uri)
  
  await contract.deployed()

  const [signer, user] = await ethers.getSigners();

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
  
  const amount = ethers.utils.parseEther('0.5')

  await contract.mint(1, 150);
  await contract.mint(2, 100);
  await contract.mint(5, 200);
  await contract.mint(10, 200);
  await contract.mint(20, 200);
  await contract.mint(50, 150);
  await contract.mint(100, 100);
  await contract.mint(200, 50);
  await contract.mint(500, 40);
  await contract.mint(1000, 20);
  
  await contract.setApprovalForAll(contract.address, true);

  console.log("Successfully minted");
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})