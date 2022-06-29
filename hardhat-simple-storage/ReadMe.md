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
