import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex ,axios)

export default new Vuex.Store({
  state: {
    users: [],
    loginUser:[],
    Snackbar:false,
    snackbarErrorMsg:"",
  },
  mutations: {
    SET_USER(state,users){
      state.users = users; 
    },
    LOGIN_USER(state,loginUser){
      state.loginUser = loginUser; 
    },
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state,snackbarErrorMsg){
      state.snackbarErrorMsg = snackbarErrorMsg;
    },
  },
  actions: {
    //set snackbar 
    updateSnackBarStatus({commit}){
     commit("SET_SNACKBAR",false);
    },
    // signup users form api
    loadUser({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      axios.post("http://192.168.88.37:8080/user/register",payload).then((response) => {
            let data = response.data;
            console.log(response);
            commit('SET_USER', data)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',response.data.message)
          })
          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })
    },
    // login users from api
    loginUser({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      axios.post("http://192.168.88.37:8080/user/UserLogin",payload)
           .then((response) => {
            let data = response.data;
            console.log(response.data);
            commit('LOGIN_USER', data)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',response.data.message)
            localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data));
            localStorage.setItem("currentUsertoken", JSON.stringify(response.data.data.Authentication));
          })
          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })
    },
  // update users from api
  updateProfile ({ commit }, payload) {
    console.log(commit);
    console.log(payload);

    const currentUserToken = JSON.parse(localStorage.getItem("currentUsertoken"));
    console.log(currentUserToken);

    const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
    console.log(currentUserId);

    const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + currentUserToken,
        }
    axios.put(`http://192.168.88.37:8080/user/updateUser/${currentUserId}`, payload, {
            headers: headers
        })
        .then(function(response) {
          localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data));
            console.log(response);
        })
        .catch(function(error) {
            console.log(error.response);
            // commit("SET_SNACKBAR", true);
            // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
        });
},
// forgot password from api
    ForpassData({commit},payload){
      console.log(commit);
      console.log(payload);
      axios.post("http://192.168.88.37:8080/user/forgotPassword",payload)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });   
     },
    //  reset password from api
    resetPass ({ commit }, payload) {
      console.log(commit);
      console.log(payload);

      const currentUserToken = JSON.parse(localStorage.getItem("currentUsertoken"));
      console.log(currentUserToken);

      const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
      console.log(currentUserId);

      const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + currentUserToken,
          }
      axios.put(`http://192.168.88.37:8080/user/updateUserPassword/61b1b6b78047000017002618${currentUserId}`, payload, {
              headers: headers
          })
          .then(function(response) {
            localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data));
              console.log(response);
          })
          .catch(function(error) {
              console.log(error.response);
              // commit("SET_SNACKBAR", true);
              // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
          });
  },
    
  },
  // snackbar 
  getters:{
      getSnackbarStutes(state){
      return state.Snackbar;
      },
      getSnackbarErrorMsg(state){
        return state.snackbarErrorMsg;
      }
  },
  modules: {
  }
})
