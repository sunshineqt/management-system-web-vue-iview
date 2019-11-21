<template>
  <div class="about">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> 
    <h1>vuex test</h1>
    <div>组件里使用$store直接commit mutations</div> 
    <div>
        <Button type="primary" @click="$store.commit('add',2)">+</Button>
        <span> {{$store.state.count}} </span>
        <Button type="primary" @click="$store.commit('reduce')">-</Button>
    </div>
    <div>组件里使用mapMutations直接commit mutations</div> 
    <div>
        <Button type="primary" @click="add(2)">+</Button>
        <span> {{$store.state.count}} </span>
        <Button type="primary" @click="reduce">-</Button>
    </div>
    <div>组件里使用mapActions直接dispatch actions</div> 
    <div>
        <Button type="primary" @click="addAction(2)">+</Button>
        <span> {{count}} </span>
        <Button type="primary" @click="reduceAction">-</Button>
    </div>
  </div>
</template>
<script>
  // import store from '../store/index';
  import { mapState, mapMutations, mapActions } from 'vuex';
  export default {
    // store
    computed:{
      ...mapState(['count'])
    },
    methods:{
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction','reduceAction'])
    }  
  }
</script>
<style>

</style>
