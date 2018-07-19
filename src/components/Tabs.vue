<template>
  <div>
    <div class="tabs-links">
      <div class="tabs-link"
        :for="tab in tabs"
        :class="[{'active': current === tab}, 'item']"
        on:click="changeTab(tab)">
          {{tab.title}}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script type = "text/javascript">
export default {
  data() {
    return {
      tabs: [],
      current: ''
    }
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);
      if (tabs.active === true) {
        this.current = tab;
      }
    },
    changeTab(tab) {
      this.current = tab;
      this.tabs.forEach(function(value) {
        if (value === tab) {
          value.active = true;
        } else {
          value.active = false;
        }
      });
    }
  }
}
</script>