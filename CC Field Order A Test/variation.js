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
      const nameInput = document.querySelector('input[name="dwfrm_billing_creditCardFields_cardOwner"]');
      const cardNumberInput = document.querySelector('#cardNumber-container');

      if (nameInput && cardNumberInput) {
        const nameInputParent = nameInput.parentNode.parentNode;
        const cardNumberInputParent = cardNumberInput.parentNode.parentNode;
        nameInputParent.insertBefore(cardNumberInput.parentNode, nameInputParent.firstChild);
        cardNumberInputParent.insertBefore(nameInput.parentNode, cardNumberInputParent.firstChild);

      // adding style for maintain the space between cardholdername and card number
      nameInputParent.style.marginBottom = '10px'; 
}
    }

    /* Initialize variation */
    waitForElement('body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


