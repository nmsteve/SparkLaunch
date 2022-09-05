require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

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
module.exports = {

  paths: {
    artifacts: "../frontend/src/components/Middlediv/artifacts",
  },
  solidity: "0.8.11",
  
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: "MMTH9PCYDD18ZYA6TKHA51TUKEJ536C33P"
  },
  
    solidity: {
      compilers: [
        {
          version: "0.8.4",
          settings: {
            optimizer: {
              enabled: true,
              runs: 1000
            }
          }
        },
        {
          version: "0.8.5",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200
            }
          }
        },
        {
          version: "0.8.7",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200
            }
          }
        },
        {
          version: "0.8.11",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200
            }
          }
        },
      ],
    
  },
};