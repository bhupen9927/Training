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

    function waitForSlick(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery.fn.slick != undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
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

    /* Variation Init */
    function init() {
      document.body.classList.add('Air-TV');
      document.querySelector('#main .ad_tv-lander-sec20').classList.add("eg-faq");
      herosection();
      tripleFilter()
      airborneContaminants();
      airDocDifference();
      guaranteeSection();
      reviewSection();
      featureSection();
      limitedTimeSection();
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
            <h1>Breathe Cleaner, Healthier <br> Air Today</h1>
            <p class="eg-subheading">with the Dr. Recommended AirDoctor Air Purifier!</p>
            <div class="eg-features-container">
                <p class="eg-featureHeading">Removes 99.99% of contaminants including:*</p>
                <div class="eg-features">
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png" alt="Smoke Icon"><p>Smoke</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png" alt="Allergens"><p>Allergens</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png" alt="Bacteria"><p>Bacteria</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png" alt="Dust"><p>Dust</p></div>
                    <div class="eg-feature"><img src="https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png" alt="Pet Dander"><p>Pet Dander</p></div>
                </div>
            </div>
            <a class="eg-cta-button" data-tab-name="egPrimary">Claim Your 40% Off</a>
        </div>
        <div class="eg-hero-right">
            <div class="eg-video-thumbnail">
                <img class="eg-doc-desk" src="https://sitetunershosting.com/clients/AirDoctor/AirDoctor.jpg" alt="Dr. Rutland Thumbnail">
                <img class="eg-doc-mob" src="https://sitetunershosting.com/clients/AirDoctor/AirDoctor.jpg" alt="Dr. Rutland Thumbnail">
                <div class="vid-text eg-video-button">
                  <div class="video-button-wrapper2 video-btn-wrap eg-hero-play-btn">
                    <a href="javascript:void(0)" class="home_video_btn eg-ply-btn" id="play-button"><i class="icon-play eg-icon-ply" style="font-size:1.5em;"></i>
                    </a>
                  </div>
                </div>
            </div>
            <div class="eg-content">
              <p class="eg-para">“Get Relief From Allergies, Asthma And Reduce Airborne Disease” <span>- Dr. Rutland, M.D. Pulmonologist</span></p>
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
    </div>
    <div class="eg-hero-AsSeenOn">
      <p class="eg-asSeen-text">As Seen On </p>
      <div class="eg-asSeen-logos">
        <img class="eg-asSeen-img eg-newsweek" src="https://shop.airdoctorpro.com/wp-content/uploads/2023/09/5a9292db9f724b48a4f24f191235a37a_1.webp">
        <img class="eg-asSeen-img eg-forbes" src="https://shop.airdoctorpro.com/wp-content/uploads/2023/09/2fbe4c631317481b9452988c4c0a2ab9_1.webp">
        <img class="eg-asSeen-img eg-cnn" src="https://shop.airdoctorpro.com/wp-content/uploads/2023/09/e335d0d577f34d0c8568e34884b65f3c_1.webp">
        <img class="eg-asSeen-img eg-wired" src="https://shop.airdoctorpro.com/wp-content/uploads/2023/09/29dc24dbcc3c4520bc70d40e2d53c7bd_1.webp">
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
          document.querySelector('.eg-hero-section .eg-video-thumbnail+.eg-content').style.display = 'none';
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
        </div>
      </div>`;

      const heroBanner = document.querySelector('#main > .ad_tv-lander-sec15');
      if (heroBanner) {
        heroBanner.insertAdjacentHTML('beforebegin', airbornehtml);
      }
      document.querySelector('.eg-airborne .eg-video').insertAdjacentElement('beforeend', document.querySelector('#main > .ad_tv-lander-sec10'));
      let intv = setInterval(() => {
        const imageElement = document.querySelector('.Air-TV .eg-airborne .eg-container_new .eg-video .img-holder-home2 > div:first-of-type img');
        const imageElement2 = document.querySelector('.Air-TV .eg-airborne .eg-container_new .eg-video .img-holder-home2 > div:last-of-type img');
        if (imageElement) {
          imageElement.src = 'https://sitetunershosting.com/clients/AirDoctor/video_image.png';
          imageElement.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/video_image.png");
          imageElement2.src = 'https://sitetunershosting.com/clients/AirDoctor/video_mobimage.png';
          imageElement2.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/video_mobimage.png");
        }
      }, 100);

      setTimeout(() => {
        clearInterval(intv);
      }, 5000);
    }

    function tripleFilter() {
      let filterHtml = `
      <div class="eg-filter_section">
    <div class="eg-container">
        <div class="eg-left_section">
          <div class="eg-left-inner">
          <h1 class="eg-heading">Enjoy Cleaner Air with AirDoctor's <br> Triple Filtration System</h1>
            <p class="eg-para">The Ultimate Performance to Clean the Air in Every Inch of Your Home</p>
            <div class="eg-image" style="display: none;"><img src="https://sitetunershosting.com/clients/AirDoctor/triple_filter_image.png"></div>
            <div class="eg-bulletpoints">
                <div class="eg-box"><span>1</span><span>The Pre-filter captures large particles such as hair and dust.</span></div>
                <div class="eg-box"><span>2</span><span>The Carbon VOC filter captures odors, VOC and dangerous gases such as
                        formaldehyde and ozone.</span></div>
                <div class="eg-box"><span>3</span><span>The UltraHEPA® filtration captures virtually 100% of the smallest and most
                        dangerous contaminants down to .003 microns
                        such as smoke, bacteria and viruses that can make you sick. That’s 100 times smaller filtration than
                        ordinary HEPA
                        purifiers. *</span></div>
            </div>
            <a href="https://shop.airdoctorpro.com/checkout/?add-to-cart=335531&quantity=1">Buy Now & Save!</a>
          </div>
        </div>
        <div class="eg-right_section">
            <div class="eg-image"><img src="https://sitetunershosting.com/clients/AirDoctor/triple_filter_image.png"></div>
        </div>
    </div>
    </div>`

      if (!document.querySelector('.eg-filter_section')) {
        document.querySelector('#main > .ad_tv-lander-sec15').insertAdjacentHTML('afterend', filterHtml);
      }
    }

    function airDocDifference() {
      document.querySelector('#main .ad_tv-lander-sec17').classList.add("eg-difference");
      const heading = document.querySelector('#main .ad_tv-lander-sec17 .section-content > div:first-child h2');
      if (heading) {
        heading.textContent = "Not Sure if the AirDoctor 3500 is Right for You?";
      }

      const divToMove = document.querySelector('#main .ad_tv-lander-sec17 .section-content > div:first-child');
      const target = document.querySelector('#main .ad_tv-lander-sec17 .bg');
      if (divToMove && target) {
        target.appendChild(divToMove);
      }

      const images = document.querySelectorAll('#main .ad_tv-lander-sec17 .section-content .tv-land-table-body > div:last-child img');
      images.forEach((img, index) => {
        if (index !== 0) {
          img.src = "https://sitetunershosting.com/clients/AirDoctor/x-circle.png";
          img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/x-circle.png");
        }
      });
      const firstOtherBrandsImage = document.querySelector('#main .ad_tv-lander-sec17 .section-content>div:nth-child(2)>div:last-child img');
      if (firstOtherBrandsImage) {
        firstOtherBrandsImage.src = "https://sitetunershosting.com/clients/AirDoctor/check-circle.png";
        firstOtherBrandsImage.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/check-circle.png");
      }
      const firstOtherBrandsImage1 = document.querySelectorAll('#main .ad_tv-lander-sec17 .section-content>div > div:nth-child(2) img');
      if (firstOtherBrandsImage1) {
        firstOtherBrandsImage1.forEach(function (element) {
          element.src = "https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png";
          element.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/hero_bulletpoint.png");
        });
      }
      if (window.innerWidth < 767) {
        document.querySelector('.eg-difference.ad_tv-lander-sec17 .tv-land-table-head>div:first-of-type').insertAdjacentElement('beforeend', document.querySelector('.Air-TV .eg-difference h2'));
      }
      const diffImg= document.querySelector('.Air-TV .eg-difference .tv-bluw-bg img')
      diffImg.src = 'https://shop.airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/AIRDlogo_1.png.webp';
      diffImg.setAttribute("data-src", "https://shop.airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/AIRDlogo_1.png.webp");


      const otherBrandHeading = document.querySelector('.tv-heading-ss h3');
      otherBrandHeading.innerHTML = otherBrandHeading.innerHTML.replace(/<br\s*\/?>/gi, '');
    }

    function guaranteeSection() {

      const guaranteeHtml = `
        <div class="eg-image-wrapper">
          <img class="eg-new-image" src="https://shop.airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/08/AD3000_blue_ring-2-1.png.webp">
          <div class="eg-guarantee-img">
            <img src="https://shop.airdoctorpro.com/wp-content/uploads/2024/03/BreatheEasy-1.svg">
          </div>
        </div>
      `;

      var guaranteeSection = document.querySelector('.ad_tv-lander-sec3');
      guaranteeSection.classList.add('eg-guarantee-Section');
      const guaranteeTitle = guaranteeSection.querySelector('.section-content > div:last-child > div:nth-child(2) > div > div');
      document.querySelector('.ad_tv-lander-sec15').insertAdjacentElement('afterend', guaranteeSection);

      const egGuarsnteeCon = guaranteeSection.querySelector('.section-content');
  
      if (egGuarsnteeCon && !document.querySelector('.eg-image-wrapper')) {
        egGuarsnteeCon.insertAdjacentHTML('afterbegin', guaranteeHtml);
      }
    
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
      }, 7000);

      if (guaranteeTitle) {
        guaranteeTitle.innerHTML = 'Save 40% & Take Advantage of the 30-Day Breathe Easy Guarantee!';
      }

      const saveTitleMob = guaranteeSection.querySelector('.section-content > div:last-child > div:nth-child(2) > div > div');
      if (window.innerWidth < 767 && saveTitleMob && egGuarsnteeCon) {
        egGuarsnteeCon.insertAdjacentElement('afterbegin', saveTitleMob);
      }

      const singlePaymentText = guaranteeSection.querySelector('.section-content .hospital-grade-tv-price:first-child > div > p');

      if (singlePaymentText) {
        singlePaymentText.textContent = singlePaymentText.textContent
          .replace(/:/g, '')
          .replace(/^just/, 'Just');
      }
    }

    function reviewSection(){
      document.querySelector('#main .ad_tv-lander-sec7').classList.add("eg-review");
      const secThree = document.querySelector('#main .ad_tv-lander-sec3');
      const secSeven = document.querySelector('#main .ad_tv-lander-sec7');
      if (secThree && secSeven) {
          secThree.insertAdjacentElement('afterend', secSeven);
      }
    }

    function limitedTimeSection() {
      var sectionHeader = `
      <div class="eg-section-header">
        <div class="eg-inner">
          <h3 class="eg-limited-time">Limited Time Offer - Save 40% on the Air Doctor 3500!</h3>
        </div>
        <div class="eg-inner">
          <p class="eg-bullets-title">Our Best Selling and Classic Air Purifier!</p>
          <ul>
            <li>Circulates the air 4x/hour in 630 sq. ft. spaces and 2x/hour in 1,260 sq. ft. spaces.</li>
            <li>Captures particles 100X smaller than HEPA standard.</li>
            <li>Whisper-jet fans are 30% quieter than traditional air purifiers.</li>
            <li>Simple Touch Control Panel with auto-mode sensors that auto-adjust based on air quality.</li>
          </ul>
        </div>
      </div>`;

      const upgradeNew = `
      <div class="eg-new-upgrade">
        <div class="eg-product eg-selected">
          <div class="eg-inputs">
            <span class="eg-input"></span>
            <p>AirDoctor 3500 </p>
          </div>
          <div class="eg-new-prices">
            <span class="eg-price"></span>
            <span class="eg-new-discount">40%</span>
          </div>
        </div>
        <div class="eg-product">
          <div class="eg-inputs">
            <span class="eg-input"></span>
            <p>AirDoctor 3500 Smart with Mobile App</p>
          </div>
          <div class="eg-new-prices">
            <span class="eg-price"></span>
            <span class="eg-new-discount">40%</span>
          </div>
        </div>
      </div>`;

      var limitedSection = document.querySelector('.ad_tv-sep-2024-sec21 + .ad_tv-lander-sec6');
      limitedSection.classList.add('eg-3500-section');
      if (!document.querySelector('.eg-section-header')) {
        limitedSection.querySelector('.product_text-inner-col').insertAdjacentHTML('afterbegin', sectionHeader);
      }

      const sectionDesTitle = limitedSection.querySelector('.product_section-wrapper');
      const egLimited = document.querySelector('.eg-limited-time');
      if (sectionDesTitle && egLimited) {
        sectionDesTitle.insertAdjacentElement('afterbegin', egLimited);
      }

      const buyNowBtns = document.querySelectorAll('.eg-3500-section .section.product-listing-section a.secondary');
      buyNowBtns.forEach(buyNowBtn => {
        buyNowBtn.innerText = 'Buy Now & Save!';
      });

      changeOnClick();

      let intv = setInterval(() => {
        const mainImg = document.querySelector('.eg-3500-section .product_image-colinner img');
        if (mainImg) {
          mainImg.setAttribute('src', 'https://shop.airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/08/AD3000_blue_ring-2-1.png.webp');
          mainImg.setAttribute("data-src", "https://shop.airdoctorpro.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/08/AD3000_blue_ring-2-1.png.webp");
        }
      }, 100);

      setTimeout(() => {
        clearInterval(intv);
      }, 8000);

      const priceContainer = document.querySelector('.eg-3500-section .section.product-listing-section .product_price_container');
      const iotSec = document.querySelector('.eg-3500-section .section.product-listing-section .upgrade_to_iot_section');
      if (priceContainer && iotSec) {
        iotSec.insertAdjacentElement('afterend', priceContainer);
      }

      const upgradeSection = document.querySelector('.eg-3500-section .upgrade_to_iot_section');
      if (!document.querySelector('.eg-new-upgrade')) {
        upgradeSection.insertAdjacentHTML('afterbegin', upgradeNew);
      }

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

        document.querySelectorAll('.eg-product').forEach(product => {
          const discount = product.querySelector('.eg-new-discount');
          const inputs = product.querySelector('.eg-inputs');

          if (discount && inputs) {
            inputs.appendChild(discount);
          }
        });

      }
      clickEvents();
      priceUpdate();
    }

    function changeOnClick() {
      const salePrices = document.querySelectorAll('.affirm_price_wrapper .affirm_sale_price .woocommerce-Price-amount');
      salePrices.forEach((priceElement) => {
        const price = priceElement.textContent.trim();
        const affirmWrapper = priceElement.closest('.affirm_price_wrapper');
        if (affirmWrapper) {
          affirmWrapper.textContent = `Get it as low as ${price}/mo with`;
        }
      });
        const affirmImgs = document.querySelectorAll('.eg-3500-section [id*="product_affiam"] > div > a > img');
        affirmImgs.forEach(img => {
          img.src = 'https://sitetunershosting.com/clients/AirDoctor/affirmImg.png';
          img.setAttribute("data-src", "https://sitetunershosting.com/clients/AirDoctor/affirmImg.png");
        });
    }

    function clickEvents() {
      live('.eg-product', 'click', function () {
        document.querySelectorAll('.eg-product').forEach(product => {
          product.classList.remove('eg-selected');
        });
        this.classList.add('eg-selected');
        changeOnClick();
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
  
      let currencySymbol2 = price2Match[1] || '';
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
      document.querySelectorAll('.product_display_price .woocommerce-Price-amount bdi').forEach((bdi, index) => {
          const match = bdi.textContent.match(/^([^\d\s]+)?\s?([\d,.]+)/);
          if (!match) return;
  
          let currencySymbol = match[1] || '';
          let originalPrice = parseFloat(match[2].replace(/[^0-9.]/g, ''));
  
          const existingUpdatedPriceSpan = bdi.parentElement.querySelector('.eg-updated-price');
  
          if (index === 0) {
              if (existingUpdatedPriceSpan) {
                  existingUpdatedPriceSpan.textContent = discountedPrice1;
              } else {
                  const discountedPriceSpan = document.createElement('span');
                  discountedPriceSpan.className = 'eg-updated-price';
                  discountedPriceSpan.textContent = discountedPrice1;
                  bdi.insertAdjacentElement('afterend', discountedPriceSpan);
              }
          } else {
              if (!isNaN(originalPrice)) {
                  const discountedPrice = currencySymbol + calculateDiscount(originalPrice);
                  if (existingUpdatedPriceSpan) {
                      existingUpdatedPriceSpan.textContent = discountedPrice;
                  } else {
                      const discountedPriceSpan = document.createElement('span');
                      discountedPriceSpan.className = 'eg-updated-price';
                      discountedPriceSpan.textContent = discountedPrice;
                      bdi.insertAdjacentElement('afterend', discountedPriceSpan);
                  }
              }
          }
      });
    }  

    function calculateDiscount(price) {
      return (price * 0.5991).toFixed(2);
    }

    function featureSection() {
      document.querySelector('.ad_tv-lander-sec15').classList.add('eg-features-Section');
      const featureSection = document.querySelector('.eg-features-Section');
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

      if (window.innerWidth < 767) {
        const mobTitleFeatures = featureSection.querySelector('.section-content > div > div:first-child');
        if (mobTitleFeatures) {
          mobTitleFeatures.parentElement.before(mobTitleFeatures);
        }

        const parentContainer = featureSection.querySelector('.section-content>div:nth-child(2)');
        const lastTwoDivs = Array.from(parentContainer.querySelectorAll('.col')).slice(-2);
        const grandParentContainer = parentContainer.parentNode;
        lastTwoDivs.forEach(div => {
          grandParentContainer.appendChild(div);
        });

        setTimeout(() => {
          $ = window.jQuery;
          waitForSlick(function () {
            featureSlider();
          });
        }, 100);
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

    function featureSlider() {
      $('.eg-features-Section .section-content > div:nth-child(2)').slick({
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,        
        centerPadding: '10px', 
      });
    }

    /* Initialize variation */
    waitForElement('#main .ad_tv-lander-sec20', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


