<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <!-- 参数列表使用table展示 -->
    <table
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img src="paramInfo.img" alt="商品参数图片" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {  // 参数信息
      type: Object,
      default() {
        return {};
      },
    },
  },
};
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
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 25vw;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
