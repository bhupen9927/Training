(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;

    /* all Pure helper functions */

    function waitForSlick(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery && window.jQuery.fn.slick !== undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function waitForjQuery(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery !== undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function addScript() {
      var cssScript = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />';
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);

      var slickScript = document.createElement('script');
      slickScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(slickScript);
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

    var heroSectionSlide1 = `
    <div class="eg-hero-section">
    <div class="eg-hero-container">
      <img src="https://assets-manager.abtasty.com/a61571af9fa8da96a89e3a6892373b7d/hero_image.png"></img>
      <div class="eg-right-content">
        <h2>Save Big on Favorite Car Seats!</h2>
        <p>Get <b>20% Off 4Ever® DLX 4-in-1 and 4Ever® DLX Grad 5-in-1 Slim or 25% Off Turn2Me™ 3-in-1 Rotating Car Seats</b> to help your little one ride in safe comfort for years to come.</p>
        <div class="eg-ctas">
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/4ever-dlx-4-in-1-car-seat/SAP_2074900.html">Shop 4Ever DLX</a>
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/4ever-dlx-grad-5-in-1-slim-car-seat/SAP_2191333.html">Shop 4Ever DLX Grad</a>       
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/turn2me-3-in-1-rotating-car-seat/SAP_2204044.html">Shop Turn2Me</a>
        </div>
      </div>
      </div>
    </div>`;

    /* Variation Init */
    function init() {
      addScript();
      waitForjQuery(function () {
        $ = window.jQuery;
        waitForSlick(function () {
          $('.storepage > div > .container-fluid > div > .experience-component:first-child .carousel-inner').slick('unslick');
          slick();
        });
      });
      setTimeout(function () {
        if (document.querySelector('.slick-dots') && document.querySelector('.slick-dots-wrap')) {
          document.querySelector('.slick-dots-wrap').insertAdjacentElement("afterbegin", document.querySelector('.slick-dots'));
        }
      }, 2000);
      var newPrevButton = document.querySelector('.storepage > div > .container-fluid > div > .experience-component:first-child .carousel-inner .slick-prev');
      var newNextButton = document.querySelector('.storepage > div > .container-fluid > div > .experience-component:first-child .carousel-inner .slick-next');
      var prevBtn = document.querySelector('.storepage > div > .container-fluid > div > .experience-component:first-child .slick-carousel > .custom-prev');
      var nextBtn = document.querySelector('.storepage > div > .container-fluid > div > .experience-component:first-child .slick-carousel > .custom-next');
      if (newPrevButton && prevBtn) {
        newPrevButton.innerHTML = prevBtn.innerHTML;
      }
      var bannerContainer = document.querySelector('.storepage > div .experience-component:nth-child(1) .slick-slide:nth-child(1) .carousel-item');
      if (bannerContainer && !document.querySelector('.eg-hero-section')) {
        bannerContainer.insertAdjacentHTML("afterbegin", heroSectionSlide1)
      }
      var secondHeading = document.querySelector('.storepage > div .experience-component:nth-child(1) .slick-slide:nth-child(2) .text-container .heading');
      var secondDes = document.querySelector('.storepage > div .experience-component:nth-child(1) .slick-slide:nth-child(2) .text-container .banner-description');
      if (secondHeading) {
        secondHeading.innerText = 'Out & About: Modes™ Adventure Stroller Wagon';
      }
      if (secondDes) {
        secondDes.innerText = 'This wagon does it all. The best for outings, such as the zoo, parks, lake/ beach, etc, and plenty of space for toys and parents\' gear" - knwmurphy';
      }
      var carouselContainer = document.querySelector('.storepage > div .experience-component:nth-child(1) [aria-label="Carousel"]');
      if(window.innerWidth < 991 && document.querySelector('.eg-right-content') && carouselContainer) {
        carouselContainer.insertAdjacentElement('beforeend', document.querySelector('.eg-right-content'))
      }
    }

    function slick() {
      $('.storepage > div > .container-fluid > div > .experience-component:first-child .carousel-inner').slick({
        arrows: true,
        dots: true,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnChange: false,
        focusOnSelect: false,
        infinite: false,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        nextArrow: '<button class="custom-next custom-arrow slick-arrow" aria-label="Next" type="button" data-direction="right" style="" aria-disabled="false" tabindex="0"><svg role="img" class="icon svg-icon svg-arrow-right" width="24" height="24" aria-hidden="false" tabindex="-1"><title>Next</title><desc>Next</desc><use role="img" xlink:href="#arrow-right" alt="Next"></use></svg></button>',
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        prevArrow: '<button class="custom-prev custom-arrow" aria-label="Previous" type="button" data-direction="left" style="display: inline-block;" aria-disabled="false" tabindex="0"><svg role="img" class="icon svg-icon svg-arrow-left" width="24" height="24" aria-hidden="false" tabindex="-1"><title>Previous</title><desc>Previous</desc><use role="img" xlink:href="#arrow-left" alt="Previous"></use></svg></button>',
        respondTo: "window",
        rows: 1,
        rtl: false,
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000,
      });
    }

    /* Initialize variation */
    waitForElement('.storepage > div > .container-fluid > div > .experience-component:first-child .carousel-inner', init, 1000, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
