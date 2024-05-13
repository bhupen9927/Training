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

    const homePage = `
      <div class="eg-main">
        <div class="eg-container">
          <div class="eg-hero-section">
            <h2 class="eg-hero-heading">Ready to Breathe Cleaner, Healthier Air?</h2>
            <p class="eg-hero-content">Say Goodbye to 99.99% of Airborne Allergens, Viruses and Smoke!</p>
            <p class="eg-checkpoints"> <img class="eg_check_icon" src="https://i.ibb.co/Tr5st0m/icons8-check-24.png">Eliminate dangerous ozone, odor, and gases</p>
            <p class="eg-checkpoints"> <img class="eg_check_icon"  src="https://i.ibb.co/Tr5st0m/icons8-check-24.png">Maximize comfort and productivity with ultra-quiet performance.</p>
            <p class="eg-checkpoints"> <img class="eg_check_icon"  src="https://i.ibb.co/Tr5st0m/icons8-check-24.png">Manage air quality on-the-go with smart connectivity.</p>
            <div class="eg-cta-container">
              <a class="eg-shop-cta eg-button" href="https://airdoctorpro.com/purifiers/">Shop Purifiers</a>
              <a class="eg-filter-cta eg-button" href="https://airdoctorpro.com/store/">Replacement Filters</a>
             </div>
          </div>
          <div class="eg-image-container">
          <div>
            <img class="eg-air1-img" src="https://i.ibb.co/kKT9YQ6/951c3ad1a70f40219fce3babdbd492c9-1-png-1.png">
            <img class="eg-air2-img" src="https://i.ibb.co/ZBWPX6n/7d49ca6aa07342d6b56cadd947215381-1-png.png">
            <img class="eg-air3-img" src="https://i.ibb.co/WB7HD9X/0e603da928c94391aefcb48187307c21-1-png.png">
            <img class="eg-air4-img" src="https://i.ibb.co/nmwmnP5/fad15ecd33cf4734ba10000803d9c94f-1-png.png">
          </div>
          <div class="eg-air-shadow">
              <img src="https://i.ibb.co/HYjXBL6/Ellipse-1.png">
          </div>
        </div>
      </div>
     </div>`;


    /* Variation Init */
    function init() {
        const targetElement = document.querySelector('#content .banner-section:nth-child(1) .slider');
            if (targetElement) {
                targetElement.insertAdjacentHTML('afterend', homePage);
            } 
        const trustLine=document.querySelector('.logo-section .section-content .text');
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
    waitForElement('#content .banner-section:nth-child(1) .slider', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


