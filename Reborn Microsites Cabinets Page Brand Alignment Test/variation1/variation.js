(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */

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
        }
      },
      slidesData: [
        {
          "tag": "LOREM IPSUM",
          "title": "Lorem ipsum dolor sit amet. ",
          "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/one.jpg",
          "cta": {
            "text": "VIEW PROJECT",
            "link": ""
          }
        },
        {
          "tag": "LOREM IPSUM",
          "title": "Lorem ipsum dolor sit amet. ",
          "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/three.jpg",
          "cta": {
            "text": "VIEW PROJECT",
            "link": ""
          }
        },
        {
          "tag": "LOREM IPSUM",
          "title": "Lorem ipsum dolor sit amet. ",
          "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/four.jpg",
          "cta": {
            "text": "VIEW PROJECT",
            "link": ""
          }
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


    /* Variation Init */
    function init() {
      if (!document.querySelector('.eg-test-activated')) {
        testData.helperFuncs.addScript();
        document.body.classList.add('.eg-test-activated');
        changetext();
        exceedexpectations();
        currrentoffersection();
        remodelingsection();
        testimonialsection();
        gallerySlider();
      }
    }

    function changetext() {
      heroformtitle = document.querySelector('html body #hero #hero_content #hero_form .form_title');
      if (heroformtitle) {
        heroformtitle.innerText = 'Get a FREE Estimate'
      }

      heroformsubheading = document.querySelector('html body #hero #hero_content #hero_form .form_subtitle');
      if (heroformsubheading) {
        heroformsubheading.innerText = 'Fill out the form below to start exploring your options.'
      }

      heroheading = document.querySelector('#hero_content .hero_text > span');
      if (heroheading) {
        heroheading.innerText = 'Transform your kitchen with Cabinet refacing'
      }

      herosubheading = document.querySelector('#hero_content .hero_text > small');
      if (herosubheading) {
        herosubheading.innerText = 'Changing up your cabinets and countertops delivers the look of a brand-new kitchen at a fraction of the cost'
      }

      heroformbtn = document.querySelector('html body #hero #hero_content #hero_form [type="submit"]');
      if (heroformbtn) {
        heroformbtn.innerText = 'GET A FREE QUOTE NOW'
      }

      foldtwocta = document.querySelector('html body #content.container-fluid .entry_content>div:last-child .btn');
      if (foldtwocta) {
        foldtwocta.innerText = 'GET A FREE QUOTE NOW'
      }

      footerformcta = document.querySelector('html body #sub_footer #subfooter_form [type="submit"]');
      if (footerformcta) {
        footerformcta.innerText = 'GET A FREE QUOTE NOW'
      }

      mobherocta = document.querySelector('html body #hero #hero_content #hero_left .btn');
      if (mobherocta) {
        mobherocta.innerText = 'GET A FREE QUOTE NOW'
      }

      let egstring = `<div class="eg-herobulletpoints">
    <ul class="eg-list">
        <li>For people who are happy with the existing layout, but want a new look and colour</li>
        <li>Done is as little as three days</li>
        <li>Installed by trained technicians</li>
    </ul>
    </div>`

      if (window.innerWidth > 1024) {
        document.querySelector('#hero_left .hero_text').insertAdjacentHTML('afterend', egstring);
      }

      document.querySelector('#hero_form > div:nth-child(3) > div > div:first-child input').setAttribute('placeholder', 'First Name');
      document.querySelector('#hero_form > div:nth-child(3) > div > div:last-child input').setAttribute('placeholder', 'Last Name');
      document.querySelector('#hero_form > div:nth-child(4) > div > div:first-child input').setAttribute('placeholder', 'Email');
      document.querySelector('#hero_form > div:nth-child(5) > div > div:first-child input').setAttribute('placeholder', 'Phone');
      document.querySelector('#hero_form > div:nth-child(5) > div > div:last-child input').setAttribute('placeholder', 'ZIP');

    }

    function exceedexpectations() {
      let newtitlehtml = `
      <div class="eg-herobelowsection_title">
    <h1>Cabinet Refacing Services for Your Area Homeowners That Turn Possibilities Into Dream Realities.</h1>
    <div class="eg-para">
    <p>Believe it or not, your cabinets are a blank canvas, no matter how old or outdated they may be. Whether you’re looking to completely replace them or just give them a much needed facelift, you can turn to Reborn Cabinets to provide the transformation you’re looking for. We’ve been transforming battered your area cabinets into modern masterpieces for more than three decades. Let us help you create the perfect cabinets for your home. Our cabinet remodeling services include:</p>
    <ul>
        <li><span>Cabinet Refacing</span>— No matter how your kitchen is currently configured, we can incorporate numerous features into it that will maximize its versititily and functionality.</li>
        <li><span>Countertops</span>— Endless possibilities with countertops and backsplashes in the most popular material options available today, this combined with cabinet refacing will give you the look and feel of a brand new kitchen.</li>
        <li><span>Professional Installation</span>— No matter how large or small your cabinet project may be, you can count on the trained technicians at Reborn Cabinets to install your cabinets with precision for lasting beaty and functionality.</li>
    </ul>
</div>
</div>`
      document.querySelector('html body #content.container-fluid .entry_content > div:last-child h1').insertAdjacentHTML('afterend', newtitlehtml);
    }

    function currrentoffersection() {
      let offerhtml = `
      <div class="eg-currentoffer_section">
    <div class="eg-container_new">
        <h2>Current Offers</h2>
        <div class="eg-wrapper_container">
            <div class="offer_section">
                <div class='eg-image'> 
                  <img src="https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/home/cta-left.jpg">
                </div>
                <div>
                  <a href="" class="eg-offer">OFFER</a>
                <div class="eg-title">50% OFF <br> Installation*</div>
                <a href="specials" class="eg-learn_more">LEARN MORE</a>
                </div>
            </div>
            <div class="offer_section">
              <div class='eg-image'> 
                  <img src="https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/home/cta-right.jpg">
                </div>
                <div>
                  <a href="" class="eg-offer">OFFER</a>
                <div class="eg-title">12 Month No Interest and No Payment Financing**</div>
                <a href="financing" class="eg-learn_more">LEARN MORE</a>
              </div>
            </div>
        </div>
    </div>
</div>`

      document.querySelector('html body #main_ctas > div:last-child').innerHTML = offerhtml;
    }

    function remodelingsection() {
      let newtitlehtmls = `
      <div class="eg-bathroomremodeling_title">
    <h1>Cabinetry Refacing Delivers the Look of a Brand-New Kitchen at a Fraction of the Cost</h1>
    <div class="eg-para">
      <p>If you are happy with your existing layout, but simply tired of the old look and color of your cabinets, then Signature Refacing is for you! Choose from hundreds of available door styles, wood species and finish colors and get the dream kitchen you want at a fraction of the cost of a completely new kitchen. Though our name is Reborn Cabinets, our Signature Refacing services far exceed just cabinets. Our Signature Refacing process will transform your existing cabinetry to look like just-installed, brand new cabinets, usually in just a few days! Avoid the mess and inconvenience of being without a kitchen during a complete remodel and save with Signature Refacing from Reborn Cabinets. We will help you achieve your desired design, transform your kitchen into the kitchen of your dreams, and provide you with The Ultimate Remodeling Experience®.</p>
      <p>Whether it's a completely new cabinet system or refaced cabinet panels, all of the products Reborn Cabinets installs are custom-made to ensure a perfect fit and finish. Fabricated from solid wood in our manufacturing facility, your new cabinets will be backed by an industry-leading 25-year labor warranty and come with numerous customization options for:</p>
    <ul>
        <li>Door and drawer styles that range from traditional to modern</li>
        <li>Decorative molding and trim work</li>
        <li>Many different wood species, stains, glazes, and finish colors</li>
        <li>A range of hardware styles for your drawer pulls, cabinet handles, and hinges</li>
    </ul>
</div>
</div>`
      document.querySelector('html body #secondary_content_area #secondary_content_right .secondary_content_top_text').insertAdjacentHTML('afterend', newtitlehtmls);
    }

    function testimonialsection() {
      let testimonialhtml = `
      <div class="eg-testimonial_section">
    <div class="eg-container_new">
        <h1 class="eg-title">Check Out our testimonials</h1>
        <p>See what our clients have to say about working with us!</p>
        <a href="" class="eg-readmore_reviews">READ MORE REVIEWS</a>
        <div class="eg-bottom_section">
            <div class="eg-image eg-desktop_image">
                <img src="https://www.reborncabinets.com/wp-content/uploads/2024/04/testimonialsDesk.png">
            </div>
            <div class="eg-image eg-Mob_image">
                <img src="https://www.reborncabinets.com/wp-content/uploads/2024/04/testimonialsMob.png">
            </div>
            <div class="eg-image eg-Mob_image">
                <img src="https://www.reborncabinets.com/wp-content/uploads/2024/04/testimonialsName.png">
            </div>
        </div>
    </div>
</div>`

      document.querySelector('html body #testimonials').insertAdjacentHTML('beforeend', testimonialhtml);
    }

    function gallerySlider() {
      const egNewSection = `
      <div class="egNwSctn">
        <div class="egNwSctn-container">
            <!-- Title -->
            <h1 class="egNwSctn_title">
                Inspirational Gallery
            </h1>
            <!-- Subtitle -->
            <p class="egNwSctn_subtitle">
                See how beautiful your bathroom can be.
            </p>
            <!-- main cta -->
            <a class="egNwSctn_mainCta eg-cta-red" href="https://www.reborncabinets.com/case-studies/">VIEW ALL</a>
            <!-- slider -->
        </div>
      </div>
    `;
      if (!document.querySelector('.egNwSctn')) {
        document.querySelector('html body #gallery').insertAdjacentHTML('beforeend', egNewSection);
        var carouselPutTarget = 'html body .egNwSctn-container';
        var carouselPutPos = 'beforeend';
        var carouselData = {
          carouselId: 'customerCarousel',
          carouselSlides: testData.slidesData
        }
        addCarousel(carouselData, carouselPutTarget, carouselPutPos);
      }
    }

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
        '      </div>' +
        '  </div>';
      var crgelSel = '#eg-carousel-' + carouselId;
      if (!document.querySelector(crgelSel)) {
        var targetEl = document.querySelector(target);
        targetEl.insertAdjacentHTML(position, carouselHTML);
        testData.helperFuncs.waitForSwiper(function () {
          if (window.innerWidth < 767) {
            testData.slidesData.push(
              {
                "tag": "LOREM IPSUM",
                "title": "Lorem ipsum dolor sit amet. ",
                "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/one.jpg",
                "cta": {
                  "text": "VIEW PROJECT",
                  "link": "https://www.reborncabinets.com/case-study/29609/"
                }
              },
              {
                "tag": "LOREM IPSUM",
                "title": "Lorem ipsum dolor sit amet. ",
                "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/three.jpg",
                "cta": {
                  "text": "VIEW PROJECT",
                  "link": "https://www.reborncabinets.com/case-study/a-bath-solutions-project-charlie-parkers-story/"
                }
              },
              {
                "tag": "LOREM IPSUM",
                "title": "Lorem ipsum dolor sit amet. ",
                "bgImg": "https://www.reborncabinets.com/micro/cabinets/cabinet-refacing/img/gallery/four.jpg",
                "cta": {
                  "text": "VIEW PROJECT",
                  "link": "https://www.reborncabinets.com/case-study/a-refacing-project-kenny-and-kerri-peloquin/"
                }
              }
            );
            console.log(testData.slidesData)
          }
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
      console.log(testData.egswiper);
      window.dispatchEvent(new Event('resize'));
    }

    const getSliderSettings = function (carouselId) {
      return {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        loopedSlides: 6,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        initialSlide: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        breakpoints: {
          960: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
            centeredSlidesBounds: false,
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
            centeredSlidesBounds: false
          },
          490: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            loopedSlides: 2
          },
        }
      }
    }


    const genSlides = function (carouselSlides) {
      var carouselSlidesHTML = carouselSlides.reduce(function (tSlides, crrSlide) {
        var bgStyle = `style="background-image:linear-gradient(to bottom, #0e3042 3%, transparent 40%), url('${crrSlide.bgImg}');background-size:cover;background-repeat:no-repeat;background-position: center;"`;
        var cardTagHTML = `<span class="eg-card-tag">${crrSlide.tag}</span>`;
        var slideHTML = '' +
          '  <div class="eg-carousel-slide swiper-slide">' +
          '      <a class="eg-carousel-slide_wrapper " href="' + crrSlide.cta.link + '"' + ' ' + bgStyle + '>' +
          '          <div class="eg-carousel-slide_content-wrapper">' + cardTagHTML +
          '              <span class="eg-carousel-slide_title">' + crrSlide.title + '</span>' +
          '          </div>' +
          '<span class="eg-lnk-cta eg-cta-red">' + crrSlide.cta.text + '</span>' +
          '      </a>' +
          '  </div>';
        return tSlides += slideHTML;
      }, '');
      return carouselSlidesHTML;
    }

    /* Initialize variation */
    waitForElement('html body #secondary_content_area', init, 1000, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


