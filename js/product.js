// Main swiper
let IS1 = true
let IS2 = true
let IS3 = true
let IS4 = true
let IS5 = true
let IS6 = true
let IS7 = true
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
    let elem = document.querySelector('.roundTxt');
    const Slides = document.querySelectorAll('.swiper-slide-visible');
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('inner-visible')
        let value =swiper.translate * 0.08;
        console.log(value);
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
      })
        GoSec.classList.add('active')
        t.slides[swiper.activeIndex].classList.add('Is-active')    

        switch(Hash){
          case '0':{
            //   console.log('s',0);
              break
          }
          case '1':{
            //   console.log('s',1);
              if(IS1){
             
                IS1 =false
            }
              break
          }
          case '2':{
            //   console.log('s',2);
            
                  IS2 =false
            
             
              break
          }
          case '3':{
            //   console.log('s',3);
           
                  IS3 =false
              
              break
          }
          case '4':{
          
                IS4 =false
            
              break
          }
          case '5':{
            //   console.log('s',5);
            
                  IS5 =false
              
              break
          }
          case '6':{
            // console.log('s',6);
                
             IS6 =false
            
            break
        }
        case '7':{
          console.log('s',7);
               
              IS7 =false
          
          break
      }
        }

                    },
      
                }
  });
  function getDirection() {
    return window.innerWidth > 767 ? 'horizontal' : 'vertical';
}
