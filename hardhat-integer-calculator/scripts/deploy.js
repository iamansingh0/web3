const { ethers } = require("hardhat");
require("dotenv").config();
const { run, network } = require("hardhat");

async function main() {
    const contractFactory = await ethers.getContractFactory(
        "IntegerCalculator"
    );
    console.log("Deploying...");
    const simpleCalculator = await contractFactory.deploy();
    await simpleCalculator.deployed();
    console.log(`deployed contract to: ${simpleCalculator.address}`);
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API) {
        await simpleCalculator.deployTransaction.wait(6);
        await verify(simpleCalculator.address, []);
    }
    console.log("hello")
}

async function verify(contractAddress, args) {
    // use hardhat etherscan plugin
    console.log("Verifying contract..");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified");
        } else {
            console.log(e);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
