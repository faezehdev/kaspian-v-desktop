// Main swiper
gsap.to('.Pro-BTN .text',{
    y:0
})
gsap.to('.Pro-BTN .icon',{
    y:0
})
header.classList.add('dark')
let activeItem = document.querySelector('.activeItem')
let fixNav = document.querySelector('.HoverNav')
activeItem.addEventListener('mouseenter',()=>{
fixNav.classList.add('show')
})
fixNav.addEventListener('mouseleave',()=>{
    fixNav.classList.remove('show')
    })

let slides= document.querySelectorAll('.swiper-Container .swiper-slide')
let i =0
const swiper = new Swiper('.swiper-Container', {
    slideToClickedSlide: true,
    slidesPerView: "auto",
   freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: false,
    },
    watchOverflow: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    noSwiping: true,
    spaceBetween: 0,
    mousewheel: {
        enabled: true,
        sensitivity: 4,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      parallax : true,
    direction: getDirection(),
    on:{
       init(e){
        const Slides = document.querySelectorAll('.swiper-slide-visible');
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('inner-visible')
    }
       },

    setTransition(e){
    const Slides = document.querySelectorAll('.swiper-slide-visible');
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('inner-visible')
    }
    }
                }
  });
  function getDirection() {
    return window.innerWidth > 767 ? 'horizontal' : 'vertical';
}
let proBtn = document.querySelector('.Pro-BTN')
proBtn.addEventListener('click',()=>{
    swiper.slideTo(1)
})