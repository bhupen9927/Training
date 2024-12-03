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

    const ingredients =
      `<div class="eg-container eg-ingredients">
        <h2 class="eg-heading">Made With 100% All-Natural Ingredients</h2>
        <div class="eg-product-container">
            <img class="eg-product-img" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/product_-image.png?v=1730714830" alt="Product Image" class="product-image">
            
            <div class="eg-label eg-label-top-left">
                <span class="eg-arrow-text">100% Natural Ingredients</span>
                <img class="eg-arrow eg-top-left eg-arr-desk" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/Frame_1171274880.png?v=1730714829" alt="Arrow">
                <img class="eg-arrow eg-arr-mob" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/mobile_arrow.png?v=1730714829" alt="Arrow">
            </div>
            <div class="eg-label eg-label-bottom-left">
                <span class="eg-arrow-text">With Turmeric, Sea Salt, <br> Alpha Arbutin, Vitamin C</span>
                <img class="eg-arrow eg-bottom-left eg-arr-desk" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/arrow.png?v=1730714829" alt="Arrow">
                <img class="eg-arrow eg-arr-mob" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/mobile_arrow.png?v=1730714829" alt="Arrow">
            </div>
            <div class="eg-label eg-label-top-right">
                <span class="eg-arrow-text">No Parabens, Sulfates, <br> Alcohol, Aluminum Salts</span>
                <img class="eg-arrow eg-top-right eg-arr-desk" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/arrow.png?v=1730714829" alt="Arrow">
                <img class="eg-arrow eg-arr-mob" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/mobile_arrow.png?v=1730714829" alt="Arrow">
            </div>
            <div class="eg-label eg-label-bottom-right">
                <span class="eg-arrow-text">Incredible Antioxidant & <br> Anti-Inflammatory Superfoods</span>
                <img class="eg-arrow eg-bottom-right eg-arr-desk" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/arrow.png?v=1730714829" alt="Arrow">
                <img class="eg-arrow eg-arr-mob" src="https://cdn.shopify.com/s/files/1/0629/1950/8199/files/mobile_arrow.png?v=1730714829" alt="Arrow">
            </div>
        </div>
    </div>`;

    function init() {
      document.body.classList.add('AB-048');
      if (!document.querySelector('.eg-ingredients')) {
        const review = document.querySelector('.reviewCustomMain');
        if (review) {
          review.insertAdjacentHTML('afterend', ingredients);
        }
      }
    }

    /* Initialize variation */
    waitForElement('.reviewCustomMain', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
