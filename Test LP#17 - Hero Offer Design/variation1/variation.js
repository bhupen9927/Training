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

    const boxes=
        `<div class="eg-box-container">
            <div class="eg-box">
                <img src="https://i.ibb.co/TvcrXFN/Frame-32.png">
            </div>
            <div class="eg-box">
                <img src="https://i.ibb.co/Dw74jyG/Frame-31.png">
            </div>
            <div class="eg-box">
                <img src="https://i.ibb.co/4NggWPx/Frame-30.png" >
            </div>
        </div>
        <div class="eg-hero-box-content">
            <p class="eg-hero-content">3 boxes full of fresh, natural, and nutritious food</p>
        </div>
        <div class="eg-button">
            <a class="eg-order-cta" href="https://hello.bellaandduke.com/">Order Now</a>
        </div>
        <div class="eg-cancel">
            <p class="eg-cancel-content">No tie-in: Cancel any time</p>
        </div>`

    /* Variation Init */
    function init() {
        const inner=document.querySelector('[data-elementor-type="single-post"] > .elementor-element:nth-child(2) .e-con-inner');
        if(inner){
            inner.insertAdjacentHTML('beforeend', boxes);
        }
    }

    /* Initialize variation */
    waitForElement('[data-elementor-type="single-post"] > .elementor-element:nth-child(2) .e-con-inner', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


