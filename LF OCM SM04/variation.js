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

    const banner=`
        <div class="eg-banner-container">
            <img class="eg-left-img" src="https://i.ibb.co/Gxb47xR/Ornament-LARP-5.png">
            <div class="eg-banner-icon">
                <img class="eg-banner-image" src="https://i.ibb.co/3TV8j5b/fluent-emoji-high-contrast-sewing-needle.png" >
                <div>
                    <p class="eg-icon-heading" >Lederwerkstatt & Schneiderei</p>
                    <p class="eg-icon-content" >Wir fertigen mit Sorgfalt vor Ort</p> 
                </div>
            </div> 
            <div class="eg-banner-icon">
                <img src="https://i.ibb.co/3fh9DdW/game-icons-travel-dress.png" >
                <div>
                    <p class="eg-icon-heading" >Fantasievolle Komplettkostüme</p>
                    <p class="eg-icon-content" >Mit Liebe von uns zusammengestellt</p> 
                </div>
            </div> 
            <div class="eg-banner-icon">
                <img src="https://i.ibb.co/L6W7pKj/Mask-group.png">
                <div>
                    <p class="eg-icon-heading" >Eigene, moderne Stickerei</p>
                    <p class="eg-icon-content" >Mach dein Gewand zum Einzelstück</p> 
                </div>
            </div>
            <img class="eg-right-img" src="https://i.ibb.co/yVrtfgV/Ornament-LARP-4.png"       
        </div>`

    /* Variation Init */
    function init() {
      const nav= document.querySelector('.navigation-main');
      if(nav){
        nav.insertAdjacentHTML('afterend', banner);
      }
    }

    /* Initialize variation */
    waitForElement('.navigation-main', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


