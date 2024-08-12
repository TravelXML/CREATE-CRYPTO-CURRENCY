module.exports = async function (deployer) {
    const initialSupply = web3.utils.toWei('1000000', 'ether');
    await deployer.deploy(AAyuToken, initialSupply, { gas: 8000000 });
  };
  