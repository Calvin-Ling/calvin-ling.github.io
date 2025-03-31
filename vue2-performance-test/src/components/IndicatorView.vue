<template>
  <div class="indicator-view">
    <div class="content" :keysLen="keysLen">
      子组件 #{{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    attrs: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    keysLen () {
      return this.$attrs === null ? 0 : Object.keys(this.attrs).length
    }
  }
}
</script>

<style>

.indicator-view {
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 4px;
  background: #f9f9f9;
}

.indicator-view .content {
  padding: 8px;
  text-align: center;
}
</style>