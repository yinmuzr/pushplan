import Vue from "vue";
import Vuex from "vuex";
import { getDatapush } from "./service/datapush.service";
import { getToken, getUser } from "./service/getUser.service";
export const GET_DATAPUSH = "GET_DATAPUSH";
export const GET_TOKEN = "GET_TOKEN";
export const GET_USER = "GET_USER";
const GET_DATAPUSH_SUCCESS = "GET_DATAPUSH_SUCCESS";
const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
Vue.use(Vuex);

const rebuilddata = datapush => {
  const data = {
    ...datapush,
    title: `待检批次：${datapush.mlotNO} 物料：${datapush.partname}（${
      datapush.partcode
    }）`
  };
  return data;
};

export default new Vuex.Store({
  state: {
    datapush: [],
    token: "",
    user: ""
  },
  getters: {
    datapush: ({ datapush }) => datapush.map(rebuilddata)
  },
  mutations: {
    [GET_DATAPUSH_SUCCESS]: (state, payload) => {
      state.datapush = payload.response;
    },
    [GET_TOKEN_SUCCESS]: (state, payload) => {
      state.token = payload.response;
    },
    [GET_USER_SUCCESS]: (state, payload) => {
      state.user = payload.response;
    }
  },
  actions: {
    [GET_DATAPUSH]: ({ commit }, skipcount) =>
      new Promise(resolve => {
        // eslint-disable-line no-unused-vars
        getDatapush(skipcount)
          .then(response => {
            commit(GET_DATAPUSH_SUCCESS, { response });
            resolve(response);
          })
          .catch(() => {});
      }),
    [GET_TOKEN]: ({ commit }, callback) =>
      new Promise(resolve => {
        // eslint-disable-line no-unused-vars
        getToken(callback)
          .then(response => {
            commit(GET_TOKEN_SUCCESS, { response });
            resolve(response);
          })
          .catch(() => {});
      }),
    [GET_USER]: ({ commit }, token) =>
      new Promise(resolve => {
        // eslint-disable-line no-unused-vars
        getUser(token)
          .then(response => {
            commit(GET_USER_SUCCESS, { response });
            resolve(response);
          })
          .catch(() => {});
      })
  }
});
