const ethers = require("ethers");
const fs = require("fs-extra");
require('dotenv').config();

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.rpcURL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY , provider);

    const abi = fs.readFileSync("./IntCal_sol_IntCal.abi", "utf8");
    const bin = fs.readFileSync("./IntCal_sol_IntCal.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    console.log("Delploying.....");
    const contract = await contractFactory.deploy();
    const transactionReceipt = await contract.deployTransaction.wait(1);
    // console.log(`Contract Address: ${contract.address}`);
    // console.log(contract);
    const subResponse = await contract.subtraction("69", "34");
    const subResponseReceipt = await subResponse.wait(1);
    const result = await contract.seeResults();
    console.log(`Subtration of 69 and 34 is: ${result.toString()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })