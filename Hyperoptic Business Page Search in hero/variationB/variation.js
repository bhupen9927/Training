(function () {
  try {
    // Main variables
    var debug = 0;
    var variation_name = "";

    // Define waitForElement function
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }


    //wait for swiper 
    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof Swiper != "undefined") {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
    }


    /* Variation Init */
    function init() {
      document.querySelector('.hero-block-desktop table td > div:last-child').insertAdjacentElement('afterend', document.querySelector('.show-desktop .elastic-search.compact'));

      document.querySelector('.hero-block-mobile table td > div:last-child').insertAdjacentElement('afterend', document.querySelector('.show-mobile .elastic-search.compact.white'));
      

    }



    /* Initialise variation */
    waitForElement(".hero-block-desktop table td > div:last-child, .hero-block-mobile table td > div:last-child", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();