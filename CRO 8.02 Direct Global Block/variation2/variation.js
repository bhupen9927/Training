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

    const qrBlock=`
        <div class="eg-get-block">
            <div class="eg-qr-block">
              <div class="eg-qr-container">
                <img src="data:image/png;base64,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"
                loading="lazy" id="get-qr" alt="" class="eg-get-qr" height="256" width="256">
              </div>
              <div class="eg-get-container">
                <h1 class="eg-qr-heading">Better investing starts here</h1>
                <h2 class="eg-qr-subheading">Get Betashares Direct</h2>
                <p class="eg-qr-link">Scan the code to download.  </p>                              
              </div>
            </div>
          <div class="eg-hide-desktop">
            <a id="get-action-hero" href="https://links.betashares.com.au/get" class="eg-rl-button eg-mobile-get-button eg-w-button">Get Betashares Direct</a>
          </div>
          <div class="eg-badge-pair">
            <a href="https://links.betashares.com.au/ios?route_source=https%3A%2F%2Fwww.betashares.com.au%2Fdirect&amp;anonymousId=4556725d-96f7-451b-bdd0-73caa0e70cf5" class=" eg-w-inline-block">
            <div class="eg-hide-mobile">
              <img src="https://assets-global.website-files.com/6602665aa19f921db8b50964/660269fc045be7df082fc178_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917%201_short.png" loading="lazy" alt="" class="eg-app-badge-2">
            </div></a>
            <a href="https://links.betashares.com.au/android?route_source=https%3A%2F%2Fwww.betashares.com.au%2Fdirect&amp;anonymousId=4556725d-96f7-451b-bdd0-73caa0e70cf5" class=" eg-w-inline-block">
              <div class="eg-hide-mobile">
                <img src="https://assets-global.website-files.com/6602665aa19f921db8b50964/660269ead12a2a31ad232cfc_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917%202.png" loading="lazy" alt="" class="eg-app-badge-2">
              </div>
            </a>
          </div>
        </div>`

    /* Variation Init */
    function init() {
        if(window.innerWidth > 767){
            const sideBar = document.querySelector('.related-articles');
            if (sideBar) {
                sideBar.insertAdjacentHTML('afterend', qrBlock);
            }
        }
        else if(window.innerWidth < 767){
            const leaveReply= document.querySelector('.explore + section');
            if(leaveReply){
                leaveReply.insertAdjacentHTML('afterend',qrBlock);
            }
        }
    }

    /* Initialize variation */
    waitForElement('.related-articles', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

