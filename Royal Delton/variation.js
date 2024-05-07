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
      
        const dispatchElement = document.createElement('div');
        dispatchElement.className = 'dispatch-info';

        const dispatchImage = document.createElement('img');
        dispatchImage.src = 'https://svgshare.com/i/13go.svg';
        dispatchImage.alt = 'Dispatch Icon';
        dispatchElement.appendChild(dispatchImage);


        const dispatchText = document.createElement('p');
        dispatchText.textContent = 'DISPATCHED FROM OUR WAREHOUSE WITHIN 2 BUSINESS DAYS';
        dispatchText.className = 'dispatch-text';
        dispatchElement.appendChild(dispatchText);

        const stockReference = document.querySelector('.find-in-store-wrapper');

        stockReference.insertAdjacentElement('afterend', dispatchElement);
    }

    /* Initialize variation */
    waitForElement('.find-in-store-wrapper', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();





