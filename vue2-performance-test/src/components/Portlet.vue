<template>
  <div class="portlet">
    <div class="content">
      <portlet-toolbar-popover :index="index" :attrs="attrs"
      />
    </div>
  </div>
</template>

<script>
import PortletToolbarPopover from './PortletToolbarPopover.vue'
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
  components: { PortletToolbarPopover },
}
</script>

<style>

</style>