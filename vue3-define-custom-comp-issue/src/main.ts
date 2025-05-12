import { createApp } from 'vue'
import App from './App.vue'
import ScCrossFrameComp3 from './ScCrossFrameComp.vue'

let app = createApp(App)
const allCustomElementTags = [
  'sc-cross-frame-comp0',
  'sc-cross-frame-comp1',
  'sc-cross-frame-comp2',
]
// 将所有标签前缀为 `ion-` 的标签视为自定义元素
app.config.compilerOptions.isCustomElement = (tag:string) => {
  return allCustomElementTags.includes(tag)
}

app.component('ScCrossFrameComp3', ScCrossFrameComp3)

app.mount('#app')
