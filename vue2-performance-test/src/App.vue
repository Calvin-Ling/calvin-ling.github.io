<template>
  <div id="app">
    <!-- 导航菜单 -->
    <nav>
      <router-link to="/">6层父子组件性能测试</router-link> |
      <router-link to="/3layer">3层父子组件性能测试</router-link>
      <router-link to="/1layer">1层父子组件性能测试</router-link>
    </nav>
    
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>