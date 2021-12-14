import Web3 from "web3";

export default () => ({

  /**
   *
   * @param {Boolean} isInfuraProviderUsed
   * @returns {Web3}
   */
  getWeb3(isInfuraProviderUsed = false) {
    let web3 = null;

    if (isInfuraProviderUsed) {
      web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_LINK));
    }

    if (process.client) {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3);
      }
    }

    return web3;
  },

  /**
   *
   * @returns {Array<String>}
   */
  async getAccounts() {
    const web3 = this.getWeb3();
    return web3 ? await web3.eth.getAccounts() : [];
  },

  async isConnected() {
    const accounts = await this.getAccounts();
    return accounts.length > 0;
  }

});
