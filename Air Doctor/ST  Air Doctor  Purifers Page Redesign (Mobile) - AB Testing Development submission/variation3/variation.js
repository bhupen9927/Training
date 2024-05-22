(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */

    function waitForSlick(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery.fn.slick != undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
    }

    function waitForjQuery(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery != undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
    }

    function addScript() {
      var cssScript = '' +
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css' />";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);

      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
    }

    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
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
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    };

    live('.eg-tabwrapper .eg-tabscontainer .eg-tabs .eg-tab', 'click', function () {
      document.body.classList.remove('eg-preselected')
    });

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
      herosection();
      producttile();
      producttileslider();
      slider();
      expertadvice();
      difference();
      bottomsection();
    }

    function herosection() {
      var herohtml = `<div class="eg-herosection">
    <div class="eg-container_new">
        <div class="eg-herotext">
            <p>The perfect air purifier for every space</p>
        </div>
    </div>
</div>
<div class="eg-tabwrapper">
    <div class="eg-herocontent">
        <div>
            <h1 class="eg-heading">AirDoctor Purifiers</h1>
            <p>Breathe cleaner, fresher air within minutes</p>
            <p>Say goodbye to 99.97% of airborne allergens, viruses and smoke!</p>
        </div>
    </div>
    <div class="eg-tabscontainer">
        <div class="eg-tabs">
            <div class="eg-tab" data-tab-name="All Purifiers"><span>All Purifiers</span></div>
            <div class="eg-tab" data-tab-name="Expert Advice"><span>Expert Advice</span></div>
            <div class="eg-tab" data-tab-name="The AirDoctor Difference"><span>The AirDoctor Difference</span></div>
            <div class="eg-tab" data-tab-name="Reviews"><span>Reviews</span></div>
            <div class="eg-tab" data-tab-name="Compare Models"><span>Compare Models</span></div>
            <div class="eg-tab" data-tab-name="FAQs"><span>FAQs</span></div>
        </div>
    </div>
  </div>`

      if (!document.querySelector('.eg-herosection')) {
        document.body.classList.add('eg-preselected')
        document.querySelector('#main #content .banner-top-blueinfo-sec').insertAdjacentHTML('afterend', herohtml);
      }
    }

    function expertadvice() {
      const expertAdvice =
        `<div class"eg-expert-advice">
            <div class="eg-expert-advice-container">
                <h2 class="eg-expertAdvice-heading">Expert Advice</h2>
                <div class="eg-expert-advice-inner">
                    <div class="eg-expert-left-panel">
                        <img src="https://sitetunershosting.com/clients/air/expert_img2.png">
                        <h3 class="eg-expert-heading"> How to choose an air Filter  for your home</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">Before you start breathing cleaner, friesher air, get all the setails you need to know to choose the perfect air purifier for your home.</p>
                        <a class="eg-expert-button" href="#" >Learn More</a>
                    </div>
                    <div class="eg-expert-right-panel">
                        <img src="https://sitetunershosting.com/clients/air/expert_img2.png">
                        <h3 class="eg-expert-heading">7 health hezards of buying the wrong Air purifier</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">To deal with declining air quality, here are the essential specs to look for in an Air Purifier</p>
                        <a class="eg-expert-button" href="#" >Get the Details Now</a>
                    </div>
                </div>
            </div>
        </div>`

      if (!document.querySelector('.eg-expert-advice')) {
        document.querySelector('#content  > .features-section + .features-section').insertAdjacentHTML('afterend', expertAdvice);
      }
    }

    function difference() {
      const difference =
        `<div class="eg-air-doctor-difference">
        <div class="eg-air-doctor-difference-container">
          <div class="eg-air-doctor-difference-inner">
            <div class="eg-difference-left-panel">
              <h2 class="eg-air-heading">The AirDoctor Difference</h2>
              <p class="eg-air-content">Enjoy peace of mind knowing that the air you breathe is clean <br><br>
              AirDoctor’s cutting-edge UltraHEPA filter captures 99.99% of airborne particles as small as 0.003 microns in size.<br><br>
              That’s 100 times smaller than the HEPA standard.</p>
            </div>
            <div class="eg-difference-right-panel">
              <img class="eg-air-image" src="https://sitetunershosting.com/clients/air/Mask%20group.png">
            </div>
            <div class="eg-shop-purifiers-button">
              <a class="eg-shop-cta" href=# >SHOP PURIFIERS</a>
            </div>
          </div>
          <div class="eg-icons-container">
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/GpJYRBF/wifi.png">
              <p class="eg-air-icon-content">Control your air quality from anywhere</p>
              <p class="eg-air-icon-subcontent">with connected capabilities</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/T2F2v20/airflow.png">
              <p class="eg-air-icon-content">A higher level of air purification.</p>
              <p class="eg-air-icon-subcontent">with UltraHEPA filters</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/xGYLwyn/ozons.png">
              <p class="eg-air-icon-content">Eliminate dangerous ozone, odors and gases</p>
              <p class="eg-air-icon-subcontent">with dual action carbon/gas trap/voc filter</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/4m8ts3n/airpurification.png">
              <p class="eg-air-icon-content">Clean and fresh air 24/7</p>
              <p class="eg-air-icon-subcontent">with auto-mode & AirQuality sensor</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/Rzdxzp4/polutions.png">
              <p class="eg-air-icon-content">Reduce your exposure to pollutants</p>
              <p class="eg-air-icon-subcontent">with a sealed system</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/XCqQ57X/guesswork.png">
              <p class="eg-air-icon-content">Remove the guesswork</p>
              <p class="eg-air-icon-subcontent">with the change filter alert</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/tCvjKgQ/productivity.png">
              <p class="eg-air-icon-content">Enhanced comfort and productivity</p>
              <p class="eg-air-icon-subcontent">with whisper-quiet performance</p>
            </div>
          </div>
        </div>
      </div>`;

      if (!document.querySelector('.eg-air-doctor-difference')) {
        document.querySelector('#content  > div + .features-section').insertAdjacentHTML('afterend', difference);
      }
    }

    function bottomsection() {
      let bottomhtml = `<div class="eg-bottomsection">
    <div class="eg-container_new">
        <h2>Compare Our Purifiers</h2>
        <div class="eg-image">
            <img src="https://sitetunershosting.com/clients/air/compare_purifiers.png">
        </div>
        <div class="eg-para">
            <p>* Harvard University Study cited by CDC recommends at least 4 air changes per hour to effectively remove viruses,
            bacteria, smoke, dust & pollen.** CADR (Clean Air Delivery Rate) is an objective measurement for comparing air filter performance, based on its ability to remove particulate matter. The higher the number, the more
            effective it will be. According to CDC guidance, CADR/cfm should be 2/3 of the total room size.*** Based on 24-hour daily usage.</p>
        </div>
    </div>
  </div>`

      if (!document.querySelector('.eg-bottomsection')) {
        document.querySelector('.product-table').insertAdjacentHTML('afterend', bottomhtml);
      }
    }

    function producttile() {
      let interval = setInterval(() => {
        let air3500 = document.querySelectorAll('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(1) .product_specification_wrapper > h5');
        air3500.forEach(element => {
          element.innerText = 'Up to 1,260 sq. ft. coverage';
        });
        document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(1) .product_specification_wrapper > div:first-of-type').innerText = 'High performance air purification for bedrooms, living rooms and kitchens';
        document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(1) .product_specification_wrapper > div:nth-of-type(2)').innerText = 'High performance air purification for bedrooms, living rooms and kitchens';

        let air2000 = document.querySelectorAll('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(2) .product_specification_wrapper > h5');
        air2000.forEach(element => {
          element.innerText = 'Up to 610 sq. ft. coverage';
        });
        document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(2) .product_specification_wrapper > div:nth-child(3)').innerText = 'Powerful air purification for medium/small rooms, nurseries and home offices';
        document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(2) .product_specification_wrapper > div:nth-child(2)').innerText = 'Powerful air purification for medium/small rooms, nurseries and home offices';

        let air1000 = document.querySelectorAll('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(4) .product_specification_wrapper');
        air1000.forEach(element => {
          element.innerText = 'Mighty air purification for small rooms, nurseries and laundry rooms';
        });

        let producttile1000 = `<h5 class = 'eg-heading1000'>Up to 570 sq. ft. coverage</h5>`
        let air1000heading = document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(4) .product_section-wrapper > div > div:last-child .product_specification_wrapper');
        if (!document.querySelector('.eg-heading1000')) {
          air1000heading.insertAdjacentHTML('beforebegin', producttile1000);
        }

        waitForElement('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(3) #nu-custom-srt-desc135600', function () {
          let producttileheading = `<h5 class = 'eg-heading5500'>Up to 2,086 sq. ft. coverage</h5>`
          if (!document.querySelector('.eg-heading5500')) {
            document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(3) #nu-custom-srt-desc135600').insertAdjacentHTML('beforebegin', producttileheading);
          }
        }, 1000, 15000);
        document.querySelector('.eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(3) .product_specification_wrapper > div:nth-child(2)').innerText = 'Premium air purification for extra large spaces, high ceilings and open concepts';
        document.querySelector('    .eg-mobcss #content>section:first-of-type .section-content > .slick-list > .slick-track > div:nth-child(3) .product_specification_wrapper > div:nth-child(1)').innerText = 'Premium air purification for extra large spaces, high ceilings and open concepts';

        let choosemodel = document.querySelectorAll('#content>section:first-of-type .section-content .iot-radio-pro-box h6');
        choosemodel.forEach(function (e) {
          e.innerText = 'Model  Options:';
        })

        let newbutton = `<a class='eg-seedetails'>See Details</a>`
        let seedetails = document.querySelectorAll('#content>section:first-of-type .section-content .main-price-wrapper');
        if (!document.querySelector('.eg-seedetails')) {
          seedetails.forEach(function (e) {
            e.insertAdjacentHTML('afterend', newbutton);
          })
        }

        let CompareFeatures = "<a class='eg-CompareFeatures'>Compare Purifier Features</a>";
        if (!document.querySelector('.eg-CompareFeatures')) {
          document.querySelector('html body #content>section:first-of-type .section-content').insertAdjacentHTML('afterend', CompareFeatures);
        }

        const pElements = document.querySelectorAll('html body #content > section:first-of-type .section-content .main-price-wrapper p');
        pElements.forEach(pElement => {
          const childNodes = pElement.childNodes;
          for (let i = childNodes.length - 1; i >= 0; i--) {
            const node = childNodes[i];
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
              pElement.removeChild(node);
            }
          }
        });

        const label1 = document.querySelectorAll('.iot-radio-pro-box .iot-var-options1 > div:first-child label');
        label1.forEach((label, index) => {
          label.textContent = 'Classic';
        });

        const label2 = document.querySelectorAll('.iot-radio-pro-box .iot-var-options1 > div:last-child label');
        label2.forEach((label, index) => {
          label.textContent = 'Smart Connected';
        });

      }, 500);
      setTimeout(() => {
        clearInterval(interval);
      }, 2000);
    }

    function scroll() {
      let activeTab = null;
      const scrollToSection = (selector, tab) => {
        document.querySelector('html, body').scrollTo({
          top: document.querySelector(selector).offsetTop,
          behavior: 'smooth'
        });
        if (activeTab) {
          activeTab.classList.remove('active-tab');
        }
        tab.classList.add('active-tab');
        activeTab = tab;
      };

      const tabs = [
        { name: 'All Purifiers', selector: '#content>section:first-of-type' },
        { name: 'Expert Advice', selector: '.eg-expert-advice-container' },
        { name: 'The AirDoctor Difference', selector: '.eg-air-doctor-difference' },
        { name: 'Compare Models', selector: '.eg-bottomsection' },
        { name: 'Reviews', selector: '.eg-air-doctor-difference + section' },
        { name: 'FAQs', selector: '.product-faq' },
      ];

      tabs.forEach(tab => {
        document.querySelector(`.eg-tabs [data-tab-name="${tab.name}"]`).addEventListener('click', (event) => {
          scrollToSection(tab.selector, event.currentTarget);
        });
      });
    }

    function slider() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var d = document.createElement('div');
          d.innerHTML = this.responseText;
          var el = d.querySelector('#content > section:nth-child(15)');
          document.querySelector('.eg-air-doctor-difference').insertAdjacentElement('afterend', el);
        }
      };
      xhttp.open("GET", "https://airdoctorpro.com/", true);
      xhttp.send();

      setTimeout(() => {
        waitForjQuery(function () {
          $ = window.jQuery;
          waitForSlick(function () {
            document.querySelector('.eg-air-doctor-difference + section').setAttribute('data-tab-name', 'Reviews');
            const stars = document.querySelectorAll('.review-star img');
            stars.forEach(function (e) {
              e.src = "https://airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/04/0d94d4b75bf24adf9e1cd8df13f5e3fb_11.png.webp";
            })
            toSlick();
          });
        });
      }, 2000);
    }

    function toSlick() {
      $('.review-scroll-inner').slick({
        arrows: true,
        dots: false,
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
        nextArrow: "<button class=\"slick-next\" aria-label=\"Next\" type=\"button\">Next</button>",
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        prevArrow: "<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\">Previous</button>",
        respondTo: "window",
        rows: 1,
        rtl: false,
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 4,
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
        autoplay: true,
        autoplaySpeed: 1000,
        loop: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              slidesToScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              centerPadding: "10px"
            }
          }
        ]
      });
    }

    function producttileslider() {
      document.querySelector('#content > section:first-of-type .section-content').insertAdjacentElement('afterend', document.querySelector('#content > section:first-of-type .section-content  > script'));
      const elements = document.querySelectorAll('#content > section:first-of-type .section-content > div');
      elements.forEach(element => {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        element.remove();
      });

      waitForjQuery(function () {
        $ = window.jQuery;
        waitForSlick(function () {
          Slick();
        });
      });
    }

    function Slick() {
      $('#content>section:first-of-type .section-content').slick({
        arrows: true,
        dots: false,
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
        nextArrow: "<button class=\"slick-next\" aria-label=\"Next\" type=\"button\">Next</button>",
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        prevArrow: "<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\">Previous</button>",
        respondTo: "window",
        rows: 1,
        rtl: false,
        slidesPerRow: 1,
        slidesToScroll: 5,
        slidesToShow: 5,
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
        slidesSpacing: 20,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              slidesToScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: "10px"
            }
          }
        ]
      });
    }

    if (window.innerWidth < 767) {
      document.body.classList.add('eg-mobcss');
      waitForElement('#main #content .banner-top-blueinfo-sec', init, 50, 15000);
      waitForElement('.eg-tabs [data-tab-name="All Purifiers"]', scroll, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


