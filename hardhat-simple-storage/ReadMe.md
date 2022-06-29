<div align="center">
  <a href="https://github.com/iamansingh0/web3/tree/master/hardhat-simple-storage">
    <p align="center">
      <img src="blueprint.png" alt="Logo" width="80" height="80">
    </p>
  </a>
  <h3 align="center"><strong>Compile and Deploy Smart Contract Using Hardhat</strong></h3>
  <hr>
</div>

## About the Project
It is a very basic project for web3 beginners on how to deploy their smart contract using **hardhat**. In this project, there is a smart contract called SimpleStorage.sol. By using step by step process you can compile and deploy your smart contract.

## Get Started
So before getting started, I want you to make sure that while following all the steps you might get errors so don't let them stop you! Search your error in the `community` and in indexed platforms like **stackoverflow** and **stackEthExchange** etc!

### Prerequisites and Installation
As a prerequisites, you should atleast know how javascript syntaxes work. If you forget about them, I'll pinpoint some keywords that will be important in this project.

You should know how to write smart contract in solidity, I guess if you are trying to deploy it than you must know solidity.

As we all know that linux environment is the best for programming and tasks, so for this project also I'll be using linux environment in your windows and macOS environemnt
So first you need to install **wsl** in your environment. It lets you work on linux environment within your local environment.

- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install)

After installing wsl, set username and password. Now open vscode and download an extension called **remote development**. Open command Palette and search *open in wsl window*. It will open vs code in wsl environment. Make a folder and get started!

### What does this contract do

| Functions and Variables      | What they do |
| ----------- | ----------- |
| 1. ``uint256 favoriteNumber``     | `It is a global variable to store an uint256 number.       |
| 2. ``struct People`` | It is a struct and stores name and fav number.        |
| 3. ``People[]  public people``   | people Array of type People.        |
| 4. `mapping(string => uint256)  public nameToFavoriteNumber`   |  Mapping name to fav number.      |
| 5. ``function store(uint256)``  | It's a function that takes a number and update global variable favoriteNumber to it.        |
| 6. `function retrieve()`   | It's a view function, it returns the number stored in point 1. variable.       |
| 7. `function addPerson(name, favNum)` | It is used to fill the array and mapping.

## Setting up Hardhat
1. Install node.js
``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
2. Install yarn package manager | `corepack enable`
3. Creating a new *Hardhat* project
```
1. yarn init
2. yarn add --dev hardhat
3. yarn hardhat
```
4. Choose **Create a basic sample project** and hit enter
- yes to .gitignore
- yes to install dependencies with yarn

## Deploying SimpleStorage From Hardhat
Before starting this part, I recommend you to go and read a bit of [hardhat](https://hardhat.org/getting-started) documentation to know the basics of hardhat.

#### Follow the steps to deploy SimpleStorage Smart Contract
1. First delete the `Greeter.sol` file from **contracts** directory and make a new solidity file and write your smart contract code there.
> For me its SimpleStorage.sol
2. Match the solidity compiler in your solidity file with `hardhat.config.js` file, if they are different then update the compiler version in `hardhat.config.js` file.
3. run `yarn hardhat compile`, and the solidity file must be compiled with the output: 
```
Downloading compiler 0.8.8
Compiled 1 Solidity file successfully
Done in 4.95s.
```
4. Go to the **scripts** folder and rename the current *.js* file to **deploy.js**
5. Delete the file content and make it blank.
6. Define main function and call it:
```javascript
async function main() {}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
```
7. import [ethers.js](https://docs.ethers.io/v5/) from `hardhat` at the top of the **deploy.js** file.
```javascript
const { ethers } = require("hardhat")
```
8. Edit main() function this way to deploy contract:
```javascript
const contractFactory = await ethers.getContractFactory("SimpleStorage")
console.log("Deploying...")
const simpleStorage = await contractFactory.deploy()
await simpleStorage.deployed()
console.log(`deployed contract to: ${simpleStorage.address}`)
```
9. Our contract got deployed to default **[hardhat network](https://hardhat.org/hardhat-network)**! 😎

## Deploy to a Rinkeby Testnet
To deploy smart contract to a network other than hardhat network such as [rinkeby](http://www.alchemy.com/overviews/rinkeby-testnet), we need to go through some steps that are given below.
To deploy smart contract in a network, you basically need two things
- rpc_url
- private_key
1. First you need to go and create an account in [Alchemy](https://www.alchemy.com/)
2. Choose **Ethereum** and click *get started*.
3. Create a new app
```json
{
  "teamName": "YOUR_NAME_OR_TEAM_NAME",
  "appName": "Give_Your_App_aName",
  "network": "rinkeby"
}
```
4. After creating app, you need to copy its **https** link, that is your network's *RPC_URL*
5. Now go to your [metamask](https://metamask.io/) account, choose rinkeby testnet network and export private key of your account.
6. Now add a package called **dotenv** using | `yarn add --dev dotenv`
7. import it at the top of your deploy.js file:
```javascript
require("dotenv").config()
```
8. Now create a new file: `.env` and write this code their
```env
RINKEBY_RPC_URL = <Your_RPC_URL>
RINKEBY_PRIVATE_KEY = <Your_Private_Key>
```
9. Now edit **hardhat.config.js** file
```javascript
module.exports = {
  defaultNetwork: "hardhat",
  netoworks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      account: [process.env.RINKEBY_PRIVATE_KEY],
      chainId: 4,
    },
  },
  solidity: "0.8.8",
};
```
=======
9. Our contract got deployed to default **[hardhat network](https://hardhat.org/hardhat-network)**! 😎 This hardhat network comes with a default rpc and private key for you!
