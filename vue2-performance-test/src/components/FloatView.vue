<template>
  <div class="float-view">
    <div class="content">
      <portlet-adapter :index="index" :attrs="attrs"
      />
    </div>
  </div>
</template>

<script>
import PortletAdapter from './PortletAdapter.vue'
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
  components: { PortletAdapter },
  created() {
    // 可以在这里添加创建耗时逻辑
  },
  mounted() {
    // 可以在这里添加挂载耗时逻辑
  }
}
</script>