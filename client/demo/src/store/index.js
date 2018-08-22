import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


//Vuex配置

const store = new Vuex.Store({
    state: {
            userInfo: { //保存用户信息
              name: null,
              theme:"beach", //默认推荐beach 注入皮肤的less
              level:0,
              isAdmin:false,
            },
            gameInfo:{//游戏信息
             gameId:null,
             gameIdCurrentIcon:null,
             gameTopList:(JSON.parse(window.sessionStorage.getItem("gameInfo"))) ? (JSON.parse(window.sessionStorage.getItem("gameInfo")).gameTopList) : []
            },
            fileInputFlag:false, //新建文件夹和重命名状态
            delConfirmFlag:false, //删除弹出层状态
            countLoading:false //订单遮罩
    },
    getters: {
        fileInputFlag: state=> state.fileInputFlag,
        delConfirmFlag: state=> state.delConfirmFlag,
        countLoading: state=> state.countLoading,
        gameInfo: state=> state.gameInfo,
        getUserInfoName(state) {
            return state.userInfo.name;
        }
    },
    mutations: {//类型（名字）+处理函数 大写
          updateFileInputFlag(state, fileInputFlag){
            state.fileInputFlag = fileInputFlag;
          },
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