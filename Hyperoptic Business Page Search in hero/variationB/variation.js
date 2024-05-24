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

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
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
      // live binding helper using matchesSelector
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
      var searchEle = document.querySelector('.modal-dialog #modalElastic');
      searchEle.classList.add('eg-search');
      document.querySelector('.hero-block-desktop table td > div:last-child').insertAdjacentElement('afterend', searchEle);
      live('.button-wr button', 'mousedown', function () {
        console.log('ssd');
        searchEle = document.querySelector('.eg-search');
        document.querySelector('div[id^="orderNowElasticModalblock_"] .modal-dialog p').insertAdjacentElement('afterend', searchEle);
      });
      live('div[id^="orderNowElasticModalblock_"] .modal-dialog button.close', 'mousedown', function () {
        searchEle = document.querySelector('.eg-search');
        document.querySelector('.hero-block-desktop table td > div:last-child').insertAdjacentElement('afterend', searchEle);
      });
      document.querySelector('.elastic-search.eg-search input').setAttribute('placeholder', 'Check your postcode');
    }


    function initM() {
      document.querySelector('.hero-block-mobile table td > div:last-child').insertAdjacentElement('afterend', document.querySelector('.show-mobile .elastic-search.compact.white'));

    }


    /* Initialise variation */
    waitForElement(".modal-dialog #modalElastic", init, 500, 15000);
    waitForElement(".hero-block-mobile table td > div:last-child", initM, 500, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();