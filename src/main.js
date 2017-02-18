import Vue from 'vue'
import App from './App'
//引入route
import VueRouter from 'vue-router';
//引入goods组件
import goods from 'components/goods/goods';
//使用route
Vue.use(VueRouter);
//配置route
const routes = [{
  path: '/',
  component: goods
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
