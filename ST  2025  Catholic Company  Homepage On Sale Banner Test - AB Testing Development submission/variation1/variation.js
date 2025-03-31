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

    const banner =
    `<div class="eg-saleBanner">
      <div class="eg-banner-image">
       </div>
       <div class="eg-banner-content">
        <h4>Faithful Finds,<br> Unbeatable Prices</h4>
        <a href="https://www.catholiccompany.com/shop?rows=40&start=0&custom_On_Sale_uFilter=isOnSale&search_query=*" class="eg-button">ON SALE</a>
        </div>
    </div>`;

    function init() {
      document.body.classList.add('EG-SALE-BANNER');
      const categoryElem = document.querySelector('.featured-categories .container>div:last-child');
      if (categoryElem &&!document.querySelector('.eg-saleBanner')) {
        categoryElem.insertAdjacentHTML('afterend', banner);
      }
    }

    /* Initialize variation */
    waitForElement('.featured-categories .container>div:last-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
