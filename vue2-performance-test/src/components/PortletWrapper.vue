<template>
  <div class="portlet-wrapper">
    <div class="content">
      <sx-portlet :index="index" :attrs="attrs"
      />
    </div>
  </div>
</template>

<script>
import SxPortlet from './Portlet.vue'
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
  components: { SxPortlet },
}
</script>

<style>

</style>