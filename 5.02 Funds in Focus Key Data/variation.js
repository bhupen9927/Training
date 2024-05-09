/*fecli-injected JavaScript*/
  ;(function(){
    var style=document.createElement('style');style.type='text/css';style.appendChild(document.createTextNode('html body .eg-fundin_focus .eg-ctas {    flex-direction: row;    display: flex !important;    justify-content: space-between;    width: 100% !important;    align-items: center;}html body .eg-fundin_focus .eg-ctas .eg-learnmore {    text-decoration: underline !important;    padding-left: 0px !important;}html body .eg-fundin_focus .eg-ctas a {    padding: 12px 10px 12px 10px;    font-weight: 400;    font-size: 16px;    cursor: pointer;    border: 0;    border-radius: 999rem;    display: inline-flex;    line-height: 1;    text-decoration: none;    justify-content: center;    transition: background-color .1s;    align-items: center;    font-family: var(--font-heading);    text-align: center;}html body .eg-fundin_focus .eg-data {    display: flex;    flex-direction: row;    justify-content: space-between;    border-top: 1px solid #F0EDEB;    border-bottom: 1px solid #F0EDEB;    padding: 10px 0px;}html body .eg-fundin_focus .eg-data p {    color: #5F5964;    font-family: "Rund Text";    font-size: 12px;    font-style: normal;    font-weight: 500;}html body .eg-fundin_focus .eg-data span {    color: #000;    font-family: "Rund Text";    font-size: 14px;    font-style: normal;    font-weight: 500;    margin-left: 5px;}html body .eg-fundin_focus .eg-investwithus {    background: rgb(var(--color-orange));    color: #fff;}html body .eg-fundin_focus .eg-investwithus:hover {    background: rgb(var(--color-orange-light));}html body .eg-fundin_focus .eg-learnmore {    color: rgb(var(--color-tinted-black))}#section-3>div:last-of-type {    overflow: visible !important;}html body .eg-fundin_focus .eg-ctas a span {    transform: rotate(90deg);    margin-left: 5px;}html body .eg-fundin_focus .eg-ctas a svg {    width: 14px;}html body .eg-fundin_focus {    display: flex;    flex-direction: column;    grid-gap: 20px;    position: relative;}html body .eg-fundin_focus .eg-graph {    position: absolute;    top: -205px;    left: -58px;}html body #section-3 .swiper-wrapper .fund-link .grow {    flex-grow: unset !important;}#section-3>div:last-of-type .swiper-slide>a>div {    display: flex;    flex-direction: column;    justify-content: space-between;}@media only screen and (max-width:767px) {    html body .eg-fundin_focus .eg-ctas a {        padding: 1rem 1.4rem !important;    }    html body #section-3 .swiper-wrapper .fund-link {        padding-bottom: 100% !important;    }}@media only screen and (max-width:560px) {    html body #section-3 .swiper-wrapper .fund-link {        padding-bottom: 80% !important;    }    html body .eg-fundin_focus .eg-graph {        width: 100% !important;    }}@media only screen and (min-width:767px) {    html body #section-3 .swiper-wrapper .fund-link {        padding-bottom: 100% !important;    }}@media only screen and (min-width:1400px) {    html body .eg-fundin_focus .eg-ctas a {        padding: 12px 20px 12px 20px;    }}@media only screen and (min-width:385px) and (max-width:560px) {    html body .eg-fundin_focus .eg-ctas a {        font-size: 16px !important;    }}@media only screen and (min-width:767px) and (max-width:860px) {    html body .eg-fundin_focus .eg-ctas a {        padding: 12px 10px 12px 10px;        font-weight: 400;        font-size: 12px;    }}@media only screen and (min-width:1280px) and (max-width:1400px) {    #section-3>div:last-of-type .swiper-slide>a {        height: 290px;    }}@media only screen and (max-width:675px) {    html body .eg-fundin_focus .eg-ctas a {        font-size: 12px;    }}@media only screen and (max-width:385px) {    html body .eg-fundin_focus .eg-ctas a {        font-size: 14px !important;    }    #section-3>div:last-of-type .swiper-slide>a {        height: 270px;    }}'));document.head.appendChild(style);
(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    var dataObject = {};

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

    let egstring = `
    <div class="eg-fundin_focus">
    <div class="eg-data">
      <div class='eg-managementcost'>
        <p>Mgmt cost<span>0.04%</span></p>
      </div>
      <div class='eg-return'>
        <p>5Y Return <span>63.95%<span></p>
      </div>
    </div>
    <div class="eg-ctas">
        <a class="eg-investwithus" href="https://www.betashares.com.au/direct/">Invest with us</a>
        or
        <a class="eg-learnmore" href="">View Fund</a>
    </div>
    </div>`;

    function init() {
      fetchData();
      if (!document.querySelector('.eg-fundin_focus')) {
        document.querySelectorAll(' #section-3 .swiper-wrapper .fund-link .grow').forEach(function (e, index) {
          e.insertAdjacentHTML('afterend', egstring);
        });
        document.querySelector('#section-3 .swiper-wrapper > li:nth-child(2) .eg-return span').innerHTML = '155.77%';
        document.querySelector('#section-3 .swiper-wrapper > li:nth-child(3) .eg-return span').innerHTML = '134.39%';
        document.querySelector('#section-3 .swiper-wrapper > li:nth-child(4) .eg-return span').innerHTML = '43.23%';
      }
      var fundLinks = document.querySelectorAll('html body #section-3 .swiper-wrapper .fund-link');
      var hrefArray = [];
      fundLinks.forEach(function (link) {
        hrefArray.push(link.getAttribute('href'));
      });
      var learnMoreLinks = document.querySelectorAll('.eg-learnmore');
      learnMoreLinks.forEach(function (link, index) {
        if (hrefArray[index]) {
          link.setAttribute('href', hrefArray[index]);
        }
      });
      var fundLinks = document.querySelectorAll('html body #section-3 .swiper-wrapper .fund-link');
      fundLinks.forEach(function (link) {
        link.removeAttribute('href');
      });
      getText();
    }

    function getText() {
      var fundtext = document.querySelectorAll('html body #section-3 .swiper-wrapper .fund-link .items-start > div:first-child');
      var text = [];
      fundtext.forEach(function (e) {
        text.push(e.innerText);
      });
      var investwithus = document.querySelectorAll('.eg-investwithus');
      investwithus.forEach(function (element, index) {
        var currentHref = element.getAttribute('href');
        if (index < text.length) {
          var newHref = currentHref + "get/?symbol=" + text[index];
          element.setAttribute('href', newHref);
        }
      });
    }

    async function fetchData() {
      const urls = [
        "https://www.betashares.com.au/fund/australia-200-etf/",
        "https://www.betashares.com.au/fund/nasdaq-100-etf/",
        "https://www.betashares.com.au/fund/global-sustainability-leaders-etf/",
        "https://www.betashares.com.au/fund/diversified-all-growth-etf/"
      ];

      const promises = urls.map(async (url, index) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
          }
          const html = await response.text();
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const data = doc.querySelector('.fund-mod-profile tbody tr:nth-child(3) > td:last-child').textContent.trim();
          updateElement(data, index + 1);
        } catch (error) {
          console.error(error);
        }
      });

      await Promise.all(promises);
    }

    function updateElement(data, index) {
      const costSpan = document.querySelector(`#section-3 .swiper-wrapper > li:nth-child(${index}) .eg-managementcost span`);
      if (costSpan) {
        costSpan.innerText = data;
      }
    }

    waitForElement('html body #section-3 .swiper-wrapper .fund-link .grow', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
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

    function init() {
      live('#section-3 .swiper-slide ', 'click', function () {
        console.log('Clicks Tile Funds in Focus Tile (control)')
      });

      live('.eg-investwithus', 'click', function () {
        console.log('Clicks "Invest" CTA on tile (variant)')
      });

      live('.eg-learnmore', 'click', function () {
        console.log('Clicks "learn more" CTA on tile (variant)')
      });

      live('a[href*="/files/factsheets/"]', 'click', function () {
        console.log('Clicks “Factsheet Download" - Sitewide')
      });
      live('.fund-mod-buttons .buy-link', 'click', function () {
        console.log('Clicks “Invest” - Sitewide')
      });
    }

    waitForElement('html body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();



})();
/*fecli-injected JavaScript*/