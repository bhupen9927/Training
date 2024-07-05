(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */
    var arr = [];
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

    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    };

    live('.card.m-question-marker, .panel-body.custom-bg-panel [name="quickQuoteAgreementDisplay"] input', 'click', function () {
      var quoteTitle = document.querySelector('.sticky-panel .card .Your-Quote');
      if (quoteTitle) {
        quoteTitle.innerText = 'Your quote';
      }
      var cardTitle = document.querySelector('.card-body span.card-title');
      if (cardTitle.innerText.trim() === '-') {
        cardTitle.innerText = '$ -';
      }
    });

    live('[aria-labelledby="sq_108_ariaTitle"]', 'click', function () {
      dropdownChange();
    });

    live('[name="buyNowBtn"]', 'click', function () {
      document.body.classList.remove('eg-newcss');
    });

    live('[name="goBackBtn"]', 'click', function () {
      document.body.classList.add('eg-newcss');
      init();
    });

    live('.navbar-toggler-icon', 'click', function () {
      document.body.classList.toggle('eg-move');
      init();
    });

    live('[aria-labelledby="sq_102_ariaTitle"] .radio-line-height input', 'click', function () {
      if (!document.querySelector('.eg-option-container + .sv_row [name="policy_pi_lol"]')) {
        document.querySelector('.eg-date-container').remove();
        document.querySelector('.eg-option-container').remove();
        init();
        setTimeout(() => {
          var starDateTextElements = document.querySelectorAll('html body .sv_body > div>div > .sv_row:last-child .widget-datepicker');
          starDateTextElements.forEach(function (starDateText) {
            if (starDateText) {
              starDateText.placeholder = "Select date";
            }
          });
        }, 500);
      }
    });

    live('.eg-newcss .sv_body>div>div>.sv_row:last-child>div:first-child [name="member_cpa"] .sv_q_select_column:first-child input', 'click', function() {
      document.body.classList.add('eg-remove-general');
    });
    live('.eg-newcss .sv_body>div>div>.sv_row:last-child>div:first-child [name="member_cpa"] .sv_q_select_column:last-child input', 'click', function() {
      document.body.classList.remove('eg-remove-general');
    });
    document.addEventListener('click', function(event) {
      if (event.target && event.target.matches('.select2-selection__choice__remove')) {
          dropdownChange();
      }
    });

    var dateContainer = `
    <div class="eg-date-container">
    <p>General information</p>
    </div>`;
    var optionContainer = `<div class="eg-option-container"></div>`;
    var startDateValidation = `<div class="eg-start-valid eg-valid"><img src="https://i.ibb.co/92v8hYw/Warning.png"><p>Please select a policy start date</p></div>`;
    var endDateValidation = `<div class="eg-end-valid eg-valid"><img src="https://i.ibb.co/92v8hYw/Warning.png"><p>Please select a policy end date</p></div>`;
    var specialiseValidation = `<div class="eg-specialise-valid eg-valid"><img src="https://i.ibb.co/92v8hYw/Warning.png"><p>Please select one or more specialties</p></div>`;
    var checkboxValidation = `<div class="eg-checkbox-valid eg-valid"><img src="https://i.ibb.co/92v8hYw/Warning.png"><p>Please confirm that the above information is correct</p></div>`;

    function textChange() {
      var mainHeading = document.querySelector('.main-heading-text');
      if (mainHeading) {
        mainHeading.innerText = 'Accountancy insurance';
      }
      var quickQuote = document.querySelector('.quick-quote-label-txt');
      if (quickQuote) {
        quickQuote.innerText = 'In order to arrange cover online you will need to meet certain underwriting criteria detailed on the following pages and purchase cover by credit card.';
      }

      var brandLogo = document.querySelector('.navbar-brand .img-fluid');
      if (brandLogo) {
        brandLogo.setAttribute('src', 'https://useruploads.visualwebsiteoptimizer.com/useruploads/800206/images/0b9ccb02df07d123617df80bdc6c889e_marshlogo1.png');
      }
      var phoneLogo = document.querySelector('.tel-email-label img');
      if (phoneLogo) {
        phoneLogo.setAttribute('src', 'https://useruploads.visualwebsiteoptimizer.com/useruploads/800206/images/9645cb62fd971a9acebdc1da9dc7b75e_phone.png')
      }
      var toolTip = document.querySelector('.quick-quote-label-txt-tooltip img');
      if (toolTip) {
        toolTip.setAttribute('src', 'https://useruploads.visualwebsiteoptimizer.com/useruploads/800206/images/6ef0d039b50d7ea5c6f659ff27906f29_helpicon.png')
      }
      var mobileToolTip = document.querySelector('.quick-quote-label-txt-tooltip .custom-tooltip:nth-child(3) img');
      if (mobileToolTip) {
        mobileToolTip.setAttribute('src', 'https://useruploads.visualwebsiteoptimizer.com/useruploads/800206/images/6ef0d039b50d7ea5c6f659ff27906f29_helpicon.png')
      }
      var quoteTitle = document.querySelector('.sticky-panel .card .Your-Quote');
      if (quoteTitle) {
        quoteTitle.innerText = 'Your quote';
      }
      var starDateTextElements = document.querySelectorAll('html body .sv_body > div>div > .sv_row:last-child .widget-datepicker');
      starDateTextElements.forEach(function (starDateText) {
        if (starDateText) {
          starDateText.placeholder = "Select date";
        }
      });


      let interval = setInterval(() => {
        var estimatedTurn = document.querySelector('html body .eg-option-container > div [name="client_turnover"] h5 .sv-string-viewer');
        if (estimatedTurn) {
          estimatedTurn.innerText = 'Estimated annual turnover';
        }
        var businessSpecialises = document.querySelector('html body .eg-option-container [name="business_specialises"]  h5 .sv-string-viewer');
        if (businessSpecialises) {
          businessSpecialises.innerText = 'My business specialises in';
        }
        var inputBusiness = document.querySelector('.eg-option-container .select2-search__field');
        if(inputBusiness) {
          console.log("open");
          inputBusiness.setAttribute('readonly', 'readonly');
        }
      }, 500);

      setTimeout(() => {
        clearInterval(interval)
      }, 2000);
      

      var cardTitle = document.querySelector('.card-body span.card-title');
      if (cardTitle.innerText.trim() === '-') {
        cardTitle.innerText = '$ -';
      }

      var contactUs = document.querySelector('.nav-item button');
      if(contactUs) {
        contactUs.innerText = 'Request a callback';
      }
    }

    function dropdownChange() {
      console.log('chnage 1');
      const newTexts = [
        "Accounts preparation / Bookkeeping",
        "Insurance Agency",
        "Insurance Distribution, Migration Agency",
        "Taxation / GST 1",
        "Accounting Software, Forensic/Management accounting",
        "Company Secretarial, Executorships / Trusteeships",
        "Audits (non-profit, SMSF, Private Companies)",
        "Insolvency / Liquidations",
        "Business Valuations, Super Fund Administration"
      ];

      waitForElement('.select2-results__options .select2-results__option', function () {
       var once = true;
        console.log('chnage 2');
        const listItems = document.querySelectorAll('.select2-results__options .select2-results__option');
        listItems.forEach((item, index) => {
          if (index < newTexts.length) {
            item.innerText = newTexts[index];
            item.value = newTexts[index];

            // const inputField = document.createElement('input');
            // inputField.type = 'checkbox';
            // inputField.placeholder = `Input ${index + 1}`;
            // item.appendChild(inputField);
          }
          item.addEventListener('mousedown',function(e){
            if(once == true){
              once = false;
              console.log('hell0o',this.textContent);
              tagUpdate(this.textContent);
            }
          });
        });
        
       
      }, 200, 1000)
    }
    function tagUpdate(egitem){
      var selectItem = egitem
      var egindex = arr.indexOf(selectItem); 
      if(egindex !=-1){
          arr.splice(egindex, 1);
      }
      else
      {
        arr.push(selectItem);  
      }
      console.log(arr);
      setTimeout(function(){
       document.querySelectorAll('ul.select2-selection__rendered li.select2-selection__choice span').forEach(function(item,i){
          item.nextSibling.textContent= arr[i];
          item.setAttribute('title',selectItem);
          //console.log(item,i);
        });
        
      }, 400);
    }
    /* Variation Init */
    function init() {
      live('ul.select2-selection__rendered li.select2-selection__choice span', 'mousedown', function () {
        console.log('name');
        tagUpdate(this.nextSibling.textContent);
      });
      document.body.classList.add('eg-newcss')
      var member = document.querySelector('html body .sv_body > div>div > .sv_row:last-child > div:first-child .sv_p_container .sv_row:nth-child(2)');
      if (!document.querySelector('.eg-date-container')) {
        member.insertAdjacentHTML("afterend", dateContainer);
      }

      var startDate = document.querySelector('.eg-date-container + div');
      var endDate = document.querySelector('.eg-date-container + div + div');
      if (startDate && endDate) {
        var egDateContainer = document.querySelector('.eg-date-container');
        if (egDateContainer) {
          egDateContainer.appendChild(startDate);
          egDateContainer.appendChild(endDate);
        }
      }

      var liability = document.querySelector('.eg-date-container');
      if (!document.querySelector('.eg-option-container')) {
        liability.insertAdjacentHTML("afterend", optionContainer);
      }

      setTimeout(() => {
        var specializing = document.querySelector('.eg-option-container + div');
        var turnover = document.querySelector('.eg-option-container + div + div');
        if (specializing && turnover) {
          var egOptionContainer = document.querySelector('.eg-option-container');
          if (egOptionContainer) {
            egOptionContainer.appendChild(specializing);
            egOptionContainer.appendChild(turnover);
          }
        }
      }, 1000);

      var radioInputs = document.querySelectorAll('.panel-body.custom-bg-panel [name="member_cpa"] .radio input');
      if (radioInputs.length > 0) {
        radioInputs.forEach(function (input) {
          input.type = 'checkbox';
        });
      }
      textChange();
      dropdownChange();
      validationTexts();
    }

    live('.sv_body .sticky-panel .Rectangle-buy-policy-disabled', 'click', function() {
      document.body.classList.add('eg-validations');
      validation();
    })

    function validationTexts() {
      var sDate = document.querySelector('.eg-date-container > div:nth-child(2)');
      if(sDate && ! document.querySelector('.eg-start-valid')){
        sDate.insertAdjacentHTML('beforeend', startDateValidation);
      }
      var eDate = document.querySelector('.eg-date-container > div:nth-child(3)');
      if(eDate && ! document.querySelector('.eg-end-valid')){
        eDate.insertAdjacentHTML('beforeend', endDateValidation);
      }
      waitForElement('.eg-option-container > div:nth-child(2)', function() {
        var esDate = document.querySelector('.eg-option-container > div:nth-child(2)');
        if(esDate && ! document.querySelector('.eg-specialise-valid')){
          esDate.insertAdjacentHTML('beforeend', specialiseValidation);
        }
      }, 500, 15000);
      var chDate = document.querySelector('[name="quickQuoteAgreementDisplay"] > div');
      if(chDate && ! document.querySelector('.eg-checkbox-valid')){
        chDate.insertAdjacentHTML('beforeend', checkboxValidation);
      }
    }

    function validation() {
      var seldate = document.querySelector('.eg-date-container > div:nth-child(2) input');
      var enDate = document.querySelector('.eg-date-container > div:nth-child(3) input');
      var spEl = document.querySelectorAll('.selection .select2-selection__rendered > li');
      var chEl = document.querySelector('[name="quickQuoteAgreementDisplay"] > div input');
      var valid = true;

      if (!seldate || !seldate.value) {
          document.querySelector('.eg-start-valid').style.display = 'flex';
          valid = false;
          document.body.classList.add('eg-seDate');
      } else {
          document.querySelector('.eg-start-valid').style.display = 'none';
          document.body.classList.remove('eg-seDate');
      }
  
      if (!enDate || !enDate.value) {
          document.querySelector('.eg-end-valid').style.display = 'flex';
          valid = false;
      } else {
          document.querySelector('.eg-end-valid').style.display = 'none';
      }
  
      if (spEl.length < 2) {
        document.querySelector('.eg-specialise-valid').style.display = 'flex';
        valid = false;
        document.body.classList.add('eg-spDate');
      } else {
        document.querySelector('.eg-specialise-valid').style.display = 'none';
        document.body.classList.remove('eg-spDate');
      }
  
      if (!chEl || !chEl.checked) {
          document.querySelector('.eg-checkbox-valid').style.display = 'flex';
          valid = false;
          document.body.classList.add('eg-chDate');
      } else {
          document.querySelector('.eg-checkbox-valid').style.display = 'none';
          document.body.classList.remove('eg-chDate');
      }

      if ((!seldate || !seldate.value) || (spEl.length < 2) || (!chEl || !chEl.checked)) {
        if (!seldate || !seldate.value) {
          document.querySelector('.eg-date-container').scrollIntoView({ behavior: 'smooth' });
        } else if (spEl.length < 2) {
          document.querySelector('.eg-option-container').scrollIntoView({ behavior: 'smooth' });
        } else if (!chEl || !chEl.checked) {
          document.querySelector('[name="quickQuoteAgreementDisplay"]').scrollIntoView({ behavior: 'smooth' });
        }
      }
      return valid;
    }

    /* Initialize variation */
    if (window.location.href.indexOf('/quote') !== -1) {
      waitForElement('.main-heading-text', init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();