let body = document.querySelector("body");
let lastIndex = false;

const interleaveOffset = 0.75;
body.style.position="fixed";
const swiperHome = new Swiper(".homeSlider", {
  loop: false,
  direction: "vertical",
  autoplay: false,
  speed: 1000,
  grabCursor: false,
  watchSlidesProgress: true,
  allowTouchMove:false,
  mousewheelControl: true,
  mousewheel: true,
  pagination: {
    el: '.innerSlider1Pagination',
    clickable:true,
  },
  navigation: {
    nextEl: ".nextMainBtn",
  },
  on: {
    progress: function () {
      let swiperHome = this;

      for (let i = 0; i < swiperHome.slides.length; i++) {
        let slideProgress = swiperHome.slides[i].progress;
        let innerOffset = swiperHome.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        //TweenMax.set(swiperHome.slides[i], {
        //skewY: `${innerTranslate*0.025}deg`,
        //});
        TweenMax.set(swiperHome.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    touchStart: function () {
      let swiperHome = this;
      for (let i = 0; i < swiperHome.slides.length; i++) {
        swiperHome.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      let swiperHome = this;
      for (let i = 0; i < swiperHome.slides.length; i++) {
        swiperHome.slides[i].style.transition = speed + "ms";
        swiperHome.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
    slideChange: function () {
      setTimeout(function () {
        swiperHome.params.touchReleaseOnEdges = false;
        swiperHome.params.mousewheel.releaseOnEdges = false;
      });
      if (this.activeIndex==3) {
        lastIndex=true
      }
      if (lastIndex&&this.activeIndex==2) {
        $('html, body').animate({
          scrollTop: document.querySelector(".section1").offsetTop
        }, 1000);
        setTimeout(() => {
          
          body.style.position="fixed"
        }, 1000);
        lastIndex=false
      }
    },
    reachEnd: function () {
      setTimeout(function () {
          swiperHome.params.touchReleaseOnEdges = true;
          swiperHome.params.mousewheel.releaseOnEdges = true;
          body.style.position="relative"
        console.log("end"); 
          
      }, 500);
    },
    reachBeginning: function () {
      console.log("begin");
      body.style.position="fixed"
      setTimeout(function () {
        swiperHome.params.touchReleaseOnEdges = true;
        swiperHome.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },

 
  },
});
$('.scroll-down').click(function() {
  $('html, body').animate({
    scrollTop: document.querySelector(".section2").offsetTop
  }, 1000);
});


let overTitle = document.querySelectorAll(".overTitle")

overTitle.forEach(element => {
  element.addEventListener("mouseenter" , function (params) {
    console.log(element.previousElementSibling.querySelector("img"));
    element.previousElementSibling.querySelector("img").style.transform="scale(1)"
  })
  element.addEventListener("mouseleave" , function (params) {
    element.previousElementSibling.querySelector("img").style.transform="scale(1.25)"
    console.log("out");
    
  })
});


$('.home').imagesLoaded( function() {
  
  const text = document.querySelector("#text");
const replay = document.querySelector("#loader");
const bar = document.querySelector("#bar");
const loader = document.querySelector("#percent");

let load = 0;

setInterval(() => {
  load = load + Math.floor(Math.random() * 5 + 1);
  if (load < 100) {
    loader.textContent = load + "%";
    bar.style.transform = `scalex(${load}%)`;
    console.log(load);
    
  } else {
    bar.style.transform = `scalex(100%)`;
    loader.textContent = "100%";
  }
}, 100);

setTimeout(() => {
  document.querySelector(".loading").style.transform="translateY(-100%)"
}, 4000);
});



