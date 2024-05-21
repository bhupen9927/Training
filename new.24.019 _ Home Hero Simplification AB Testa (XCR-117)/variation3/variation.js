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

    var heroSection = `
    <div class="eg-hero-section">
    <div class="eg-hero-container">
      <img src="https://assets-manager.abtasty.com/a61571af9fa8da96a89e3a6892373b7d/hero_image.png"></img>
      <div class="eg-right-content">
        <h2>Save Big on Favorite Car Seats!</h2>
        <p>Get <b>20% Off 4Ever® DLX 4-in-1 and 4Ever® DLX Grad 5-in-1 Slim or 25% Off Turn2Me™ 3-in-1 Rotating Car Seats</b> to help your little one ride in safe comfort for years to come.</p>
        <div class="eg-ctas">
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/4ever-dlx-4-in-1-car-seat/SAP_2074900.html">Shop 4Ever DLX</a>
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/4ever-dlx-grad-5-in-1-slim-car-seat/SAP_2191333.html">Shop 4Ever DLX Grad</a>       
          <a href="https://www.gracobaby.com/car-seats/toddler-car-seats/all-in-one-car-seats/turn2me-3-in-1-rotating-car-seat/SAP_2204044.html">Shop Turn2Me</a>
        </div>
      </div>
      </div>
    </div>`;

    /* Variation Init */
    function init() {
      if (!document.querySelector('.eg-hero-section')) {
        document.querySelector('.storepage > div >.container-fluid > div').insertAdjacentHTML("afterbegin", heroSection)
      }
    }


    /* Initialize variation */
    waitForElement('.storepage > div >.container-fluid > div', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
