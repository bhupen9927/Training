(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;

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

    function waitforMarketo(trigger) {
      if (window.MktoForms2) {
        trigger();
      } else {
        var script = document.createElement('script');
        script.src = "//go.altium.com/js/forms2/js/forms2.min.js";
        script.onload = function () {
          trigger();
        };
        document.head.appendChild(script);
      }
    }

    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
      }
      this.Element &&
          (function(ElementPrototype) {
              ElementPrototype.matches =
                  ElementPrototype.matches ||
                  ElementPrototype.matchesSelector ||
                  ElementPrototype.webkitMatchesSelector ||
                  ElementPrototype.msMatchesSelector ||
                  function(selector) {
                      var node = this,
                          nodes = (node.parentNode || node.document).querySelectorAll(selector),
                          i = -1;
                      while (nodes[++i] && nodes[i] != node);
                      return !!nodes[i];
                  };
          })(Element.prototype);
      function live(selector, event, callback, context) {
          addEvent(context || document, event, function(e) {
              var found,
                  el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (found) callback.call(el, e);
          });
      }
      live(selector, event, callback, context);
    }

    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    }
  
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(`${name}=`)) {
              return cookie.substring(name.length + 1);
          }
      }
      return null;
    }

    function loadIntlTelInput(phoneInput) {
      var script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js";
      script.onload = function () {
        var iti = window.intlTelInput(phoneInput, {
          initialCountry: "us",
          separateDialCode: true,
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
      };
      document.head.appendChild(script);

      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css";
      document.head.appendChild(link);
    }
    
    var stickyForm = `
      <div class="eg-sticky-form">
        <h1 class="eg-form-title">I would like to know more</h1>
        <form class="eg-step-submit-form" id="mktoForm_17913">
          <div class="wds-loader eg-loader" data-once="altiumNbsp"></div>
        </form>
      </div>`;

    function init() {

      document.body.classList.add('TS-2115');
      if (!document.querySelector('.eg-sticky-form')) {
        const stickyFormContainer = document.querySelector('[class*="s-hero _program"] .l-container');
        if (stickyFormContainer) {
            stickyFormContainer.insertAdjacentHTML('beforeend', stickyForm);
        }
      }
    
      const newSection = document.createElement('section');
      newSection.classList.add('eg-section-sticky');
      
      const targetElement = document.querySelector('[class*="s-hero _program"]');
      if (targetElement && !document.querySelector('.eg-section-sticky')) {
          targetElement.insertAdjacentElement('beforebegin', newSection);
      }

      if (!getCookie('egStickyDismissed')) {
        window.addEventListener('scroll', function handleScroll() {
            if (getCookie('egStickyDismissed')) {
                window.removeEventListener('scroll', handleScroll);
                return;
            }
    
            toggleSticky();
    
            const stickyFormElement = document.querySelector('.eg-sticky-form');
            const stickySection = document.querySelector('.eg-section-sticky');
            const heroBlockWrap = document.querySelector('[class*="s-hero _program"] .l-container');
    
            if (document.body.classList.contains('eg-sticky') && stickyFormElement && stickySection) {
                stickySection.appendChild(stickyFormElement);
                if (!document.querySelector('.s-sidebar__close')) {
                    const closeButton = document.createElement('div');
                    closeButton.className = 's-sidebar__close eg-close';
                    closeButton.innerHTML = '<img src="//files-v2.web.altium.com/themes/custom/altium_ad_promo/html/dist/images/ico-close.svg" alt="">';
                    stickySection.insertAdjacentElement('afterbegin', closeButton);
                }
            } else if (stickyFormElement && heroBlockWrap) {
                heroBlockWrap.insertAdjacentElement('beforeend', stickyFormElement);
            }
        });
      }
      
      live('.eg-close', 'click', function () {
        document.body.classList.remove('eg-sticky');
        setCookie('egStickyDismissed', 'true', 7);
      });
  
      waitforMarketo(function () {
        MktoForms2.loadForm(
          "https://go.altium.com/js/forms2/js/forms2.min.js", "817-SFW-071", 17913,
          function (form) {
            var phoneInput = document.querySelector("#Phone");
            if (phoneInput) {
              loadIntlTelInput(phoneInput);
            }

            form.onSuccess(function (values) {
              const frmId = values.formid;
              if (frmId === "17913") {
                window.location.href = "https://www.altium.com/promotions/team-up-trade-up-b/thank-you";
              }
              return false;
            });

            window.scrollTo(0, 0);
            var loader = document.querySelector('.eg-loader');
            if (loader) {
              loader.remove();
            }
          }
        );
      });

      live(".iti__selected-flag", "click", function () {
        waitForElement(".iti__country-list", function () {
            var flagContainer = document.querySelector(".iti__flag-container");
            var countryList = document.querySelector(".iti__country-list");

            if (flagContainer && countryList) {
              flagContainer.appendChild(countryList);
            }
          }, 100, 15000);
      });
    }
  
    isInViewport = function (element) {
      var rect = element.getBoundingClientRect();
      var extraToBottom = 0;
      var bottomReached = isElementAtBottom(element);
      var showing = (rect.bottom - extraToBottom > 0 && rect.top < window.innerHeight) || // Bottom is visible, or
        (rect.top >= window.innerHeight && rect.bottom - extraToBottom <= window.innerHeight) // Starts to appear from the bottom
      return !(bottomReached && showing === false);
     
    }

    isElementAtBottom = function (element) {
      const elementRect = element.getBoundingClientRect();
      const elementBottom = elementRect.bottom;
      return elementBottom <= window.innerHeight;
    }

    function toggleSticky() {
      const heroSection = document.querySelector('[class*="s-hero _program"] .l-container .s-hero__wrap');
      if (!isInViewport(heroSection)) {
        document.body.classList.add('eg-sticky');
      } else {
        document.body.classList.remove('eg-sticky');
      }
    }

    if(window.location.pathname === '/promotions/team-up-trade-up') {
      waitForElement('[class*="s-hero _program"] .l-container', init, 50, 15000);
    }

  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
