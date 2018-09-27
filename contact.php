<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contact Us</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
	<link rel="stylesheet" href="css/index.css">
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>

<body>

<div class="fullscreen-loader">
		<img src="spinner.svg" alt="">
	</div>
	<nav>
		<div class="nav-wrapper">
			<div class="logo">
				<a href="#">S&J</a>

			</div>
			<div class="hamburger-icon">
				<img src="img/nav-hamburger.png" class="nav-menu" alt="menu icon">
				<img src="img/nav-hamburger-close.png" class="nav-x" alt="x icon">
			</div>
			<div class="hamburger-menu">
				<a href="index.html">Home</a>
				<a href="services.html">Services</a>
				<a href="#">Contact</a>
			</div>
		</div>
	</nav>


	<div class="contact container">
		<!-- top header -->
		<div class="landing-container">
			<h1>Contact Us</h1>
		</div>

		<!-- form start -->
		<div class="form-wrapper">
			<div class="contact-form">
				<h2>Get in Touch</h2>
				<form action="contactform.php" method="POST">
					<h3>Email Address</h3>
					<input type="email" placeholder="Enter Email" name="email">
					<p>We'll never share your email with anyone else.</p>
					<h3>How many buildings do you need planned?</h3>
					<select name="inputSelect" id="select">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<h3>Provide a brief overview of your project needs:</h3>
					<textarea name="message" id="message" cols="30" rows="10"></textarea>
					<div>
						<input type="radio" value="smallBusiness" name="smallBusiness" value="smallBusiness">
						<span>I am a small business</span>
					</div>
					<div>
						<input type="radio" name="residential" value="residential" name="residential">
						<span>I am a residential owner</span>
					</div>
					<div>
						<input type="radio" name="corporation" value="corporation">
						<span>I am a corporation</span>
					</div>
					
					<input type="submit" id="submit" name="submit">
				</form>
			</div>
			<!-- where we work section -->
			<div class="where-we-work">
				<h4>Where we Work</h4>

				<h3>New York</h3>
				<p>123 Lane</p>
				<p>Suite 100</p>
				<p>Albany, NY 12345</p>
				<p>202 555 0144</p>


				<h3>Florida</h3>
				<p>Ocean Drive</p>
				<p>Suite 201</p>
				<p>Orlanda, FL 22345</p>
				<p>502 555 0144</p>


				<h3>California</h3>
				<p>Mountain Street</p>
				<p>Suite 105</p>
				<p>San Diego, CA 22345</p>
				<p>702 555 0144</p>

			</div>


		</div>
		<!-- contact container end -->
	</div>

	<!-- footer -->
	<section class="footer-container">
		<footer>
			<div class="email-container">
				<h3>Interested in starting a project?
					<br>Let’s talk:</h3>
				<input type="email" placeholder="Enter email">
				<p>We'll never share your email with anyone else.</p>
			</div>
			<div class="new-york">
				<h3>New York</h3>
				<p>123 Lane</p>
				<p>Suite 100</p>
				<p>Albany, NY 12345</p>
				<p>202 555 0144</p>
			</div>
			<div class="floria">
				<h3>Florida</h3>
				<p>Ocean Drive</p>
				<p>Suite 201</p>
				<p>Orlanda, FL 22345</p>
				<p>502 555 0144</p>
			</div>
			<div class="california">
				<h3>California</h3>
				<p>Mountain Street</p>
				<p>Suite 105</p>
				<p>San Diego, CA 22345</p>
				<p>702 555 0144</p>
			</div>
		</footer>
		<div class="copy">
			Copyright &copy; 2018 Smith and Jones
		</div>
	</section>



	<script src="js/index.js"></script>

		<script>

// fadeout out function
function fadeOut(element) {
	var fadeTarget = document.querySelector(element);
	var fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
			fadeTarget.style.display = "none";
		}
	}, 50);
}
//fade out fullscreen loader on window load
window.addEventListener('load', function() {
	fadeOut('.fullscreen-loader');
});

</script>
</body>

</html>