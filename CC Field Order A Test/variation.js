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
      const nameInput = document.querySelector('.credit-card-form > div:nth-child(2)');
      const cardNumberInput = document.querySelector('.credit-card-form > div:nth-child(3)');

      if (nameInput && cardNumberInput) {
          nameInput.insertAdjacentElement('beforebegin', cardNumberInput);
      }
    }

    /* Initialize variation */
    waitForElement('.credit-card-form > div:nth-child(2)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


