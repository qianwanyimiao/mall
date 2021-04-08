<template>
  <div class='param-info' v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
    :key="index"
    class="info-size">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez"> {{td}} </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key"> {{info.key}} </td>
        <td class="param-value"> {{info.value}} </td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img src="paramInfo.img" alt="商品参数图片">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailParamInfo',
    components: {
    },
    data () {
      return {};
    },
    props: {
      paramInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
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
  .param-info {
    padding: 20px 15px;
    font-size: 3.3vw;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 6vh;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 25vw;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>
