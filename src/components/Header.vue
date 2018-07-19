<template>
  <div>
    <div class="header-container">
      <div class="container">
        <div class="header"> S&J</div>

        <div class="dropdown">
          <img :src="imageButton" v-on:click="showDropDown=!showDropDown" class="dropdown-button" />
          <div class="dropdown-content" v-if="showDropDown">
            <router-link to="/" v-on:click.native="showDropDown=!showDropDown" class="dropdown-link">
            Home
            </router-link>
            <router-link to="/services" v-on:click.native="showDropDown=!showDropDown" class="dropdown-link">
            Services
            </router-link>
            <router-link to="/contact" class="dropdown-link">
            Contact
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>;

<script type = "text/javascript">

export default {
  name: 'Header',
    data () {
      return {
        showDropDown: false,
      }
    },
    computed: {
      imageButton() {
        return this.showDropDown ? require('../assets/nav-hamburger-close.png') : require('../assets/nav-hamburger.png')
      }
    }
}

</script>

<style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';

.header-container {
    width: 100%;
    height: 50px;
    .flex(none, center);
    background-color: @gray-background;
    position: fixed;
    top: 0;
    z-index: 2;

    .container {
      .flex(space-between, center);

      .dropdown {
        z-index: 3;
        cursor: pointer;

      .dropdown-content {
        width: 100%;
        height: 100%;
        .flex(none, none, column);
        position: fixed;
        z-index: 5;
        top: 50px;
        left: 0;
        background-color: @gray-background;
        opacity: 0.9;
      }

      .dropdown-link {
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 48px;
        line-height: 85px;
        color: @white;
        &:hover {
          color: @accent;
        }
      }

      @media @phone {
        height: 65px;
      }
    }
    .header {
      font-weight: bold;
      font-size: 24px;
      background: transparent;
      color: @white;
      left: 20;

      @media @phone {
        font-size: 28px;
      }
    }
  }
} 
</style>
