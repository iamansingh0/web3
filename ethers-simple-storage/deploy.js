const ethers = require("ethers");
const fs = require("fs");

async function main() {
    // HTTP://172.20.64.1:7545  ganache rpc
    //057625264bbe0a94ce0584a19e930b1fe61509949b02dd1b4b53103eba82f02b private key
    const provider = new ethers.providers.JsonRpcProvider("http://172.20.64.1:7545");
    // ethers.Wallet(private key, rpc server)
    const wallet = new ethers.Wallet("057625264bbe0a94ce0584a19e930b1fe61509949b02dd1b4b53103eba82f02b", provider);

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    console.log("Delploying.....");
    const contract = await contractFactory.deploy();
    // await -> stop here, wait for the contract to deploy
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});