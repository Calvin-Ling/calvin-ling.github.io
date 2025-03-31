<template>
  <div id="portlet-like">
    <component-test
      :childCompLabel="'indicator-view'"
      :childCount="3000"
      :structureImgSrc="require('@assets/img/1layer.png')"
    />
  </div>
</template>

<script>
import ComponentTest from './ComponentTest.vue'

export default {
  components: { ComponentTest },
}
</script>