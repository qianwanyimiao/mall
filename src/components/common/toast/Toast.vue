<template>
  <div class="bg" v-show="isShow">
    <div class="toast">
      <span> {{ message }} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      message: "",  // 展示的信息
      isShow: false,  // 弹出框是否显示
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
  methods: {
    // 暴露出去的展示函数，接收展示的信息和显示的时间
    show(message, duration) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
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
