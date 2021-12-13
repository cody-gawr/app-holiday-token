import Onboard from "bnc-onboard";
import { NETWORK_ID, NETWORK_DETAILS } from "~/constatns";

const dappId = process.env.BLOCKNATIVE_KEY;
const rpcUrl = process.env.INFURA_LINK;
const providers = [
  {
      walletName: "metamask"
  },
  {
      walletName: "walletConnect",
      infuraKey: process.env.INFURA_KEY
  },
  {
    walletName: "coinbase"
  },
  {
    walletName: "status"
  },
  {
      walletName: "walletLink",
      rpcUrl,
      appName: "Holiday.App.Dashboard"
  },
  {
    walletName: "trust",
    infuraKey: process.env.INFURA_KEY
  },
  {
    walletName: 'opera'
  },
  {
    walletName: 'operaTouch'
  }
];

export default ($store) => ({

  /**
   *
   * @param {String} networkName
   * @returns {Onboard}
   */
  initOnboard(networkName = "ethereum") {
    return Onboard({
      dappId,
      hideBranding: true,
      networkId,
      networkName,
      walletSelect: {
        wallets: providers
      }
    });
  },

  /**
   *
   * @param {String} networkName
   */
  async getOnboardObject(networkName = "ethereum") {

  }
});
