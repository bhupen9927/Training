(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "popup_test";

    /* Helper function to wait for element */
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

    const popupHTML = `
      <div id="eg-myPopup" class="eg-popup" style="display:none;">
        <div class="eg-popup-content">
          <div class="eg-popup-header">
            <h2 class="eg-popup-heading">Continue shopping for your vehicle</h2>
            <span class="eg-close-popup"><img class="eg-cross" src="https://i.ibb.co/S7YXwPv/cross.png"></span>
          </div>
          <div class="eg-vehicle-container">
            <div class="eg-vehicle-info">
              <div class="eg-vehicle-wrapper">
                <div class="eg-vehicle-wrapper-top">
                  <span class="eg-vehicle-image"><img class="eg-vehicle-logo" src="" alt="Vehicle Logo"></span>
                  <span class="eg-vehicle-title"></span>
                </div>
                <div class="eg-vehicle-wrapper-bottom">
                  <span class="eg-vehicle-plate"></span>
                  <a onclick="global_tyre_search.show_rego_tab();" class="eg-change-vehicle">Not your car?</a>
                </div>
              </div>
              <button onclick="return scroll_to_section('.full-search-results-header');" class="eg-browse-full-range">Browse full range</button>
            </div>
            <div class="eg-vehicle-info-mobile">
              <div class="eg-vehicle-info-wrapper">  
                <span class="eg-vehicle-location"></span>
              </div>
            </div>
            <div class="eg-vehicle-specs">
              <img class="eg-tyre" src="https://i.ibb.co/ZNyfwnf/Tyre.png" >
              <span class="eg-specs eg-top-specs">Width <span class="eg-specs-number">0</span></span>
              <span class="eg-specs eg-mid-specs">Profile <span class="eg-specs-number">0</span></span>
              <span class="eg-specs eg-bottom-specs">Rim <span class="eg-specs-number">0</span></span>
            </div>
            <div class="eg-cards-container"></div>
          </div>
        </div>
      </div>`;

    const originalParents = new Map();

    function init() {
      document.body.insertAdjacentHTML('beforeend', popupHTML);
      document.body.classList.add('CRO-1601');

      if (window.location.href.includes("find-by-rego")) {
        displayPopup();
        moveCardsToPopup();
      }

      attachEventListeners();
      verifyAndPopulateData();
      moveBrowseButtonForMobile();

      if (window.innerWidth < 767) {
        initMobileDropdown();
      }
    }

    function displayPopup() {
      const popup = document.getElementById('eg-myPopup');
      setTimeout(() => {
        popup.style.display = 'block';
      }, 1000);
    }

    function moveCardsToPopup() {
      const existingCards = document.querySelectorAll('.recommended-content');
      const cardsContainer = document.querySelector('.eg-cards-container');

      existingCards.forEach(card => {
        originalParents.set(card, card.parentNode);
        cardsContainer.appendChild(card);
        card.classList.add('eg-moved-to-popup');
      });
    }

    function attachEventListeners() {
      document.querySelector('.eg-change-vehicle').addEventListener('click', closePopup);
      document.querySelector('.eg-browse-full-range').addEventListener('click', closePopup);
      document.querySelector('.eg-close-popup').addEventListener('click', closePopup);

      window.addEventListener('click', function (event) {
        const popup = document.getElementById('eg-myPopup');
        if (event.target === popup) {
          closePopup();
        }
      });
    }

    function closePopup() {
      const popup = document.getElementById('eg-myPopup');
      popup.style.display = 'none';

      const movedElements = document.querySelectorAll('.recommended-content.eg-moved-to-popup');
      movedElements.forEach(card => {
        const originalParent = originalParents.get(card);
        if (originalParent) {
          originalParent.appendChild(card);
          card.classList.remove('eg-moved-to-popup');
        }
      });
    }

    function verifyAndPopulateData() {
      const logoSrc = document.querySelector('.brand-logo img')?.getAttribute('src') || 'https://mobiletyreshop.com.au/wp-content/uploads/2023/01/HONDA_LOGO..png';
      const vehicleTitle = document.querySelector('.full .car-details .description')?.textContent.trim() || 'Honda GE Jazz VTi 4D Hatch';
      const plateNumber = document.querySelector('.rego-submit-form input#rego-tyres-page')?.value || 'BF 35 PY';

      const width = document.querySelector('#desk-width option:checked')?.textContent || '';
      const profile = document.querySelector('#desk-profile option:checked')?.textContent || '';
      const rim = document.querySelector('#desk-rim option:checked')?.textContent || '';

      if (width && profile && rim) {
        populateData(logoSrc, vehicleTitle, plateNumber, width, profile, rim);
      } else {
        setTimeout(verifyAndPopulateData, 100);
      }
    }

    function populateData(logoSrc, vehicleTitle, plateNumber, width, profile, rim) {
      document.querySelector('.eg-vehicle-logo').src = logoSrc;
      document.querySelector('.eg-vehicle-title').textContent = vehicleTitle;
      document.querySelector('.eg-vehicle-plate').textContent = plateNumber;
      document.querySelector('.eg-top-specs .eg-specs-number').textContent = width;
      document.querySelector('.eg-mid-specs .eg-specs-number').textContent = profile;
      document.querySelector('.eg-bottom-specs .eg-specs-number').textContent = rim;
    }

    function verifyAndPopulateDataMobile() {
      const plateNumber = document.querySelector('.rego-submit-form input#rego-tyres-page')?.value || 'BF 35 PY';
      let state = document.querySelector('#select2-state-tyres-page-container')?.textContent.trim() || '';
      if (state.toLowerCase() === 'select') {
        state = 'New South Wales';
      }
      document.querySelector('.eg-vehicle-plate').textContent = plateNumber;
      document.querySelector('.eg-vehicle-location').textContent = state;
    }

    function initMobileDropdown() {
      const vehicleInfo = document.querySelector('.eg-vehicle-wrapper');
      const vehicleContainer = document.querySelector('.eg-vehicle-container');
      const vehicleInfoMobile = document.querySelector('.eg-vehicle-info-mobile');
      const vehicleSpecs = document.querySelector('.eg-vehicle-specs');

      vehicleInfoMobile.style.display = 'none';
      vehicleSpecs.style.display = 'none';

      vehicleInfo.addEventListener('click', () => {
        vehicleContainer.classList.toggle('open');
        vehicleInfo.classList.toggle('active');

        const isVisible = vehicleInfoMobile.style.display === 'block';
        vehicleInfoMobile.style.display = isVisible ? 'none' : 'block';
        vehicleSpecs.style.display = isVisible ? 'none' : 'block';
      });
      verifyAndPopulateDataMobile();
    }

    function moveBrowseButtonForMobile() {
      const browseButton = document.querySelector('.eg-browse-full-range');
      const vehicleContainer = document.querySelector('.eg-cards-container');
      const vehicleInfoWrapper = document.querySelector('.eg-vehicle-info-wrapper');
      const vehiclePlate = document.querySelector('.eg-vehicle-plate');

      if (window.innerWidth <= 767) { 
        vehicleContainer.insertAdjacentElement('beforebegin',browseButton); 
        vehicleInfoWrapper.appendChild(vehiclePlate);
      }
    }

    waitForElement('.recommended-content .recommended-content-item_suggestion .main-layer .title', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
