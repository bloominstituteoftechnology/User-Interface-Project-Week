var boxAnim = TweenMax.to(".box", .5, {
	width: "17vw",
	ease: Power0.easeNone
});
var containerAnim = TweenMax.to(".container-group", .5, {
	height: "75vh", 
	delay: .4, 
	ease: Power1.easeOut,
	onComplete:myFunction
});

function myFunction() {
	console.log("animation finished");
}