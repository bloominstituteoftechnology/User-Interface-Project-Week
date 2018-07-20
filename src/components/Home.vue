<template>
<div>
<Jumbotron :background-img="imgURL" :addClass="false">
   Integrity,
			  <br> Excellence,
			  <br> Progress.
</Jumbotron>
  <div class="container">
    <div class="box">
		<div class="row align-items-center">
			<div class="col box-text">
				<h3 class="subheader">Smith & Jones Architects</h3>
				<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
					etiam laboramus dissentiet in, nec no errem </p>
				<button class="info-button">Learn More</button>
			</div>
			<img class="col order-first order-sm-last desktop-img" src="../assets/home/home-img-1.png" />
			<img class="col order-first order-sm-last mobile-img" src="../assets/home/home-mobile-img-1.png" />
		</div>
	</div>

	<div class="box">
		<div class="row align-items-center">
			<img class="col desktop-img" src="../assets/home/home-img-2.png" />
			<img class="col mobile-img" src="../assets/home/home-mobile-img-2.png" />
			<div class="col box-text">
				<h3 class="subheader">Futuristic Designs</h3>
				<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
					etiam laboramus dissentiet in, nec no errem </p>
				<button class="info-button">View Designs</button>
			</div>
		</div>
	</div>

	<div class="big">
		<h3 class="subheader">Recent Projects </h3>

		<div class="large-info">
			<div class="large-img">
				<img class="desktop-img" src="../assets/home/home-villas-img.png" />
				<img class="mobile-img" src="../assets/home/home-mobile-villas-img.png" />
				<div class="head-box">
					<h4>THE VILLAS</h4>
				</div>
			</div>
			<div class="row justify-content-center full-text">
				<div class="col-12 col-md-7">
					<p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going
						forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
						<br>
						<br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide
						with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop
						on focusing solely on the bottom line.</p>
				</div>
			</div>
		</div>

		<div class="large-info">
			<div class="large-img">
				<img class="desktop-img" src="../assets/home/home-outskirts-img.png" />
				<img class="mobile-img" src="../assets/home/home-mobile-outskirts-img.png" />
				<div class="head-box just-left">
					<h4>OUTSKIRTS</h4>
				</div>
			</div>
			<div class="row justify-content-center full-text">
				<div class="col-12 col-md-7">
					<p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the
						day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined
						cloud solution.
						<br>
						<br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide
						with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop
						on focusing solely on the bottom line.
					</p>
				</div>
			</div>
		</div>

		<div class="large-info">
			<div class="large-img">
				<img class="desktop-img" src="../assets/home/home-the-blocks-img.png" />
				<img class="mobile-img" src="../assets/home/home-mobile-the-blocks-img.png" />
				<div class="head-box">
					<h4>THE BLOCKS</h4>
				</div>
			</div>
			<div class="row justify-content-center full-text">
				<div class="col-12 col-md-7">
					<p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day,
						going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud
						solution.
						<br>
						<br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide
						with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop
						on focusing solely on the bottom line.
					</p>
				</div>
			</div>
		</div>
	</div>
  </div>
  </div>
</template>

<script type = "text/javascript" >
import Jumbotron from './Jumbotron.vue'
export default {
  data() {
    return {
      imgURL: require('../assets/home/home-jumbotron.png'),
    }
  },
  components: {
     Jumbotron
  }
};
</script>


<style lang="less">
.flex(@jc: none, @ai: none, @dir: row) {
  display: flex;
  justify-content: @jc;
  align-items: @ai;
  flex-direction: @dir;
}
@phone: ~"(max-width: 575px)";

.container {
  max-width: 883px;

  .mobile-img {
    display: none;
  }
  .subheader {
    font-weight: bold;
    font-size: 24px;
    color: #222222;
    margin-bottom: 20px;
  }
  @media @phone {
    .subheader {
      font-size: 32px;
    }

    p {
      padding-top: 5px;
      font-size: 21px;
      line-height: 32px;
    }
  }
  @media @phone {
    .desktop-img {
      display: none;
    }
    .mobile-img {
      display: block;
    }
  }
  .box {
  padding-top: 53px;
  padding-bottom: 48px;

  @media @phone {
    padding-top: 53px;
    padding-bottom: 13px;
  }
  p {
    padding-bottom: 20px;

    @media @phone {
      line-height: 31px;
      margin: 10px 0 12px 0;
    }
  }
  .info-button {
    margin-top: 5px;
    height: 46px;
    width: 136px;
    border: 1px solid black;
    @media @phone {
      height: 59px;
      width: 100%;
    }
  }

  .box-text {
    @media @phone {
      padding-top: 35px;
    }
  }
}

.big {
  margin-top: 50px;

  @media @phone {
    margin-top: 52px;
  }
  .large-info {
    margin-top: 46px;
    margin-bottom: 80px;

    @media @phone {
      margin-top: 36px;
      margin-bottom: 20px;
    }
    .flex(none, center, column);
    .large-img {
      position: relative;

      .head-box {
        .flex(none, none, row-reverse)
      }

      .just-left {
        .flex(none, none, row)
      }

      h4 {
        .flex(center, center);
        padding-left: 7px;
        border: 1px solid white;
        position: absolute;
        bottom: -38px;
        background-color: #d8d8d8;
        font-size: 23px;
        letter-spacing: 8.5px;
        height: 94px;
        width: 316px;
      }

      @media @phone {
        img {
          width: 100vw;
          }

        h4 {
          border: none;
          font-size: 30px;
          letter-spacing: 11px;
          bottom: -107px;
          text-align: center;
          height: 125px;
          width: 90%;
        }

        .head-box {
          .flex(center)
        }
      }
    }
  }

  .full-text {
    padding-top: 90px;
    padding-bottom: 20px;


    p {
      font-size: 18px;
      padding: 0 20px;

      @media @phone {
        font-size: 23px;
        padding: 50px 10px 0 10px;
        line-height: 31px;
        
      }
    }
  }
}
}
</style>