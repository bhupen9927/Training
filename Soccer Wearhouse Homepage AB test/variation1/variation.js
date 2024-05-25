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

    const FAQ = 
        `<div class="eg-faq-section">
            <div class="eg-faq-container">
                <h2 class="eg-faq-hd" >frequently asked questions</h2>
                <div class="eg-accordion">
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">Why is the moon sometimes out during the day?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">Why is the sky blue?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>  
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">Will we ever discover aliens?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">How much does the Earth weigh?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;



    /* Variation Init */
    function init() {
        const footer= document.querySelector('#shopify-section-footer');
        if(footer){
            footer.insertAdjacentHTML('beforebegin', FAQ);
        }
        const items = document.querySelectorAll(".eg-accordion button");
        function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
        }
        items.forEach(item => item.addEventListener('click', toggleAccordion));
    }

    /* Initialize variation */
    waitForElement('#shopify-section-footer', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


