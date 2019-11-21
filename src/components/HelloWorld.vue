<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
       <p>测试nextTick</p>
       <p id="message">message:{{message}}</p>
       <Button type="primary" @click="edit">数据修改</Button>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '数据更新前no'
    }
  },
  props: {
    msg: String
  },
  methods: {
      edit(){
          var self = this;
          this.message = '数据更新后have';
          console.log(this.message,'message00') // 1 数据更新后have message00
          console.log(document.getElementById('message').innerHTML,'message-html00');// 2 message:数据更新前no message-html00
          // this.$nextTick(() => {
          //   // 这个函数就是有了数据之后，渲染完成之后会执行，也就是说当你需要数据先渲染，然后去操作渲染完成之后的dom，要把操作dom的逻辑写在这个函数里面
          //    console.log(this.message,'message11') // 7 数据更新后have01a91 message11
          //    console.log(document.getElementById('message').innerHTML,'message-html11'); // 8 message:数据更新后have01a91 message-html11
          // });
          this.message = '数据更新后have12';
          setTimeout(function(){
             self.message = '数据更新后have22';
             console.log(this.message,'message1-setTimeout') // 9 数据更新后have22 message1-setTimeout
             console.log(document.getElementById('message').innerHTML,'message-html1-setTimeout'); 
             // 10 message:数据更新后have01a91 message-html1-setTimeout
            // vm.$forceUpdate()
            console.log(this, self,'0000000')
          },1000)
          // for(var i=0;i<2;i++){
          //     this.message = '数据更新后have01a9'+i;
          //     console.log(this.message,'message-for99') // 3 数据更新后have01a90 message-for99  5 数据更新后have01a91 message-for99
          //     console.log(document.getElementById('message').innerHTML,'message-for-html99'); 
          //     // 4 message:数据更新前no message-for-html99  6 message:数据更新前no message-for-html99
          // }
        
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
