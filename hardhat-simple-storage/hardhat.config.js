require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby"
const RINKEBY_PRI_KEY = process.env.RINKEBY_PRI_KEY || "0xkey"
const Etherscan_apiKey = process.env.apiKey || "key"
const COINMARKETCAP_API = process.env.COIN_API_KEY || "key"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [RINKEBY_PRI_KEY],
            chainId: 4,
        },
    },
    localhost: {
        url: "http://127.0.0.1:8545/",
        chainId: 31337,
        // accounts: thanks hardhat!
    },
    solidity: "0.8.8",
    etherscan: {
      apiKey: Etherscan_apiKey,
    },
    gasReporter: {
        enablesd: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API,
        token: "MATIC"
    }
}
