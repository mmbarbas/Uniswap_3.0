require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GORLI_URL = process.env.GORLI_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sandbox: {
      url: GORLI_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
