export const state = () => ({
  onboard: null
});

export const mutations = {
  SET_ONBOARD(state, value) {
    state.onboard = value;
  }
};

export const actions = {
  async setOnboard({ commit }, onboard) {
    await commit("SET_ONBOARD", onboard);
  }
};

export const getters = {
  getOnboardState(state) {
    const onboard = state.onboard;
    return onboard === null ? null : onboard.getState();
  },
};
