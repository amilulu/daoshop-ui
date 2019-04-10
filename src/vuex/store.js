import Vue from 'vue';
import Vuex from 'vuex';
import global from '@/vuex/modules/global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
  },
});
