
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
AOS.init();
//bg-noise
const noise = () => {
  let canvas, ctx;
  let wWidth, wHeight;
  let noiseData = [];
  let frame = 0;
  let loopTimeout;
  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.01) {
              buffer32[i] = 0xff000000;
          }
      }
      noiseData.push(idata);
  };
  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }
      ctx.putImageData(noiseData[frame], 0, 0);
  };
  // Loop
  const loop = () => {
      paintNoise(frame);
      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };
  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      for (let i = 0; i < 10; i++) {
          createNoise();
      }
      loop();
  };
  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);
          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };
  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');
      setup();
  })();
};
noise();
  let dot;
  for (var i=0; i < 10; i++){
    dot = document.createElement('div');
    dot.className = 'dot';
    setDotPosition(dot);
  }
function setDotPosition(dot){
  TweenMax.set(dot, {x:R(-window.innerWidth/2,window.innerWidth/2),y:R(-window.innerHeight,window.innerHeight), delay:R(0, 1)});
}
function R(max,min){return Math.random()*(max-min)+min};
document.querySelector("#scroll-animate-main > div > section > div.project > div > div")
$(window).load(function () {
  $(".arc").fadeOut();
  $(".options").delay(2000).fadeOut("slow");
});
// bg-noise finish

//dark theme
// Выбираем кнопку
const btn = document.querySelector('.btn-toggle');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
})

// bg-text
// Wrap every letter in a span
var textWrapper = document.querySelector('.one .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.one .letter',
    translateY: ["5.1em", 0],
    translateZ: 0,
    duration: 5250,
    delay: (el, i) => 400 * i
  }).add({
    targets: '.one',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  var textWrapper = document.querySelector('.two .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.two .letter',
    translateY: ["5.1em", 0],
    translateZ: 0,
    duration: 9250,
    delay: (el, i) => 350 * i
  }).add({
    targets: '.two',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });
  var textWrapper = document.querySelector('.three .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.three .letter',
      translateY: ["5.1em", 0],
      translateZ: 0,
      duration: 5250,
      delay: (el, i) => 500 * i
    }).add({
      targets: '.three',
      duration: 1000,
      easing: "easeOutExpo",
      delay: 3000
    });

    // about
//form
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

//certificatePicture
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".certificatePicture", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});
// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".certificatePicture", {transformOrigin: "right center", force3D: true});

//contact-icons 
gsap.defaults({ease: "bounce"});
gsap.set('.btnLink', {y: 10, duration:3,
});
ScrollTrigger.batch('.btnLink', {
  onEnter: batch => gsap.to(batch, {opacity: 1, y: -10, duration:2, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: 10, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 10, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
ScrollTrigger.addEventListener("refreshInit", () => gsap.set('.btnLink', {y: 0}));

