import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: [
      'wallet.onboard'
    ]
  })(store);
}
