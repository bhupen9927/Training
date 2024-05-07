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

        const cards = document.querySelectorAll('[class*="cardWrapper"]');

        cards.forEach(card => {
            const pictureWrapper = card.querySelector('[class*="pictureWrapper"]');

            const newDiv = document.createElement('div');
            newDiv.classList.add('button-wrapper');

            const quoteButton = document.createElement('a');
            quoteButton.classList.add('quote-button');
            quoteButton.setAttribute('href', 'https://www.regus.com/en-gb/get-a-quote?locationid=5164&locationname=farringdon-5164&ws=office-space');
            quoteButton.textContent = "Get a quote";

            const readMoreButton = document.createElement('a');
            readMoreButton.classList.add('learn-more-button');
            readMoreButton.textContent = "Learn more";

            newDiv.appendChild(quoteButton);
            newDiv.appendChild(readMoreButton);

            pictureWrapper.appendChild(newDiv);
        });

    }

    /* Initialize variation */
    waitForElement('[class*="cardWrapper"]', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


