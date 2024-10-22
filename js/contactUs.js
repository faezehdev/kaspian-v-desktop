const mainSlider = new Swiper('.mainSlider', {
    // Optional parameters
    loop: false,
    speed:1000,
    allowTouchMove:false,
    mousewheel: {
        invert: false,
      },
  });


  $('.inner1').imagesLoaded( function() {
    // images have loaded
    setTimeout(() => {
        
        mainSlider.slideTo(1,1000)
    }, 500);

  });
  
  let mapDiv = document.querySelector(".mapIn");
  let xLatcontact = mapDiv.getAttribute("data-x");
 let  yLatContact = mapDiv.getAttribute("data-y");
 
 var map = L.map("map", {
  center: [yLatContact, xLatcontact], zoom: 15 
  }
 ),
  Contact = new L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
  // attribution:
  // '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: "10",
  }
  ).addTo(map);
 
 
 
  greenIconContact = L.icon({ iconUrl: "images/location.png", iconSize: [24,34] });
  markerContact = L.marker([yLatContact, xLatcontact], { icon: greenIconContact });
 markerContact.addTo(map);
 
 
 