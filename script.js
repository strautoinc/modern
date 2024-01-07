document.addEventListener("DOMContentLoaded", function () {
  var scrollUpBtn = document.getElementById("scrollUpBtn");

  window.onscroll = function () {
      if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
          scrollUpBtn.classList.add("visible");
      } else {
          scrollUpBtn.classList.remove("visible");
      }
  };

  function scrollToTop() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }

  scrollUpBtn.addEventListener("click", scrollToTop);
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644}, 
      zoom: 8, 
      styles: [
      
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
      ]
    });
  }
