const { ethers } = require("hardhat")

async function main() {
    const contractFactory = await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying...")
    const simpleStorage = await contractFactory.deploy()
    await simpleStorage.deployed()
    console.log(`deployed contract to: ${simpleStorage.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
