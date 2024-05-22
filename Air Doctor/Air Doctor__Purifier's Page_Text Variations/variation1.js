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
      
        const AD3500_desc = document.querySelector(".section-content > section:nth-of-type(1) .product_specification_wrapper > div:nth-of-type(1)");
        if (AD3500_desc) {
            AD3500_desc.innerHTML = `Our most popular model. Powerful enough to protect the air in <b>bedrooms, living rooms, kitchens.</b> Circulates the air in <b>630 sq. ft. 4x/hour or in 1,260 sq. ft. 2x/hour.</b>`;
        }

        const AD2000_desc = document.querySelector(".section-content > section:nth-of-type(2) .product_specification_wrapper > div:nth-of-type(2)");
        if (AD2000_desc) {
            AD2000_desc.innerHTML = `AirDoctor 2000 provides powerful purification for <b>small rooms, medium/small bedrooms, nurseries,</b> and <b>home offices.</b> It circulates the air in <b>305 sq. ft. 4x/hour or in 610 sq. ft. 2x/hour.</b>`;
        }

        const AD5500_desc = document.querySelector(".section-content > section:nth-of-type(3) .product_specification_wrapper > div:nth-of-type(2)");
        if (AD5500_desc) {
            AD5500_desc.innerHTML = `AirDoctor 5500 is our most <b>powerful and quietest purifier.</b> It is perfect for <b>extra large spaces, high ceilings and open concepts.</b> Circulates the air in <b>1,001 sq. ft. 4x/ hour or in 2,001 sq. ft. 2x/hour.</b>`;
        }

        const AD1000_desc = document.querySelector(".section-content > section:nth-of-type(4) .mob-hide-heading >div:nth-of-type(1)");
        if (AD1000_desc) {
            const newText = `Small and mighty purification that’s perfect for <b>small bedrooms, nurseries, home offices, and laundry rooms.</b> It circulates the air in <b>285 sq. ft. 4x/hour or in 570 sq. ft. 2x/hour.</b>`;
            AD1000_desc.innerHTML = `<h5>"THE SMALL AND MIGHTY TOWER"</h5>${newText}`;
        }

    }

    /* Initialize variation */
    waitForElement('.section-content > section:nth-of-type(1) .product_specification_wrapper > div:nth-of-type(1)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();