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

    live('.eg-webflow .eg-menuheader .eg-closeicon', 'click', function () {
      document.querySelector('.eg-webflow .navigation .navbar-wrapper .menu-button-2').click();
    });

    function init() {
      document.body.classList.add('eg-webflow');

      let headingChange = document.querySelector('.eg-webflow .container-3 .heading-3');
      headingChange.innerText = 'Flash-Sale';
      let subheadingText = document.querySelector('.eg-webflow .container-3 .title-copy-goes-here-be-awesome-2');
      subheadingText.innerText = 'Sichere dir 25% Rabatt auf unsere Bestseller.';

      waitForElement('#configuratorContainer #manufacturer [value="VW"]', function () {
        let selectoption = document.querySelector('#configuratorContainer #manufacturer > option:first-of-type');
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="Opel"]'));
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="Ford"]'));
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="Mercedes-Benz"]'));
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="Audi"]'));
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="BMW"]'));
        selectoption.insertAdjacentElement('afterend', document.querySelector('#configuratorContainer #manufacturer [value="VW"]'));
      }, 100, 15000);

      let logo = document.querySelector('.logo-title .logos > div:first-of-type p');
      logo.innerText = 'BEKANNT AUS:';

      let headingHTML = `<div class="eg-header">
    <p>CHIPTUNING <span>FÜR</span> MEHR LEISTUNG</p>
    <span>100% MEHR FAHRSPASS</span>
    <div class="eg-logo"><p>BEKANNT AUS:</p></div>
    </div>`

      let menuHTML = `<div class="eg-menuheader">
      <a href="https://www.racechip.de/" title="RaceChip" class="logo">
        <img class="mobile-logo" src="https://cdn.prod.website-files.com/664df3d4265466f6328d69ad/66aa559fa56248a4f908f797_Logo.png">
      </a>
      <div class="eg-closeicon"><img src="https://www.racechip.de/skin/frontend/racechip/default/images/close-white.png"></div>
      </div>`

      if (!document.querySelector('.eg-header')) {
        let insertHeading = document.querySelector('.logo-title .logos');
        insertHeading.insertAdjacentHTML('beforebegin', headingHTML);
      }

      if (window.innerWidth < 480 && !document.querySelector('.eg-menuheader')) {
        waitForElement('.eg-webflow .w-nav-overlay [role="navigation"]', function () {
          let menuSel = document.querySelector('.eg-webflow .w-nav-overlay [role="navigation"]');
          menuSel.insertAdjacentHTML('afterbegin', menuHTML);
        }, 100, 15000);
      }
    }
    /* Initialize variation */
    waitForElement('.container-regular .navbar-wrapper', init, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


