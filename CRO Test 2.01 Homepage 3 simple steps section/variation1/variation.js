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

      live('.eg-get-btn', 'click', function() {
        var heroSection = document.querySelector('.herobanner .c-hero');
        heroSection.scrollIntoView({ behavior: 'smooth' });
        document.body.classList.add('eg-heroBgLayout');
      })
      live('.eg-heroBg', 'click', function() {
        document.body.classList.remove('eg-heroBgLayout');
      })

    const buySteps=`
      <div class="eg-container">
        <div class="eg-buy-step-wrapper">
          <div class="eg-getImage-wrapper">
            <div class="eg-getImage-con">
            <h2 class="eg-get-heading"> Get a quote and buy online in 3 simple steps </h2>
            <div class="eg-get-cta">
              <a class="eg-get-btn" href="#">Get a quote </a>
            </div>
            </div>
            <img class="eg-emp-img" src="https://i.ibb.co/tcdhFGp/Employee.png">
          </div>
          <div class="eg-steps-wrapper">
            <div class="eg-first-step eg-step">
              <div class="eg-step-num">
                <p class="eg-num"> 1 </p>
              </div>
              <div class="eg-step-con">
                <h2 class="eg-step-heading">Tell us about your business</h2>
                <p class="eg-step-content"> Answer some questions about your business, such as turnover and area of specialisation, to give us insight into your business and risk profile.</p>
              </div>
            </div>
            <div class="eg-second-step eg-step">
              <div class="eg-step-num">
                <p class="eg-num"> 2 </p>
              </div>
              <div class="eg-step-con">
                <h2 class="eg-step-heading">Choose your level of cover</h2>
                <p class="eg-step-content"> Select the limit of liability for your professional indemnity cover, and even extend to include public liability cover, if required.</p>
              </div>
            </div>
            <div class="eg-third-step eg-step">
              <div class="eg-step-num">
                <p class="eg-num"> 3 </p>
              </div>
              <div class="eg-step-con">
                <h2 class="eg-step-heading">Buy online</h2>
                <p class="eg-step-content"> When you have been presented with your indication of price, simply click ‘Buy Now’ to purchase cover online using your credit card.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="eg-cover-container">
          <h2 class="eg-cover-heading"> Cover we can arrange </h2>
          <div class="eg-cover-con">
            <div class="eg-proff-con">
              <img class="eg-cover-icon" src="https://i.ibb.co/9vGP5L9/cover.png">
              <p class="eg-small-content"> Products & Services</p>
              <h3 class="eg-proff-heading"> Professional indemnity and public liability insurance</h3>
              <p class="eg-proff-content">Help protect your business against claims of incorrect, misleading advice, breach of duty or negligence, third-party claims of injury or property damage, and costly legal fees.</p>
              <div class="eg-proff-get-cta"><a class="eg-proff-get" href="#"> Get a quote</a></div>
            </div>
            <div class="eg-right-container">
            <h3 class="eg-encluded-heading">What’s included</h3>
            <div class="eg-encluded-con">
              <div class="eg-encluded-wrapper">
                <div class="eg-right-icon">
                  <img class="eg-right-img" src="https://i.ibb.co/Mff7KR1/right.png">
                </div>
                <div class="eg-included-mcon">
                  <h4 class="eg-included-heading eg-inctail-heading">Up to $10 million professional indemnity cover limit</h4>
                  <p class="eg-included-content eg-inctail-content"> The limit of liability is the maximum amount that can be provided under the insurance policy.</p>
                </div>
              </div>
              <div class="eg-encluded-wrapper">
                <div class="eg-right-icon">
                  <img class="eg-right-img" src="https://i.ibb.co/Mff7KR1/right.png">
                </div>
                <div class="eg-included-mcon">
                  <h4 class="eg-included-heading eg-inctail-heading">Tailored insurance solution depending on your industry</h4>
                  <p class="eg-included-content eg-inctail-content"> Certain minimum qualifications may apply.</p>
                </div>
              </div>
              <div class="eg-encluded-wrapper">
                <div class="eg-right-icon">
                  <img class="eg-right-img" src="https://i.ibb.co/Mff7KR1/right.png">
                </div>
                <div class="eg-included-mcon">
                  <h4 class="eg-included-heading eg-inctail-heading">Choose from $5 million, $10 million, $15 million or $20 million public liability cover.</h4>
                  <p class="eg-limit-content eg-inctail-content"> The limit of liability is the maximum amount that can be provided under the insurance policy.</p>
                </div>
              </div>
              <div class="eg-encluded-wrapper">
                <div class="eg-right-icon">
                  <img class="eg-right-img" src="https://i.ibb.co/Mff7KR1/right.png">
                </div>
                <div class="eg-included-mcon">
                  <h4 class="eg-included-heading eg-inctail-heading">Coverage Australia-wide</h4>
                  <p class="eg-certain-content eg-inctail-content"> Certain minimum qualifications may apply.</p>
                </div>
              </div>
            </div>  
        </div>
          </div>
        </div>
      </div>
      `;


    /* Variation Init */
    function init() {
      function heroSection() {

      var heroTitle = document.querySelector('.c-vue-product-finder-content__title h3');
      if(heroTitle) {
        heroTitle.innerText = 'Professional services insurance';
      }
      var heroPara = document.querySelector('.c-vue-product-finder-content__text p');
      if(heroPara) {
        heroPara.innerText = 'While you look after your clients, let Marsh arrange the best suited insurance cover to help protect your business.';
      }

      var search = document.querySelector('.multiselect__placeholder p');
      if(search) {
        search.innerText = 'Choose your occupation';
      }

      var newDiv = document.createElement('div');
      newDiv.classList.add('eg-heroBg');
      var layout = document.querySelector('.responsivegrid > .cmp-container:nth-child(2)');
      if (layout) {
          layout.insertAdjacentElement('afterbegin', newDiv);
      }
    }

      const hero=document.querySelector('.herobanner ');
      if(hero){
        hero.insertAdjacentHTML('afterend',buySteps);
      }
    }

    /* Initialize variation */
    waitForElement('.herobanner ', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


