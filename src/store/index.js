import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:1
  },
  mutations: {
    add(state,n){
      state.count+=n;
    },
    reduce(state){
      state.count--;
    }
  },
  actions: {
    // actions里方法在组件中利用dispatch进行分发调用
    // action commit mutation  Action函数接受一个与store实例具有相同方法和属性的context对象
    addAction(context){
      // context：上下文对象，可理解为store本身。
      context.commit('add',10)
   },
   reduceAction({commit}){
    // {commit}：直接把commit对象传递过来
      commit('reduce')
   }

  }
})
