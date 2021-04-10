<template>
<div class="bg" v-show="isShow">
  <div class='toast'>
    <span> {{message}} </span>
  </div>
</div>

</template>
<script>
  export default {
    name: 'Toast',
    components: {
    },
    data () {
      return {
        message: '',
        isShow: false
      };
    },
    props: {
      // message: {
      //   type: String,
      //   default: ''
      // },
      // show: {
      //   type: Boolean,
      //   default: false
      // }
    },
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      show (message, delay) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, delay)
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {},
    //生命周期 - 更新之前
    updated () {},
    //生命周期 - 销毁完成
    destroyed () {},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated () {},
    }
  </script>
<style scoped>
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .toast {
    position: absolute;
    width: 60vw;
    height: 20vh;
    line-height: 20vh;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    background-color: #fff;
    box-shadow: 0 0 5px #eee;

    text-align: center;

  }
</style>
