import Vue from "vue";
import VueRouter from "vue-router";

// const LayoutAside = () => import('../components/layoutAside'); 
// const LayoutHeader = () => import('../components/layoutHeader');
// const LayoutMain = () => import('../components/layoutMain');

const Login = () => import('../components/login');
const Register = () => import('../components/register');
const NotFound = () => import('../components/404');
const NotAllow = () => import('../components/403');

const Home = () => import('../components/home');

const All = () => import('../components/all');
const PictureLine = () => import('../components/picture/timeline');
const PictureClassify = () => import('../components/picture/classify');
const PictureRecent = () => import('../components/picture/recentupload');



const Document = () => import('../components/document');
const Video = () => import('../components/videos');
const Bt = () => import('../components/bt');
const Other = () => import('../components/other');
const MyShare = () => import('../components/my/share');
const Music = () => import('../components/music');

const Recycled = () => import('../components/recycled');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
      name:"全部文件",
      redirect:"all",
      children: [
        {
          path: 'all',
          name: "全部文件",
          component: All
        },
        {
          path: 'picture',
          name: "图片",
          component: PictureLine,
          redirect:"picture/timeline",
          children: [
              {
                path: 'timeline',
                name: "图片-时间轴",
                component: PictureLine
              },
              {
                path: 'classify',
                name: "图片-分类",
                component: PictureClassify
              },
              {
                path: 'recentupload',
                name: "图片-最近上传",
                component: PictureRecent
              }
          ]
        },

        {
          path: "bt",
          name: "种子",
          component: Bt
        },
        {
          path: "document",
          name: "文档",
          component: Document
        },
        {
          path: "share",
          name: "我的分享",
          component: MyShare
        },
        {
          path: "recycled",
          name: "回收站",
          component: Recycled
        },
        {
          path: "other",
          name: "其他",
          component: Other
        },
        {
          path: "music",
          name: "音乐",
          component: Music
        },
        {
          path: "video",
          name: "视频",
          component: Video
        }
      ]

    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/404',
      name: '404页面',
      component: NotFound
    },
    {
      path: '/403',
      name: '未授权页面',
      component: NotAllow
    },
    {
        path: '*',
        name: '非法页面',
        hidden: true,
        redirect: { path: '/404' }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = '西门互联-' + to.name || '西门互联-文件管理系统';
  next();
});

export default router;
