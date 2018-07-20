<template>
<div>
<Jumbotron :background-img="imgURL" :addClass="true">
  Services
</Jumbotron>
<div class="container">
<div class="services">
		<p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
			one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the
			art customer service.</p>
	</div>

	<div class="section">
    <tabs>
      <tab name="Pre-Construction">
        <h1> This is the tab </h1>
      </tab>

      <tab name="Construction">
        <h1> This is the other tab </h1>
      </tab>
    </tabs>
		<!-- <div class="tabs">
			<div class="tabs-links"> -->
        
          <!-- <Tab title="Pre-Construction">
            <div class="tabs-item-description">
              <p>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
								service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer
								service.<br><br>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive
								e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable
								potentialities.
              </p>
              <img src="../assets/services/services-tab-pre-construction-img.png">
            </div>
          </Tab> -->
				<!-- <div class="tabs-link" data-tab="2">Construction</div>
				<div class="tabs-link" data-tab="3">Design Build</div>
				<div class="tabs-link" data-tab="4">Sustainability</div> -->
	</div>
  </div>
  </div>
</template>

<script type = "text/javascript" >
import Jumbotron from './Jumbotron.vue'
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'



export default {
  data() {
    return {
      imgURL: require('../assets/services/services-jumbotron.png'),
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children;
  },
  components: {
    Jumbotron,
    Tabs,
    Tab
  },
  
};
</script>

<style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';
  .services {
  padding-top: 52px;

  @media @phone {
    padding-top: 35px;
  }
  p {
    font-size: 16px;
    line-height: 25px;

    @media @phone {
      font-size: 20px;
      line-height: 33px;
    }
  }
}
.section {
  margin: 44px auto 65px auto;
  display: flex;
  overflow: hidden;

  @media @phone {
    margin: 49px auto 82px auto;
  }
}
.tabs {
  width: 100%;
  .tabs-items {
    width: 100%;
    height: 400px;
    .flex(center);
    justify-content: center;
    padding-top: 30px;

    @media @phone {
      height: 1042px;
      padding-top: 27px;
      .mobile-img {
        width: 100%;
      }
    }
  }
  .tabs-item {
    display: none;
    width: 100%;
    padding-top: 20px;
    @media @phone {
      padding-top: 11px;
    }
    .tabs-item-title {
      font-size: 24px;
      font-weight: bold;
      padding-bottom: 15px;
      @media @phone {
        font-size: 28px
      }
    }
    p {
      line-height: 26px;
      @media @phone {
        line-height: 34px;
      }
    }
    .tabs-item-description {
      .flex(space-between);
      .tabs-text {
        width: 50%;
      }

      @media @phone {
        .flex(space-between, none, column);
        .tabs-text{
          width: 100%;
          font-size: 21px;
          line-height: 33px;
          padding-bottom: 39px;
        }
      }
    }
  }
  .tabs-item-selected {
    display: block;
    
  }
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
  .tabs-link-selected {
    border-right: 1px solid @gray-background;
    background-color: @teal;
    color: black;
    &:hover {
      background-color: @accent;
      color: @white;
    }
  }

}
</style>
