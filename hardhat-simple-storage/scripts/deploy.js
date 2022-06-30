const { ethers } = require("hardhat")
require("dotenv").config()

async function main() {
    const contractFactory = await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying...")
    const simpleStorage = await contractFactory.deploy()
    await simpleStorage.deployed()
    console.log(`deployed contract to: ${simpleStorage.address}`)
}

// automatically verify right after we deploy
async function verify(contractAddress, args) {
    // use hardhat etherscan plugin
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
