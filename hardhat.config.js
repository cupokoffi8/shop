const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.env').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/dea1ce0a87e34ceab61ce887bdd42a60', 
      accounts: [privateKey]
    }
  },
  solidity: '0.8.4',
};
