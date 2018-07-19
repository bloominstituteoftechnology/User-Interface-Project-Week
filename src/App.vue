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
@import './assets/mixins.less';
@import './assets/global-styles.less';
#app {
  font-family: 'Roboto', Arial, sans-serif;
  box-sizing: border-box;
}
</style>
