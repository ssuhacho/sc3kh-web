$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if(this.scrollY > 500){
        $(".scroll-up-btn").addClass("show");
    }
    else{
        $(".scroll-up-btn").removeClass("show");
    }
  }); 

  //slide-up script
  $(".scroll-up-btn").click(function(){
    $("html").animate({scrollTop: 0});
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing animation section
  var typed = new Typed(".typing",{
      strings: ["Developer", "Student", "Designer", "Dog Lover"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-2",{
    strings: ["Developer.", "Student.", "Designer.", "Dog Lover."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


  //owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});



/*gallery*/

const gallerySection = document.getElementById("gallery-section");
const galleryMenu = document.getElementById("gallery-menu");
const gallerySelector = gallerySection.querySelector(".selector");
//Individual Gallery Menu items
const galleryMenuItems = galleryMenu.querySelectorAll(".menu-item");
//Gallery will be set to 'all' on document load
let currentGalleryMenuSelection = "all";

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelector(".image");



//when a gallery option is chosen, add the necessary transitions
//and then move the gallery to the new location
galleryMenuItems.forEach(galleryMenuItems => {
  galleryMenuItems.onclick = () => {
    gallerySelector.style.transition = "left 0.5s, width 0.5s";
    galleryMenuChange(galleryMenuItems.id);
    currentGalleryMenuSelection = galleryMenuItems.id;
  }
});

//set gallery selector position on initial document load
galleryMenuChange(currentGalleryMenuSelection);

//set position for gallery selector
function galleryMenuChange(id){
  if (window.matchMedia('(min-width: 956px)').matches){
      switch(id){
        case 'all':
          changeGallerySelector("0px","95px","all");
          break;
        case 'typography':
          changeGallerySelector("220px","212px","typography");
          break;
        case 'drawing':
          changeGallerySelector("545px","190px","drawing");
          break;
        case 'younik':
          changeGallerySelector("846px","160px","younik");
      }
  }
  else if(window.matchMedia('(max-width: 947px) and (min-width: 691px)').matches){
    switch(id){
      case 'all':
        changeGallerySelector("0px","95px","all");
        break;
      case 'typography':
        changeGallerySelector("115px","167px","typography");
        break;
      case 'drawing':
        changeGallerySelector("315px","127px","drawing");
        break;
      case 'younik':
        changeGallerySelector("480px","106px","younik");
    }
  }
  else if (window.matchMedia('(max-width: 690px)').matches){
    switch(id){
      case 'all':
        changeGallerySelector("0px","76px","all");
        break;
      case 'typography':
        changeGallerySelector("100px","86px","typography");
        break;
      case 'drawing':
        changeGallerySelector("230px","71px","drawing");
        break;
      case 'younik':
        changeGallerySelector("342px","59px","younik");
    }
  }
}

//change position for gallery selector
function changeGallerySelector(left, width, id){
  gallerySelector.style.left = left;
  gallerySelector.style.width = width;
  for (let i = 0; i < galleryMenuItems.length; i++){
    const galleryMenuItem = galleryMenuItems[i];
    if(galleryMenuItem.id === id){
      galleryMenuItem.style.color = "white";
      continue;
    }
    galleryMenuItem.style.color = "black";
  }
}




//change position on window resize
window.addEventListener("resize", e => {
  gallerySelector.style.transition = "none";
  galleryMenuChange(currentGalleryMenuSelection);
});

$(".gallery").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
})