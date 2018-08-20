import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


//Vuex配置

const store = new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',
    state: {
            domain:'http://static.lilidong.cn', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
            userInfo: { //保存用户信息
              name: null,
              theme:"disk",
              level:0,
              isAdmin:false
            },
            gameInfo:{//游戏信息
             gameId:null,
             gameIdCurrentIcon:null,
             gameTopList:(JSON.parse(window.sessionStorage.getItem("gameInfo"))) ? (JSON.parse(window.sessionStorage.getItem("gameInfo")).gameTopList) : []
            },
            delConfirmFlag:false, //删除弹出层状态
            countLoading:false //订单遮罩
    },
    getters: {
        delConfirmFlag: state=> state.delConfirmFlag,
        countLoading: state=> state.countLoading,
        gameInfo: state=> state.gameInfo,
        getUserInfoName(state) {
            return state.userInfo.name;
        }
    },
    mutations: {//类型（名字）+处理函数 大写
          updateDelfirmFlag(state, delConfirmFlag){
            state.delConfirmFlag = delConfirmFlag;
          },
          updateCountLoading(state, countLoading){
            state.countLoading = countLoading;
          },
          setUserInfo(state, userInfo) {
              state.userInfo = userInfo;
          },
          //更新用户信息
          updateUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
          },
           //更新游戏信息
          setGameInfo(state, gameInfo) {
            state.gameInfo = gameInfo;
          },
      
       
    },
    actions: {//小写 异步数据操作
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setGameInfo({ commit }, game) {
            commit('setGameInfo', game);
        },
        updateDelfirmFlag({ commit },flag) {
            commit('updateDelfirmFlag',flag)
        },
        updateCountLoading({ commit },flag){
             commit('updateCountLoading',flag)
        }
    }
});
export default store