import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: [
      'wallet.address',
      'wallet.providerName'
    ],
    storage: window.sessionStorage
  })(store);
}
