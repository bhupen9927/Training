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
                <h4 class="eg-faq-subhd">Here are some of our most-asked questions</h4>
                <div class="eg-accordion">
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">Do you accept returns?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Yes, we do accept returns. for a refund, the item(s) must be in new and in sellable condition, all apparel items need their original tags. for more information, view our return policy.<br><br> <a class="eg-return-link" href="https://soccerwearhouse.com/pages/returns" >View our return policy </a></p>
                    </div>
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">What is the shipping policy?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>  
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">How can I reach customer service?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Our Online Customer Service Team Can Be Reached Monday-Friday 12-6pm Pst By Phone At (800) 892-6979 (Option 1) Or By Email At Support@Soccerwearhouse.Com. <br><br>  
                          Each Of Our Retail Locations Also Has Their Own Dedicated Phone Line. For More Information, <a href="https://soccerwearhouse.com/pages/contact-us"> Click Here.</a></p>
                    </div>
                    </div>
                    <div class="eg-accordion-item">
                    <button aria-expanded="false"><span class="eg-accordion-title">What are your store locations and hours?</span><span class="eg-icon" aria-hidden="true"></span></button>
                    <div class="eg-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;

    /* Variation Init */
    function init() {
        const footer = document.querySelector('#shopify-section-footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', FAQ);
        }
        const items = document.querySelectorAll(".eg-accordion button");
        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
                items[i].parentNode.classList.remove('expanded');
            }
            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
                this.parentNode.classList.add('expanded');
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
