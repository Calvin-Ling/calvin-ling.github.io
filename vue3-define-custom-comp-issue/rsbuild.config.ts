import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    entry: {
      app: './src/main.ts',         // 需要生成 HTML 的入口
    },
  },
  // 配置需要生成 HTML 的入口
  html: {
    template: './template/index.html', // HTML 模板
  },

  output: {
    distPath: {
      root: './dist-app', // 根目录
    }, // 输出目录
    cleanDistPath: true,
    filename: {
      js: '[name].js',
    },
    copy: [
      {
        from: './template/lib',
        to: './lib',
      }
    ]
  },
});
