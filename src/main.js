import Vue from 'vue'
import App from './App'
//引入route
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//引入goods组件
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';

import 'common/stylus/index.styl';
//使用route
Vue.use(VueRouter);
Vue.use(VueResource);
//配置route
const routes = [{
  path: '/',
  component: goods
},{
  path: '/goods',
  component: goods
},{
  path: '/ratings',
  component: ratings
}];
const router = new VueRouter({
  //配置切换用的className
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
