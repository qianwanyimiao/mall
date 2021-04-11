<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 实现网格布局的一个组件，当然直接用css网格布局更方便
  name: "GridView",
  props: {
    cols: { // 网格布局的栏数
      type: Number,
      default: 2,
    },
    hMargin: {
      type: Number,
      default: 8,
    },
    vMargin: {
      type: Number,
      default: 8,
    },
    itemSpace: {
      type: Number,
      default: 8,
    },
    lineSpace: {
      type: Number,
      default: 8,
    },
  },
  mounted: function () {
    setTimeout(this._autoLayout, 20);
  },
  updated: function () {
    this._autoLayout();
  },
  methods: {
    // 挂载和更新时自动布局成网格
    _autoLayout: function () {
      // 1.获取自身和children
      let gridEl = this.$refs.gridView;
      let children = gridEl.children;

      // 2.设置gridEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

      // 3.计算item的宽度
      let itemWidth =
        (gridEl.clientWidth -
          2 * this.hMargin -
          (this.cols - 1) * this.itemSpace) /
        this.cols;
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        item.style.width = itemWidth + "px";
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + "px";
        }
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + "px";
        }
      }
    },
  },
};
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
