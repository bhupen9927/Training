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

    const stickyBox =
      `<div class="eg-sticky-box">
        <div class="eg-sticky-left">
          <div class="eg-rating">
            <span class="eg-rating-count "></span>
            <span class="eg-stars"></span>
            <span class="eg-reviews"></span>
          </div>
          <div class="eg-discount-text">Tot 40% korting alleen vandaag!</div>
        </div>
        <div class="eg-sticky-right">
          <a href="https://supplend.com/pages/offer-ab-bundle" class="eg-adv-button">
            <div c-type="textarea">Bekijk Beschikbaarheid</div>
            <div class="eg-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7572 13.7979 19.8759 13.4991 19.8759C13.2002 19.8759 12.9135 19.7572 12.7022 19.5459C12.4908 19.3345 12.3721 19.0479 12.3721 18.749C12.3721 18.4501 12.4908 18.1635 12.7022 17.9521L17.5312 13.1249H3.75C3.45163 13.1249 3.16548 13.0064 2.9545 12.7954C2.74353 12.5844 2.625 12.2983 2.625 11.9999C2.625 11.7016 2.74353 11.4154 2.9545 11.2044C3.16548 10.9934 3.45163 10.8749 3.75 10.8749H17.5312L12.7041 6.04492C12.4927 5.83358 12.374 5.54693 12.374 5.24804C12.374 4.94916 12.4927 4.66251 12.7041 4.45117C12.9154 4.23983 13.2021 4.12109 13.5009 4.12109C13.7998 4.12109 14.0865 4.23983 14.2978 4.45117L21.0478 11.2012C21.1527 11.3058 21.2359 11.4302 21.2926 11.5671C21.3493 11.704 21.3784 11.8507 21.3782 11.9989C21.3781 12.1471 21.3486 12.2938 21.2916 12.4305C21.2346 12.5673 21.1511 12.6914 21.0459 12.7959Z" fill="#27953D"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>`;

    function init() {
      document.body.classList.add('AB001');
      document.body.insertAdjacentHTML('beforeend', stickyBox);

      const strongElement = document.querySelector(".banner-stars + .text-s > strong:first-of-type");
      const starsElement = document.querySelector(".banner-stars");
      const reviewText = document.querySelector(".banner-stars + .text-s > strong:last-of-type")?.innerText;

      if (reviewText) {
        document.querySelector(".eg-reviews").innerText = `+${reviewText}`;
      }
      if (strongElement) {
        document.querySelector(".eg-rating-count").textContent = strongElement.textContent.split("/")[0].trim();
      }
      if (starsElement) {
        document.querySelector(".eg-stars").innerHTML = starsElement.innerHTML;
      }

      const egRating = document.querySelector('.eg-rating');
      const egStickyRight = document.querySelector('.eg-sticky-right');
      if (window.innerWidth <= 767 && egRating && egStickyRight) {
          egStickyRight.insertAdjacentElement('afterend', egRating);
      }

    }

    /* Initialize variation */
    waitForElement('.banner-stars', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
