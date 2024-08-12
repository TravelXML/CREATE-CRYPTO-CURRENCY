module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
        gas: 8000000,         // Increase gas limit
        gasPrice: 20000000000 // Adjust gas price if necessary
      },
      // Other network configurations...
    },
    compilers: {
      solc: {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  };
  