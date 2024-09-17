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

    const employeeImage= `
      <div class="eg-emp-img">
        <img class="eg-img" src="https://i.ibb.co/J3zR0xh/employee-image.png">
      </div>`;

    function initCEO() {
      const messageCEO= document.querySelector('.campaign-hub > div:last-child > div:nth-of-type(2)');
      messageCEO.classList.add('eg-CEO');

      const ceoSection= document.querySelector('.eg-CEO [class*="content-block-container"] >div:first-child');
      if(ceoSection && !document.querySelector('.eg-emp-img')){
          ceoSection.insertAdjacentHTML('afterend',employeeImage);
      }

      const ceoPara = document.querySelector('.eg-CEO [class*="content-block-container"] > div:last-child');
      const sectionTitle = document.querySelector('.eg-CEO [class*="content-block-container"] > div:first-child h2');
      if (ceoPara && sectionTitle) {
          sectionTitle.insertAdjacentElement('afterend', ceoPara);
      }

      const imgElement = document.querySelector('.eg-CEO [class*="flexi-content__description"] img');
      if (imgElement) {
          imgElement.src = 'https://i.ibb.co/82r0qp0/CEo.png';
      }
    }

    /* Initialize variation */
    waitForElement('.campaign-hub > div:last-child > div:nth-of-type(2)', initCEO, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
