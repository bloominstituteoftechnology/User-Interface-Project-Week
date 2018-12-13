// JS goes here

var controller = new Scrollmagic.Controller();

let scene1 = new Scrollmagic.Scence({
    triggerElement: '#trigger1'
}).setTween('#animate1', .5, {opactity: 0})
.addIndicators({name: "First trigger"})
.addTo(controller);