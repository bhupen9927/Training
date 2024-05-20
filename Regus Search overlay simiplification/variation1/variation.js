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

    live('html body [class*="Row-buttonsWrapper"] [data-id="SEARCH"]', 'click', function () {
      waitForElement(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child", init, 50, 15000);
    });

    live(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] [class*='iconAlignmentCss']", 'click', function () {
      var inputField = document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formHolderCss'] input");
      inputField.focus();
    });

    /* Variation Init */
    function init() {
      let newelement = document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formHolderCss'] input").value;
    }

    var observer = new MutationObserver(function (mutationsList, observer) {
      mutationsList.forEach(function (mutation) {
        if (mutation.type === 'childList' && mutation.target.matches('.desktop-nav [class*="logorightmenu"]')) {
          waitForElement(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child", init, 100, 15000);
        }
        if (mutation.type === 'attributes' && mutation.target.matches('.lock-scroll #__next [class*="modalSearchContent"] [class*="formHolderCss"] input')) {
          var inputField = document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formHolderCss'] input");
          var inputValue = inputField.value.trim().toLowerCase();
          if (inputValue.length === 0) {
            var newText = "Search anywhere";
            document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder>div:first-child").innerText = newText;
          } else {
            var newText = "Search " + inputValue;
            document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder>div:first-child").innerText = newText;
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['value'] });

    if (window.innerWidth > 1024) {
      waitForElement(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child", init, 1000, 15000);
    }
    /* Initialize variation */
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


