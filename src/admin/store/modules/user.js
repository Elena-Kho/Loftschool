export default {
  namespased: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: (state) => {
      state.user = {};
    },
  },
  getters: {
    userIsLogged: state => {
      const userObj = user;
      const userObjIsEmpty = Object.keys(userObj).length == 0 && userObj.constructor == Object;
      return userObjIsEmpty == false;
    },
  },
  actions: {
    logout({commit}) {
      localStorage.clear();
      commit('CLEAR_USER')
    }
  }
};
