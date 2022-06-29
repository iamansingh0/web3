const { ethers } = require("hardhat")

async function main() {
    const contractFactory = await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying...")
    const simpleStorage = await contractFactory.deploy()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
