(function () {
  try {
    var debug = 0;
    var variation_name = "";
    var staticDATA = {
      hero: {
        images: {
          heroRight: 'https://i0.wp.com/uscis-translations.com/wp-content/uploads/2019/09/image.png?w=970&ssl=1'
        },
        symbols: [
          {
            imgs: [{
              src: "https://expogrowth.in/wp-content/uploads/2023/12/TSG-high-logo-blue.png",
              alt: 'tsglogoblue'
            }],
            text: "CERTIFIED ISO 9001:2015 ISO 17100:2015"
          },
          {
            imgs: [{
              src: 'https://www.shopperapproved.com/account/images/2020/sa-logo-02.svg',
              alt: 'shopperapprovedlogo'
            },
            {
              src: 'https://svgshare.com/i/131E.svg',
              alt: 'shopperapprovedstars'
            }],
            text: '4.9/5 (1050 reviews)'
          },
          {
            imgs: [{
              src: 'https://thespanishgroup.org/wp-content/uploads/2023/09/Quality.png',
              alt: 'quality'
            }],
            text: '100% Quality Guarantee'
          },
          {
            imgs: [{
              src: 'https://dl.dropboxusercontent.com/s/fhwlsuoh4f8ctcr/light-dollar-icon.png?dl=0',
              alt: 'dollar'
            }],
            text: 'Best Price Guarantee'
          },
          {
            imgs: [{
              src: 'https://thespanishgroup.org/wp-content/uploads/2023/11/Support.png',
              alt: 'support'
            }],
            text: '24/7 Customer Support'
          }
        ]
      }
    };
    var waitForElement = function (selector, trigger, delayInterval, delayTimeout) {
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


    var init = function () {
      if (!document.querySelector('.eg-container_hero')) {
        var SYSMBLHTML = generateHeroSymbols();
        var newHeroHTML = '' +
          '  <div class="eg-container_hero">' +
          '      <div class="eg-row_hero">' +
          '          <div class="eg-hero-content">' +
          '              <h1 class="eg-h1">Certified Translation Services</h1>' +
          '              <p class="eg-sub-heading_hero">Get your documents translated in 90+ languages by experienced translators for as low as<strong> 10¢ per word</strong> delivered within 24 hours.</p>' +
          '              <div class="eg-action_hero"><a href="/billing/?__nfn_from=English&__nfn_to=Spanish" class="eg-order_hero eg-btn_hero">Start Your Order</a><a href="/translations/quotes/?__nfn_from=English&__nfn_to=Spanish" class="eg-quote_hero eg-btn_hero">Get Instant FREE Quote</a></div>' +
          '          </div>' +
          '          <div class="eg-hero-img eg-d-none">' +
          '              <img src="' + staticDATA.hero.images.heroRight + '" width="350">' +
          '          </div>' +
          '      </div>' +
          '      <div class="eg-row_hero">' +
          '          <div class="eg-symbols_hero">' + SYSMBLHTML + '</div>' +
          '      </div>' +
          '  </div>';
        var target = document.querySelector('html body #banner>.container') || document.querySelector('html body .template_banner>.container');
        if (target) {
          target.insertAdjacentHTML('afterbegin', newHeroHTML);
        }
      }
    }

    var generateHeroSymbols = function () {
      var symbolsHTML = staticDATA.hero.symbols.reduce(function (t, crr, i) {
        var divider = '';
        var symbolNUM = i + 1;
        if (symbolNUM !== staticDATA.hero.symbols.length) {
          divider = '<div class="eg-divider_hero eg-d-none"></div>';
        }
        var imgHTML = crr.imgs.reduce(function (timg, crrimg) {
          return timg += '<span><img src="' + crrimg.src + '" alt="' + crrimg.alt + '"/></span>';
        }, '');
        var html = '' +
          '  <div class="eg-symbol_hero eg-symbol_hero_' + symbolNUM + '">' +
          '      <a target="_blank">' +
          '          <div class="eg-symbol-image_hero">' + imgHTML + '</div>' +
          '          <p class="eg-symbol-description_hero">' + crr.text + '</p>' +
          '      </a>' +
          '  </div>' + divider;
        return t += html;
      }, '');
      return symbolsHTML;
    }
    if (window.location.pathname === "/") {
      document.body.classList.add('eg-home-pg');
      waitForElement('html body .template_banner>.container,html body #banner', init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


