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

    var awardSection = `
      <div class="eg-award-section">
        <div class="eg-award-card">
          <img alt="Asiamoney best bank awards 2023" width="499" height="395" loading="lazy" class="award-card-image" src="/-/jssmedia/media/malaysia/images/generic/why-hsbc/why-hsbc-award-1.jpg?h=395&amp;iar=0&amp;w=499&amp;hash=C4B52011836A5F27F67676D5A3577D65">
            <div class="eg-details">
              <p><strong>Asiamoney Best Bank Awards 2023</strong></p>
              <p>Best International Bank in Malaysia </p>
            </div>
        </div>
        <div class="eg-award-card">
          <img alt="Euromoney Trade Finance Survey 2023" width="212" height="212" loading="lazy" class="award-card-image" src="/-/jssmedia/media/malaysia/images/generic/why-hsbc/why-hsbc-award-2.jpg?h=212&amp;iar=0&amp;w=212&amp;hash=EEC3D80932D94807E164D856C346F75A">
            <div class="eg-details">
              <p><strong>Euromoney Trade Finance Survey 2023</strong></p>
              <p>Market Leader in Trade Finance in Malaysia</p>
            </div>
        </div>
        <div class="eg-award-card">
          <img alt="Corporate Treasurer Awards 2022" width="208" height="208" loading="lazy" class="award-card-image" src="/-/jssmedia/media/malaysia/images/generic/why-hsbc/why-hsbc-award-3.jpg?h=208&amp;iar=0&amp;w=208&amp;hash=D3662137BACD0E666F23AEB95862C61A">
            <div class="eg-details">
              <p><strong>Corporate Treasurer Awards 2022</strong></p>
              <p>Best Cash Management Bank and <br>Best Trade Finance Bank in Malaysia</br></p>
            </div>
        </div>
      </div>`;


    /* Variation Init */
    function init() {
      /* start your code here */
      if (!document.querySelector('.eg-award-section')) {
        document.querySelector('html body main [class*="campaign-hub__content"] [class*="content-item"]:nth-child(4)').insertAdjacentHTML("afterend", awardSection);
      }
    }

    /* Initialize variation */
      waitForElement('html body main [class*="campaign-hub__content"] [class*="content-item"]:nth-child(4)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


