import Vue from 'vue';
import Vuex from 'vuex';
import createPersisteState from 'vuex-persistedstate';

import {setting} from './modules/setting';
import {permission} from './modules/permission';

Vue.use(Vuex);

const settingState = createPersisteState({
  storage: window.localStorage,
});

const permissionState = createPersisteState({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    setting,
    permission
  },
  plugins:[
    settingState,
    permissionState
  ]
});
