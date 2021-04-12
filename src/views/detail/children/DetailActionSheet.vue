<template>
  <div class="detail-action-sheet">
    <div class="selectSize" v-if="sizeList.length !== 0">
      <span>参数 : </span>
      <div class="size-list">
        <span
          class="size-item"
          :class="{ active: index === selected }"
          v-for="(item, index) in sizeList"
          :key="index"
          @click="selectSize(index)"
        >
          {{ item }}
        </span>
      </div>
      <div></div>
    </div>
    <div class="selectCount">
      <span>数量 :</span>
      <div class="right">
        <span class="sub" @click="subOne">-</span>
        <input class="input" type="number" v-model="count" />
        <span class="add" @click="addOne">+</span>
      </div>
    </div>
    <div class="button confirm" @click="confirm">确认</div>
    <div class="button cancel" @click="cancel">取消</div>
  </div>
</template>

<script>
export default {
  name: "DetailActionSheet",
  components: {},
  data() {
    return {
      count: 1, // 购买的商品数
      selected: -1, // 默认没有选中任何一个参数
    };
  },
  props: {
    sizeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addOne() {
      this.count++;
    },
    subOne() {
      if (this.count > 1) {
        this.count--;
      }
    },
    selectSize(index) {
      if (this.selected !== index) {
        this.selected = index;
      } else {
        this.selected = -1;
      }
    },
    // 点击确认加入购物车
    confirm() {
      if (this.count < 1 || this.selected === -1) {
        this.$toast("请选择参数！");
      } else {
        this.$emit("confirm", [this.sizeList[this.selected], this.count]);
      }
    },
    // 点击取消
    cancel() {
      this.$emit("cancel");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之前
  updated() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
.selectSize {
  padding: 0 5vw;
  width: 100vw;
}

.selectSize > span {
  font-weight: 600;
}

.size-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vh;
}

.size-item {
  height: 4vh;
  line-height: 4vh;
  border-radius: 2vh;
  text-align: center;
  min-width: 15vw;
  max-width: 60vw;
  margin-right: 1vw;
  background-color: #f2f2f2;
  overflow: hidden;
}

.active {
  border: 1px solid #f2270c;
  color: #f2270c;
  background: #fcedeb;
  font-weight: 600;
}

.selectCount {
  padding: 0 5vw;
  height: 6vh;
  width: 100vw;
  line-height: 6vh;
}

.input {
  width: 10vw;
  text-align: center;
  border-width: 0;
  background-color: #f2f2f2;
}

.selectCount .right {
  margin-left: auto;
}

.selectCount > span {
  font-weight: 600;
}

.add,
.sub {
  display: inline-block;
  width: 5vw;
  height: 5vw;
  text-align: center;
  cursor: pointer;
}

.button {
  display: inline-block;
  width: 100vw;
  text-align: center;
  height: 6vh;
  line-height: 6vh;
}

.confirm::before {
  content: "";
  display: block;
  height: 8px;
  background-color: #f7f8fa;
  cursor: pointer;
}

.cancel::before {
  content: "";
  display: block;
  height: 4px;
  background-color: #f7f8fa;
  cursor: pointer;
}
</style>
