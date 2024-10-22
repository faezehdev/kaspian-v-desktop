$('.scroll-down').click(function() {
    $('html, body').animate({
      scrollTop: document.querySelector(".section2").offsetTop
    }, 1000);
  });


  const aboutGallery = new Swiper('.aboutGallery', {
    // Optional parameters
    speed:1000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.gallery-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextGallery',
      prevEl: '.prevGallery',
    },
  
  
  });