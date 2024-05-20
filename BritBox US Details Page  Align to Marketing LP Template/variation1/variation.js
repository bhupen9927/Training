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


    const heroSection=
        `<div class="eg-container">
            <div clas="eg-hero-section">
                <div class="eg-hero-container">
                    <div class="eg-bg-paradise">
                      <img class="eg-hero-season" src="https://i.ibb.co/PcDy4r4/season13-Sticky.png">
                      <a class="eg-watch-cta" href="#"> Start Watching Now</a>
                      <p class="eg-hero-content">Free 7-day trial, then just $8.99/month or $89.99/year</p>
                    </div>
                </div>
            </div>
        </div>`


    /* Variation Init */
    function init() {
        const main = document.querySelector('.main-content');
        if (main) {
            main.insertAdjacentHTML('afterbegin', heroSection);
        }
    }

    /* Initialize variation */
    waitForElement('.main-content', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


