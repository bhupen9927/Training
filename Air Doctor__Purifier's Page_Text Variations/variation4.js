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
            AD3500_desc.innerHTML = `Our most popular model. Powerful enough to protect the air in bedrooms, living rooms, kitchens. Circulates the air 5x/hour in a 504 sq. ft. space (as recommended by the CDC to effectively remove allergens like smoke, bacteria, viruses, dust, and pollen).`;
        }

        const AD2000_desc = document.querySelector(".section-content > section:nth-of-type(2) .product_specification_wrapper > div:nth-of-type(2)");
        if (AD2000_desc) {
            AD2000_desc.innerHTML = `AirDoctor 2000 provides powerful purification for small rooms, medium/small bedrooms, nurseries, and home offices. Circulates the air 5x/hour in 243 sq. ft. space (as recommended by the CDC to effectively remove allergens like smoke, bacteria, viruses, dust, and pollen).`;
        }

        const AD5500_desc = document.querySelector(".section-content > section:nth-of-type(3) .product_specification_wrapper > div:nth-of-type(2)");
        if (AD5500_desc) {
            AD5500_desc.innerHTML = `AirDoctor 5500 is our most powerful and quietest purifier. It is perfect for extra large spaces, high ceilings and open concepts. Circulates the air 5x/hour in a 834 sq. ft. space (as recommended by the CDC to effectively remove allergens like smoke, bacteria, viruses, dust, and pollen).`;
        }

        const AD1000_desc = document.querySelector(".section-content > section:nth-of-type(4) .mob-hide-heading >div:nth-of-type(1)");
        if (AD1000_desc) {
            const newText = `Small and mighty purification that’s perfect for small bedrooms, nurseries, home offices, and laundry rooms. Circulates the air 5x/hour in a 228 sq. ft. space (as recommended by a Harvard University Study cited by the CDC to effectively remove allergens like smoke, bacteria, viruses, dust, and pollen). `;
            AD1000_desc.innerHTML = `<h5>"THE SMALL AND MIGHTY TOWER"</h5>${newText}`;
        }

    }

    /* Initialize variation */
    waitForElement('.section-content > section:nth-of-type(1) .product_specification_wrapper > div:nth-of-type(1)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();