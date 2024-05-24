(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var testData = {
      egswiper: '',
      helperFuncs: {
        addScript: function () {
          var cssScript = '' +
            '<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>' +
            "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'/>";
          document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);

          var swiperScript = document.createElement('script');
          swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
          document.getElementsByTagName('head')[0].appendChild(swiperScript);
        },
        waitForSwiper: function (trigger) {
          var interval = setInterval(function () {
            if (typeof Swiper != "undefined") {
              clearInterval(interval);
              trigger();
            }
          }, 50);
          setTimeout(function () {
            clearInterval(interval);
          }, 15000)
        },
        live: function (selector, event, callback, context) {
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (node.parentNode || node.document).querySelectorAll(selector),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (el && found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        }
      },
      slidesData: [
        {
          "name": "Season 1",
          "path": "S1"
        },
        {
          "name": "Season 2",
          "path": "S2"
        },
        {
          "name": "Season 3",
          "path": "S3"
        },
        {
          "name": "Season 4",
          "path": "S4"
        },
        {
          "name": "Season 5",
          "path": "S5"
        },
        {
          "name": "Season 6",
          "path": "S6"
        },
        {
          "name": "Season 7",
          "path": "S7"
        },
        {
          "name": "Season 8",
          "path": "S8"
        },
        {
          "name": "Season 9",
          "path": "S9"
        },
        {
          "name": "Season 10",
          "path": "S10"
        },
        {
          "name": "Christmas Special 2021",
          "path": "Christmas_Special_2021"
        },
        {
          "name": "Season 11",
          "path": "S11"
        },
        {
          "name": "Christmas Special 2022",
          "path": "Christmas_Special_2022"
        }
      ]
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

    function init() {
      // adding custom slider mob
      if (window.innerWidth < 641) {
        testData.helperFuncs.addScript();
        var carouselPutTarget = 'html body .tabs-wrapper .seasons >.custom-select';
        var carouselPutPos = 'afterend';
        var carouselData = {
          carouselId: 'seasonCarousel',
          carouselSlides: testData.slidesData
        }
        addCarousel(carouselData, carouselPutTarget, carouselPutPos);
      }
      // add new section
      addNewSection();
      // test events
      testEvents();
    }

    function addNewSection() {
      waitForElement('html body .top-banner', function () {
        if (!document.querySelector(".eg-new-section")) {
          const egNewSectionHTML = `
          <section class="eg-new-section">
            <div class="eg-new-section-container row">
              <!-- video -->
              <div class="eg-new-section_video">
                  <!-- left -->
                  <div class="eg-left">
                    <span class="eg-title">Now Streaming: Season Twelve</span>
                    <p class="eg-para">Death in Paradise is back for another season! Return to the beautiful Caribbean island of Saint Marie with fish-out-of-water British detective Neville Parker, who solves murder mysteries alongside the brillant, ambitious sergeant Naomi Thomas in this fan-favorite whodunnit with a light touch and a warm heart.</p>
                  </div>
                  <!-- video -->
                  <div class="eg-video-container"><iframe src="https://player.vimeo.com/video/832629177?h=8bddc8a92b?title=0&autoplay=0&muted=0&controls=1&sidedock=0&loop=0"></iframe></div>
              </div>
              
              <!-- bnr bellow video-->
              <div class="eg-new-section_video-bnr">
                <!-- left img -->
                <div class="eg-left-img-div">
                  <img src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=100&Width=405&Height=227&ImageUrl=383689.jpg&imageType=tile"/>
                </div>
                <!-- text box -->
                <div class="eg-right-text-div">
                  <p class="eg-text">"It's like Midsomer Murders<br>meets Agatha Christie with<br>added sunshine and reggae."</p>
                  <span class="eg-logo">RadioTimes.com</span>
                </div>
              </div>
            </div>
          </section>
          `;
          document.querySelector('html body .top-banner').insertAdjacentHTML('afterend', egNewSectionHTML);
        }
      }, 50, 15000);
    }

    function testEvents() {
      if (!document.querySelector('.eg-test-events-added')) {
        document.body.classList.add('eg-test-events-added');
        testData.helperFuncs.live('html body #eg-carousel-seasonCarousel .eg-carousel .eg-carousel-slide', 'click', function () {
          const seasonPath = this.getAttribute('data-slide-path');
          const seasonSel = `html body .seasons >.swiper-container [data-path*="_${seasonPath}_"]`;
          const prevAct = document.querySelector('html body #eg-carousel-seasonCarousel .eg-carousel .eg-carousel-slide.eg-active');
          if (prevAct && prevAct !== this) {
            prevAct.classList.remove('eg-active');
          }
          this.classList.add('eg-active');
          // console.log(seasonSel);
          if (document.querySelector(seasonSel)) {
            document.querySelector(seasonSel).click();
          }
        });
      }
    }

    // Adding carousels
    var addCarousel = function (data, target, position) {
      var carouselId = data.carouselId;
      var carouselSlides = data.carouselSlides;
      var carouselHTML = '' +
        '  <div class="eg-slider-wrapper" id="eg-carousel-' + carouselId + '">' +
        '      <div class="eg-slider-container">' +
        '          <div class="eg-carousel swiper">' +
        '              <div class="eg-carousel_item-container my-slider swiper-container swiper-container-' + carouselId + '">' +
        '                  <div class="swiper-wrapper"></div>' +
        '              </div>' +
        '          </div>' +
        '              <button type="button" class="swiper-button-prev swiper-button-prev-' + carouselId + '"></button>' +
        '              <button type="button" class="swiper-button-next swiper-button-next-' + carouselId + '"></button>' +
        '      </div>' +
        '  </div>';
      var crgelSel = '#eg-carousel-' + carouselId;
      if (!document.querySelector(crgelSel)) {
        var targetEl = document.querySelector(target);
        targetEl.insertAdjacentHTML(position, carouselHTML);
        testData.helperFuncs.waitForSwiper(function () {
          updateCarousel(carouselSlides, carouselId);
        });
      }
    }

    var updateCarousel = function (SlideData, carouselId) {
      console.log("Updating : ", SlideData);
      const carouselSlidesHTML = genSlides(SlideData);
      var swiperSettings = getSliderSettings(carouselId);
      var swiperSel = '.swiper-container-' + carouselId;
      var swiperSlideContainerSel = swiperSel + " " + '.swiper-wrapper';
      document.querySelector(swiperSlideContainerSel).innerHTML = carouselSlidesHTML;
      testData.egswiper = new Swiper(swiperSel, swiperSettings);
      window.dispatchEvent(new Event('resize'));
    }

    const getSliderSettings = function (carouselId) {
      var nextElSel = '.swiper-button-next-' + carouselId,
        prevElSel = '.swiper-button-prev-' + carouselId;
      return {
        direction: 'horizontal',
        spaceBetween: 12,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        slideToClickedSlide: true,
        navigation: {
          nextEl: nextElSel,
          prevEl: prevElSel,
        },
        allowSlidePrev: true,
        allowSlideNext: true,
        initialSlide: 0,
      }
    }


    const genSlides = function (carouselSlides) {
      var carouselSlidesHTML = carouselSlides.reduce(function (tSlides, crrSlide, idx) {
        var isAct = idx === 0 ? "eg-active" : '';
        var slideHTML = '' +
          '  <div class="eg-carousel-slide swiper-slide ' + isAct + '" data-slide-path="' + crrSlide.path + '">' +
          '      <a class="eg-carousel-slide_wrapper">' + crrSlide.name + '</a>' +
          '  </div>';
        return tSlides += slideHTML;
      }, '');
      return carouselSlidesHTML;
    }

    waitForElement('html body .tabs-wrapper .seasons >.custom-select', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


