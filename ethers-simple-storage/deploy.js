const ethers = require("ethers");

async function main() {
    // http://0.0.0.0.7545  ganache rpc
    //40d9224f8e1aaac84a6a9d092d834aa65dacab721e3ece9ee8f7792eff41a00d private key
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet("40d9224f8e1aaac84a6a9d092d834aa65dacab721e3ece9ee8f7792eff41a00d", provider);P
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });