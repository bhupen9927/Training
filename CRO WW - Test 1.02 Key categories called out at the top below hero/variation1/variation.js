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

    const newSection=
        `<div class="eg-image-container"
            <div class="eg-image-wrapper">
                <div class="eg-image-tile eg-image-one">
                    <h2 class="eg-title"> Dinner Sets</h2>
                    <a class="eg-cta" href="https://www.wedgwood.com.au/tableware/dinner-sets/">Shop Dinner Sets</a>
                </div>
                <div class="eg-image-tile eg-image-two">
                    <h2 class="eg-title"> Teaware</h2>
                    <a class="eg-cta" href="https://www.wedgwood.com.au/teaware-tea/">Shop Teaware</a>
                </div>
                <div class="eg-image-tile eg-image-three">
                    <h2 class="eg-title"> Gifting</h2>
                    <a class="eg-cta" href="https://www.wedgwood.com.au/GIFTING/">Shop Gifting</a>
                </div>
                <div class="eg-image-tile eg-image-four">
                    <h2 class="eg-title"> Promotions</h2>
                    <a class="eg-cta" href="https://www.wedgwood.com.au/promotion/">Shop Promotions</a>
                </div>
            </div>
        </div>`;



    /* Variation Init */
    function init() {   
      const hero = document.querySelector('.welcome-cell >div:first-child');
      if(hero && !document.querySelector('.eg-image-container')){
        hero.insertAdjacentHTML('afterend', newSection);
      }
    }

    /* Initialize variation */
    waitForElement('.welcome-cell >div:first-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();




