export const setting = {
  state:{
    isCollapsed:false
  },
  mutations:{
    changeCollapsedState(state,payload){
      state.isCollapsed = payload;
    }
  },
  actions:{
    updateCollapsed({commit},isCollapsed){
      commit('changeCollapsedState',isCollapsed);
    }
  }
};