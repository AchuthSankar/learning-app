const store = new Vuex.Store({
  state: {
    isLoggedIn: {}
  },
  mutations: {
    login (state, user) {
      state.isLoggedIn={"logged":"true", "user":user}
      main.$emit("login_event");
    },
    logout (state, user) {
      state.isLoggedIn={"logged":"false", "user":user}
      main.$emit("logout_event");
    }
  },
  getters: {
    loggedInUser: state => {
      return state.isLoggedIn;
    }
  }
})


var main = new Vue({
  store,
  el: '#main'
});

