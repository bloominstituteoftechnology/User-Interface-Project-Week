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
      <div class="tabs-items">
      <tab class="tabs-item" name="Pre-Construction" :selected="true">
        <div class="tabs-item-title">Pre-Construction</div>
        <div class="tabs-item-description">
          <div class="tabs-text">
            <p>
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
						service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer
						service.<br><br> Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive
						e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable
						potentialities.
            </p>
          </div>
          <div>
            <img class="desktop-img" src="../assets/services/services-tab-pre-construction-img.png" />
          </div>
        </div>
      </tab>

      <tab class="tabs-item" name="Construction">
        <div class="tabs-item-title">Construction</div>
        <div class="tabs-item-description">
          <div class="tabs-text">
            <p>
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
						service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer
						service.<br><br> Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive
						e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable
						potentialities.
            </p>
          </div>
          <div>
            <img class="desktop-img" src="../assets/services/services-tab-construction-img.png" />
          </div>
        </div>
      </tab>
      <tab class="tabs-item" name="Design Build">
        <div class="tabs-item-title">Design Build</div>
        <div class="tabs-item-description">
          <div class="tabs-text">
            <p>
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
						service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer
						service.<br><br> Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive
						e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable
						potentialities.
            </p>
          </div>
          <div>
            <img class="desktop-img" src="../assets/services/services-tab-design-build-img.png" />
          </div>
        </div>
      </tab>
      <tab class="tabs-item" name="Sustainability">
        <div class="tabs-item-title">Sustainability</div>
        <div class="tabs-item-description">
          <div class="tabs-text">
            <p>
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
						service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer
						service.<br><br> Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive
						e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable
						potentialities.
            </p>
          </div>
          <div>
            <img class="desktop-img" src="../assets/services/services-tab-sustainability-img.png" />
          </div>
        </div>
      </tab>
      </div>
    </tabs>
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
    .tabs-item {
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
  }
}


</style>
