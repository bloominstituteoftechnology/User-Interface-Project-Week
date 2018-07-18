<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang = "less">
/* @import './assets/mixins.less'; */
#app {
  font-family: 'Roboto', Arial, sans-serif;
  box-sizing: border-box;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center;
  color: #2c3e50; */
}
</style>
