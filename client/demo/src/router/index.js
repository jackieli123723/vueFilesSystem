import Vue from "vue";
import VueRouter from "vue-router";

const LayoutAside = () => import('../components/layoutAside/layoutAside'); // 复用通用页面组件
const LayoutHeader = () => import('../components/layoutHeader/layoutHeader');
const LayoutMain = () => import('../components/layoutMain/layoutMain');


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name:
      component: LayoutMain
    }
  ]
})
export default router;
