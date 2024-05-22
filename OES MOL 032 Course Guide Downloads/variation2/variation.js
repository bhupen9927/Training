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
      redesignPopup(true);
      // test events
      testEvents();
    }

    var redesignPopup = function (isRedesign) {
      console.log('Redesign : ', isRedesign);
      if (isRedesign) {
        document.body.classList.add('eg-form-modified');
        // move form below targeted pos
        moveForm();
        // wraping fields for stages
        wrapsInFrm();
        // wrap usps 
        wrapUsps();
        // add bg images to popup
        addBgImage();
      } else {
        document.body.classList.remove('eg-form-modified');
      }
    }

    function moveForm() {
      const target = document.querySelector('html body .entry-content .course-overview');
      const frmEl = document.querySelector('html body #brochureModal');
      target.insertAdjacentElement('afterend', frmEl);
    }

    function wrapsInFrm() {
      // wrap cta and captcha
      wrapCtaCpta();
    }

    function wrapCtaCpta() {
      if (!document.querySelector('.eg-ctas-wrap')) {
        const captchaEl = document.querySelector('html body #brochureModal .disclaimer + div');
        const ctaEl = document.querySelector('html body #brochureModal .disclaimer + div + div');
        document.querySelector('html body #brochureModal .disclaimer').insertAdjacentHTML('afterend', `
        <div class="eg-ctas-wrap">
          <div class="eg-show-terms"><a>Terms &amp; Conditions <i class="eg-arr-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
<path d="M17.5425 11.6568L19.4281 9.77123L10 0.34314L0.571899 9.77127L2.45752 11.6569L10 4.11437L17.5425 11.6568Z" fill="#21252980"/>
</svg></i></a></div>
          <div class="eg-new-cta"><button class="btn btn-white" type="button">Next</button></div>
          <div class="eg-ori-ctas"></div>
        </div>
        `);
        const target = document.querySelector('.eg-ctas-wrap .eg-ori-ctas');
        [captchaEl, ctaEl].forEach(el => {
          target.insertAdjacentElement('beforeend', el);
        });

        if (window.innerWidth < 768) {
          const disclaimerEl = document.querySelector('html body #brochureModal .disclaimer');
          document.querySelector('.eg-ctas-wrap').insertAdjacentElement('beforeend', disclaimerEl);
        }
      }
    }

    function wrapUsps() {
      const uspEl = document.querySelector('html body #brochureModal .modal-content>.row>div:first-child ul');
      if (!document.querySelector('.eg-wrapped-usps') && uspEl) {
        const target = document.querySelector('html body #brochureModal .modal-content>.row>div:first-child');
        target.insertAdjacentHTML('beforeend', `<div class="eg-wrapped-usps"></div>`);
        const newTarget = target.querySelector('.eg-wrapped-usps');
        const subTitleEl = document.querySelector('html body #brochureModal .modal-content>.row>div:first-child p');
        [subTitleEl, uspEl].forEach(el => newTarget.insertAdjacentElement('beforeend', el));
      }
    }

    function addBgImage() {
      const target = document.querySelector('html body #brochureModal .modal-dialog');
      const img = window.innerWidth < 1098 ? 'https://cdn.optimizely.com/img/24967681153/b9fd6b871991443e83b30784b458a691.png' : 'https://cdn.optimizely.com/img/24967681153/8c0ab226ecd14e9296c1ff45c01ca810.png';
      if (!document.querySelector('.eg-despopupbg')) {
        target.insertAdjacentHTML('afterbegin', `<div class="eg-despopupbg"><img src='${img}'/></div>`);
      }
    }

    function testEvents() {
      if (!document.querySelector('.eg-events-added')) {
        document.body.classList.add('eg-events-added');
        const live = wnd.vrdt.fnc.live;
        live('.eg-ctas-wrap .eg-new-cta button', 'click', function () {
          const firstthreefields = Array.from(document.querySelectorAll('html body #brochureModal .modal-content #courseBrochureForm .row>div:nth-child(-n + 3)'));
          let isValidated = true;
          firstthreefields.forEach(function (field) {
            if (!field.querySelector('input').checkValidity()) {
              isValidated = false;
            }
          });
          if (isValidated) {
            document.body.classList.add('eg-stage-2');
          } else {
            document.querySelector('html body #brochureModal button[type="submit"]').click();
          }
        });
        live('html body .eg-ctas-wrap .eg-show-terms a', 'click', function () {
          document.body.classList.toggle('eg-show-hide-terms');
        });
        live('html body button[data-target="#brochureModal"],html body button[data-target="#applyModal"],html body #applyModal .close,html body #brochureModal .close', 'click', function () {
          wnd.vrdt.fnc.waitFor('body.modal-open', function () {
            redesignPopup(false);
          }, 15000);
          wnd.vrdt.fnc.waitFor('body:not(.modal-open)', function () {
            redesignPopup(true);
          }, 15000);
        });
      }
    }

    wnd.vrdt.fnc.waitFor('html body #brochureModal .disclaimer + div', init, 30000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();