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
  const heroBanner = `
  <div class="eg-hero-section">
    <div class="eg-inner-container">
      <div class="eg-right-content">
        <h2>Ready to Breathe Cleaner, Healthier Air?</h2>
        <p>Say Goodbye to 99.99% of Airborne Allergens, Viruses and Smoke!</p>
        <div class="eg-hero-ctas">
          <a class="eg-purifiers" href="https://airdoctorpro.com/purifiers/">Shop Purifiers</a>
          <a class="eg-filters" href="https://airdoctorpro.com/store/">Replacement filters</a>
         </div>
      </div>
    </div>`;


    /* Variation Init */
    function init() {
      if(!document.querySelector('.eg-hero-section')){
        document.querySelector('#content .banner-section:first-child').insertAdjacentHTML("afterbegin", heroBanner);
      }
      var logoText = document.querySelector('.logo-section .section-content .text');
      if(logoText){
        logoText.innerText = 'Trusted By Over 200,000 Happy AirDoctor Customers and Featured On';
      }
    }

    /* Initialize variation */
    waitForElement('#content .banner-section:first-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
