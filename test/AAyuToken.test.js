const AAyuToken = artifacts.require("AAyuToken");

contract("AAyuToken", accounts => {
  it("should put 1,000,000 AAyu tokens in the first account", async () => {
    const instance = await AAyuToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.toString(), web3.utils.toWei('1000000', 'ether'), "1,000,000 wasn't in the first account");
  });

  it("should transfer tokens between accounts", async () => {
    const instance = await AAyuToken.deployed();
    await instance.transfer(accounts[1], web3.utils.toWei('100', 'ether'), { from: accounts[0] });
    const balance = await instance.balanceOf(accounts[1]);
    assert.equal(balance.toString(), web3.utils.toWei('100', 'ether'), "100 tokens weren't transferred to the second account");
  });
});
