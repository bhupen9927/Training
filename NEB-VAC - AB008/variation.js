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

    const productBlock = document.querySelector('.product-single__meta > div:nth-child(2) > .product-block:nth-child(1) .product__policies');

    if (!productBlock) {
        console.error("Error: '.product__policies' element not found.");
    } else {
        const sizeInfoLink = document.createElement('a');
        sizeInfoLink.href = '#';
        sizeInfoLink.textContent = 'Size chart';
        sizeInfoLink.classList.add('size-info-link');

        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("width", "13");
        svgIcon.setAttribute("height", "13");
        svgIcon.setAttribute("viewBox", "0 0 13 13");
        svgIcon.classList.add('svg-icon-size');
        svgIcon.innerHTML = '<path d="M6.5 3.45055V3.44444M6.5 9.55556V5.27778M12 6.5C12 9.53759 9.53759 12 6.5 12C3.46244 12 1 9.53759 1 6.5C1 3.46244 3.46244 1 6.5 1C9.53759 1 12 3.46244 12 6.5Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"></path>';

        productBlock.parentNode.insertBefore(sizeInfoLink, productBlock.nextSibling);
        productBlock.parentNode.insertBefore(svgIcon, productBlock.nextSibling);

        sizeInfoLink.addEventListener('click', function(event) {
            event.preventDefault();
            openPopup();
        });

        svgIcon.addEventListener('click', function(event) {
            event.preventDefault();
            openPopup();
        });

        function openPopup() {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);

            const popup = document.createElement('div');
            popup.id = 'size-info-popup';
            popup.classList.add('popup');
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-popup">&times;</span>
                    <p class="popup-text-bold">Regular — Fits Most (Small to Large)</p>
                    <p>This bracelet is designed to fit most wrists, with an adjustable size ranging from 16 CM (6") to 19 CM (7.5"). It comes with a 2 CM (1") extension chain that can be used to increase the length up to 20 CM (8"). If you're unsure about your size, this bracelet will fit the majority of our customers.</p>
                    <p class="popup-text-bold">Extra Large (Fits XL–XXL)</p>
                    <p>This bracelet is designed to fit wrists measuring between 19 CM (7") – 21 CM (8.5"). The bracelet measures around 20 CM (7.5") without the extension chain, but it can be extended up to 22 CM (8.5") with the 2 CM (1") extension chain.</p>
                    <p class="popup-text-bold">Extra Small (Fits XXS–XS)</p>
                    <p>This bracelet is designed to fit wrists that measure between 13 CM (5") – 16 CM (6.5"). The bracelet measures around 15 CM (6") without the extension chain, but can be extended up to 17 (7") with the 2 CM (1") extension chain.</p>
                    <p>Read more on the Details Tab on each product page.</p>
                </div>
            `;
            document.body.appendChild(popup);

            const closePopupButton = popup.querySelector('.close-popup');
            closePopupButton.addEventListener('click', function() {
                document.body.removeChild(popup);
                document.body.removeChild(overlay);
            });

            overlay.addEventListener('click', function(event) {
                if (event.target === overlay) {
                    document.body.removeChild(popup);
                    document.body.removeChild(overlay);
                }
            });
        }
    }

    }

    /* Initialize variation */
    waitForElement('.product-single__meta > div:nth-child(2) > .product-block:nth-child(1) .product__policies', init, 50, 15000);
    console.log("code executed");
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();