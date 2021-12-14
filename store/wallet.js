export const state = () => ({
  providerName: null,
  address: null
});

export const mutations = {
  SET_ADDRESS(state, address) {
    state.address = address;
  },
  SET_PROVIDER_NAME(state, providerName) {
    state.providerName = providerName;
  }
};

export const actions = {
  async setAddress({ commit }, address) {
    await commit("SET_ADDRESS", address);
  },

  async setProviderName({ commit }, providerName) {
    await commit("SET_PROVIDER_NAME", providerName);
  }
};

export const getters = {

};
