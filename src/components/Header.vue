/* eslint-disable */

<template>
  <div>
    <div class="header-container">
      <div class="container">
        <div class="header"> S&J</div>

        <div class="dropdown">
          <img src="../assets/nav-hamburger.png" class="dropdown-button" />
          <div class="dropdown-content">
            <a class="dropdown-link">
            Home
            </a>
            <a class="dropdown-link">
            Services
            </a>
            <a class="dropdown-link">
            Contact
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron-container">
		  <img class="jumbo-img desktop-img" src="../assets/home/home-jumbotron.png" />
		  <img class="jumbo-img mobile-img" src="../assets/home/home-mobile-jumbotron.png" />
		  <div class="container jumbo-text">
			  Integrity,
			  <br> Excellence,
			  <br> Progress.
		  </div>
	  </div>
    <router-view></router-view>
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
  </div>
</template>;

<script type = "text/javascript">

export default {
};

</script>

<style lang="less">
.header-container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #828282;
    position: fixed;
    top: 0;
    z-index: 2;
    .container {
      max-width: 883px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    // @media @phone {
    //   height: 65px;
    // }
}
.header {
    font-weight: bold;
    font-size: 24px;
    background: transparent;
    color: #ffffff;
    left: 20;

    // @media @phone {
    //   font-size: 28px;
    // }
}
footer {
  width: 100%;
  height: 250px;
  background-color: #828282;
  // .flex(space-around, center, column);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  // @media @phone {
  //   height: auto;
  //   .flex(space-around, left, column);
  // }
  h1 {
    font-size: 20px;
    color: white;

    // @media @phone {
    //   font-size: 26.5px;
    // }
  }
  p {
    color: white;
    font-size: 13px;
    font-weight: lighter;
  }

  .container {
    // @import (reference) '../assets/mixins.less';

    padding-top: 52px;
    line-height: 25px;
    // .flex(center);
    display: flex;
    justify-content: center;
    // @media @phone {
    //   padding-top: 35px;
    //   line-height: 30px;
    // }
    .email-input {
      // .flex(space-between, none, column);
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      input {
        border-radius: 4px;
        width: 100%;
        margin-top: 10px;
        height: 44px;

        // @media @phone {
        //   margin-top: 20px;
        //   height: 64px;
        //   font-size: 22px;
        // }
      }
      // @media @phone {
      //   p {
      //     padding-top: 10px;
      //     font-size: 17px;
      //   }
      // }
    }
    .address {
      padding-left: 0;
      line-height: 29px;
      // @media @phone {
      //   padding-top: 27px;
      //   p {
      //     font-size: 18px;
      //     line-height: 30px;
      //   }
      // }
    }
    .address-box {
      width: 100%;
      // .flex(space-between);
      display: flex;
      justify-content: space-between;
      // @media @phone {
      //   .flex(none, space-between, column);
      //   padding-bottom: 50px;
      // }
    }

    .address1 {
      padding-right: 42px;
    }
  }
  // .copyright {
  //   @media @phone {
  //     padding-left: 10px;
  //   }
  // }
}


.jumbotron-container {
  width: 100%;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  // .flex(center);
  .jumbo-img {
    width: 100%;
  }
  .mobile-img {
  display: none;
  }
  // @media @phone {
  //   .desktop-img {
  //     display: none;
  //   }
  //   .mobile-img {
  //     display: block;
  //     height: 340px;
  //   }
  // }
  .jumbo-text {
    position: absolute;
    bottom: 50px;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    background: transparent;
    color: white;

    // @media @phone {
    //   font-size: 47px;
    //   bottom: 33px;
    //   line-height: 55px;
    // }
  }
  .services-jumbo {
    bottom: 17px;

    // @media @phone {
    //   bottom: 33px;
    // }
  }
}

  
</style>
