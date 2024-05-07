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
      function updateAnchorTags() {
        const solutionName = document.querySelector("[class*='backgroundCss-emptyStyles-emptyStyles'] .solutionsItemsWrapper_block > span:first-of-type");
        const isOfficeSpace = solutionName && solutionName.innerText.trim() === "Office Space";
        
        const anchorTags = document.querySelectorAll("[class*='backgroundCss-emptyStyles-emptyStyles'] [class*='cardBottomCta']");
        
        anchorTags.forEach((anchor) => {
          if (isOfficeSpace) {
            const citynameElement = anchor.closest("[class*='cardWrapper']").querySelector('h2');
            const cityname = citynameElement.textContent.trim(); 
            const element = anchor.closest("[class*='cardWrapper']").querySelector('a:first-of-type');
            const hrefValue = element.getAttribute('href');
            const number = hrefValue.match(/\d+/)[0];
            const newLink = `https://www.regus.com/en-gb/arrange-a-centre-tour?locationid=${number}&locationname=${cityname}&ws=office-space`;
            
            if (!anchor.dataset.originalHref) {
              anchor.dataset.originalHref = anchor.href;
              anchor.dataset.originalText = anchor.innerText;
            }
            
            anchor.href = newLink;
            anchor.innerText = "Book a Tour";
          } else if (anchor.dataset.originalHref && anchor.dataset.originalText) {
            anchor.href = anchor.dataset.originalHref;
            anchor.innerText = anchor.dataset.originalText;
          }
        });
      }

      const updateInterval = setInterval(updateAnchorTags, 500); 

      updateAnchorTags();

      function clearUpdateInterval() {
        clearInterval(updateInterval);
      }
    }

    /* Initialize variation */
    waitForElement(
      "[class*='cardWrapper']",
      init,
      50,
      15000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();