<template>
  <div class="sc-cross-frame-comp impl-by-vue3">
    <button @click="handleClick">{{ label }}</button>
    <div class="slot-content" :style="slotContentStyle">
      <slot>default slot content</slot>
    </div>
    <div class="show-complex-props">
      {{ JSON.stringify(complexProp, null, 2) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineExpose } from 'vue'

interface Props {
  label: string,
  complexProp: object
}

const slotContentStyle = ref('color: red;');

const changeSlotContentStyle = (style: string) => {
  console.log('changeSlotContentStyle: changing slot content style');
  slotContentStyle.value = style;
}

defineExpose({
  slotContentStyle,
  changeSlotContentStyle
})

const props = defineProps<Props>()

const emit = defineEmits(['sc-click'])

function handleClick() {
  emit('sc-click', { msg: 'Button clicked!', source: 'Vue3.x' });
}
</script>

<style scoped>
.sc-cross-frame-comp {
  border: 1px solid #333;
  padding: 10px;
  display: inline-block;
}
</style>
