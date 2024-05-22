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
      }, 15000)
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

    var testData = [
      {
        url: "/en-gb/products/",
        data: {
          sectionHeading: 'You might also like',
          sectionPara: 'Explore more products in our range of business banking solutions.',
          sectionCta: 'View all digital banking solutions ',
          sectionCtaLink: 'https://www.business.hsbc.com.hk/en-gb/products-and-solutions/digital',
          FirstCardSubHead: 'Digital',
          FirstCardHeading: 'HSBC HK Business Express mobile app',
          FirstCardPara: 'The HSBC HK Business Express mobile app allowing you to gain better control of your cash flow and receive financial insights tailored to your business needs anytime, anywhere.',
          FirstCardCta: 'Find out more',
          FirstCardCtaLink: 'https://www.business.hsbc.com.hk/en-gb/products/hsbc-business-express-mobile-app',
          SecondCardSubHead: 'Digital',
          SecondCardHeading: 'Business Internet Banking',
          SecondCardPara: 'A simpler, faster and better way to access your business accounts and manage your company’s cash flow.',
          SecondCardCta: 'Find out more',
          SecondCardCtaLink: 'https://www.business.hsbc.com.hk/products/business-internet-banking',
          ThirdCardSubHead: 'Digital',
          ThirdCardHeading: 'HSBCnet',
          ThirdCardPara: 'One platform to monitor all global accounts',
          ThirdCardCta: 'Find out more',
          ThirdCardCtaLink: 'https://www.business.hsbc.com.hk/en-gb/products/hsbcnet'
        }
      },
      {
        url: "/zh-cn/products/",
        data: {
          sectionHeading: '你可能还会喜欢',
          sectionPara: '了解更多我们一系列的环球商业银行服务',
          sectionCta: '所有数字理财方案',
          sectionCtaLink: 'https://www.business.hsbc.com.hk/zh-cn/products-and-solutions/digital',
          FirstCardSubHead: '数字理财',
          FirstCardHeading: '香港汇丰Business Express手机应用程序',
          FirstCardPara: '香港汇丰Business Express手机应用程序让你随时随地掌握公司现金流，并收取我们为你公司精选的市场动态及营商资讯。',
          FirstCardCta: 'Find out more',
          FirstCardCtaLink: 'https://www.business.hsbc.com.hk/zh-cn/products/hsbc-business-express-mobile-app',
          SecondCardSubHead: '数字理财',
          SecondCardHeading: '商务“网上理财”',
          SecondCardPara: '更简易、快捷、完善的商业理财服务，让你妥善管理公司账户，轻松掌握现金流。',
          SecondCardCta: 'Find out more',
          SecondCardCtaLink: 'https://www.business.hsbc.com.hk/zh-cn/products/business-internet-banking',
          ThirdCardSubHead: '数字理财',
          ThirdCardHeading: '汇丰财资网',
          ThirdCardPara: '一个网上综合理财平台，掌控所有环球账户。',
          ThirdCardCta: 'Find out more',
          ThirdCardCtaLink: 'https://www.business.hsbc.com.hk/zh-cn/products/hsbcnet'
        }
      },
      {
        url: "/zh-hk/products/",
        data: {
          sectionHeading: '你可能還會喜歡',
          sectionPara: '了解更多我們一系列的環球商業銀行服務',
          sectionCta: '所有數碼理財方案',
          sectionCtaLink: 'https://www.business.hsbc.com.hk/zh-hk/products-and-solutions/digital',
          FirstCardSubHead: '數碼理財',
          FirstCardHeading: '香港滙豐Business Express流動應用程式',
          FirstCardPara: '香港滙豐Business Express流動應用程式讓你隨時隨地掌握公司現金流，並收取我們為你公司精選的市場動態及營商資訊。',
          FirstCardCta: 'Find out more',
          FirstCardCtaLink: 'https://www.business.hsbc.com.hk/zh-hk/products/hsbc-business-express-mobile-app',
          SecondCardSubHead: '數碼理財',
          SecondCardHeading: '商務「網上理財」',
          SecondCardPara: '更簡易、快捷、完善的商業理財服務，讓你妥善管理公司戶口，輕鬆掌握現金流。',
          SecondCardCta: 'Find out more',
          SecondCardCtaLink: 'https://www.business.hsbc.com.hk/zh-hk/products/business-internet-banking',
          ThirdCardSubHead: '數碼理財',
          ThirdCardHeading: '滙豐財資網',
          ThirdCardPara: '掌握所有環球戶口，只需一個平台',
          ThirdCardCta: 'Find out more',
          ThirdCardCtaLink: 'https://www.business.hsbc.com.hk/zh-hk/products/hsbcnet'
        }
      }
    ];
    var currentURL = window.location.pathname;
    var currentTestData = testData.find(item => currentURL.startsWith(item.url));


    var ctasSection = `
      <div class="eg-ctaSection">
        <div class="eg-content-container">
          <div class="eg-also-like">
            <h2>${currentTestData.data.sectionHeading}</h2>
          </div>
          <div class="eg-explore-para">
            <p>${currentTestData.data.sectionPara}</p>
            <a class="eg-view-all" href="${currentTestData.data.sectionCtaLink}">${currentTestData.data.sectionCta}</a>
          </div>
          <div class="eg-banking-cards eg-swiper-container swiper-containe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="eg-card">
                  <div class="eg-image-name">
                    <span class="cta-panel-label__icon cta-panel-label__icon--product"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff" aria-hidden="true"><path d="M3.9,13.5V9.7l2.5,1.5L8.4,10v6.3L3.9,13.5z M14.1,9.7v3.7l-4.5,2.9V10l2.1,1.2L14.1,9.7z M2.1,7.3l1.6-1L7.9,9L6.4,9.9L2.1,7.3z M10.1,9l4.2-2.7l1.6,1l-4.2,2.6L10.1,9z M4.7,5.7L9,3l4.3,2.7L9,8.3L4.7,5.7z M2.1,4l4.3-2.7l1.6,1l0,0l0,0L3.7,5L2.1,4z M10,2.3L10,2.3L10,2.3l1.6-1L15.9,4l-1.6,1L10,2.3z M11.6,0L9,1.7L6.4,0L0,4l2.6,1.7L0,7.4L2.8,9v0.1h0v5L9,18l0,0l0,0l6.2-3.9v-5h0V9L18,7.4l-2.6-1.7L18,4L11.6,0z"></path></svg>
                    </span>
                    <p>${currentTestData.data.FirstCardSubHead}</p>
                  </div>
                  <h2>${currentTestData.data.FirstCardHeading}</h2>
                  <p>${currentTestData.data.FirstCardPara}</p>
                  <a href="${currentTestData.data.FirstCardCtaLink}">${currentTestData.data.FirstCardCta}</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="eg-card">
                  <div class="eg-image-name">
                    <span class="cta-panel-label__icon cta-panel-label__icon--product"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff" aria-hidden="true"><path d="M3.9,13.5V9.7l2.5,1.5L8.4,10v6.3L3.9,13.5z M14.1,9.7v3.7l-4.5,2.9V10l2.1,1.2L14.1,9.7z M2.1,7.3l1.6-1L7.9,9L6.4,9.9L2.1,7.3z M10.1,9l4.2-2.7l1.6,1l-4.2,2.6L10.1,9z M4.7,5.7L9,3l4.3,2.7L9,8.3L4.7,5.7z M2.1,4l4.3-2.7l1.6,1l0,0l0,0L3.7,5L2.1,4z M10,2.3L10,2.3L10,2.3l1.6-1L15.9,4l-1.6,1L10,2.3z M11.6,0L9,1.7L6.4,0L0,4l2.6,1.7L0,7.4L2.8,9v0.1h0v5L9,18l0,0l0,0l6.2-3.9v-5h0V9L18,7.4l-2.6-1.7L18,4L11.6,0z"></path></svg>
                    </span>
                    <p>${currentTestData.data.SecondCardSubHead}</p>
                  </div>
                  <h2>${currentTestData.data.SecondCardHeading}</h2>
                  <p>${currentTestData.data.SecondCardPara}</p>
                  <a href="${currentTestData.data.SecondCardCtaLink}">${currentTestData.data.SecondCardCta}</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="eg-card">
                  <div class="eg-image-name">
                    <span class="cta-panel-label__icon cta-panel-label__icon--product"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff" aria-hidden="true"><path d="M3.9,13.5V9.7l2.5,1.5L8.4,10v6.3L3.9,13.5z M14.1,9.7v3.7l-4.5,2.9V10l2.1,1.2L14.1,9.7z M2.1,7.3l1.6-1L7.9,9L6.4,9.9L2.1,7.3z M10.1,9l4.2-2.7l1.6,1l-4.2,2.6L10.1,9z M4.7,5.7L9,3l4.3,2.7L9,8.3L4.7,5.7z M2.1,4l4.3-2.7l1.6,1l0,0l0,0L3.7,5L2.1,4z M10,2.3L10,2.3L10,2.3l1.6-1L15.9,4l-1.6,1L10,2.3z M11.6,0L9,1.7L6.4,0L0,4l2.6,1.7L0,7.4L2.8,9v0.1h0v5L9,18l0,0l0,0l6.2-3.9v-5h0V9L18,7.4l-2.6-1.7L18,4L11.6,0z"></path></svg>
                    </span>
                    <p>${currentTestData.data.ThirdCardSubHead}</p>
                  </div>
                  <h2>${currentTestData.data.ThirdCardHeading}</h2>
                  <p>${currentTestData.data.ThirdCardPara}</p>
                  <a href="${currentTestData.data.ThirdCardCtaLink}">${currentTestData.data.ThirdCardCta}</a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination eg-pagination"></div>
            <div class="swiper-button-prev eg-prev"></div>
            <div class="swiper-button-next eg-next"></div>
          </div>
        </div>
      </div>`;

    /* Variation Init */
    function init() {
      var destination = document.querySelector('main>[class*="product-details"] [class*="product-details__content"] > div:nth-child(2)');
      if (!document.querySelector('.eg-ctaSection')) {
        destination.insertAdjacentHTML("afterend", ctasSection);
      }
      if (window.screen.width < 767) {
        var slider = document.querySelector('.eg-banking-cards');
        var viewAll = document.querySelector('.eg-explore-para a');
        if (window.innerWidth < 767 && viewAll && slider) {
          slider.insertAdjacentElement('afterend', document.querySelector('.eg-explore-para a'))
        }
        waitForSwiper(function () {

          var swiper = new Swiper(".eg-banking-cards", {
            direction: 'horizontal',
            spaceBetween: 25,
            slidesPerView: 1,
            slidesPerGroup: 1,
            keyboard: true,
            allowSlidePrev: true,
            allowSlideNext: true,
            centeredSlides: false,
            centeredSlidesBounds: false,
            pagination: {
              el: '.eg-pagination',
              clickable: false,
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
    }
    addScript();

    /* Initialize variation */

    waitForElement('main>[class*="product-details"] [class*="product-details__content"] > div:nth-child(2)', init, 1000, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
