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

    function init() {
      const manufacturer = document.querySelector('.product-details .manufacturer');
      const productTitle = document.querySelector('.product-details h1');
      if (manufacturer && productTitle) {
        productTitle.insertAdjacentElement('beforebegin', manufacturer);
      }

      const sku = document.querySelector('.sku-stock');
      const desc = document.querySelector('.quantity-row');
      if (sku && desc) {
        desc.insertAdjacentElement('afterend', sku);
      }

      const pay = document.querySelector('.details> .zippay');
      if (pay && desc) {
        desc.insertAdjacentElement('afterend', pay);
      }
      if (!document.querySelector('.eg-new-parent-div')) {
      const zippay = document.querySelector('.details .zippay-desktop');
      const skuStock = document.querySelector('.details .sku-stock');

      if (zippay && skuStock) {
        const parentDiv = document.createElement('div');
        parentDiv.className = 'eg-new-parent-div';

        zippay.parentNode.insertBefore(parentDiv, zippay);
        parentDiv.appendChild(zippay);
        parentDiv.appendChild(skuStock);
      }
      }

      const payLaterTexts = document.querySelector('.details .zippay-desktop .pay-later-with');
      if (payLaterTexts) {
        payLaterTexts.textContent = 'Pay later with';
      }

      const linkElement = document.querySelector('.zippay-desktop a.what-is-zippay');
      if (linkElement) {
        linkElement.innerHTML = '<img src="https://useruploads.vwo.io/useruploads/780970/images/3d7c69ebe17c9b53433b1823a63b18e6_info.png" alt="Info">';
      }

      if (window.innerWidth < 767) {
        const pay = document.querySelector('.details> .zippay');
        const desc = document.querySelector('.quantity-row');
        if (pay && desc) {
          desc.insertAdjacentElement('afterend', pay);
        }
        const linkElement = document.querySelector('.zippay-mobile a.what-is-zippay');
        if (linkElement) {
          linkElement.innerHTML = '<img src="https://useruploads.vwo.io/useruploads/780970/images/3d7c69ebe17c9b53433b1823a63b18e6_info.png" alt="Info">';
        }
        if (!document.querySelector('.eg-new-parent-div')){
        const zippay = document.querySelector('.details .zippay-mobile');
        const skuStock = document.querySelector('.details .sku-stock');
        if (zippay && skuStock) {
          const parentDiv = document.createElement('div');
          parentDiv.className = 'eg-new-parent-div';

          zippay.parentNode.insertBefore(parentDiv, zippay);
          parentDiv.appendChild(zippay);
          parentDiv.appendChild(skuStock);
        }
        }
      }

      const descrDiv = document.querySelector('.details .descr');
      if (descrDiv) {
        const textContent = descrDiv.querySelector('p');
        if (textContent) {
          const originalText = textContent.textContent;
          const truncatedText = originalText.length > 154 ? originalText.substring(0, 154) + '...' : originalText;

          function updateTextContent(isExpanded) {
            if (isExpanded) {
              textContent.textContent = originalText + ' ';
              const readLessLink = document.createElement('a');
              readLessLink.href = '#';
              readLessLink.className = 'read-more';
              readLessLink.textContent = 'Read less';
              textContent.appendChild(readLessLink);
              attachClickListener(readLessLink);
            } else {
              textContent.innerHTML = truncatedText + ' <a href="#" class="read-more">Read more</a>';
              const readMoreLink = textContent.querySelector('.read-more');
              attachClickListener(readMoreLink);
            }
          }

          const headers = document.querySelectorAll("h3.ui-accordion-header");
          headers.forEach(function(header) {
              if (header.textContent.trim() === "Product reviews") {
                  header.style.display = "none";
              }
          });

          function attachClickListener(link) {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              const isExpanded = descrDiv.classList.toggle('expanded');
              updateTextContent(isExpanded);
            });
          }
          updateTextContent(false);
        }
      }
    }

    function observeBodyClass() {

      const targetNode = document.body;
      const config = { attributes: true, attributeFilter: ['class'] };
      const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (targetNode.classList.contains('cart-panel-opened')) {
              setTimeout(() => {
                init();
              }, 1000);
            } else {
              setTimeout(() => {
                init()
              }, 1000);
            }
          }
        }
      };

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }

    /* Initialize variation */
    waitForElement('.details .descr', function () {
      init();
      observeBodyClass();
    }, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
