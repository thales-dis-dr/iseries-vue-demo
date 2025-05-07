export default {
  namespaced: true,
  state: {
    session: null,
    settings: null,
    isConnected: false,
    registerlisteners: false
  },
  mutations: {
    SET_SESSION_MUTATION(state, session) {
      state.session = session;
      state.isConnected = session != false;
    },
    SET_SETTINGS_MUTATION(state, settings) {
      state.settings = settings;
    },
    SET_ISCONNECTED_MUTATION(state, isConnected) {
      state.isConnected = isConnected;
    },
    SET_REGISTERLISTENERS_MUTATION(state, isRegisterdListeners) {
      state.registerlisteners = isRegisterdListeners;
    }
  },
  actions: {
    closeConnection(context) {
      context.state.session.end_session();
      context.state.session.once("SESSION_CLOSED", () => {
        context.state.session.close_connection();
        context.commit("SET_ISCONNECTED_MUTATION", false);
      });
    },
    getReaderSettings(context) {
      context.state.session.send_message(
        JSON.stringify({
          t: 32,
          i: context.state.session.getNextI()
        })
      );

      context.state.session.on("RETURNED_SETTINGS", data => {
        context.commit("SET_SETTINGS_MUTATION", data);
      });
    },
    // openConnection(context, payload) {
    //   this.webApi.open_connection(payload.ipaddress, payload.id, payload.key);
    // }
    setConnection(context, payload) {
      context.commit("SET_SESSION_MUTATION", payload);
    },
    saveSettings(context, readerSettings) {
      context.state.session.send_message(
        JSON.stringify({
          t: 35,
          i: context.state.session.getNextI(),
          d: readerSettings
        })
      );
    },
    setRegisterListeners(context, payload) {
      context.commit("SET_REGISTERLISTENERS_MUTATION", payload);
    }
  },
  getters: {
    session: state => state.session,
    readerSettings: state => state.settings,
    isConnected: state => state.isConnected,
    registerlisteners: state => state.registerlisteners
  }
};
