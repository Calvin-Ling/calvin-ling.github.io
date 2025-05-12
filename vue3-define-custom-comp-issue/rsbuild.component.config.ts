import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    entry: {
      'sc-cross-frame-comp3': './src/component.ts',         // 需要生成 HTML 的入口
    },
  },
  output: {
    distPath: {
      root: './dist-component', // 根目录
      js: '',
      css: ''
    }, // 输出目录
    cleanDistPath: true,
    filename: {
      js: '[name].esm.js',
    },
  },
  tools: {
    htmlPlugin: false,
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one'
    },
  }
});
