import Onboard from "bnc-onboard";
import util from '~/helpers/util.js';
import { NETWORK_IDS, NETWORK_DETAILS } from "~/constants";

const dappId = process.env.BLOCKNATIVE_KEY;
const rpcUrl = process.env.INFURA_LINK;

const providers = [
  {
      walletName: "metamask"
  }
];

export default ($store) => ({

  /**
   *
   * @param {String} networkName
   * @returns {Onboard}
   */
  initOnboard(networkName) {
    return Onboard({
      dappId,
      hideBranding: true,
      networkId: NETWORK_IDS[networkName],
      networkName,
      walletSelect: {
        wallets: providers
      }
    });
  },

  /**
   *
   * @param {String} networkName
   * @returns {Onboard}
   */
  getOnboard(networkName) {
    const onboard = this.initOnboard(networkName);
    onboard.config({
      networkId: NETWORK_IDS[networkName]
    });

    return onboard;
  },

  /**
   *
   * @param {String} networkName
   * @returns {Onboard}
   */
  getOnboardState(networkName) {
    const onboard = this.getOnboard(networkName);
    return onboard.getState();
  },

  /**
   *
   * @param {Boolean} reset
   * @param {String | null} providerName
   * @param {String} networkName
   */
  async getOnboardStateOrResetIfNeeded(reset = false, providerName = null, networkName = "bsc") {
    const onboard = this.getOnboard(networkName);
    let state = onboard.getState();

    if (reset || state.address === null) {
      onboard.walletReset();
    } else {
      return state;
    }

    const _providerName = providerName || $store.state.wallet.providerName;
    let walletSelect = null;
    console.log(_providerName);
    if (reset || _providerName === null) {
      walletSelect = await onboard.walletSelect()
    } else {
      walletSelect = await onboard.walletSelect(_providerName)
    }
    if (walletSelect) {
      await onboard.walletCheck();
      state = onboard.getState();
      await $store.dispatch('wallet/setProviderName', state.wallet.name);
    }

    return state;
  }
});
