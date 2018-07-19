<template>
  <div class="jumbotron-container">
		  <img class="jumbo-img desktop-img" :src="backgroundImg" />
		  <img class="jumbo-img mobile-img" src="../assets/home/home-mobile-jumbotron.png" />
		  <div class="container jumbo-text" :class="{'services-jumbo' : addClass}">
			 <slot></slot>
		  </div>
	  </div>
</template>

<script>
export default{
  name: 'jumbtron',
  props: {
    backgroundImg: String,
    addClass: Boolean,
  }
}
</script>

<style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';

.jumbotron-container {
  width: 100%;
  position: relative;
  color: @white;
  .flex(center);
  .jumbo-img {
    width: 100%;
  }
  .mobile-img {
  display: none;
  }
  @media @phone {
    .desktop-img {
      display: none;
    }
    .mobile-img {
      display: block;
      height: 340px;
    }
  }
  .jumbo-text {
    position: absolute;
    bottom: 50px;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    background: transparent;
    color: white;

    @media @phone {
      font-size: 47px;
      bottom: 33px;
      line-height: 55px;
    }
  }
  .services-jumbo {
    bottom: 17px;

    @media @phone {
      bottom: 33px;
    }
  }
}
</style>

