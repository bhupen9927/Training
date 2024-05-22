(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    window['optimizely'] = window['optimizely'] || [];
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

    /* Variation Init */
    function init() {
      if (window.location.pathname === '/thank-you-apply/') {
        console.log("Apply now form submits");
      }
      if (window.location.pathname === "/thank-you-brochure/") {
        console.log("Course guide form submits");
      }
      live('html body .c-course-menu__buttons [data-target="#brochureModal"]', 'click', function () {
        console.log('Clicks on Course Guide (navigation)');
      });

      live('html body #staticButtons [data-target="#brochureModal"]', 'click', function () {
        console.log('Clicks on Course Guide (on page top banner)');
      });

      live('html body .c-course-menu__buttons [data-target="#applyModal"],html body .main-header__wrap a[href="/apply/"]', 'click', function () {
        console.log('Clicks on Apply Now (navigation)');
      });

      live('html body #staticButtons [data-target="#applyModal"]', 'click', function () {
        console.log('Clicks on Apply Now (on page top banner)');
      });

      live('html body #stickyButtons [data-target="#brochureModal"]', 'click', function () {
        console.log('Clicks on Course Guide (side pop out)');
      });

      live('html body #stickyButtons [data-target="#applyModal"]', 'click', function () {
        console.log('Clicks on Apply Now (side pop out)');
      });


      live('html body .course-usp [data-target="#applyModal"]', 'click', function () {
        console.log('Clicks on Apply Now (mid page for variant)');
      });

      live('html body.eg-form-modified #brochureModal button[type="submit"]', 'click', function () {
        console.log('Clicks on Course Guide (mid page for variant)');
      });


      // scroll
      var clickedAt25Percent = false;
      var clickedAt50Percent = false;
      var clickedAt75Percent = false;
      var clickedAt100Percent = false;
      document.addEventListener('scroll', function () {
        var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;
        if (scrollPercentage >= 25 && !clickedAt25Percent) {
          window['optimizely'].push({
            type: "scroll",
            eventName: "Scroll25",
            tags: {
              revenue: 0,
              value: 0.00
            }
          });
          clickedAt25Percent = true;
        } else if (scrollPercentage >= 50 && !clickedAt50Percent) {
          window['optimizely'].push({
            type: "scroll",
            eventName: "Scroll50",
            tags: {
              revenue: 0,
              value: 0.00
            }
          });
          clickedAt50Percent = true;
        } else if (scrollPercentage >= 75 && !clickedAt75Percent) {
          window['optimizely'].push({
            type: "scroll",
            eventName: "Scroll75",
            tags: {
              revenue: 0,
              value: 0.00
            }
          });
          clickedAt75Percent = true;
        } else if (scrollPercentage > 99 && !clickedAt100Percent) {
          window['optimizely'].push({
            type: "scroll",
            eventName: "Scroll100",
            tags: {
              revenue: 0,
              value: 0.00
            }
          });
          clickedAt100Percent = true;
        }
      });
    }

    /* Initialize variation */
    waitForElement('html body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


