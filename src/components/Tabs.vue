<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <button @click="selectTab(tab)">{{ tab.name }}</button>
        </li>
      </ul>
    </div>

    <div class="tab-details" >
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
      tab: ''
      
    }
  },
  created() {
    this.tabs = this.$children;
    tab: this.tabs[0].name

  },
  mounted() {
    // console.log(JSON.parse(JSON.stringify(this.tabs)))
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