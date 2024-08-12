# Create Your Own Cryptocurrency

We’re going to create and deploy a new cryptocurrency on the Ethereum blockchain using Solidity, Truffle, and Docker. This guide will help you, whether you're new or experienced, to successfully set up and manage your cryptocurrency. I’ve named this crypto AAyu after my son, Aayan.
![crypto_blog_post_image](https://github.com/TravelXML/CREATE-CRYPTO-CURRENCY/blob/master/1.png)


## What is Cryptocurrency?

Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies, cryptocurrencies are decentralized and operate on blockchain technology. They can be used for various purposes such as online transactions, investments, and as tokens in decentralized applications (DApps).

### Purposes of Creating Your Own Cryptocurrency

1. **Decentralized Transactions**: Facilitate peer-to-peer transactions without intermediaries.
2. **Incentive Programs**: Create tokens to reward users within a platform or ecosystem.
3. **Fundraising**: Launch an Initial Coin Offering (ICO) to raise funds for a project.
4. **Custom Applications**: Use tokens within a decentralized application (DApp) for various functionalities.
5. **Store of Value**: Create a new asset class that can be traded or held as an investment.

### Factors That Influence the Value of Cryptocurrency

1. **Utility**: The more useful your token is within an ecosystem, the higher its demand and value.
2. **Scarcity**: Limiting the total supply of your cryptocurrency can increase its value through scarcity.
3. **Adoption**: Wider acceptance and usage of your token can drive up its value.
4. **Security**: Strong security measures can build trust and increase value.
5. **Market Trends**: External factors such as regulations and market sentiment also play a role in value.

## Crawl the codes

1. **contracts/**: Contains Solidity smart contracts defining the cryptocurrency.
2. **migrations/**: Holds migration scripts to deploy the contracts to Ethereum.
3. **test/**: Includes test scripts to ensure the contracts function correctly.
4. **Dockerfile**: Defines the environment setup for the project using Docker.
5. **docker-compose.yml**: Manages multi-container Docker applications.
6. **truffle-config.js**: Configures the Truffle framework for different networks.

These files collectively allow you to create, deploy, and test a cryptocurrency on Ethereum. 


## Step-by-Step Setup Guide

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Docker](https://www.docker.com/): Containerization platform to create a consistent environment.
- [Node.js](https://nodejs.org/): JavaScript runtime required to run Truffle.
- [Truffle](https://www.trufflesuite.com/): Development framework for Ethereum.
- [Git](https://git-scm.com/): Version control system to manage code.

### 1. Setting Up the Environment

#### Step 1: Clone the Repository

Start by cloning the project repository from GitHub:

```bash
git clone https://github.com/TravelXML/CREATE-CRYPTO-CURRENCY.git
cd CREATE-CRYPTO-CURRENCY
```

#### Step 2: Build the Docker Environment

Next, build the Docker environment:

```bash
docker build -t aayu-token-env .
```

#### Step 3: Run the Docker Container

Run the Docker container with the following command:

```bash
docker run -it -p 8545:8545 aayu-token-env
```
![image](https://github.com/user-attachments/assets/1f75a53e-102e-418b-98bc-2345406a27c0)
![image](https://github.com/user-attachments/assets/89cd2d25-2864-4d73-8a83-1ee7b939d4eb)


#### Step 4: Access the Docker Container

To access the running Docker container:

```bash
docker ps
docker exec -it <container_id_or_name> /bin/bash
```

Replace `<container_id_or_name>` with your container ID or name. You can find this from the output of `docker ps`.

### 2. Installing Dependencies

#### Step 1: Navigate to the Project Directory

Inside the Docker container, navigate to the project directory:

```bash
cd /usr/src/app
```

#### Step 2: Install OpenZeppelin Contracts

Install the required OpenZeppelin contracts:

```bash
npm install @openzeppelin/contracts@4.8.0
```

Verify the installation by listing the contents:

```bash
ls node_modules/@openzeppelin/contracts/security/
```

#### Step 3: Install Truffle HDWallet Provider

Install the Truffle HDWallet Provider:

```bash
npm install @truffle/hdwallet-provider
```

### 3. Compiling and Deploying the Smart Contract

#### Step 1: Compile the Smart Contracts

Compile your smart contracts using Truffle:

```bash
truffle compile
```

#### Step 2: Deploy in Development Environment

Deploy the smart contracts to the development network:

```bash
truffle migrate --network development --verbose-rpc
```

#### Step 3: Deploy to Rinkeby Test Network

Deploy the smart contracts to the Rinkeby test network:

```bash
truffle migrate --network rinkeby
```

### 4. Testing and Interacting with Your Token

#### Step 1: Access Truffle Console

After deployment, access the Truffle console:

```bash
truffle console --network development
```

#### Step 2: Interact with the Token

Inside the Truffle console, you can interact with your AAyuToken smart contract:

```javascript
const token = await AAyuToken.deployed();
const name = await token.name();
console.log(name); // Should print "AAyu"

const symbol = await token.symbol();
console.log(symbol); // Should print "AYU"

const totalSupply = await token.totalSupply();
console.log(totalSupply.toString()); // Prints total supply in wei

const balance = await token.balanceOf("YOUR_ACCOUNT_ADDRESS");
console.log(balance.toString()); // Prints balance of the specified account in wei
```

Replace `"YOUR_ACCOUNT_ADDRESS"` with the actual Ethereum address.

### Deploying to Rinkeby or Mainnet

#### 1. Prerequisites

Before deploying to Rinkeby or the Ethereum mainnet, ensure you have:

1. **Infura Project ID**: Infura provides Ethereum nodes as a service. You need a project ID to connect to Rinkeby or Mainnet.
   - Sign up at [Infura.io](https://infura.io/).
   - Create a new project and copy the project ID.

2. **Etherscan API Key**: You need this key to verify your contract on Etherscan.
   - Sign up at [Etherscan.io](https://etherscan.io/).
   - Obtain your API key from the API section of your profile.

3. **Mnemonic**: A 12-word phrase used to generate your Ethereum accounts. Ensure that you store this securely and do not share it publicly.

#### 2. Configuring Truffle for Rinkeby or Mainnet

Modify your `truffle-config.js` file to include configurations for Rinkeby and Mainnet.

Here is an example configuration:

```javascript
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "your 12-word mnemonic here";
const infuraProjectId = "YOUR_INFURA_PROJECT_ID";

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectId}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,        // Gas limit used for deploys
      gasPrice: 10000000000 // 10 gwei
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraProjectId}`),
      network_id: 1,       // Mainnet's id
      gas: 4500000,        // Gas limit used for deploys
      gasPrice: 10000000000 // 10 gwei
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"   // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: "YOUR_ETHERSCAN_API_KEY"
  }
};
```

#### 3. Deploying to Rinkeby Test Network

To deploy your smart contract to Rinkeby, use the following command:

```bash
truffle migrate --network rinkeby
```

#### 4. Deploying to Mainnet

To deploy your smart contract to the Ethereum mainnet, use the following command:

```bash
truffle migrate --network mainnet
```

#### 5. Verifying Your Contract on Etherscan

If you want to verify your contract on Etherscan after deploying it to Rinkeby or Mainnet, use the following command:

```bash
truffle run verify AAyuToken --network rinkeby
```

For Mainnet:

```bash
truffle run verify AAyuToken --network mainnet
```

Make sure you replace `AAyuToken` with the name of your contract.

#### 6. Accessing the Deployed Contract

Once deployed, you can interact with your token as described earlier using the Truffle console or by interacting with the contract address directly through Etherscan or a wallet like MetaMask.



By following this you can successfully create, deploy, and manage your AAyuToken cryptocurrency on the Ethereum blockchain. Whether you are experimenting on the Rinkeby test network or launching on the Ethereum mainnet, this guide provides all the necessary steps to bring your cryptocurrency project to life. Happy Coding! Show some ❤️
