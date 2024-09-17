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

    const boxes = `<div class="eg-box-container">
            <div class="eg-box">
                <img src="https://www.bellaandduke.com/wp-content/uploads/2024/05/Group-10.png">
            </div>
            <div class="eg-box">
                <img src="https://www.bellaandduke.com/wp-content/uploads/2024/05/Group-11.png">
            </div>
            <div class="eg-box">
                <img src="https://www.bellaandduke.com/wp-content/uploads/2024/05/Group-12.png" >
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
        </div>`;

    /* Variation Init */
    function init() {
      const inner = document.querySelector(
        '[data-elementor-type="single-post"] > .elementor-element:nth-child(2) .e-con-inner'
      );
      if (inner) {
        inner.insertAdjacentHTML("beforeend", boxes);
      }
    }

    if (window.location.pathname === "/lp/432mb/") {
      document.body.classList.add("eg-background");
    }

    if (
      window.location.href.indexOf("/432-off-raw-and-natural-dog-food") !==
        -1 ||
      window.location.href.indexOf("/432-natural-raw-dog-food") !== -1 ||
      window.location.href.indexOf("/432-off-raw-puppy-food") !== -1 ||
      window.location.href.indexOf("/432mb") !== -1
    ) {
      waitForElement(
        '[data-elementor-type="single-post"] > .elementor-element:nth-child(2) .e-con-inner',
        init,
        50,
        15000
      );
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
