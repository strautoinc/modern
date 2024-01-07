document.addEventListener("DOMContentLoaded", function () {
  var scrollUpBtn = document.getElementById("scrollUpBtn");

  window.onscroll = function () {
      // Show or hide the button based on scroll position
      if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
          scrollUpBtn.classList.add("visible");
      } else {
          scrollUpBtn.classList.remove("visible");
      }
  };

  // Scroll to the top function
  function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Attach the scrollToTop function to the button click event
  scrollUpBtn.addEventListener("click", scrollToTop);
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644}, /* Set the initial map center */
      zoom: 8, /* Set the initial zoom level */
      styles: [
        /* Add your custom map styling here */
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        // ... additional styling rules
      ]
    });
  }