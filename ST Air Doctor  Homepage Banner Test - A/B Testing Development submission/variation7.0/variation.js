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
        const homePage = `
                    <div class="eg-background">
                        <div class="eg-hero-section">
                            <h2 class="eg-hero-heading">Ready to Breathe Cleaner, Healthier Air?</h2>
                            <p class="eg-hero-content">Say Goodbye to 99.99% of Airborne Allergens, Viruses and Smoke!</p>
                            <div class="eg-cta-container">
                                <a class="eg-shop-cta eg-button" href="https://airdoctorpro.com/purifiers/">Shop Purifiers</a>
                                <a class="eg-filter-cta eg-button" href="https://airdoctorpro.com/">Replacement Filters</a>
                            </div>
                        </div>
                    </div>`;
        const targetElement = document.querySelector('#content>section:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)');
            if (targetElement) {
                targetElement.insertAdjacentHTML('afterend', homePage);
            } 
        const trustLine=document.querySelector('.logo-section >div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)');
            if (trustLine) {  
                const imageLink = 'https://i.ibb.co/RYgVndq/image-3-2.png';
                const imgElement = document.createElement('img');
                imgElement.src = imageLink;
                imgElement.classList.add("eg-trustImg");
                trustLine.insertAdjacentElement('afterend', imgElement);
                const h2Element = trustLine.querySelector("h2");
                if (h2Element) {
                    const newElement = document.createElement("p");
                    newElement.classList.add("eg-trustLine");
                    newElement.textContent = "Trusted By Over 200,000 Happy AirDoctor Customers and Featured On";
                    trustLine.replaceChild(newElement, h2Element);
                } 
            }
    }

    /* Initialize variation */
    waitForElement('#content>section:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


