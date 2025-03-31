<template>
  <div class="portlet-adapter">
    <div class="content">
      <portlet-wrapper :index="index" :attrs="attrs"
      />
    </div>
  </div>
</template>

<script>
import PortletWrapper from './PortletWrapper.vue'
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
  components: { PortletWrapper },
}
</script>

<style>

</style>