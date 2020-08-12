import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || null,
    // username: sessionStorage.getItem('username') || null,
    services: null
  },
  getters: {
    isLoggedIn(state) {
      return state.token != null;
    },
    accessToken(state) {
      return state.token;
    }
  },
  mutations: {

    retrieveToken(state, token) {
      state.token = token;
    },

    getServices(state, service) {
      state.services = service;
    },

    destroyToken(state) {
      state.token = null;
    },

  },
  actions: {

    register: (context, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post("/register", credentials)
          .then(resposne => {
            resolve(true);
          })

          .catch((error) => {
            reject(error);
          })
      })

    },

    retrieveToken: (context, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post('/login', credentials)
          .then(response => {

            // const user = JSON.parse(response.config.data);
            // sessionStorage.setItem('username', user.username);

            const token = response.data;

            sessionStorage.setItem('token', token);
            context.commit('retrieveToken', token);
            resolve(true);
          })
          .catch(error => {
            reject(error);
          })
      })
    },

    getServices: (context) => {
      return new Promise((resolve, reject) => {

        axios.get('/services', {
          headers: {
            'Authorization': 'Bearer ' + context.state.token,
          }
        })
          .then(response => {

            const service = response.data;
            context.commit('getServices', service);
            resolve(true);

          })
          .catch(error => {
            reject(false);
          })
      })

    },
    createService: (context, data) => {
      return new Promise((resolve, reject) => {
        axios.post('/services', data, {
          headers: {
            'Authorization': 'Bearer ' + context.state.token,
          }
        })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(false);
          })

      })

    },

    deleteServices: (context) => {
      return new Promise((resolve, reject) => {
        axios
          .delete("/services", {
            headers: {
              'Authorization': 'Bearer ' + context.state.token,
            }
          })
          .then((response) => {
            resolve(true);
          })
          .catch((error) => {
            reject(false);
          });
      })
    },
    updateServices: (context, serviceId) => {
      return new Promise((resolve, reject) => {
        axios
          .put(`/services/${serviceId}`, { name: 'updatedName' })
          .then((response) => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          })

      })
    },

    destroyToken: (context) => {
      sessionStorage.removeItem('token');
      // sessionStorage.removeItem('username');
      context.commit('destroyToken');
    }
  }
});