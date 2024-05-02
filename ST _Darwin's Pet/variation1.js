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
      const woof_meow = document.querySelector('.home-main >div:nth-child(4)');
      const ingrediants = document.querySelector('.home-main >div:nth-child(6)');

      if (woof_meow && ingrediants) {
          woof_meow.insertAdjacentElement('beforebegin', ingrediants);
      }
    }

    /* Initialize variation */
    waitForElement('.home-main >div:nth-child(4)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


