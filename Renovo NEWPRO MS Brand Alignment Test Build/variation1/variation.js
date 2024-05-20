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

    var heroSectionTexts = 
        `<div class="eg-hero-heading"><span>50% OFF</span>
        <span class="eg-install">Install + Extended Financing Options</span>
        </div>
        <div class="eg-imgs">
          <img src="https://www.newpro.com/wp-content/uploads/2021/12/anglemarks.svg">
          <span>+</span>
          <img src="https://www.newpro.com/wp-content/uploads/2021/12/anglemarks.svg">
        </div>
        <small>18 months no interest or payments**</small>
        <p class="eg-offer">**Offer ends Month 00 <a href="">Offer Terms</a></p>`

        var formTitle = `
        <div class="eg-form-title">
          <img src="https://www.newpro.com/wp-content/uploads/2021/12/anglemarks.svg">
          <h2>Premium Windows, Expert Installation</h2>
        </div>`


    /* Variation Init */
    function init() {
      var heroHeading = document.querySelector('#hero_left .hero_text');
      heroHeading.innerHTML = heroSectionTexts;
      var topForm = document.querySelector('#hero_form');
      var leftItem = document.querySelector('#hero_left');
      var rightItem = document.querySelector('#hero_right');
      if(window.innerWidth > 767) {
        if(!document.querySelector('.eg-form-title') && rightItem){
          rightItem.insertAdjacentHTML('afterbegin', formTitle)
        }
        if(leftItem && topForm) {
          topForm.insertAdjacentElement("beforebegin", leftItem)
        }
      }
      if(window.innerWidth < 767) {
        if(!document.querySelector('.eg-form-title') && leftItem){
          leftItem.insertAdjacentHTML('afterbegin', formTitle)
        }
      }
      var leftCta = document.querySelector('html body #main_ctas');
      var contentContainer = document.querySelector('html body #content #content_container');
      if(leftCta && contentContainer) {
        contentContainer.insertAdjacentElement("beforeend", leftCta);
      }
      var testimonial = document.querySelector('#testimonials');
      var deliveringSec = document.querySelector('#secondary_content_area > .row');
      if(testimonial && deliveringSec) {
        deliveringSec.insertAdjacentElement('afterend', testimonial);
      }
      var getAquote = document.querySelector('html body #hero_left .hero_text + a');
      var heroText = document.querySelector('html body #hero_left .hero_text')
      if(window.innerWidth < 767) {
        heroText.insertAdjacentElement('beforeend', getAquote);
      }
    }

    /* Initialize variation */
    waitForElement('html body #hero_left .hero_text_sl', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


