<template>
  <div v-if="isActive">
    <slot>
    </slot>
  </div>
</template>

<script type = "text/javascript">
export default {
  data() {
    return {
      isActive: false,
    }
  },
  props: {
    'name': {
      required: true,
      type: String
    },
    // 'selected': {
    //   type: Boolean,
    //   default: false
    // }
  },
  // mounted() {
  //   console.log(this)
  // }
}
</script>
<style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';
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
}
  </style>

