export default {
  namespaced: true,
  state: {
    isOpen: false
  },
  mutations: {
    SET_ISOPEN_MUTATION(state, open) {
      state.isOpen = open;
    }
  },
  actions: {
    openSettings(context) {
      context.commit("SET_ISOPEN_MUTATION", true);
    },
    closeSettings(context) {
      context.commit("SET_ISOPEN_MUTATION", true);
    },
    toggleSettings(context) {
      context.commit("SET_ISOPEN_MUTATION", !context.state.isOpen);
    }
  },
  getters: {
    isOpen: state => state.isOpen
  }
};
