<template>
  <div>
    <div class="tabs">
      <div class="tabs-links">
        <div v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <button class="tabs-link" 
            @click="selectTab(tab)" 
              >{{ tab.name }}</button>
        </div>
      </div>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script type = "text/javascript">
import Tab from './Tab.vue';

export default {
  data() {
    return {
      tabs: [], 
      activeColor: '@white' 
    }
  },
  created() {
    this.tabs = this.$children;
  },
  methods: { 
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  },
  components: {
    Tab,
  }
}
</script>

<style <style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';

.tabs {
  width: 100%;
  .tabs-links {
    .flex(space-between);
    @media @phone {
      .flex(space-between, none, column);
    }
  }
  .tabs-link {
    height: 50px;
    width: 183px;
    font-size: 20px;
    .flex(center, center);
    font-weight: bold;
    background-color: @white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: @accent;
      color: @white;
    }
    @media @phone {
      width: 100%;
      height: 62px;
      font-size: 26px;
      margin-bottom: 30px;
    }
  }
  .is-active {
    .tabs-link {
      border-right: 1px solid @gray-background;
      background-color: @teal;
      color: @white;
      &:hover {
        background-color: @accent;
        color: @white;
      }
    }
  }
}
</style>