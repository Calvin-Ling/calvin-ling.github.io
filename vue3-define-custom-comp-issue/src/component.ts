// src/entry-component.ts
import { defineCustomElement } from 'vue'
import ScCrossFrameComp from './ScCrossFrameComp.vue'

// 将 Vue 组件转换为 Web Component
const customElement = defineCustomElement(ScCrossFrameComp)

// 注册自定义元素
customElements.define('sc-cross-frame-comp3', customElement)

// 导出组件类，允许手动注册
export default customElement
