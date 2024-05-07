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

    live('.cardsMapHolder [class*="loadMoreButton"], [class*="getSearchInputContainerStyles"] + [data-testid="form-submit"]', 'mouseover', function () {
      init();
    });

    function init() {
      const solutionName = document.querySelector("[class*='searchSolutionWrapper'] > [class*='dropdownSolutions'] img + span");
      if (solutionName && solutionName.innerText.trim() === "Office Space") {
        const anchorTags = document.querySelectorAll("[class*='backgroundCss-emptyStyles-emptyStyles'] [class*='cardBottomCta']");
        anchorTags.forEach((anchor) => {
          const citynameElement = anchor.closest("[class*='cardWrapper']").querySelector('h2');
          const cityname = citynameElement.textContent.trim();
          var element = anchor.closest("[class*='cardWrapper']").querySelector('a:first-of-type');
          var hrefValue = element.getAttribute('href');
          var number = hrefValue.match(/\d+/)[0];
          const newLink = `https://www.regus.com/en-gb/arrange-a-centre-tour?locationid=${number}&locationname=${cityname}&ws=office-space`;
          anchor.href = newLink;
          anchor.innerText = "Book a Tour";
        });
      } else {
        const anchorTags = document.querySelectorAll("[class*='backgroundCss-emptyStyles-emptyStyles'] [class*='cardBottomCta']");
        anchorTags.forEach((anchor) => {
          anchor.innerText = "Get a quote";
        });
      }
    }

    waitForElement("[data-item='result-card']", function () {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'attributes') {
            var targetElement = mutation.target;
            var link = targetElement.getAttribute('href');
            if (link && mutation.oldValue !== link) {
              init();
            }
          }
        });
      });

      var targetNode = document.querySelector('[data-item="result-card"]');
      var config = { attributes: true };
      observer.observe(targetNode, config);
    }, 50, 15000);

    waitForElement("[class*='backgroundCss-emptyStyles-emptyStyles'] a[href*='&ws=office-space']", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();