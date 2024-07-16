(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;

    /* Helper function to wait for an element */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document.querySelector(selector)) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);

      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    const card = `
      <div class="eg-sweet-card">
        <div class="eg-sweet-reviews">
          <span><img src="https://i.ibb.co/SRhV6Jh/stars-1.png"></span>
          <span>+200.000 clients</span>
        </div>
        <div class="eg-sweet-heading">
          <h4>BLACK FRIDAY</h4>
          <p>-30% avec le code: BF30</p>
        </div>
        <a>J’EN PROFITE</a>
      </div>`;

    const banner = `
      <div class="eg-sweet-banner">
        <div class="eg-sweet-image">
          <img src="https://i.ibb.co/tZDRFYf/Frame.png">
        </div>
        <div class="eg-sweet-text">
          <p>“Je ne peux plus me passer de mon sweetplaid”</p>
          <span>-Florence</span>
        </div>
        <p>Notée <strong>4.1</strong> sur 5 sur la base de 5578 avis</p>
      </div>`;

    /* Initialization function */
    function init() {
      const cardClass = ".eg-sweet-card";
      const bannerClass = ".eg-sweet-banner";

      if (!document.querySelector(cardClass) && !document.querySelector(bannerClass)) {
        const bannerWrappers = document.querySelectorAll('[data-section-id="banner"] a .rimage-outer-wrapper > .rimage-wrapper');

        bannerWrappers.forEach(wrapper => {
          wrapper.insertAdjacentHTML("afterbegin", card);
        });

        const bannerSection = document.querySelector('#MainContent #shopify-section-banner .banner-section');
        bannerSection.insertAdjacentHTML("afterend", banner);
      }
    }


    /* Initialize variation */
    waitForElement('[data-section-id="banner"] a .rimage-outer-wrapper > .rimage-wrapper', init, 50, 15000);
    waitForElement('#MainContent #shopify-section-banner .banner-section', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
