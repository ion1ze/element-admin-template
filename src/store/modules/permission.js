import {AsyncRoutes} from '@/router';
import * as AccountApi from '@/api/account';

export function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

export function asyncRoutesFilter(routes,roles){
  const result = [];
  routes.forEach((route)=>{
    const temp = {...route};
    if(hasPermission(roles,temp)){
      if(temp.children){
        temp.children = asyncRoutesFilter(temp.children,roles);
      }
      result.push(temp);
    }
  });
  return result;
}

export const permission = {
  state:{
    routes:[],
    currentUser: null
  },
  mutations:{
    SET_ROUTES:(state,routes)=>{
      state.routes = routes;
    },
    SET_CURRENT_USER:(state,currentUser)=>{
      state.currentUser = currentUser;
    }
  },
  actions:{
    GenerateAsyncRoutesByRoles({commit},roles){
      return new Promise((resolve)=>{
        const routes = asyncRoutesFilter(AsyncRoutes,roles);
        commit('SET_ROUTES',roles);
        resolve(routes);
      });
    },
    async SetCurrentUser({commit}){
      try {
        const {data} = await AccountApi.findProfile();
        commit('SET_CURRENT_USER',data);
      } catch (error) {
        console.log(error);
      }
    }
  },
};