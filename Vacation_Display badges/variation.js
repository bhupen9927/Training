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



    /* Variation Init */
    function init() {
        const targetElement = document.querySelector('.mxa > a[href="/products/shake-shake-spf-50-mineral-milk"]');
        const newElement = document.createElement('div');
        newElement.className = 'eg-best-seller'; 
        newElement.innerHTML = '<span class="eg-bestSeller-text">Best Seller</span>'; 

        targetElement.insertAdjacentElement('afterend', newElement);
    }

    /* Initialize variation */
    waitForElement('.mxa > a[href="/products/shake-shake-spf-50-mineral-milk"]', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


