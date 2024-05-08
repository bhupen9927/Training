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

    function datecalculate() {
      let currentDate = new Date();
      let day = currentDate.getDate().toString().padStart(2, '0');
      let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      let formattedDate = `${day}.${month}.`;

      let lastDate = new Date(currentDate.getTime() + (4 * 24 * 60 * 60 * 1000));
      let lastDay = lastDate.getDate().toString().padStart(2, '0');
      let lastMonth = (lastDate.getMonth() + 1).toString().padStart(2, '0');
      let formattedLastDate = `${lastDay}.${lastMonth}.`;
      return { formattedDate, formattedLastDate };
    }
    let { formattedDate, formattedLastDate } = datecalculate();

    function init() {
      var element = document.querySelector('[itemprop="offers"] .delivery--information .delivery--label');
      if (element && element.textContent.includes('Lieferzeit')) {
        let deliverydate = `<div class="eg-delivery_section">
          <p class="eg-heading">Heute bestellen!</p>
          <p>Lieferung zwischen <span class="eg-currentdate">${formattedDate}</span> - <span class="eg-lastdate">${formattedLastDate}</span></p>
        </div>`;
        document.querySelector('[itemprop="offers"] .delivery--information').insertAdjacentHTML('afterend', deliverydate);
      }
    }

    waitForElement('[itemprop="offers"] .delivery--information', init, 1000, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
