<template>
<footer>
  <div class="container">
    <div class="address-box">
      <div class="email-input">
        <h1>Interested in starting a project? <br> Let's Talk:</h1>
        <input type="email" placeholder="Enter email">
        <p>We'll never share your email with anyone else.</p>
      </div>


      <div class="address address1">
        <h1>New York</h1>
        <p>123 Lane</p>
        <p>Suite 100</p>
        <p>Albany, NY 12345</p>
        <p>202 555 0144</p>
      </div>

      <div class="address address1">
        <h1>Florida</h1>
        <p>Ocean Drive</p>
        <p>Suite 201</p>
        <p>Orlando, FL 22345</p>
        <p>502 555 0144</p>
      </div>

      <div class="address">
        <h1>California</h1>
        <p>Mountain Street</p>
        <p>Suite 105</p>
        <p>San Diego, CA 22345</p>
        <p>702 555 0144</p>
      </div>
    </div>
  </div>
  <div id="copyright">
    <p>Copyright © 2018 Smith and Jones</p>
  </div>
</footer>
</template>

<script>
export default{
  
}
</script>

<style lang="less">
@import '../assets/mixins.less';
@import '../assets/global-styles.less';

footer {
  width: 100%;
  height: 250px;
  background-color: @gray-background;
  .flex(space-around, center, column);

  @media @phone {
    height: auto;
    .flex(space-around, left, column);
  }
  h1 {
    font-size: 20px;
    color: @white;

    @media @phone {
      font-size: 26.5px;
    }
  }
  p {
    color: @white;
    font-size: 13px;
    font-weight: lighter;
  }

  .container {
    padding-top: 52px;
    line-height: 25px;
    .flex(center);
    @media @phone {
      padding-top: 35px;
      line-height: 30px;
    }
    .email-input {
      .flex(space-between, none, column);
      input {
        border-radius: 4px;
        width: 100%;
        margin-top: 10px;
        height: 44px;

        @media @phone {
          margin-top: 20px;
          height: 64px;
          font-size: 22px;
        }
      }
      @media @phone {
        p {
          padding-top: 10px;
          font-size: 17px;
        }
      }
    }
    .address {
      padding-left: 0;
      line-height: 16px;
      @media @phone {
        padding-top: 27px;
        p {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
    .address-box {
      width: 100%;
      .flex(space-between);
      @media @phone {
        .flex(none, space-between, column);
        padding-bottom: 50px;
      }
    }

    .address1 {
      padding-right: 42px;
    }
  }
  .copyright {
    @media @phone {
      padding-left: 10px;
    }
  }
}
</style>
