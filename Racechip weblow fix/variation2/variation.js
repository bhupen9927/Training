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
      // document.body.style.overflow = '';
    });

    var testData = {
      "How It Works": {
        "content": [
          {
            "linkText": "Performance Upgrade",
            "linkUrl": "https://www.racechip.us/chip-tuning/performance-upgrade.html"
          },
          {
            "linkText": "Tuning Box vs. Remapping",
            "linkUrl": "https://www.racechip.us/chip-tuning/remapping.html"
          },
          {
            "linkText": "Function & Installation",
            "linkUrl": "https://www.racechip.us/chip-tuning/function-installation.html"
          },
          {
            "linkText": "Quality & Warranty",
            "linkUrl": "https://www.racechip.us/chip-tuning/quality-warranty-guarantee.html"
          }
        ]
      },
      "Support": {
        "content": [
          {
            "linkText": "Customer Service",
            "linkUrl": "https://www.racechip.us/service-support/customer-support.html"
          },
          {
            "linkText": "Installation",
            "linkUrl": "https://www.racechip.us/service-support/installation.html"
          },
          {
            "linkText": "Shipping & Returns",
            "linkUrl": "https://www.racechip.us/service-support/delivery-returns.html"
          },
          {
            "linkText": "FAQ",
            "linkUrl": "https://www.racechip.us/service-support/faq.html"
          },
          {
            "linkText": "Chip tuning Lexicon",
            "linkUrl": "https://www.racechip.us/service-support/chip-tuning-lexicon.html"
          },
          {
            "linkText": "Dealer Locator",
            "linkUrl": "https://www.racechip.us/service-support/dealer-locator"
          }
        ]
      },
      "About Us": {
        "content": [
          {
            "linkText": "The Company",
            "linkUrl": "https://www.racechip.us/about-us/company.html"
          },
          {
            "linkText": "Reseller Portal",
            "linkUrl": "http://reseller.racechip.com/en"
          }
        ]
      },
    }

    const trustSection = `
        <div class="eg-new-trust-bar">
          <div class="eg-new-trust-bar-inner">
            <div class="eg-new-known-from">
              <div class="eg-new-known-from-text">Getestet und bekannt aus</div>
              <div class="eg-new-known-from-logo" >
                <div class="eg-icon">
                  <svg id="dmax" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 76 19">
                    <path id="d" class="cls-1" d="M.5,18.5h7.4c5.2,0,8.5-3.2,8.5-9.1,0-5.6-3.2-8.9-8.5-8.9H.5v18Z"/>
                    <path id="m" class="cls-1" d="M17.5,18.5h19.2V.5h-6.6l-3,9.8L24.2.5h-6.6v18Z"/>
                    <path id="a" class="cls-1" d="M37.3,18.5h17.5L48.3.5h-4.6l-6.4,18Z"/>
                    <path id="x" class="cls-1" d="M55.2,18.5h17.4l-6.1-9.4,5.6-8.5h-16.4l5.6,8.5-6.1,9.4Z"/>
                  </svg>
                </div>
                <div class="eg-icon">
                  <svg id="topgear" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 92 23">
                    <path id="topgear-2" data-name="topgear" class="cls-1" d="M3.5,3.3l-1.4,3.7h3.8L1.2,19.2h5.6l4.8-12.2h3.8l1.4-3.7H3.5ZM15,16.7c1.1,0,1.5-.7,2.6-3.5,1.1-2.8,1.2-3.5.2-3.5s-1.6.7-2.6,3.5c-1.1,2.8-1.2,3.5-.2,3.5ZM18.8,7.1c6.2,0,5,3.3,3.9,6.2-1.8,4.7-2.7,6.2-8.7,6.2s-5.5-3-4.3-6.2c2-5.1,3.1-6.2,9.1-6.2ZM28.7,13.3c.9-2.2,1.3-3.1,2.4-3.1s.9.8,0,3.1c-.8,2.2-1.4,3.1-2.4,3.1s-.9-.9,0-3.1ZM31,7.4h-5.4l-6.1,15.6h5.5l2-5.2h0c0,1.1,1.3,1.7,2.7,1.7,3.8,0,4.9-1.2,6.8-6,1.4-3.6,2.2-6.2-2.3-6.2s-3.4.9-3.8,1.5h0l.5-1.4ZM45.5,10.7h6.9l-3.3,8.5h-3.9l.3-1.3h0c-1.5,1.4-2.2,1.6-4.8,1.6-5.7,0-4.5-3.6-2.8-8.1,2.8-7.1,3.5-8.1,10.4-8.1s6,2.2,4.7,5.3h-5.3l.2-.6c.5-1.1.4-1.8-.7-1.8s-1.8,1-2.2,1.9l-2.5,6.4c-.4,1-.7,2.1.6,2.1s1.9-.8,2.4-2l.4-1.1h-1.6l1.1-2.9ZM60.1,9.6c.9,0,1.1.3.6,1.5l-.3.7h-2.4l.3-.7c.4-1.2,1-1.5,1.8-1.5ZM57.2,17c-1.1,0-.8-.8-.6-1.5l.6-1.6h7.5v-.2c1.6-3.5,2.6-6.7-3.6-6.7s-6.8.3-9.1,6.2c-1.4,3.6-1.5,6.2,4.3,6.2s3.8-.2,5.1-.8c1.4-.6,2.1-2,2.7-3.6h-5c-.5,1.2-.9,2-2,2ZM73.1,13.4c-.4.2-.9.3-1.6.5-1,.3-1.4.8-1.6,1.5-.3.7-.1,1.2.6,1.2,1.1,0,1.6-.8,1.9-1.4l.7-1.7ZM76.5,17.4c-.2.6-.3,1.2-.2,1.7h-5.1c0-.4,0-.8.2-1.2h0c0,0-.1.1-.2.2-.9,1-1.3,1.3-4,1.3s-3.7-1.2-2.8-3.5c1-2.6,2.9-3.3,5.1-3.7l2.7-.5c1.2-.2,1.7-.5,2-1.2.2-.6-.1-.9-.7-.9-1.2,0-1.6.7-1.8,1.4h-4.8c1.4-3.8,3.2-4,7.7-4s5.4,1.6,4.7,3.4l-2.7,7ZM86.7,7.4h-5.3l-4.6,11.8h5.5l2.4-6.1c.5-1.4,1.3-2.2,3.2-2.2s.8,0,1,0c.2,0,.3,0,.4,0,0,0,.2,0,.2,0l1.5-3.7s0,0,0,0c-.1,0-.3,0-.8,0-1.5,0-3.1.8-4.1,1.9h0l.7-1.8Z"/>
                  </svg>
                </div>
                <div class="eg-icon">
                  <svg id="gq" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 21">
                    <defs>
                      <clipPath id="clippath">
                        <rect class="cls-1" x=".5" y=".5" width="39" height="20"/>
                      </clipPath>
                    </defs>
                    <g id="gq-2" data-name="gq">
                      <g class="cls-3">
                        <path class="cls-2" d="M39.3,10.5c0,1.6-.4,3.2-1.1,4.7l1.3,1.3-3.6,3.7-1.2-1.2c-1.4,1-3.2,1.5-5.1,1.5-5.2,0-9.4-4.1-9.6-9.3-.4,5.2-4.6,9.3-9.7,9.3-1.3,0-2.5-.3-3.7-.8-1.2-.5-2.3-1.2-3.2-2.2s-1.6-2-2.1-3.2c-.5-1.2-.7-2.5-.7-3.8C.5,5,4.8.5,10.2.5c1.7,0,3.4.5,4.9,1.4,1.5.9,2.7,2.2,3.5,3.7l-4.5,2.7c-.8-1.4-2.2-2.3-3.9-2.4-2.5,0-4.5,2.1-4.4,4.6,0,.6.1,1.2.3,1.8.2.6.5,1.1,1,1.5.4.4.9.8,1.4,1,.5.2,1.1.3,1.7.3,1.4,0,2.7-.7,3.5-1.7h-2.9v-4.3h9c0,0,0,.2,0,.2,0,.2,0,.3,0,.5.4-5.2,4.6-9.3,9.7-9.3,5.4,0,9.7,4.5,9.7,10ZM33.1,10.3l.9.9c0-.1,0-.2,0-.3,0-.1,0-.2,0-.3,0-2.5-2-4.5-4.4-4.6-1.2,0-2.3.5-3.1,1.4-.8.9-1.3,2-1.3,3.2,0,2.5,2,4.6,4.4,4.6.4,0,.7,0,1.1,0l-1-1,3.4-3.7Z"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="eg-icon">
                  <svg id="n24" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 20">
                    <path id="box" class="cls-1" d="M0,.6h18.7v18.8H0V.6Z"/>
                    <path id="n24-2" data-name="n24" class="cls-2" d="M18.8.6v18.8h4.8v-10.3c.6.9,1.3,1.9,2.1,2.9,1.9,2.5,4,5,6.1,7.5h4V.6h-4.9v10.1c-1.3-2.2-3.1-4.4-4.7-6.4-1-1.2-2.1-2.5-3.1-3.7h-4.3ZM44.2,3.4c-2.3,0-4.5.7-6.3,2.3l1.7,2.5c1-.7,2.3-1.5,3.5-1.6.5,0,.8.2,1.1.4.3.3.4.6.4.9,0,1.6-1.5,3.4-2.5,4.5-.8.8-1.6,1.7-2.5,2.5l-2.2,2v2.4h12.7v-3.6h-5.7l1.8-1.8c1.6-1.7,3.8-3.9,3.8-6.4,0-3.1-3.2-4.2-5.8-4.1ZM57.1,3.6l-7,8.8v2.3h7.1v4.7h4.9v-4.7h1.8v-3h-1.8V3.6h-5ZM57.2,7.5v4.2h-3.2l3.2-4.2Z"/>
                  </svg>
                </div>
                <div class="eg-icon">
                  <svg id="bmw_scene" data-name="bmw scene" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 99 18">
                    <path id="Scene" class="cls-1" d="M53.6,5.1h-4v-.8c0-.5,0-.9-.1-1.1-.1-.1-.3-.2-.5-.2-.2,0-.4.1-.6.3-.1.2-.1.5-.1,1s0,1,.2,1.3c.1.2.5.5,1.2,1,1.9,1.2,3.1,2.1,3.5,2.9.5.8.8,2,.8,3.6s-.1,2.2-.3,2.8c-.4.6-.9,1.1-1.6,1.4-.8.5-1.7.5-2.8.5s-2.1-.2-2.9-.6c-.9-.5-1.3-1-1.6-1.7-.2-.8-.3-1.8-.3-3h0c0-.1,3.9-.1,3.9-.1v1c0,.6,0,1.1.1,1.3.1.1.3.2.6.2s.4-.1.6-.3c.1-.2.2-.6.2-1,0-1.1-.2-1.8-.4-2-.3-.3-1-.9-2-1.5-1.1-.8-1.7-1.3-2-1.6-.4-.3-.6-.8-1-1.3-.2-.7-.3-1.4-.3-2.3,0-1.3.2-2.2.5-2.9.4-.6.9-1.1,1.5-1.4.8-.3,1.6-.4,2.7-.4s2,.1,2.8.5c.7.3,1.3.8,1.5,1.4.3.5.4,1.4.4,2.9h0ZM59.5,11.5v3c0,.4.4.9,1,.9h.1c.4,0,.8-.5.8-.9v-1.6h3.4c0,1.1,0,1-.1,1.5-.1.6-.4,1.2-.8,1.6-.3.6-.8,1.1-1.4,1.3-.6.3-1.4.5-2.3.5s-2-.1-2.7-.5c-.8-.5-1.2-1-1.5-1.8-.3-1-.4-2.1-.4-3.2v-4c0-1.2.1-2.1.4-2.6.2-.7.6-1.2,1.4-1.6.8-.4,1.7-.7,2.8-.7s1.9.2,2.7.7c.8.4,1.3,1.1,1.5,1.8.3.8.4,1.8.4,3.1h-3.6v-2.3c0-.5-.3-.8-.6-.8h-.3c-.4,0-.7.3-.7.8v4.9ZM70.4,10.8v3.6c0,.4.3.9.9.9h.1c.4,0,.8-.5.8-.9v-1.8h3.7c0,.9,0,1.5-.1,2.1-.1.5-.3.9-.7,1.4-.3.5-.9.9-1.4,1.2-.6.2-1.4.3-2.2.3s-1.6-.1-2.3-.3c-.6-.3-1.1-.6-1.5-1.1-.3-.4-.6-1-.8-1.4-.1-.5-.2-1.4-.2-2.4v-4.1c0-1.2,0-2.2.4-2.9.3-.8.8-1.3,1.6-1.6.8-.4,1.5-.5,2.5-.5s2.1.2,2.9.7c.8.4,1.3,1,1.5,1.8.3.8.4,1.9.4,3.2v1.9h-5.6ZM70.4,8.5v-2c0-.5.3-.8.6-.8h.3c.3,0,.6.3.6.8v2h-1.6ZM93.2,10.8v3.6c0,.4.3.9.9.9h.1c.4,0,.8-.5.8-.9v-1.8h3.9c0,.9-.1,1.5-.2,2.1-.1.5-.3.9-.8,1.4-.3.5-.8.9-1.5,1.2-.5.2-1.3.3-2.1.3s-1.6-.1-2.3-.3c-.6-.3-1.2-.7-1.5-1.1-.3-.4-.6-1-.8-1.4-.1-.5-.2-1.4-.2-2.4v-4.1c0-1.2.1-2.2.4-2.9.3-.8.8-1.3,1.6-1.6.8-.4,1.5-.5,2.5-.5s2.1.2,2.9.7c.8.4,1.2,1,1.5,1.8.3.8.5,1.9.5,3.2v1.9h-5.7ZM93.2,8.5v-2c0-.5.2-.8.6-.8h.3c.3,0,.6.3.6.8v2h-1.6ZM82.2,6.5c0-.5.3-.8.8-.8h.3c.3,0,.6.3.6.8v11h3.6V7.8c0-1.2-.1-2.1-.2-2.6-.1-.5-.4-1-.8-1.3-.4-.3-1-.4-1.7-.4s-1.1.1-1.5.3c-.4.2-.8.7-1.1,1.2v-1.3c.1,0-4.1,0-4.1,0v14h4.1V6.5h0Z"/>
                    <path id="BMW" class="cls-1" d="M4.1,9.8h.8c.4,0,.8.5.8.9v3c0,.5-.4,1-.8,1h-.8v-4.9ZM4.1,3.4h.8c.4,0,.8.4.8,1v1.9c0,.5-.4,1-.8,1h-.8v-3.9ZM43.1.5l-1.9,17h-5.3c-.5-2.6-1-5.6-1.4-8.9,0,1.4-.5,4.4-1.2,8.9h-5.3L26,.5h4.2l.5,5.9.4,5.7c.1-3,.5-6.8,1.2-11.7h4.5c0,.4.2,2.3.4,5.6l.4,6.5c.3-4.1.6-8.1,1.3-12.1h4.2ZM24.8.5v17h-3.7V6l-1.6,11.5h-2.5l-1.6-11.2v11.2h-3.8V.5h5.6c.1,1,.3,2.2.5,3.6l.6,4.3,1-7.9h5.6ZM0,.5h4.3c1.3,0,2.3,0,3.1.3.6.2,1.2.7,1.6,1.3.4.7.8,1.8.8,3.2s-.2,1.6-.6,2.1c-.3.5-.8.7-1.8.9,1.1.2,1.7.7,2,1.2.4.5.5,1.3.5,2.4v1.6c0,1.1-.1,2-.3,2.5-.3.5-.6.9-1.3,1.1-.5.2-1.7.3-3.4.3H0V.5Z"/>
                  </svg>
                </div>
                <div class="eg-icon">
                  <svg id="autobild" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 30">
                    <path id="autobild-2" data-name="autobild" class="cls-1" d="M21,0H0v30h21V0ZM1.3,15.2l1.4-4.6h1.2l-.6,4.6h1.9L6.8,1.5h-3.5L0,12.8v2.4h1.3ZM3.3,8.3l1.5-4.5-.6,4.5h-.9ZM10.1,16.1h-2.2v2.2h2.2v-2.2ZM10.1,18.8h-2.2v9.4h2.2v-9.4ZM3.9,23.3h.8v2.7h-.8v-2.7ZM3.9,18.3h.8v2.7h-.8v-2.7ZM6.2,16.1H1.7v12.1h4.5c.4,0,.7-.3.7-.7v-4.6c0-.4-.3-.7-.7-.7.4,0,.7-.3.7-.7v-4.6c0-.4-.3-.7-.7-.7ZM13.2,16.1h-2.2v12.1h2.2v-12.1ZM14.2,19.5v8c0,.4.3.7.7.7h4.5v-12.1h-2.2v2.7h-2.3c-.4,0-.7.3-.7.7ZM16.5,26v-5h.7v5h-.7ZM18.3,5.8l-.9,7.4h-.8l.9-7.4h.8ZM20.2,4.5c0-.4-.2-.7-.6-.7h-3c-.4,0-.8.3-.8.7l-1.2,9.9c0,.4.2.7.6.7h3c.4,0,.8-.3.8-.7l1.2-9.9ZM9.7,15.2c.4,0,.8-.3.8-.7l1.3-10.6h-1.8l-1.1,9.4h-.8l1.1-9.4h-1.8l-1.3,10.6c0,.4.2.7.6.7h3ZM15.4,3.8h-.6l.3-2.2h-2.1l-.3,2.2h-.6l-.2,2h.6l-1.1,9.4h2.1l1.1-9.4h.6l.2-2Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>`;

    const benifit = `
      <div class="eg-benefits">
        <div class="eg-benefits-step step-1">
          <div class="eg-benefits-icon">
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
              <path class="cls-1" d="M21.4,10.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.4v1.9h-1.3v-1.3c0-.4-.1-.6-.4-.9-.2-.2-.5-.4-.9-.4h-1l-2.8-2.8c-.1-.1-.3-.2-.4-.3-.2,0-.3,0-.5,0h-1.6v-1.3h1.9c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.4s0-.3-.2-.4c-.1-.1-.3-.2-.4-.2h-5c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.4s0,.3.2.4c.1.1.3.2.4.2h1.9v1.3h-5c-.4,0-.6.1-.9.4-.2.2-.4.5-.4.9v4.4h-1.3v-1.9c0-.2,0-.3-.2-.4-.1-.1-.3-.2-.4-.2s-.3,0-.4.2c-.1.1-.2.3-.2.4v5c0,.2,0,.3.2.4.1.1.3.2.4.2s.3,0,.4-.2c.1-.1.2-.3.2-.4v-1.9h1.3v1.6c0,.2,0,.3,0,.5,0,.2.2.3.3.4l2.8,2.8c.1.1.3.2.4.3.2,0,.3,0,.5,0h5.1c.2,0,.3,0,.5,0,.2,0,.3-.2.4-.3l2.8-2.8h1c.4,0,.6-.1.9-.4.2-.2.4-.5.4-.9v-1.3h1.3v1.9c0,.2,0,.3.2.4.1.1.3.2.4.2s.3,0,.4-.2c.1-.1.2-.3.2-.4v-5c0-.2,0-.3-.2-.4-.1-.1-.3-.2-.4-.2ZM18.3,15.1h-1c-.2,0-.3,0-.5,0-.2,0-.3.2-.4.3l-2.8,2.8h-5.1l-2.8-2.8v-7.3h7.9l2.8,2.8c.1.1.3.2.4.3.2,0,.3,0,.5,0h1v3.8Z"/>
            </svg>
          </div>
          <div class="eg-benefits-text">Bis zu 30% mehr Performance</div>
        </div>
        <div class="eg-benefits-step step-2">
          <div class="eg-benefits-icon">
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
              <path class="cls-1" d="M21.8,2.8c0-.2,0-.3-.2-.4-.1-.1-.2-.2-.4-.2-2-.1-3.8,0-5.6.2-1.8.2-3.4.6-4.8,1.2-1.5.5-2.7,1.2-3.8,2.1-1.1.9-2,1.8-2.7,2.9-.5.8-.8,1.5-1,2.4-.2.8-.3,1.7-.3,2.5s.1,1.7.4,2.6c.2.9.6,1.8,1.1,2.6l-2.2,2.2c0,0-.1.1-.1.2,0,0,0,.2,0,.3,0,.2,0,.3.2.4s.3.2.4.2.2,0,.3,0c0,0,.1,0,.2-.1l2.2-2.2c.9.5,1.8.9,2.7,1.1s1.8.4,2.7.4,1.7-.1,2.5-.4c.8-.2,1.5-.6,2.2-1h0c1.1-.7,2.1-1.6,2.9-2.7.8-1.1,1.5-2.4,2.1-3.8s.9-3.1,1.2-4.8c.2-1.8.3-3.6.2-5.6ZM14.8,18.6c-.6.4-1.3.7-2,.8-.7.2-1.4.3-2.1.3s-1.5,0-2.2-.3c-.8-.2-1.5-.5-2.2-.9l9.5-9.5c0,0,0-.1.1-.2,0,0,0-.2,0-.2,0-.2,0-.3-.2-.4-.1-.1-.3-.2-.4-.2s-.1,0-.2,0c0,0-.1,0-.2.1l-9.5,9.5c-.4-.7-.7-1.5-.9-2.2-.2-.7-.3-1.5-.3-2.2s0-1.4.3-2.1c.2-.7.5-1.3.9-2,.6-1,1.4-1.8,2.4-2.6,1-.8,2.1-1.4,3.4-1.9,1.3-.5,2.8-.9,4.3-1.1,1.6-.2,3.3-.3,5.1-.2,0,1.8,0,3.5-.2,5.1-.2,1.6-.6,3-1.1,4.3-.5,1.3-1.1,2.4-1.9,3.4-.8,1-1.6,1.8-2.6,2.4Z"/>
            </svg>
          </div>
          <div class="eg-benefits-text">Bis zu 15% Spritersparnis</div>
        </div>
        <div class="eg-benefits-step step-3">
          <div class="eg-benefits-icon">
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
              <path class="cls-1" d="M20.5,1.6H3.5c-.4,0-.8.1-1,.4-.3.3-.4.6-.4,1v6.2c0,2.3.4,4.3,1.3,5.9.8,1.6,1.8,2.9,2.9,3.9,1.1,1,2.1,1.8,3.2,2.2,1,.5,1.8.8,2.2.9,0,0,.1,0,.2,0,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.2,0,.2,0h0c.4-.1,1.1-.4,2.2-.9,1-.5,2.1-1.2,3.2-2.2,1.1-1,2-2.3,2.9-3.9.8-1.6,1.3-3.6,1.3-5.9V3.1c0-.4-.1-.8-.4-1-.3-.3-.6-.4-1-.4ZM20.7,9.3c0,2.1-.4,3.9-1.1,5.3s-1.6,2.6-2.6,3.5c-1,.9-2,1.6-2.9,2-.9.4-1.6.7-2,.8h-.1c-.4-.1-1-.4-2-.8-1-.5-1.9-1.1-2.9-2-1-.9-1.9-2.1-2.6-3.5-.8-1.4-1.1-3.2-1.1-5.3V3.1c0,0,0-.1,0-.1,0,0,0,0,.1,0h16.9c0,0,.1,0,.1,0,0,0,0,0,0,.1v6.2ZM16.7,7.7c0,0,0,.1.1.2,0,0,0,.2,0,.3s0,.2,0,.3c0,0,0,.1-.1.2l-5.9,5.9c0,0-.1,0-.2.1,0,0-.2,0-.3,0s-.2,0-.3,0c0,0-.1,0-.2-.1l-2.5-2.5c0,0,0-.1-.1-.2,0,0,0-.2,0-.2,0-.2,0-.3.2-.4.1-.1.3-.2.4-.2s.1,0,.2,0c0,0,.1,0,.2.1l2.1,2.1,5.5-5.5c0,0,.1,0,.2-.1,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1Z"/>
            </svg>
          </div>
          <div class="eg-benefits-text">Inklusive Motorgarantie</div>
        </div>
        <div class="eg-benefits-step step-4">
          <div class="eg-benefits-icon">
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
              <path class="cls-1" d="M21.5,6.3c0-.1-.1-.2-.2-.3,0,0-.2,0-.3,0s-.1,0-.2,0c0,0-.1,0-.2.1l-4,3.7-1.9-.4-.4-1.9,3.7-4s0-.1.1-.2c0,0,0-.1,0-.2,0-.1,0-.2,0-.3s-.2-.2-.3-.2c-.4-.1-.8-.3-1.2-.4-.4,0-.9-.1-1.3-.1-.9,0-1.8.2-2.7.5-.8.4-1.6.8-2.2,1.5s-1.1,1.3-1.5,2.2c-.4.8-.5,1.7-.5,2.7s0,1,.2,1.5c.1.5.3,1,.5,1.4h0s-6,5.1-6,5.1c0,0,0,0,0,0h0c-.3.3-.5.6-.6.9-.2.4-.2.7-.2,1.2,0,.8.3,1.5.9,2.1.6.6,1.3.9,2.1.9s.8,0,1.2-.2c.4-.2.7-.4.9-.6h0s0,0,0,0l5.2-6c.4.2.9.4,1.4.5.5.1,1,.2,1.5.2.9,0,1.8-.2,2.7-.5.8-.4,1.6-.8,2.2-1.5.6-.6,1.1-1.3,1.5-2.2.4-.8.5-1.7.5-2.7s0-.9-.1-1.3c0-.4-.2-.9-.4-1.3h0ZM15.1,14.5c-.5,0-1,0-1.5-.2-.5-.1-.9-.3-1.3-.5h0s0,0-.1,0c0,0,0,0-.2,0s-.2,0-.2,0c0,0-.1,0-.2.1l-5.5,6.4c-.1.1-.3.3-.5.4-.2,0-.4.1-.7.1-.5,0-.9-.2-1.2-.5-.4-.4-.5-.8-.5-1.2s0-.5.1-.7c0-.2.2-.4.4-.5h0l6.4-5.5s0-.1.1-.2c0,0,0-.2,0-.2s0,0,0-.1c0,0,0,0,0-.1-.2-.4-.4-.8-.5-1.3-.1-.5-.2-1-.2-1.5,0-.8.1-1.5.4-2.2.3-.7.7-1.3,1.2-1.8.5-.5,1.1-.9,1.8-1.2.7-.3,1.4-.4,2.2-.4s.5,0,.7,0c.2,0,.4,0,.6.1h0l-3.3,3.6s0,.1-.1.2c0,0,0,.1,0,.2h0c0,0,0,.1,0,.1l.5,2.6c0,.1,0,.2.2.3,0,0,.2.1.3.2h0l2.6.5s0,0,0,0h0c0,0,.2,0,.2,0,0,0,.1,0,.2-.1l3.6-3.3c0,.2,0,.4.1.6,0,.2,0,.4,0,.7,0,.8-.1,1.5-.4,2.2s-.7,1.3-1.2,1.8c-.5.5-1.1.9-1.8,1.2-.7.3-1.4.4-2.2.4Z"/>
            </svg>
          </div>
          <div class="eg-benefits-text">Einfacher Plug &amp; Play Einbau</div>
        </div>`;

    var heroTitle = `
          <h1 id="eg-changing-text-container" class="eg-teaser-title">
            <b>Mehr </b>
            <span id="eg-changing-text"></span>
            <div>Für dein Fahrzeug</div>
          </h1>`

    /* Variation Init */
    function init() {
      var oldTitle = document.querySelector('.teaser-title');
      if (oldTitle) {
        var newTitle = document.createElement('div');
        newTitle.innerHTML = heroTitle;
        oldTitle.parentNode.replaceChild(newTitle, oldTitle);
      }

      var textArray = ['Leistung', 'Effizienz', 'Fahrspass'];
      var changingText = document.getElementById('eg-changing-text');
      var counter = 0;
      function changeText() {
        if (changingText) {
          changingText.textContent = textArray[counter];
          counter = (counter + 1) % textArray.length;
        }
      }

      changeText();
      setInterval(changeText, 3000);

      var b2 = document.querySelector('.home-stage .selector-info');
      b2.insertAdjacentHTML('afterend', benifit);

      var videoIn = document.querySelector('.main-selector-container.grid-container');
      if (videoIn) {
        videoIn.insertAdjacentHTML('afterend', '<div id="video-desktop" class="teaser-background"><video src="https://s3.eu-central-1.amazonaws.com/racechip.streaming/BMW_M3_Web_Intro.mp4" autoplay muted poster="https://www.racechip.us/media/wysiwyg/stage_images/porsche-stage_992.jpg"> </video></div>');
      }

      window.addEventListener('click', event => {
        if (event.target.matches('video')) {
          event.stopPropagation();
        }
      }, true);

      if (window.innerWidth < 767) {
        document.querySelector('#video-desktop > video').removeAttribute('src');
      } else {
        setTimeout(() => {
          document.querySelector('#video-desktop > video').removeAttribute('poster');
        }, 2000);
      }

      var reviewsInserts = document.querySelector('.content-container div.home-main-advantages.content-area');
      reviewsInserts.insertAdjacentHTML('afterend', '<div class="social"><iframe src="https://d5fd75172c5248c3adeace57f4b95c25.elf.site" width="100%" height="350" frameborder="0"></iframe></div>');
      console.log("Reviews inserted after .content-container div.home-main-advantages.content-area.");
      // Trust insert desktop
      var trustInsertsDesktop = document.querySelector('.trust-bar');
      trustInsertsDesktop.insertAdjacentHTML('beforebegin', trustSection)
      console.log("Trust section inserted before .trust-bar.");

      var callToAction = document.querySelector('.car-selector .form-container .car-selector-error + .form-buttons .call-to-action');
      if (callToAction) {
        callToAction.innerText = 'START';
      }
    }

    function init2() {
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

    function navigation() {

    }
    /* Initialize variation */
    waitForElement('.teaser-title', init, 100, 15000);
    waitForElement('.container-regular .navbar-wrapper', init2, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


