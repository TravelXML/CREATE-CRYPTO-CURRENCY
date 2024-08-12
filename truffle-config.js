const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"; // Replace with your own mnemonic
const infuraProjectId = "2daea8c7a40d4db88042cabde3d1b7d6"; // Replace with your own Infura project ID

module.exports = {
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

  // Define networks
  networks: {
    // Development network (local Ganache instance)
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    // Rinkeby test network
    rinkeby: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
        chainId: 4
      }),
      network_id: 4,       // Rinkeby's network id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets)
    },

    // Ethereum mainnet
    mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: `https://mainnet.infura.io/v3/${infuraProjectId}`,
        chainId: 1
      }),
      network_id: 1,       // Ethereum mainnet id
      gas: 5500000,        // Gas limit
      gasPrice: 10000000000, // 10 gwei (in wei)
      confirmations: 2,    // # of confirmations to wait between deployments (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out (minimum/default: 50)
      skipDryRun: false    // Don't skip dry run before migrations on mainnet
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure plugins
  plugins: [
    'truffle-plugin-verify'
  ],

  // Configure your API keys (optional)
  api_keys: {
    etherscan: "DIZGIVA9U847ZGR3CHXD233ABKIW7UQ9VZ" // Optional for verifying contracts on Etherscan
  }
};
