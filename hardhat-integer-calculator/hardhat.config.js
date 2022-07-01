require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RPC_URL = process.env.RINKEBY_RPC_URL;
const PRI_KEY = process.env.RINKEBY_PRI_KEY;
const API_KEY = process.env.ETHERSCAN_API;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RPC_URL,
            accounts: [PRI_KEY],
            chainId: 4,
        },
    },
    etherscan: {
        apikey: API_KEY,
    },
    solidity: "0.8.4",
};
