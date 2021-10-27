import { userLogin } from "../api/user";
const store = {
  state () {
    return {
      userInfo: null
    }
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    userLogin (context, payload) {
      return userLogin(payload).then(res => {
        context.commit("setUserInfo", res);
        return res;
      })
    },
    userLogout (context) {
      context.commit("setUserInfo", null)
    }
  }
}
export default store;