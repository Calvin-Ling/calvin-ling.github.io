<template>
  <div id="portlet-like">
    <component-test
      :childCompLabel="'float-view'"
      :childCount="500"
      :structureImgSrc="require('@assets/img/6layer.png')"
    />
  </div>
</template>

<script>
import ComponentTest from './ComponentTest.vue'

export default {
  components: { ComponentTest },
}
</script>