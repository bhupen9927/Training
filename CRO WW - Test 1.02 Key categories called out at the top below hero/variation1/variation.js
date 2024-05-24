(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */

    function addScript() {
      var cssScript = '' +
        '<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>' +
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);

      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
    }

    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof Swiper != "undefined") {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

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

   var newSection =
      `<div class="eg-image-container eg-swiper-container swiper-container">
        <div class="eg-image-wrapper swiper-wrapper">
          <div class="eg-image-tile eg-image-one swiper-slide">
            <h2 class="eg-title"> Dinner Sets</h2>
            <a class="eg-cta" href="https://www.wedgwood.com.au/tableware/dinner-sets/">Shop Dinner Sets</a>
          </div>
          <div class="eg-image-tile eg-image-two swiper-slide">
            <h2 class="eg-title"> Teaware</h2>
            <a class="eg-cta" href="https://www.wedgwood.com.au/teaware-tea/">Shop Teaware</a>
          </div>
          <div class="eg-image-tile eg-image-three swiper-slide">
            <h2 class="eg-title"> Gifting</h2>
            <a class="eg-cta" href="https://www.wedgwood.com.au/GIFTING/">Shop Gifting</a>
          </div>
          <div class="eg-image-tile eg-image-four swiper-slide">
            <h2 class="eg-title"> Promotions</h2>
            <a class="eg-cta" href="https://www.wedgwood.com.au/promotion/">Shop Promotions</a>
          </div>
        </div>
        <div class="swiper-pagination eg-pagination"></div>
      </div>`;

    /* Variation Init */
    function init() {
     var hero = document.querySelector('.welcome-cell >div:first-child');
      if (hero && !document.querySelector('.eg-image-container')) {
        hero.insertAdjacentHTML('afterend', newSection);
      }
      if (window.screen.width < 767) {
        waitForSwiper(function () {
          var swiper = new Swiper(".eg-image-container", {
            direction: 'horizontal',
            spaceBetween: 14,
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            loop: true,
            keyboard: true,
            allowSlidePrev: true,
            allowSlideNext: true,
            centeredSlides: false,
            centeredSlidesBounds: false,
            pagination: {
              el: '.eg-pagination',
              clickable: true,
            },
            mousewheel: {
              forceToAxis: true,
            },
            navigation: {
              nextEl: '.eg-next',
              prevEl: '.eg-prev',
            }
          });
        });
      }
      else {
        var swiperContainer = document.querySelector('.eg-image-container');
        if (swiperContainer) {
          swiperContainer.classList.remove('swiper-container', 'eg-swiper-container');
          var swiperWrapper = swiperContainer.querySelector('.eg-image-wrapper');
          swiperWrapper.classList.remove('swiper-wrapper');
          var swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
          swiperSlides.forEach(function(slide) {
            slide.classList.remove('swiper-slide');
          });
        }
      }
      
    }

    addScript();

    /* Initialize variation */
    waitForElement('.welcome-cell >div:first-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
