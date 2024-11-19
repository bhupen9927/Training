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

    function init() {
      document.body.classList.add('Air-TV');
      herosection();
      limitedTimeSection();
      airborneContaminants();
    }

    function herosection() {
      let heroHtml = `<div class="eg-hero-section">
      <div class="eg-hero-section-wrapper">
        <div class="eg-hero-left">
            <h1>Breathe Cleaner, <span class="eg-highlight">Healthier Air</span> Today</h1>
            <p class="eg-subheading">with our Best-Selling AirDoctor 3500 Air Purifier</p>
            <div class="eg-features-container">
                <p class="eg-featureHeading">Removes 99.99% of contaminants including:*</p>
                <div class="eg-features">
                    <div class="eg-feature"><img src="https://i.ibb.co/0DCBh2S/smoke.png" alt="Smoke Icon"><p>Smoke</p></div>
                    <div class="eg-feature"><img src="https://i.ibb.co/rfGx67v/Bacteria.png" alt="Bacteria Icon"><p>Bacteria</p></div>
                    <div class="eg-feature"><img src="https://i.ibb.co/2nbdX8D/pet.png" alt="Pet Dander Icon"><p>Pet Dander</p></div>
                    <div class="eg-feature"><img src="https://i.ibb.co/M52NCwZ/allergens.png" alt="Allergens Icon"><p>Allergens</p></div>
                    <div class="eg-feature"><img src="https://i.ibb.co/NghhzQ5/dust.png" alt="Dust Icon"><p>Dust</p></div>
                    <div class="eg-feature"><img src="https://i.ibb.co/GCynxqB/mold.png" alt="Mold Icon"><p>Mold Spores</p></div>
                </div>
            </div>
            <button class="eg-cta-button">Claim Your 40% Off</button>
        </div>
        <div class="eg-hero-right">
            <div class="eg-video-thumbnail">
                <img src="https://i.ibb.co/SBBV1Wh/Dr-Rutland-Image.png" alt="Dr. Rutland Thumbnail">
                <div class="vid-text eg-video-button">
                  <div class="video-button-wrapper2 video-btn-wrap eg-hero-play-btn">
                    <a href="javascript:void(0)" class="home_video_btn eg-ply-btn" id="play-button"><i class="icon-play eg-icon-ply" style="font-size:1.5em;"></i>
                    </a>
                  </div>
                </div>
            </div>
            <div class="eg-video-container" style="display: none;">
                <iframe id="player788" frameborder="0" allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" title="AirDoctor Doctor's Care 107" width="640"
                    height="390"
                    src="https://www.youtube.com/embed/JgI52SPJAm8?playsinline=1&rel=0&cc_load_policy=1&cc_lang_pref=en&loop=1&iv_load_policy=3&enablejsapi=1">
                </iframe>
            </div>
        </div>
      </div>
      <div class="eg-hero-AsSeenOn">
        <p class="eg-asSeen-text">As Seen On </p>
        <div class="eg-asSeen-logos">
          <img class="eg-asSeen-img eg-newsweek" src="https://i.ibb.co/dLnq9sZ/newsweek.png">
          <img class="eg-asSeen-img eg-forbes" src="https://i.ibb.co/cTHyNYj/Forbes.png">
          <img class="eg-asSeen-img eg-cnn" src="https://i.ibb.co/1JjxmLN/cnn.png">
          <img class="eg-asSeen-img eg-wired" src="https://i.ibb.co/pQ2fnxT/wired.png">
        </div>
      </div>
    </div>`
      const heroBanner = document.querySelector('#main > section:nth-child(2)');
      if (heroBanner) {
        heroBanner.insertAdjacentHTML('afterend', heroHtml);
        const videoThumbnail = document.querySelector('.eg-video-thumbnail');
        const videoContainer = document.querySelector('.eg-video-container');
        const iframe = document.querySelector('#player788');

        videoThumbnail.addEventListener('click', function () {
          videoThumbnail.style.display = 'none';
          videoContainer.style.display = 'block';
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            '*'
          );
        });
      }
    }

    function airborneContaminants() {
      let airbornehtml = `
      <div class="eg-airborne">
      <div class="eg-container_new">
        <div class="eg-video"></div>
        <div class="eg-contnet">
            <h1 class="eg-heading">Say Goodbye to <br> 99.99% of airborne contaminants </h1>
            <p class="eg-subheading">AirDoctor captures particles down to .003 microns in size and VOCs, including:</p>
            <ul class="eg-bulletpoints">
                <li>Mold</li>
                <li>Bacteria and Viruses</li>
                <li>Smoke</li>
                <li>Everyday allergens</li>
                <li>Formaldehyde and Ozone (VOCs)</li>
            </ul>
            <div class="eg-button"><a href="">Buy Now & Save!</a></div>
        </div>
    </div>
    </div>`

      const heroBanner = document.querySelector('#main .eg-hero-section');
      if (heroBanner) {
        heroBanner.insertAdjacentHTML('afterend', airbornehtml);
      }
      document.querySelector('.eg-airborne .eg-video').insertAdjacentElement('beforeend', document.querySelector('#main > section:nth-of-type(11)'))
    }

    function limitedTimeSection() {
      let sectionHeader = `
      <!-- Limited-Time Offer Section Header HTML -->
      <div class="eg-section-header">
        <div class="eg-inner">
          <h4 class="eg-limited-time">Limited-Time Offer</h4>
          <h3>Save 40% on the Air Doctor 3500!</h3>
        </div>
        <div class="eg-inner">
          <p class="eg-bullets-title">Our Best Selling and Classic Air Purifier!</p>
          <ul>
            <li><span class="eg-bold-titles">Circulates the air </span> 4x/hour in 630 sq. ft. spaces and 2x/hour in 1,260 sq. ft. spaces.</li>
            <li><span class="eg-bold-titles">Captures particles </span> 100X smaller than HEPA standard.</li>
            <li>Whisper-jet fans are <span class="eg-bold-titles">30% quieter </span> than traditional air purifiers.</li>
            <li><span class="eg-bold-titles">Simple Touch Control Panel </span> with auto-mode sensors that auto-adjust based on air quality.</li>
          </ul>
        </div>
      </div>`;
      let upgradeNew = `
      <!-- Limited-Time Offer Upgrade Section HTML -->
       <div class="eg-new-upgrade">
        <div class="eg-product eg-selected">
          <div class="eg-inputs">
            <span class="eg-input"></span>
            <p>AirDoctor 3500 </p>
          </div>
          <div class="eg-new-prices">
            <span class="eg-price"></span>
            <span class="eg-new-discount">40%</span>
          </div>
        </div>
        <div class="eg-product">
          <div class="eg-inputs">
            <span class="eg-input"></span>
            <p>AirDoctor 3500 Smart <br><span class="eg-small-text">with Mobile App </span></p>
          </div>
          <div class="eg-new-prices">
            <span class="eg-price"></span>
            <span class="eg-new-discount">40%</span>
          </div>
        </div>
      </div>`;

      document.body.classList.add('Air-TV');
      document.querySelector('.section[class*="ad_tv-lander-sec"]:nth-child(5)').classList.add('eg-3500-section');
      if(!document.querySelector('.eg-section-header')) {
        document.querySelector('.eg-3500-section .hospital-grade-info').insertAdjacentHTML('afterbegin', sectionHeader);
      }

      const buyNowBtns = document.querySelectorAll('.eg-3500-section .section.product-listing-section a.secondary');
      buyNowBtns.forEach(buyNowBtn => {
        buyNowBtn.innerText = 'Buy Now & Save!';
      });

      const priceContainer= document.querySelector('.eg-3500-section .section.product-listing-section .product_price_container');
      const iotSec = document.querySelector('.eg-3500-section .section.product-listing-section .upgrade_to_iot_section');
      if(priceContainer && iotSec) {
        iotSec.insertAdjacentElement('afterend', priceContainer);
      }

      const upgradeSection = document.querySelector('.eg-3500-section .upgrade_to_iot_section');
      if(!document.querySelector('.eg-new-upgrade')) {
        upgradeSection.insertAdjacentHTML('afterbegin', upgradeNew);
      }

      waitForElement('.eg-3500-section .product_image-colinner img', function() {
        const mainImg = document.querySelector('.eg-3500-section .product_image-colinner img');
        if(mainImg) {
          mainImg.setAttribute('src', 'https://i.ibb.co/kHC7PGM/Image-4.png');
        }
      }, 800, 15000);

      waitForElement('.eg-3500-section [id*="product_affiam"] > div > a > img', function() {
        const affirmImgs = document.querySelectorAll('.eg-3500-section [id*="product_affiam"] > div > a > img');
        affirmImgs.forEach(img => {
          img.src = 'https://i.ibb.co/NZYQRHr/Logo.png'; 
        });
      }, 800, 15000);

      if(window.innerWidth < 767) {
        const imageCon = document.querySelector('.iot_upgrade_section .product_section-wrapper > div > div:first-child');
        const imageDes = document.querySelector('.eg-3500-section .eg-section-header + div');
        if(imageCon && imageDes) {
          imageDes.insertAdjacentElement("afterend", imageCon);
        }

        document.querySelectorAll('.eg-product').forEach(product => {
          const priceElement = product.querySelector('.eg-price');
          const inputsElement = product.querySelector('.eg-inputs');
          if (priceElement && inputsElement) {
              inputsElement.insertAdjacentElement('beforeend', priceElement);
          }
        });
      }
      clickEvents();
      priceUpdate();
    function calculateDiscount(price) {
      return (price * 0.5991).toFixed(2); 
    }
  }

  function priceUpdate() {
      const price1 = document.querySelector('.ad_tv-lander-sec3 .hospital-grade-tv-price-new:first-child h4').innerText;
      const price2 = parseFloat(document.querySelector('.tv_unit_price_iot .woocommerce-Price-amount').textContent.replace('$', ''));

      const discountedPrice1 = price1.split('$')[2].trim();
      const discountedPrice2 = calculateDiscount(price2);

      document.querySelector('.eg-product:first-child .eg-price').textContent = `${discountedPrice1}`;
      document.querySelector('.eg-product:last-child .eg-price').textContent = `$${discountedPrice2}`;

      document.querySelectorAll('.product_display_price .woocommerce-Price-amount bdi').forEach(bdi => {
        const originalPrice = parseFloat(bdi.textContent.replace('$', ''));
        const discountedPrice = calculateDiscount(originalPrice);
        const discountedPriceSpan = document.createElement('span');
        discountedPriceSpan.className = 'eg-updated-price';
        discountedPriceSpan.textContent = `$${discountedPrice}`;
        
        bdi.insertAdjacentElement('afterend', discountedPriceSpan);
      });
    }

  function clickEvents() {
      live('.eg-product', 'click', function() {
        document.querySelectorAll('.eg-product').forEach(product => {
            product.classList.remove('eg-selected');
        });
        this.classList.add('eg-selected');
      });

      live('.eg-new-upgrade .eg-product:last-child', 'click', function() {
        const checkbox = document.querySelector('.upgrade_to_iot_chkbox_tv_lp');
        if (!checkbox.checked) {
          checkbox.click();
        }
      });
    
      live('.eg-new-upgrade .eg-product:first-child', 'click', function() {
          const checkbox = document.querySelector('.upgrade_to_iot_chkbox_tv_lp');
          if (checkbox.checked) {
            checkbox.click();
          }
      });
    }

    /* Initialize variation */
    waitForElement('#main > section:nth-child(2)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
