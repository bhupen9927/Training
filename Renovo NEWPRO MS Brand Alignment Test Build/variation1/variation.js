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
        </div>`;

        function formPlaceholderTexts() {
          var firstName = document.querySelector("#hero_form .form-group:nth-child(3) .form-row > div:first-child input");
          var lastName = document.querySelector('#hero_form .form-group:nth-child(3) .form-row > div:last-child input');
          var email = document.querySelector('#hero_form .form-group:nth-child(4) .form-row > div:last-child input');
          var zipCode = document.querySelector('#hero_form .form-group:nth-child(5) .form-row > div:last-child input');
          var phoneNumber = document.querySelector('#hero_form .form-group:nth-child(5) .form-row > div:first-child input');
          if (firstName) {
            firstName.placeholder = "First name";
          }
          if(lastName){
            lastName.placeholder = "Last name";
          }
          if(email) {
            email.placeholder = "Email";
          }
          if(phoneNumber) {
            phoneNumber.placeholder = "Phone number";
          }
          if(zipCode) {
            zipCode.placeholder = "Zip code";
          }
        }

        function ctaTextChange() {
          const elementsToChange = [
            { selector: '#hero_right button', text: 'GET A FREE QUOTE' },
            { selector: '#hero_content [href="get-a-quote"]', text: 'GET A FREE QUOTE' },
            { selector: '#sub_footer #sub_footer_right .btn-success', text: 'GET A FREE QUOTE' }
          ];
      
          elementsToChange.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element) {
              element.innerText = item.text;
            }
          });
        }


    /* Variation Init */
    function init() {
      formPlaceholderTexts();
      ctaTextChange()
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
      var conditionText = document.querySelector('html body #hero #o-c-container span');
      if(conditionText) {
        conditionText.innerHTML = '<p>I agree to the <span>terms and conditions.</span></p><small>*I’m interested in learning more about NEWPRO’s products. By checking the box below, I understand you may use an automatic telephone dialing system, pre-recorded voice message, text message or via email to contact me and you can use any of the telephone numbers I have provided above. I understand that I do not need to sign this provision in order to purchase any goods or services. By clicking Get a Free Quote Now!, you authorize NEWPRO Home Solutions to reach out to you with questions about your project, via phone, email, or text. Message/data rates apply. Consent is not a condition of purchase. You may unsubscribe at any time.  <a href="https://www.newpro.com/sms-terms-and-conditions/">Terms &amp; Conditions</a> |  <a href="https://www.newpro.com/privacy-policy/">Privacy Policy</a>.</small>'
      }
      var trustLogos = document.querySelector('html body #hero_content .trust_logos');
      if(window.innerWidth< 767 && trustLogos && mobileHeroCta) {
        mobileHeroCta.insertAdjacentElement("afterend", trustLogos);
      }
      var footerConditionText = document.querySelector('html body #subfooter_form #o-c-container span');
      if(footerConditionText) {
        footerConditionText.innerHTML = '<p>I agree to the <span>terms and conditions.</span></p><small>*I’m interested in learning more about NEWPRO’s products. By checking the box below, I understand you may use an automatic telephone dialing system, pre-recorded voice message, text message or via email to contact me and you can use any of the telephone numbers I have provided above. I understand that I do not need to sign this provision in order to purchase any goods or services. By clicking Get a Free Quote Now!, you authorize NEWPRO Home Solutions to reach out to you with questions about your project, via phone, email, or text. Message/data rates apply. Consent is not a condition of purchase. You may unsubscribe at any time.  <a href="https://www.newpro.com/sms-terms-and-conditions/">Terms &amp; Conditions</a> |  <a href="https://www.newpro.com/privacy-policy/">Privacy Policy</a>.</small>'
      }
    }

    /* Initialize variation */
    waitForElement('html body #hero_left .hero_text_sl', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


