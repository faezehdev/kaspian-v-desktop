let body = document.querySelector("body");
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