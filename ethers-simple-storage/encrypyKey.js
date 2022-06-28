const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptJsonKey = await wallet.encrypt(
        process.env.PrivateKeyPassword, 
        process.env.PRIVATE_KEY);
    console.log(encryptJsonKey);
    fs.writeFileSync("./.encryptedKey.json", encryptJsonKey);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});