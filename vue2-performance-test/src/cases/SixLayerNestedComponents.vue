<template>
  <div id="portlet-like">
    <component-test
      :childCompLabel="'float-view'"
      :childCount="123"
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