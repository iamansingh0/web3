const ethers = require("ethers");
const fs = require("fs");

async function main() {
    // http://0.0.0.0.7545  ganache rpc
    //bd029ee8e1a69a8f64cf0ec081ab5335b442157b396a0589e2838bcefe54719e private key
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    // ethers.Wallet(private key, rpc server)
    const wallet = new ethers.Wallet("bd029ee8e1a69a8f64cf0ec081ab5335b442157b396a0589e2838bcefe54719e", provider);

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});