<template>
  <div class="layout-container">
    <div class="portlet-container">
      <component
        :is="compLabel" 
        v-for="i in childCount" 
        :key="i"
        :index="i"
        :attrs="getAttrs()"
      />
    </div>
  </div>
</template>

<script>
import FloatView from './FloatView.vue'
import IndicatorView from './IndicatorView.vue'
import SxPortlet from './Portlet.vue'
import MockDataGenerator from '../util/MockDataGenerator'

export default {
  components: { FloatView, IndicatorView, SxPortlet },
  props: {
    childCount: Number,
    compLabel: String,
    sendLargeProps: Boolean
  },
  data() {
    return {
      createdTime: 0,
      mountedTime: 0
    }
  },
  computed: {
    results() {
      return {
        childCount: this.childCount,
        createdTime: this.createdTime,
        mountedTime: this.mountedTime
      }
    }
  },
  created() {
    this.createdTime = performance.now()
    console.log('[Parent] created hook')
  },
  mounted() {
    this.mountedTime = performance.now()
    console.log('[Parent] mounted hook')
    this.complete()
  },
  methods: {
    getAttrs () {
      return this.sendLargeProps ? MockDataGenerator.generateAttrs() : {}
    },
    complete () {
      console.log('Performance test complete', this.results)
      this.$emit('test-complete', this.results)
    }
  }
}
</script>

<style>
.portlet-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 20px;
}
</style>