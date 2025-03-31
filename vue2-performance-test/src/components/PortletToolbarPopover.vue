<template>
  <div class="portlet-toolbar-popover">
    <div class="content">
      <indicator-view :index="index" :attrs="attrs"
      />
    </div>
  </div>
</template>

<script>
import IndicatorView from './IndicatorView.vue'
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    attrs: {
      type: Object,
      required: false
    }
  },
  components: { IndicatorView },
}
</script>

<style>

</style>