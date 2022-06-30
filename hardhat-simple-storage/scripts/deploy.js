const { ethers, run, network } = require("hardhat")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

async function main() {
    const contractFactory = await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying...")
    const simpleStorage = await contractFactory.deploy()
    await simpleStorage.deployed()
    console.log(`deployed contract to: ${simpleStorage.address}`)
}

async function verify(contractAddress, args) {
  // use hardhat etherscan plugin
  console.log("Verifying contract..");
  try {
      await run("verify:verify", {
          address: contractAddress,
          constructorArguments: args,
      })
  } catch(e) {
      if(e.message.toLowerCase().includes("already verified")) {
          console.log("Already verified")
      } else {
          console.log(e)
      }
  }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
