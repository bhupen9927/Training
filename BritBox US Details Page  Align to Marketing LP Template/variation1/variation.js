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
        `<div class="eg-hero-container">
          <div class="eg-bg-paradise">
            <div class="eg-hero-wrapper">
              <a class="eg-watch-cta" href="#"> Start Watching Now</a>
              <p class="eg-hero-content">Free 7-day trial, then just $8.99/month or $89.99/year</p>
            </div>
          </div>
        </div>
        
        <div class="eg-image-container">
          <div class="eg-image-gallery">
            <div class="eg-img-wrapper eg-left-images">
              <img class="eg-big-img eg-bigls-img eg-bigup-img" src="https://i.ibb.co/wzr0LjM/Image-13.png">
              <div class="eg-rg-imgs">
                <img class="eg-sm-img eg-smup-img" src="https://i.ibb.co/r6gqfqk/Image-14.png">
                <img class="eg-sm-img" src="https://i.ibb.co/yQq3CJb/Image-15.png">
              </div>
            </div>
            <div class="eg-img-wrapper eg-right-images">
              <img class="eg-big-img eg-bigls-img eg-biglw-img" src="https://i.ibb.co/PMTp2zM/Image-16.png">
              <div class="eg-rg-imgs">
                <img class="eg-sm-img eg-smup-img" src="https://i.ibb.co/d2rHCCh/Image-17.png">
                <img class="eg-sm-img" src="https://i.ibb.co/qN9L39g/Image-18.png">
              </div>
            </div>
          </div>
        </div>`;


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


