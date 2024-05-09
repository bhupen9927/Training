/*fecli-injected JavaScript*/
  ;(function(){
    var style=document.createElement('style');style.type='text/css';style.appendChild(document.createTextNode('html body .eg-delivery_section {    padding: 10px;    background: #b5debc4d;    margin-top: 10px;}.eg-show01 [itemprop="offers"] .delivery--information .delivery--label {    display: none;}html body .eg-delivery_section .eg-heading {    font-size: 0.812rem;    font-weight: 700;    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;    line-height: 1.5rem;    color: #008115;}html body .eg-delivery_section p:last-of-type {    font-size: 0.812rem;    font-weight: 600;    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;    color: #666;}'));document.head.appendChild(style);
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

    function calculateDates() {
      const currentDate = new Date();
      const addDays = (days) => new Date(currentDate.getTime() + (days * 24 * 60 * 60 * 1000));
      const formatDate = (date) => `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.`;

      const tomorrowDate = addDays(1);
      const endDate = addDays(4);
      const additionalDate = addDays(3);

      return {
        currentDate: formatDate(currentDate),
        tomorrowdate: formatDate(tomorrowDate),
        lastdate: formatDate(endDate),
        additionaldate: formatDate(additionalDate)
      };
    }

    const { currentDate, tomorrowdate, lastdate, additionaldate } = calculateDates();


    function init() {
      var element = document.querySelector('[itemprop="offers"] .delivery--information .delivery--label');
      if (element && element.textContent.indexOf('Lieferzeit:  ca. 3 Werktage') !== -1) {
        document.body.classList.add('eg-show01')
        let deliverydate = `<div class="eg-delivery_section">
        <p class="eg-heading">Heute bestellen!</p>
        <p>Lieferung zwischen <span class="eg-currentdate">${tomorrowdate}</span> - <span class="eg-lastdate">${additionaldate}</span></p>
    </div>`;
        document.querySelector('[itemprop="offers"] .delivery--information').insertAdjacentHTML('afterend', deliverydate);
      }

      if (element && element.textContent.indexOf('Lieferzeit:  1-3 Werktage') !== -1) {
        document.body.classList.add('eg-show01')
        let deliverydate = `<div class="eg-delivery_section">
        <p class="eg-heading">Heute bestellen!</p>
        <p>Lieferung zwischen <span class="eg-currentdate">${tomorrowdate}</span> - <span class="eg-lastdate">${additionaldate}</span></p>
    </div>`;
        document.querySelector('[itemprop="offers"] .delivery--information').insertAdjacentHTML('afterend', deliverydate);
      }
    }

    waitForElement('[itemprop="offers"] .delivery--information', init, 1000, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

})();
/*fecli-injected JavaScript*/