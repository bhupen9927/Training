(function () {
  try {
    var debug = 0;
    var variation_name = "";
    var $;
    var wnd = window;
    wnd.vrdt = {
      fnc: {
        waitFor: function (cssSelector, callback, timeout) {
          var stop,
            elementCached,
            check = function () {
              try {
                elementCached = document.querySelector(cssSelector);

                if (stop) return;

                if (elementCached) {
                  callback(elementCached);
                  clearTimeout(timeout);

                  console.log(cssSelector + " found");
                } else {
                  window.requestAnimationFrame(check);
                }
              } catch (err) {
                console.log(err.message);
              }
            };

          window.requestAnimationFrame(check);

          timeout = setTimeout(function () {
            stop = true;
            console.log(cssSelector + " not found");
          }, timeout);
        },
        live: function (selector, event, callback, context) {
          var addEvent = function (el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
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
          var live = function (selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (el && found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        }
      },
      chks: {
        isMob: window.innerWidth < 768,
        isDesk: window.innerWidth > 768
      },
      othr: {},
    }

    var init = function () {
      // wrap cta and captcha
      wrapCtaCpta();
      // add bg images to popup
      addBgImage();
    }

    function wrapCtaCpta() {
      if (!document.querySelector('.eg-ctas-wrap')) {
        const captchaEl = document.querySelector('html body #brochureModal .disclaimer + div');
        const ctaEl = document.querySelector('html body #brochureModal .disclaimer + div + div');
        document.querySelector('html body #brochureModal .disclaimer').insertAdjacentHTML('afterend', `<div class="eg-ctas-wrap"></div>`);
        const target = document.querySelector('.eg-ctas-wrap');
        [captchaEl, ctaEl].forEach(el => {
          target.insertAdjacentElement('beforeend', el);
        });
      }
    }

    function addBgImage() {
      const target = document.querySelector('html body #brochureModal .modal-dialog');
      const img = window.innerWidth < 1098 ? 'https://cdn.optimizely.com/img/24967681153/b9fd6b871991443e83b30784b458a691.png' : 'https://cdn.optimizely.com/img/24967681153/8c0ab226ecd14e9296c1ff45c01ca810.png';
      if (!document.querySelector('.eg-despopupbg')) {
        target.insertAdjacentHTML('afterbegin', `<div class="eg-despopupbg"><img src='${img}'/></div>`);
      }
    }

    wnd.vrdt.fnc.waitFor('html body #brochureModal .disclaimer + div  + div', init, 30000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();