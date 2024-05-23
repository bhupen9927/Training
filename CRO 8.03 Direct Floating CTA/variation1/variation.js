(function () {
  try {
    /* main variables */
    var debug = 0; // Set to 1 for debugging
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

    const betaDirect =
      `<div class="eg-beta-direct">
          <div class="eg-beta-content">
              <h2 class="eg-beta-heading">Betashares Direct</h2>
              <p class="eg-beta-subheading">Better investing starts here</p>
          </div>
          <div class="eg-learn-cta">
              <a class="eg-learn-more" href="https://www.betashares.com.au/direct"> Learn more</a>
          </div>
          <img id="setItemButton" class="eg-close" src="https://i.ibb.co/xMmZZYT/close-icon.png">
      </div>`;

    /* Variation Init */
    function init() {
      if (!sessionStorage.getItem('myKey')) {
        document.body.insertAdjacentHTML("beforeend", betaDirect);
        document.getElementById('setItemButton').addEventListener('click', function() {
          document.querySelector('.eg-beta-direct').style.display = 'none';
            const key = 'myKey';
            const value = 'true';
            sessionStorage.setItem(key, value);
        });
      } else {
        if (debug) console.log('Banner is closed for this session');
      }
    }

    /* Initialize variation */
    waitForElement('html body', init, 1000, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
