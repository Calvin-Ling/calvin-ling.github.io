<script setup lang="ts">
import { ref } from 'vue';
// import ScCrossFrameComp3 from './ScCrossFrameComp.vue'

const count = ref(0);
const complexProp = ref({
  name: 'ScCrossFrameComp',
  version: '1.0.0',
  description: 'A cross-frame component',
  menus: [{
    id: 'copy',
    alias: '复制',
    handler: () => {
      console.log('copy');
    }
  }, {
    id: 'paste',
    alias: '粘贴',
    handler: () => {
      console.log('paste');
    }
  }, {
    id: 'cut',
    alias: '剪切',
    handler: () => {
      console.log('cut');
    }
  }]
});
const modifyComplexProp = () => {
  complexProp.value.menus.push({
    id: 'delete',
    alias: '删除',
    handler: () => {
      console.log('delete');
    }
  });
};
</script>

<template>
  <div id="vue3-app">
    <h1>Vue 3.2 + Vite 4 + TypeScript 4.5</h1>
    <!-- <button @click="count++">Count: {{ count }}</button> -->

    <h2>ScCrossFrameComp0 Implement by Native JS</h2>
    <sc-cross-frame-comp0 @sc-click="count++" :label="'Count: ' + count">
      <span>slot content</span>
    </sc-cross-frame-comp0>

    <h2>ScCrossFrameComp2 Implement by Vue 2.6.14</h2>
    <!-- <sc-cross-frame-comp2 
      :label="'Count: ' + count" 
      @sc-click="count++"
      :complexProp="complexProp"
    ><span>slot content</span>
    </sc-cross-frame-comp2> -->

    <sc-cross-frame-comp2></sc-cross-frame-comp2>

    <h2>ScCrossFrameComp3 Implement by Vue 3.2</h2>
    <ScCrossFrameComp3 :label="'Count: ' + count" @sc-click="count++">
      <span>slot content</span>
    </ScCrossFrameComp3>
    <button @click="modifyComplexProp">Modify Complex Prop</button>
  </div>
</template>

<style>
/* 全局样式 */
#vue3-app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eee;
}
</style>