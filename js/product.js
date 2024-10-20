// Main swiper
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
        el: ".Nav .swiper-pagination",
        type: "progressbar"
      },
      parallax : true,
    direction: getDirection(),
    on:{
       init(e){
        const Slides = document.querySelectorAll('.Pin-Wrapp > .mainSlide.swiper-slide-visible');
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('inner-visible')
    }
       },

    setTransition(e){
    let elem = document.querySelector('.roundTxt');
    const Slides = document.querySelectorAll('.Pin-Wrapp > .mainSlide.swiper-slide-visible');
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('inner-visible')
        let value =swiper.translate * 0.08;
        elem.style.transform = `translatex(80%) translatey(0%) rotate(${value}deg)`;   
    }

    
    },

       slideChange(t){
        let x = t.slides[swiper.activeIndex].getBoundingClientRect().right
        let active =  t.slides[swiper.activeIndex]
        let Hash =active.querySelector('div.Wrapp').getAttribute('data-index')
        let all =document.querySelectorAll(`.HoverNav .NItem`)
        let GoSec = document.querySelector(`.HoverNav [data-index='${Hash}']`)
        let id = GoSec.getAttribute('data-index')
        all.forEach(a=>{
          a.classList.remove('active')
          a.classList.remove('DarkActive')
      })
        GoSec.classList.add('active')
        t.slides[swiper.activeIndex].classList.add('Is-active')    

        switch(Hash){
          case '0':{
              console.log('s',0);
              GoSec.classList.add('active')
              t.slides[swiper.activeIndex].classList.add('Is-active')  
              document.querySelector('.Nav .Top .activeItem').classList.remove('DarkActive')
              header.classList.add('dark')
              break
          }
          case '1':{
              console.log('s',1);
              GoSec.classList.add('DarkActive')
              t.slides[swiper.activeIndex].classList.add('Is-active')  
              document.querySelector('.Nav .Top .activeItem').classList.add('DarkActive')
              header.classList.remove('dark')
              break
          }
          case '2':{
              console.log('s',2);
              GoSec.classList.add('active')
              t.slides[swiper.activeIndex].classList.add('Is-active')  
              document.querySelector('.Nav .Top .activeItem').classList.remove('DarkActive')
              header.classList.add('dark')
              break
          }
        }
          },     
          }
  });
  function getDirection() {
    return window.innerWidth > 767 ? 'horizontal' : 'vertical';
}
let Lab = document.querySelector('.Nav .Top')
let HoverNav = document.querySelector('.HoverNav')
let NavItems = document.querySelectorAll('.HoverNav .NItem')
NavItems.forEach((n)=>{

    n.addEventListener('click',(e)=>{
      NavItems.forEach(l=>{
        l.classList.remove('active')
      })
      e.currentTarget.classList.add('active')

      let Hash = e.target.getAttribute('data-index')
      let GoSec = document.querySelector(`[data-index='${Hash}']`)
      let id = GoSec.getAttribute('data-index')
      console.log('h',Hash);
      console.log('sec',GoSec);

      swiper.slideTo(id, 100)
  
    })


})
// gallery slider
let SwiperBanner= new Swiper ('.swiper-gallery', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect:'fade' ,
  fadeEffect: {
    crossFade: true,
  },
 speed:2000,
 pagination: {
  el: '.gallery-Container .swiper-pagination',
        clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+ '</span>';
    },
},
navigation: {
  nextEl: ".gallery-Container .swiper-button-next",
  prevEl: ".gallery-Container .swiper-button-prev",
}
  })

  // product slider
let SwiperPro= new Swiper ('.swiper-product', {
  direction:'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  effect:'slide' ,
 speed:200,
navigation: {
  nextEl: ".Related-Container .swiper-button-next",
  prevEl: ".Related-Container .swiper-button-prev",
}
  })