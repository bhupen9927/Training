(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    const sharedContent = [
      {
        image: "https://sitetunershosting.com/clients/Fortinet/wan-01-toolkit.jpg",
        headline: "Secure LAN Edge Toolkit",
        ctaText: "Download now",
        ctaLink: "https://global.fortinet.com/lp-en-ap-securelaneb?utm_content=ab-test-experience-carousel",
        eventID: "event1"
      },
      {
        image: "https://sitetunershosting.com/clients/Fortinet/wan-02-checklist.jpg",
        headline: "Evaluating SD-Branch Solutions",
        ctaText: "Get the Checklist",
        ctaLink: "https://global.fortinet.com/lp-en-ap-sixquestions?utm_content=ab-test-experience-carousel",
        eventID: "event2"
      },
      {
        image: "https://sitetunershosting.com/clients/Fortinet/wan-03-success-stories.jpg",
        headline: "SD-Branch Success Stories",
        ctaText: "Read now",
        ctaLink: "https://global.fortinet.com/lp-en-ap-sdbranchsuccess?utm_content=ab-test-experience-carousel",
        eventID: "event3"
      },
      {
        image: "https://sitetunershosting.com/clients/Fortinet/wan-04-all-lan-devices.jpg",
        headline: "Secure LAN Edge for All Devices",
        ctaText: "Read the eBook",
        ctaLink: "https://global.fortinet.com/lp-en-ap-ensurealaneb?utm_content=ab-test-experience-carousel",
        eventID: "event4"
      },
      {
        image: "https://sitetunershosting.com/clients/Fortinet/wan-05-strengthen.jpg",
        headline: "Strengthen Wired and Wireless Network Security",
        ctaText: "Download now",
        ctaLink: "https://global.fortinet.com/lp-en-ap-securelanedgetk?utm_content=ab-test-experience-carousel",
        eventID: "event5"
      }
    ];

    const slidesData = {
      "/products/sd-wan": [
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sdwan-01-buyers-guide.jpg",
          headline: "SD-WAN Buyer's Guide",
          ctaText: "Get the Details",
          ctaLink: "https://global.fortinet.com/lp-en-ap-secure-sdwan?utm_content=ab-test-experience-carousel",
          eventID: "event1"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sdwan-02-checklist.jpg",
          headline: "SD-WAN Capabilities Checklist",
          ctaText: "Get the Checklist",
          ctaLink: "https://global.fortinet.com/lp-en-ap-unlocking-wan?utm_content=ab-test-experience-carousel",
          eventID: "event2"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sdwan-03-toolkit.jpg",
          headline: "SD-WAN Toolkit",
          ctaText: "Download now",
          ctaLink: "https://global.fortinet.com/lp-en-ap-sd-wan-toolkit?utm_content=ab-test-experience-carousel",
          eventID: "event3"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sdwan-04-success-stories.jpg",
          headline: "SD-WAN Success Stories",
          ctaText: "Read now",
          ctaLink: "https://global.fortinet.com/lp-en-ap-eb-securesdwan?utm_content=ab-test-experience-carousel",
          eventID: "event4"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sdwan-05-capabilities.jpg",
          headline: "Capabilities for Secure SD-WAN",
          ctaText: "Download now",
          ctaLink: "https://global.fortinet.com/lp-en-ap-required-capabilities?utm_content=ab-test-experience-carousel",
          eventID: "event5"
        }
      ],
      "/products/sase": [
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sase-01-dummies.jpg",
          headline: "Single-Vendor SASE for Dummies",
          ctaText: "Read now",
          ctaLink: "https://global.fortinet.com/lp-en-ap-sv-sase-dummiesguide?utm_content=ab-test-experience-carousel",
          eventID: "event1"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sase-02-evaluating.jpg",
          headline: "Evaluating SASE Solutions",
          ctaText: "Download now",
          ctaLink: "https://global.fortinet.com/lp-en-cc-when-evaluating-sase?utm_content=ab-test-experience-carousel",
          eventID: "event2"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sase-03-buyers-guide.jpg",
          headline: "SASE Buyer's Guide",
          ctaText: "Get the Details",
          ctaLink: "https://global.fortinet.com/lp-en-ap-unified-sase?utm_content=ab-test-experience-carousel",
          eventID: "event3"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sase-04-checklist.jpg",
          headline: "Essential SASE Checklist",
          ctaText: "Get Your Copy",
          ctaLink: "https://global.fortinet.com/lp-en-ap-sase-must-haves?utm_content=ab-test-experience-carousel",
          eventID: "event4"
        },
        {
          image: "https://sitetunershosting.com/clients/Fortinet/sase-05-success-stories.jpg",
          headline: "FortiSASE Success Stories",
          ctaText: "Read now",
          ctaLink: "https://global.fortinet.com/lp-en-eb-sasecustomersuccess?utm_content=ab-test-experience-carousel",
          eventID: "event5",
        }
      ]
    };

    // Add shared content to multiple keys
    ["/products/wireless-access-points", "/products/wireless-wan-fortiextender", "/products/ethernet-switches"].forEach(key => {
      slidesData[key] = sharedContent;
    });

    function addScript() {
      var cssScript = `
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css"/>
      `;
      document.head.insertAdjacentHTML('beforeend', cssScript);

      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
      document.head.appendChild(swiperScript);
    }

    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof Swiper !== "undefined") {
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
        if (document.querySelector(selector)) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    // function triggerChange(element, eventName, goal, eventID) {
    //   if (element) {
    //       const event = new Event(eventName, { bubbles: true });
    //       element.dispatchEvent(event);
          
    //       s_c_il[2].s.linkTrackVars = "events,eVar2";
    //       s_c_il[2].s.linkTrackEvents = eventID;
    //       s_c_il[2].s.eVar2 = goal;
    //       s_c_il[2].s.events = eventID;
  
    //       s_c_il[2].s.tl(true, "o", `Recommended Carousel Interaction`);
    //   }
    // }

    function getCurrentPageSlides() {
      const path = window.location.pathname;
      return slidesData[path] || [];
    }

    function createSlides(slides) {
      return slides
        .map(slide => `
          <div class="eg-slide swiper-slide">
            <a href="${slide.ctaLink}" target="_blank" class="eg-slide-link">
              <img src="${slide.image}" alt="Slide Image">
              <div class="eg-slide-content">
                <h3>${slide.headline}</h3>
                <span class="eg-trailing-link">${slide.ctaText}</span>
              </div>
            </a>
          </div>
        `).join('');
    }

    function init() {
      document.body.classList.add('EG-RECOMMENDED')
      const slides = getCurrentPageSlides();
      if (!slides.length) return;

      const recommendedSection = `
        <section class="eg-recommended-section">
          <div class="eg-recommended-container container">
            <h3 class="eg-recommended-heading">RECOMMENDED</h3>
            <div class="eg-recommended-inner swiper-container">
              <div class="eg-content-wrapper swiper-wrapper">
                ${createSlides(slides)}
              </div>
            </div>
            <div class="swiper-button-prev eg-prev"></div>
            <div class="swiper-button-next eg-next"></div>
          </div>
        </section>`;

      if (!document.querySelector('.eg-recommended-section')) {
        const hero = document.querySelector('.hero');
        if (hero) {
          hero.insertAdjacentHTML('afterend', recommendedSection);
        }
      }

        // document.addEventListener("click", (event) => {
        //     const link = event.target.closest(".eg-slide-link");
        //     if (!link) return;
        
        //     const slide = link.closest(".eg-slide");
        //     if (!slide) return;
        
        //     const slides = [...slide.parentNode.children];
        //     const index = slides.indexOf(slide);
        //     if (index === -1) return;
        
        //     const currentPath = window.location.pathname;
        //     let activeSlides = slidesData[currentPath] || sharedContent;
        
        //     if (index >= activeSlides.length) return;
        
        //     const goal = activeSlides[index].headline; 
        //     const eventID = activeSlides[index].eventID; 
        
        //     triggerChange(link, "click", goal, eventID);
        // });               

      waitForSwiper(function () {
        new Swiper(".eg-recommended-inner", {
          direction: 'horizontal',
          spaceBetween: 20,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.eg-next',
            prevEl: '.eg-prev',
          },
          mousewheel: {
            forceToAxis: true,
          },
          keyboard: true,
          breakpoints: {
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            767: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 15,
            },
          }
        });
      });
    }

    addScript();
    waitForElement('.hero', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
