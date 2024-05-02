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
      const anchorTags = document.querySelectorAll('.s-scrollable-feature__btns>a:nth-child(2)');
        anchorTags.forEach(anchorTag => {
            anchorTag.setAttribute('href', 'https://www.altium.com/altium-designer/licensing');
        });

        const anchorTag = document.querySelector('.s-license-type__btns>a:nth-child(2)');
        if (anchorTag) {
            anchorTag.setAttribute('href', 'https://www.altium.com/altium-designer/licensing');
        }
    }

    /* Initialize variation */
    waitForElement('.s-scrollable-feature__btns>a:nth-child(2)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


