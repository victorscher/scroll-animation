const flightPath = {
  curviness: 1,
  autoRotate: true,
  values: [{x:50, y:-300}, { x:100, y:-500}, {x: 300, y: -500},  {x: 400, y: -450},  {x: 200, y: -300},  {x: 100, y: -200}, {x: window.innerWidth, y: -700}]
}

const tween = new TimelineLite();

tween.add(TweenLite.to(".rocket", 2, {
    bezier: flightPath
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 5000,
  triggerHook: 0
})
.setTween(tween)
.setPin(".animation")
.addIndicators()
.addTo(controller);

