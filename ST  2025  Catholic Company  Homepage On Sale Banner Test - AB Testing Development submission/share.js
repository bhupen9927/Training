(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */

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

    function init() {
      live('.EG-SALE-BANNER .eg-banner-content a', 'click', function () {
        console.log('Clicks on Sale Banner')
      });
      live('#form-action-addToCart', 'click', function () {
        console.log('Clicks on Add to Cart')
      });
      live('#products-listing .product-item a', 'click', function () {
        console.log('Items viewed from Sale Page')
      });
      if (window.location.href.indexOf('/shop') !== -1) {
        console.log('Sale page Visits');
      }
    }

    /* Initialize variation */
    waitForElement('html body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


