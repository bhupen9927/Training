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

    const bestSeller=
        `<a class="eg-bestseller" title="Best Seller" href="https://www.vacation.inc/collections/all">
            <span>Best Seller</span>
        </a>`


    /* Variation Init */
    function init() {
     const menu=document.querySelector('.order-wrapper');
     if(menu){
      menu.insertAdjacentHTML('afterbegin', bestSeller);
     }
    }

    /* Initialize variation */
    waitForElement('', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


