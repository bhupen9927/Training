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

    function init() {
      document.body.classList.add('Air-TV');
      herosection();
      limitedTimeSection();
      tripleFilteration();
      airDocDifference();
      featureSection();
      guaranteeSection();
      airborneContaminants();
      document.querySelector('#main .ad_tv-lander-sec20').classList.add("eg-faq");
    }

    function scroll() {
      const stickyHeaderHeight = document.querySelector('[data-elementor-type="header"]') ? document.querySelector('[data-elementor-type="header"]').offsetHeight : 0;
      const tabs = [
        { name: 'egPrimary', selector: '#main .ad_tv-lander-sec6 .section-content ' },
      ];
      tabs.forEach(tab => {
        document.querySelector(`.eg-hero-left [data-tab-name="${tab.name}"]`).addEventListener('click', (event) => {
          const targetSection = document.querySelector(tab.selector);
          if (targetSection) {
            const scrollPosition = targetSection.getBoundingClientRect().top + window.scrollY - stickyHeaderHeight;

            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }
        });
      });
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
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/smoke.png" alt="Smoke Icon"><p>Smoke</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/Bacteria.png" alt="Bacteria Icon"><p>Bacteria</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/pet.png" alt="Pet Dander Icon"><p>Pet Dander</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/allergens.png" alt="Allergens Icon"><p>Allergens</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/dust.png" alt="Dust Icon"><p>Dust</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/mold.png" alt="Mold Icon"><p>Mold Spores</p></div>
                </div>
            </div>
            <a class="eg-cta-button" data-tab-name="egPrimary">Claim Your 40% Off</a>
        </div>
        <div class="eg-hero-right">
            <div class="eg-video-thumbnail">
                <img class="eg-doc-desk" src="https://sitetunershosting.com/clients/AirDoctor/Dr.%20Rutland%20Image%20Desktop.png" alt="Dr. Rutland Thumbnail">
                <img class="eg-doc-mob" src="https://sitetunershosting.com/clients/AirDoctor/Dr.%20Rutland%20Image.png" alt="Dr. Rutland Thumbnail">
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
          <img class="eg-asSeen-img eg-newsweek" src="https://sitetunershosting.com/clients/AirDoctor/newsweek.png">
          <img class="eg-asSeen-img eg-forbes" src="https://sitetunershosting.com/clients/AirDoctor/Forbes.png">
          <img class="eg-asSeen-img eg-cnn" src="https://sitetunershosting.com/clients/AirDoctor/cnn.png">
          <img class="eg-asSeen-img eg-wired" src="https://sitetunershosting.com/clients/AirDoctor/wired.png">
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
      scroll();
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
            <div class="eg-button"><a href="https://shop.airdoctorpro.com/checkout/?add-to-cart=335531&quantity=1">Buy Now & Save!</a></div>
          </div>
           <div class="eg-family-img">
            <img src="https://sitetunershosting.com/clients/AirDoctor/vide_mobback_image.png">
           </div>
        </div>
      </div>`;

      const heroBanner = document.querySelector('#main > .ad_tv-lander-sec15');
      if (heroBanner) {
        heroBanner.insertAdjacentHTML('beforebegin', airbornehtml);
      }
      document.querySelector('.eg-airborne .eg-video').insertAdjacentElement('beforeend', document.querySelector('#main > .ad_tv-lander-sec10'))
    }

    function airDocDifference() {
      document.querySelector('#main .ad_tv-lander-sec17').classList.add("eg-difference");
      const heading = document.querySelector('#main .ad_tv-lander-sec17 .section-content > div:first-child h2');
      if (heading) {
        heading.textContent = "The AirDoctor Difference";
      }

      const divToMove = document.querySelector('#main .ad_tv-lander-sec17 .section-content > div:first-child');
      const target = document.querySelector('#main .ad_tv-lander-sec17 .bg');
      if (divToMove && target) {
        target.appendChild(divToMove);
      }

      const images = document.querySelectorAll('#main .ad_tv-lander-sec17 .section-content .tv-land-table-body > div:last-child img');
      images.forEach((img, index) => {
        if (index !== 0) {
          img.src = "https://sitetunershosting.com/clients/AirDoctor/Other%20Brands.png";
          img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/Other%20Brands.png");
        }
      });
      const firstOtherBrandsImage = document.querySelector('#main .ad_tv-lander-sec17 .section-content>div:nth-child(2)>div:last-child img');
      if (firstOtherBrandsImage) {
        firstOtherBrandsImage.src = "https://shop.airdoctorpro.com/wp-content/uploads/2024/02/checkbox-2.svg";
        firstOtherBrandsImage.setAttribute("data-src", "https://shop.airdoctorpro.com/wp-content/uploads/2024/02/checkbox-2.svg");
      }
      const otherBrandHeading = document.querySelector('.tv-heading-ss h3');
      otherBrandHeading.innerHTML = otherBrandHeading.innerHTML.replace(/<br\s*\/?>/gi, '');
    }

    //TRIPLE FILTERATION SECTION 

    function tripleFilteration() {
      let tripleHtml =
        `<div class="eg-filtration-system">
        <h4>ENJOY CLEANER AIR WITH</h4>
        <h1>AirDoctor's Triple Filtration System</h1>
        <p>The Ultimate Performance to Clean the Air in Every Inch of Your Home</p>
        <div class="eg-fiteration-container">
          <div class="eg-filterContent"> 
            <div class="eg-filters">
              <div class="eg-filter">
                <div class="eg-fnumber">
                  <img class="eg-fimg" src="https://sitetunershosting.com/clients/AirDoctor/1.png">
                </div>
                <div class="eg-fdetails">
                  <h3>Pre-filter:</h3>
                  <p>Captures large particles such as hair and dust.</p>
                </div>
              </div>
              <div class="eg-filter">
                <div class="eg-fnumber">
                  <img class="eg-fimg" src="https://sitetunershosting.com/clients/AirDoctor/2.png">
                </div>
                <div class="eg-fdetails">
                  <h3>Carbon VOC filter:</h3>
                  <p>Captures odors, VOC, and dangerous gases such as formaldehyde and ozone.</p>
                </div>
              </div>
              <div class="eg-filter">
                <div class="eg-fnumber">
                  <img class="eg-fimg" src="https://sitetunershosting.com/clients/AirDoctor/3.png">
                </div>
                <div class="eg-fdetails">
                  <h3>UltraHEPA® filtration:</h3>
                  <p>Captures virtually 100% of the smallest and most dangerous contaminants down to .003 microns such as smoke, bacteria and viruses that can make you sick. That’s 100 times smaller filtration than ordinary HEPA purifiers. *</p>
                </div>
              </div>
            </div>
            <button class="eg-fiterCta">BUY NOW & SAVE!</button>
          </div>
          <div class="eg-filter-image-section"></div>
        </div>
      </div>`;
      const sectionContent = document.querySelector('#main .ad_tv-lander-sec17');
      if (sectionContent) {
        sectionContent.insertAdjacentHTML('beforebegin', tripleHtml);
      }
    }

    //FEATURES SECTION 

    function featureSection() {
      document.querySelector('.section.ad_tv-lander-sec15').classList.add('eg-features-Section');
      const featureSection = document.querySelector('.eg-features-Section');
      const limitedSection = document.querySelector('.ad_tv-lander-sec6');
      if (limitedSection) {
        limitedSection.insertAdjacentElement('afterend', featureSection);
      }

      const featuresTitle = featureSection.querySelector('h2');
      if (featuresTitle) {
        featuresTitle.innerText = 'AirDoctor 3500 Features';
      }

      const cardTitles = featureSection.querySelectorAll('.section-content > div > div .icon-box-text h3');
      if (cardTitles) {
        cardTitles.forEach((cardTitle) => {
          let cardText = cardTitle.innerText;
          if (cardText.endsWith(':')) {
            cardTitle.innerText = cardText.slice(0, -1);
          }
        });
      }

      const firstCard = featureSection.querySelector('.section-content > div > div:nth-child(2) h3');
      firstCard.innerText = 'Ultra HEPA Filter';
      const sealedCard = featureSection.querySelector('.section-content > div > div:nth-child(5) h3');
      sealedCard.innerText = 'Sealed System';

      const newImageSources = [
        "https://sitetunershosting.com/clients/AirDoctor/feature1.png",
        "https://sitetunershosting.com/clients/AirDoctor/feature2.png",
        "https://sitetunershosting.com/clients/AirDoctor/feature3.png",
        "https://sitetunershosting.com/clients/AirDoctor/feature4.png",
        "https://sitetunershosting.com/clients/AirDoctor/feature5.png",
        "https://sitetunershosting.com/clients/AirDoctor/feature6.png"
      ];

      const images = document.querySelectorAll('.eg-features-Section .section-content > div > div img');

      images.forEach((img, index) => {
        if (newImageSources[index]) {
          img.src = newImageSources[index];
          img.setAttribute('data-src', newImageSources[index]);
        }
      });

      if (window.innerWidth < 767) {
        const cards = featureSection.querySelectorAll('.section-content > div > div:not(:first-child)');
        cards.forEach(card => {
          const cardDescription = card.querySelector('.icon-box-text p');

          if (cardDescription) {
            card.appendChild(cardDescription);
          }
        });
      }

      if (window.innerWidth > 767) {
        live('.eg-features-Section .section-content > div > div:not(:first-child)', 'mouseover', function () {
          this.classList.add('eg-show-des');
        });

        live('.eg-features-Section .section-content > div > div:not(:first-child)', 'mouseout', function () {
          this.classList.remove('eg-show-des');
        });
      } else {
        live('.eg-features-Section .section-content > div > div:not(:first-child)', 'click', function () {
          this.classList.toggle('eg-show-des');
        });
      }
    }

    function guaranteeSection() {
      document.body.classList.add('Air-TV');
      var guaranteeSection = document.querySelector('.ad_tv-lander-sec3');
      guaranteeSection.classList.add('eg-guarantee-Section');
      const guaranteeTitle = guaranteeSection.querySelector('.section-content > div:last-child > div:nth-child(2) > div > div');

      let intv = setInterval(() => {
        const targetImageDes = guaranteeSection.querySelectorAll('.section-content .hospital-grade-tv-price + div > div > div:nth-child(1) img');
        const targetImageMob = guaranteeSection.querySelectorAll('.section-content .hospital-grade-tv-price + div > div img');
        if (targetImageDes.length > 0 && window.innerWidth > 767) {
          targetImageDes.forEach(imgDes => {
            imgDes.setAttribute('src', 'https://sitetunershosting.com/clients/AirDoctor/SeparatorDes.png');
            imgDes.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/SeparatorDes.png");
          });
        }
        if (targetImageMob.length > 0 && window.innerWidth < 767) {
          targetImageMob.forEach(img => {
            img.setAttribute('src', 'https://sitetunershosting.com/clients/AirDoctor/SeparatorMob.png');
            img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/SeparatorMob.png");
          });
        }
      }, 100);

      setTimeout(() => {
        clearInterval(intv);
      }, 5000);

      if (guaranteeTitle) {
        guaranteeTitle.innerHTML = '30-Day Breathe Easy Guarantee';
      }

      const singlePaymentText = guaranteeSection.querySelector('.section-content .hospital-grade-tv-price:first-child > div > p');

      if (singlePaymentText) {
        singlePaymentText.textContent = singlePaymentText.textContent
          .replace(/:/g, '')
          .replace(/^just/, 'Just');
      }
    }

    function limitedTimeSection() {
      var sectionHeader = `
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

      const upgradeNew = `
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

      document.querySelector('.ad_tv-lander-sec6').classList.add('eg-3500-section');
      if (!document.querySelector('.eg-section-header')) {
        document.querySelector('.eg-3500-section .hospital-grade-info').insertAdjacentHTML('afterbegin', sectionHeader);
      }

      const buyNowBtns = document.querySelectorAll('.eg-3500-section .section.product-listing-section a.secondary');
      buyNowBtns.forEach(buyNowBtn => {
        buyNowBtn.innerText = 'Buy Now & Save!';
      });

      const costText = document.querySelector('.eg-3500-section .iot_upgrade_section .affirm_section_raw:first-child .affirm_emi_txt');
      if (costText) {
        costText.textContent = costText.textContent.replace(/:/g, '');
      }

      const priceContainer = document.querySelector('.eg-3500-section .section.product-listing-section .product_price_container');
      const iotSec = document.querySelector('.eg-3500-section .section.product-listing-section .upgrade_to_iot_section');
      if (priceContainer && iotSec) {
        iotSec.insertAdjacentElement('afterend', priceContainer);
      }

      const upgradeSection = document.querySelector('.eg-3500-section .upgrade_to_iot_section');
      if (!document.querySelector('.eg-new-upgrade')) {
        upgradeSection.insertAdjacentHTML('afterbegin', upgradeNew);
      }

      let intv = setInterval(() => {
        const mainImg = document.querySelector('.eg-3500-section .product_image-colinner img');
        if (mainImg) {
          mainImg.setAttribute('src', 'https://sitetunershosting.com/clients/AirDoctor/Image%20(7).png');
          mainImg.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/Image%20(7).png");
        }

        const affirmImgs = document.querySelectorAll('.eg-3500-section [id*="product_affiam"] > div > a > img');
        if (affirmImgs.length > 0) {
          affirmImgs.forEach(img => {
            img.src = 'https://sitetunershosting.com/clients/AirDoctor/affirmImg.png';
            img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/affirmImg.png");
          });
        }
      }, 100);

      setTimeout(() => {
        clearInterval(intv);
      }, 5000);

      if (window.innerWidth < 767) {
        const imageCon = document.querySelector('.iot_upgrade_section .product_section-wrapper > div > div:first-child');
        const imageDes = document.querySelector('.eg-3500-section .eg-section-header + div');
        if (imageCon && imageDes) {
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
    }

    function clickEvents() {
      live('.eg-product', 'click', function () {
        document.querySelectorAll('.eg-product').forEach(product => {
          product.classList.remove('eg-selected');
        });
        this.classList.add('eg-selected');

        waitForElement('.eg-3500-section [id*="product_affiam"] > div > a > img', function () {
          const affirmImgs = document.querySelectorAll('.eg-3500-section [id*="product_affiam"] > div > a > img');
          if (affirmImgs.length > 0) {
            affirmImgs.forEach(img => {
              img.src = 'https://sitetunershosting.com/clients/AirDoctor/affirmImg.png';
              img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/affirmImg.png");
            });
          }
        }, 1000, 15000);
      });

      live('.eg-new-upgrade .eg-product:last-child', 'click', function () {
        const checkbox = document.querySelector('.upgrade_to_iot_chkbox_tv_lp');
        if (!checkbox.checked) {
          checkbox.click();
        }
      });

      live('.eg-new-upgrade .eg-product:first-child', 'click', function () {
        const checkbox = document.querySelector('.upgrade_to_iot_chkbox_tv_lp');
        if (checkbox.checked) {
          checkbox.click();
        }
      });

      live('.eg-fiterCta, .eg-button', 'click', function () {
        document.querySelector('.regular_add_to_cart').click();
      });
    }

    function priceUpdate() {
      const priceElement1 = document.querySelector('.ad_tv-lander-sec3 .hospital-grade-tv-price-new:first-child h4');
      const priceElement2 = document.querySelector('.tv_unit_price_iot .woocommerce-Price-amount bdi');
    
      if (!priceElement1 || !priceElement2) return;
    
      const h4Text = priceElement1.cloneNode(true);
      const spanElement = h4Text.querySelector('span');
      if (spanElement) {
          spanElement.remove();
      }
      const discountedPrice1 = h4Text.textContent.trim();
    
      const price2Match = priceElement2.textContent.match(/^([^\d\s]+)?\s?([\d,.]+)/);
      if (!price2Match) return;
    
      let currencySymbol2 = '';
      if (price2Match[1]) {
          currencySymbol2 = price2Match[1];
      }
    
      let price2 = parseFloat(price2Match[2].replace(/[^0-9.]/g, ''));
      if (!isNaN(price2)) {
          const discountedPrice2 = currencySymbol2 + calculateDiscount(price2);
          const lastProductPriceElement = document.querySelector('.eg-product:last-child .eg-price');
          if (lastProductPriceElement) {
              lastProductPriceElement.textContent = discountedPrice2;
          }
      }
    
      if (discountedPrice1) {
          const firstProductPriceElement = document.querySelector('.eg-product:first-child .eg-price');
          if (firstProductPriceElement) {
              firstProductPriceElement.textContent = discountedPrice1;
          }
      }
    
      document.querySelectorAll('.product_display_price .woocommerce-Price-amount bdi').forEach(bdi => {
          const match = bdi.textContent.match(/^([^\d\s]+)?\s?([\d,.]+)/);
          if (!match) return;
      
          let currencySymbol = '';
          if (match[1]) {
              currencySymbol = match[1];
          }
        
          let originalPrice = parseFloat(match[2].replace(/[^0-9.]/g, ''));
          if (!isNaN(originalPrice)) {
              const discountedPrice = currencySymbol + calculateDiscount(originalPrice);
          
              const discountedPriceSpan = document.createElement('span');
              discountedPriceSpan.className = 'eg-updated-price';
              discountedPriceSpan.textContent = discountedPrice;
          
              bdi.insertAdjacentElement('afterend', discountedPriceSpan);
          }
      });
    }

    function calculateDiscount(price) {
      return (price * 0.5991).toFixed(2);
    }

    /* Initialize variation */
    waitForElement('#main .ad_tv-lander-sec20', init, 500, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
