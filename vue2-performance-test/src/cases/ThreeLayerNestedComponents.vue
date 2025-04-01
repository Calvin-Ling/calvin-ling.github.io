<template>
  <div id="portlet-like">
    <component-test
      :childCompLabel="'sx-portlet'"
      :childCount="123 * 3"
      :structureImgSrc="require('@assets/img/3layer.png')"
    />
  </div>
</template>

<script>
import ComponentTest from './ComponentTest.vue'

export default {
  components: { ComponentTest },
}
</script>