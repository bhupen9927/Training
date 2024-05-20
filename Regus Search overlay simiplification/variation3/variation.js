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

    live('.desktop-nav [class*="logorightmenu"] [data-id="CLOSE"]', 'mousedown', function () {
      document.body.classList.remove('eg-new_show');
      document.body.classList.remove('eg-change_color');
    });

    live('.desktop-nav [class*="logorightmenu"] [class*="SearchTopRightCss"] , .desktop-nav [class*="logorightmenu"] .outlinebtn-wrapper', 'mousedown', function () {
      document.body.classList.add('eg-new_show')
    });

    live(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] [class*='iconAlignmentCss']", 'mousedown', function () {
      document.body.classList.add('eg-change_color');
    })

    /* Variation Init */
    function init() {
      const elements = document.querySelectorAll(".lock-scroll [class*='tabsHeader-setOverFlowAuto']>li>div:first-child");
      elements.forEach(element => {
        element.addEventListener("mousedown", function () {
          document.body.classList.remove('eg-new_show')
          document.querySelectorAll(".lock-scroll [class*='tabsHeader-setOverFlowAuto']>li>div:first-child button").forEach(function (e) {
            e.style.pointerEvents = "all";
          })
          element.classList.replace('rtl-b7b9bb-menuItemWrapper', 'rtl-18ic7ji-menuItemWrapper-menuItemWrapperActive');
          document.querySelector("rtl-zzt7c3-logosidelink-tabsHeader-setOverFlowAuto").classList.replace('oldClassName', 'rtl-16qq4xg-logosidelink-tabsHeader-setOverFlowVisible');
          var newelement = element.parentElement;
          newelement.querySelector('.menu-sub-items').classList.replace('rtl-1poxtje-menusubitems', 'rtl-ipv5lx-menusubitems-showMenuSubItems');
        });
      });

      document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child").innerText = '| Search anywhere';
      if (window.innerWidth < 1024) {
        document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='typeHeadeInput-holder'] > div:first-child ").innerText = 'Search anywhere';
        document.querySelector('.lock-scroll #__next [class*="modalSearchContent"] [data-id="CLOSE"] > span').innerText = 'Cancel';
      }
    }

    var observer = new MutationObserver(function (mutationsList, observer) {
      mutationsList.forEach(function (mutation) {
        if (mutation.type === 'childList' && mutation.target.matches('.desktop-nav [class*="logorightmenu"]')) {
          waitForElement(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child", init, 100, 15000);
        }
        // if (mutation.type === 'attributes' && mutation.target.matches('.lock-scroll #__next [class*="modalSearchContent"] [class*="formHolderCss"] input')) {
        //   var inputField = document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formHolderCss'] input");
        //   var inputValue = inputField.value.trim().toLowerCase();
        //   if (inputValue.length === 0) {
        //     var newText = "Search anywhere";
        //     document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder>div:first-child").innerText = newText;
        //   } else {
        //     var newText = "Search " + inputValue;
        //     document.querySelector(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder>div:first-child").innerText = newText;
        //   }
        // }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['value'] });

    waitForElement(".lock-scroll #__next [class*='modalSearchContent'] [class*='formAreaCss'] .typeHeadeInput-holder  >div:first-child", init, 1000, 15000);
    waitForElement('.desktop-nav [class*="logorightmenu"]', init, 1000, 15000);
    /* Initialize variation */
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


