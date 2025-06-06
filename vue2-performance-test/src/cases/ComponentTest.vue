<template>
  <div id="component-test">
    <h1>Vue 2.6.14 - Layout下一层{{inputCount}}个组件性能测试，结构如下图</h1>
    <img style="width:300px;" :src="structureImgSrc">
    <div class="controls">
      <button @click="runTest" :disabled="testing">开始测试（sendLargeProps={{sendLargeProps}}）</button>
      <button @click="toggleVisibility" :disabled="testing">
        {{ showParent ? '销毁' : '创建' }}组件
      </button>
      <button @click="toggleProps" :disabled="testing">
        {{ sendLargeProps ? '不传递大对象' : '传递大对象' }}
      </button>
      <span>组件个数: <input :value="inputCount" @blur="onBlur"/></span>
    </div>
    
    <div v-if="testing" class="loading">测试中...</div>
    
    <div v-if="results && showParent" class="results">
      <h2>测试结果</h2>
      <pre>{{ formattedResults }}</pre>
    </div>
    
    <browse-layout 
      v-if="showParent"
      :compLabel="childCompLabel"
      :childCount="inputCount"
      :sendLargeProps="sendLargeProps"
      @test-complete="handleTestComplete"
    />
  </div>
</template>

<script>
import BrowseLayout from '../components/BrowseLayout.vue'

export default {
  props: {
    childCount: Number,
    childCompLabel: String,
    structureImgSrc: String
  },
  components: { BrowseLayout },
  data() {
    return {
      testing: false,
      results: null,
      startTestTime: 0,
      showParent: false,
      sendLargeProps: false,
      inputCount: this.childCount
    }
  },
  computed: {
    formattedResults() {
      if (!this.results) return ''
      return JSON.stringify(this.results, null, 2)
    }
  },
  methods: {
    runTest() {
      this.testing = true
      this.results = null
      this.showParent = false
      
      this.$nextTick(() => {
        this.startTestTime = performance.now()
        this.showParent = true
      })
    },
    toggleVisibility() {
      this.startTestTime = performance.now()
      this.showParent = !this.showParent
    },
    toggleProps () {
      this.sendLargeProps = !this.sendLargeProps
      this.showParent = false
    },
    handleTestComplete(results) {
      this.results = {
        startTestTime: this.startTestTime,
        ...results,
        totalCreateMountTime: results.mountedTime - this.startTestTime
      }
      const decimals = 2
      for (let key in this.results) {
        this.results[key] = parseFloat(Math.round((this.results[key] + Number.EPSILON) * 10 ** decimals) / 10 ** decimals).toFixed(decimals) + ' ms'
      }
      this.testing = false
    },
    onBlur (ev) {
      let newVal = Number(ev.srcElement.value)
      if (newVal % 1 === 0 && newVal < 50000) {
        this.inputCount = newVal
        this.showParent = false
      } else {
        ev.srcElement.value = this.inputCount
      }
    }
  }
}
</script>

<style>
#component-test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 0 20px;
}

.controls {
  margin: 20px 0;
}

button {
  padding: 10px 15px;
  margin: 0 10px;
  font-size: 14px;
  cursor: pointer;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}

button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.loading {
  margin: 20px;
  color: #666;
  font-size: 18px;
}

.results {
  margin-top: 30px;
}

pre {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
  display: inline-block;
  max-width: 90%;
  overflow-x: auto;
}

.layout-container {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}
</style>