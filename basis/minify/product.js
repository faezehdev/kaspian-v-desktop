header.classList.add("dark");let activeItem=document.querySelector(".activeItem"),nav=document.querySelector(".Nav"),fixNav=document.querySelector(".HoverNav");activeItem.addEventListener("mouseenter",(()=>{fixNav.classList.add("show")})),nav.addEventListener("mouseleave",(()=>{fixNav.classList.remove("show")}));let slides=document.querySelectorAll(".swiper-Container .swiper-slide"),i=0;const swiper=new Swiper(".swiper-Container",{slideToClickedSlide:!0,slidesPerView:"auto",freeMode:{enabled:!0,sticky:!1,momentumBounce:!1},watchOverflow:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,noSwiping:!0,spaceBetween:0,mousewheel:{enabled:!0,sensitivity:4},pagination:{el:".Nav .swiper-pagination",type:"progressbar"},parallax:!0,direction:getDirection(),on:{init(e){const t=document.querySelectorAll(".Pin-Wrapp > .mainSlide.swiper-slide-visible");for(let e=0;e<t.length;e++)t[e].classList.add("inner-visible");let i=e.slides[0].querySelector("div.Wrapp").getAttribute("data-index"),a=document.querySelectorAll(".HoverNav .NItem"),s=document.querySelector(`.HoverNav [data-index='${i}']`);s.getAttribute("data-index");a.forEach((e=>{e.classList.remove("active"),e.classList.remove("DarkActive")})),s.classList.add("active")},setTransition(e){let t=document.querySelector(".roundTxt");const i=document.querySelectorAll(".Pin-Wrapp > .mainSlide.swiper-slide-visible");for(let e=0;e<i.length;e++){i[e].classList.add("inner-visible");let a=.08*swiper.translate;t.style.transform=`translatex(80%) translatey(0%) rotate(${a}deg)`}},slideChange(e){e.slides[swiper.activeIndex].getBoundingClientRect().right;let t=e.slides[swiper.activeIndex].querySelector("div.Wrapp").getAttribute("data-index"),i=document.querySelectorAll(".HoverNav .NItem"),a=document.querySelector(`.HoverNav [data-index='${t}']`);a.getAttribute("data-index");switch(i.forEach((e=>{e.classList.remove("active"),e.classList.remove("DarkActive")})),a.classList.add("active"),e.slides[swiper.activeIndex].classList.add("Is-active"),t){case"0":console.log("s",0),a.classList.add("active"),e.slides[swiper.activeIndex].classList.add("Is-active"),document.querySelector(".Nav .Top .activeItem").classList.remove("DarkActive"),header.classList.add("dark");break;case"1":console.log("s",1),a.classList.add("DarkActive"),e.slides[swiper.activeIndex].classList.add("Is-active"),document.querySelector(".Nav .Top .activeItem").classList.add("DarkActive"),header.classList.remove("dark");break;case"2":console.log("s",2),a.classList.add("active"),e.slides[swiper.activeIndex].classList.add("Is-active"),document.querySelector(".Nav .Top .activeItem").classList.remove("DarkActive"),header.classList.add("dark")}}}});function getDirection(){return window.innerWidth>767?"horizontal":"vertical"}let Lab=document.querySelector(".Nav .Top"),HoverNav=document.querySelector(".HoverNav"),NavItems=document.querySelectorAll(".HoverNav .NItem");NavItems.forEach((e=>{e.addEventListener("click",(e=>{NavItems.forEach((e=>{e.classList.remove("active")})),e.currentTarget.classList.add("active");let t=e.target.getAttribute("data-index"),i=document.querySelector(`[data-index='${t}']`),a=i.getAttribute("data-index");console.log("h",t),console.log("sec",i),swiper.slideTo(a,100)}))}));let SwiperBanner=new Swiper(".swiper-gallery",{slidesPerView:1,spaceBetween:0,effect:"fade",fadeEffect:{crossFade:!0},speed:2e3,pagination:{el:".gallery-Container .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}},navigation:{nextEl:".gallery-Container .swiper-button-next",prevEl:".gallery-Container .swiper-button-prev"}}),SwiperPro=new Swiper(".swiper-product",{direction:"vertical",slidesPerView:1,spaceBetween:0,effect:"slide",speed:200,navigation:{nextEl:".Related-Container .swiper-button-next",prevEl:".Related-Container .swiper-button-prev"}});