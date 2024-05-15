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

    const expertAdvice=
        `<div class"eg-expert-advice">
            <div class="eg-expert-advice-container">
                <h2 class="eg-expertAdvice-heading">Expert Advice</h2>
                <div class="eg-expert-advice-inner">
                    <div class="eg-left-panel">
                        <img src="https://i.ibb.co/vB3YGxR/image-26.png">
                        <h3 class="eg-expert-heading"> How to choose an air Filter  for your home</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">Before you start breathing cleaner, friesher air, get all the setails you need to know to choose the perfect air purifier for your home.</p>
                        <a class="eg-expert-button" href="#" >Learn More</a>
                    </div>
                    <div class="eg-right-panel">
                        <img src="https://i.ibb.co/vB3YGxR/image-26.png">
                        <h3 class="eg-expert-heading">7 health hezards of buying the wrong Air purifier</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">To deal with declining air quality, here are the essential specs to look for in an Air Purifier</p>
                        <a class="eg-expert-button" href="#" >Get the Details Now</a>
                    </div>
                </div>
            </div>
        </div>`



    /* Variation Init */
    function init() {
      const footer = document.querySelector('#footer');
      if(footer){
        footer.insertAdjacentHTML('beforebegin',expertAdvice);
      }
      
    }

    /* Initialize variation */
    waitForElement('#footer', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


