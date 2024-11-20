(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    var svgicon = `<svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" role="presentation"><title>4.9 rating (44 votes)</title><use href="#looxicons-rating-icon"></use></svg>`;
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

    function waitForjQuery(trigger) {
      var interval = setInterval(function () {
        if (window.jQuery != undefined) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
    }

    function addScript() {
      var cssScript = '' +
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css' />";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);

      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
    }

    function addTnsScript() {
      var cssScript = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">`;
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
      var tinnyScript = document.createElement('script');
      tinnyScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js';
      document.body.appendChild(tinnyScript);
    }

    function waitForTns(callback) {
      var interval = setInterval(function () {
        if (window.tns != undefined) {
          clearInterval(interval);
          callback();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000)
    }

    waitForjQuery(function () {
      addScript();
    });

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

    const testData = {
      "/products/eternal-rose-present-bouquet": {
        "productName": "Eternal Rose Present Bouquet",
        "Review": "(44)",
        "price": "7,200.00 RSD",
        "productid": "41882200506573",
        "sliderimages": [
          {
            "url": "https://fabulove.co/cdn/shop/files/33_1_750x.jpg?v=1691525550",
            "color": "Red Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/31_750x.jpg?v=1691525550",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/32_fb4f878a-0c49-4130-b9f5-a0321091a85a_750x.jpg?v=1691525550",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/34_750x.jpg?v=1691525547",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxPinkrose_750x.jpg?v=1695066839",
            "color": "Pink Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/WhiteboxPinkrose_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxYellowRose_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/WhiteboxYellowRose_750x.jpg?v=1695066839",
            "color": "Yellow Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxPeachRose_750x.jpg?v=1695066839",
            "color": "Peach Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/WhiteboxPeachRose_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Blackboxpurplerose_750x.jpg?v=1695066839",
            "color": "Purple Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Whiteboxpurplerose_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxHotpink_750x.jpg?v=1695066839",
            "color": "Hot Pink Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Whiteboxhotpink_750x.jpg?v=1695066839",
            "color": "white"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Blackboxlightpink_750x.jpg?v=1695066839",
            "color": "Light Pink Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Whiteboxlightpink_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Blackboxaquablue_750x.jpg?v=1695066839",
            "color": "Aqua Blue Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/Whiteboxaquablue_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxDarkbluerose_750x.jpg?v=1695066839",
            "color": "Dark Blue Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/WhiteboxDarkbluerose_750x.jpg?v=1695066839",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/BlackboxWhiterose_750x.jpg?v=1695066839",
            "color": "White Roses"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/WhiteboxWhiterose_750x.jpg?v=1695066839",
            "color": ""
          }
        ],
        "coloroption": [
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Red%2520Roses.media",
            "color": "Red Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Pink%2520Roses.media",
            "color": "Pink Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Yellow%2520Roses.media",
            "color": "Yellow Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Peach%2520Roses.media",
            "color": "Peach Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Purple%2520Roses.media",
            "color": "Purple Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Hot%2520Pink%2520Roses.media",
            "color": "Hot Pink Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Light%2520Pink%2520Roses.media",
            "color": "Light Pink Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Aqua%2520Blue%2520Roses.media",
            "color": "Aqua Blue Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/Dark%2520Blue%2520Roses.media",
            "color": "Dark Blue Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Rose%2520Colors/White%2520Roses.media",
            "color": "White Roses"
          },
        ],
        "boxcolor": [
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Box%2520Color/Black.media",
            "color": "Hot Pink Roses"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Box%2520Color/White.media",
            "color": "white"
          },
        ]
      },
      "/products/infinite-love-sterling-silver-bracelet": {
        "productName": "Eternal Love Sterling Silver Bracelet",
        "Review": "(38)",
        "price": "5,500.00 RSD",
        "productid": "41656525750477",
        "sliderimages": [
          {
            "url": "https://fabulove.co/cdn/shop/files/B02_720x_4bce78e7-aed7-4772-a128-45ed2c677633_750x.webp.jpg?v=1686697914",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/B03_720x_2ce8e283-85f0-46e1-ba4a-11234f1b838b_750x.webp.jpg?v=1686697914",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/2-main-mode-cz-stein-unendlichkeit-armband-silber-uberzogene-einstellbare-pull-push-armband_720x_0fdf5091-99cd-4896-917c-ac09a8f2203a_750x.webp.jpg?v=1686697914",
            "color": ""
          }
        ]
      },
      "/products/infinitybracelets": {
        "productName": "Infinity Engraved Bracelet Set",
        "Review": "(21)",
        "price": "5,000.00 RSD",
        "productid": "41587232145613",
        "sliderimages": [
          {
            "url": "https://fabulove.co/cdn/shop/products/e5bb83ae-6107-4033-9020-4339ec47a8a0_750x.jpg?v=1687394191",
            "color": "Gold"
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/1a8a8f11-723b-4eb3-a228-a2dd7f1d59c1_750x.jpg?v=1687394191",
            "color": "Silver"
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/ea9bb322-207c-4096-8072-553b0c3e1fdf_750x.jpg?v=1687394191",
            "color": "Rose Gold"
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/1cfa9812-d7d8-4df4-b7db-a4968818cc22_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/936c54fe-248e-44e5-827e-22d5e9cece9f_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/b3dac759-9544-4825-babe-09cb4a858bb4_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/651261ed-f50e-4248-b8e2-4ceb8a1f10c4_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/3bf3f6e1-57b7-4c2a-b82a-e230d44df1e6_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/5ba7ec14-0df1-481b-bf29-52f3f8260125_750x.jpg?v=1687394191",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/products/697ef816-0cde-4ad5-b03b-5904d2dd4243_750x.jpg?v=1687394191",
            "color": ""
          }
        ],
        "boxcolor": [
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Gold.media",
            "color": "Gold"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Silver.media",
            "color": "Silver"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Rose%2520Gold.media",
            "color": "Rose Gold"
          },
        ]
      },
      "/products/loveletternecklace": {
        "productName": "Personalized Love Letter Necklace",
        "Review": "(37)",
        "price": "5,800.00 RSD",
        "productid": "41375500501197",
        "sliderimages": [
          {
            "url": "https://fabulove.co/cdn/shop/files/IMG_1265_6d454a84-8fd5-488f-a47e-6a8bd7f3cec3_750x.jpg?v=1714094143",
            "color": "Gold"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/IMG_1265_750x.jpg?v=1714094143",
            "color": "Silver"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/IMG_1265-_2_750x.jpg?v=1714094143",
            "color": "Rose Gold"
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/36_1080x.jpg?v=1714094143",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/37_1080x.jpg?v=1714094141",
            "color": ""
          },
          {
            "url": "https://fabulove.co/cdn/shop/files/1_0034__6_1080x.jpg?v=1714094141",
            "color": ""
          }
        ],
        "boxcolor": [
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Gold.media",
            "color": "Gold"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Silver.media",
            "color": "Silver"
          },
          {
            "url": "https://cdn.starapps.studio/v2/apps/vsk/led-cloud-diffuser/swatches/Color/Rose%2520Gold.media",
            "color": "Rose Gold"
          },
        ]
      }
    };

    let egstring = `
    <div class="eg-overlay">
    <div class="eg-popup">
        <div class="eg-close_icon"><img src="https://i.ibb.co/9yjQsT2/Container.png"></div>
        <div class="eg-container_new">
            <h1 class="eg-heading">Wait! We have a special upgrade just for Valentines!</h1>
            <p class="eg-subheading">Add this combo GIFT for <span class="eg-discount">50%</span> off only during
                Valentines.</p>
            <div class="eg-main_container">
                <div class="eg-image_section"></div>
                <div class="eg-right_section">
                    <div class="eg-content_sectin">
                        <h1 class="eg-product_name">Eternal Rose Present Bouquet</h1>
                        <p class="eg-reviews"><span>${svgicon}${svgicon}${svgicon}${svgicon}${svgicon}</span><span>(2,273)</span></p>
                        <div class="eg-price"><span class="eg-discountprice">12,200.00 RSD</span>from<span
                                class="eg-actualprice">7,200.00 RSD</span></div>
                        <div class="eg-buttons">
                            <a class="eg-upgrade">Yes! Upgrade My Gift</a>
                            <a class="eg-miss">No, I’ll miss</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="eg-buttons">
          <a class="eg-upgrade">Yes! Upgrade My Gift</a>
          <a class="eg-miss">No, I’ll miss</a>
        </div>
    </div>
    </div>`

    let fieldHtml = `<div class="eg-field_option">
    <div class="eg-box">
        <label class="eg-label" >His Bracelet (Left Engraving)</label>
        <div class="eg-inpt-cus-opt">
            <input data-title="His Bracelet (Left Engraving)" maxlength="15" type="text" name="properties[His Bracelet (Left Engraving)]" value="">
        </div>
    </div>
    <div class="eg-box">
        <label class="eg-label">His Bracelet (Right Engraving)</label>
        <div class="eg-inpt-cus-opt">
            <input data-title="His Bracelet (Right Engraving)" maxlength="15" type="text" name="properties[His Bracelet (Right Engraving)]" value="">
        </div>
    </div>
    <div class="eg-box">
        <label class="eg-label">Her Bracelet (Left Engraving)</label>
        <div class="eg-inpt-cus-opt">
            <input data-title="Her Bracelet (Left Engraving)" maxlength="15" type="text" name="properties[Her Bracelet (Left Engraving)]" value="">
        </div>
    </div>
    <div class="eg-box">
        <label class="eg-label">Her Bracelet (Right Engraving)</label>
        <div class="eg-inpt-cus-opt">
            <input data-title="Her Bracelet (Right Engraving)" maxlength="15" type="text" name="properties[Her Bracelet (Right Engraving)]" value="">
        </div>
    </div>
    </div>`

    let html = `<div class="eg-field_option eg-loveletter">
    <div class="eg-box">
        <label class="eg-label" >Love Letter Message</label>
        <div class="eg-inpt-cus-opt">
            <input data-title="Love Letter Message" maxlength="35" type="text" name="properties[Love Letter Message]" required value="">
        </div>
        <div class="eg-error">Please fill out this field.</div>
    </div>
    </div>`

    // Generate HTML for slider images
    const generateSliderHTML = (images) => {
      return `
            <div class="eg-slider">
                <div class="eg-main-slider eg-slider-for">
                    ${images.map(image => `
                        <div class="eg-image" imagecolor="${image.color}">
                            <img src="${image.url}" alt="${image.color}">
                        </div>
                    `).join('')}
                </div>
                <div class="eg-thumbnail-slider eg-slider-nav" data-slides-to-show="">
                    ${images.map(image => `
                        <div class="eg-image" imagecolor="${image.color}">
                            <img src="${image.url}" alt="${image.color}">
                        </div>
                    `).join('')}
                </div>
            </div>`;
    };

    // Generate HTML for color options
    const generateColorOptionsHTML = (colorOptions) => {
      return `
            <div class="eg-color_option">
              <div class="eg-colorname">Rose Colors -<span>Red Roses</span></div>
                <div class="eg-swatchcolor">
                    ${colorOptions.map(color => `
                        <div class="eg-swatch-view-item" imagecolor="${color.color}">
                            <img src="${color.url}" alt="${color.color}">
                        </div>
                    `).join('')}
                </div>
            </div>`;
    };

    // Generate HTML for box colors
    const generateBoxColorHTML = (boxColors) => {
      return `
            <div class="eg-box_color">
              <div class="eg-colorname">Box Color - <span>Black</span></div>
                <ul class="eg-swacth_item">
                    ${boxColors.map(box => `
                        <li class="eg-item" imagecolor="${box.color}">
                            <img src="${box.url}" alt="${box.color}">
                        </li>
                    `).join('')}
                </ul>
            </div>`;
    };

    function getProductData() {
      let titlesArray = [];
      const titleElements = document.querySelectorAll('.slidecarthq .items .title');
      if (titleElements.length) {
        titlesArray = Array.from(titleElements, element => element.textContent.trim());
      }
      updatedata(titlesArray);
    }

    function getData() {
      let titlesArray = [];
      if (!document.querySelector('.slidecarthq .items .title')) {
        const element = document.querySelector('.product-single__meta h1');
        if (element) {
          titlesArray = element.innerText
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          titlesArray = [titlesArray];
        }
      }
      updatedata(titlesArray);
    }

    function updatedata(titlesArray) {
      console.log("Product Titles:", titlesArray);
      let productData = null;
      if (titlesArray.includes("Eternal Rose Present Bouquet") && !titlesArray.includes("Eternal Love Sterling Silver Bracelet")) {
        document.body.classList.add('eg-infiniteproduct')
        productData = testData["/products/infinite-love-sterling-silver-bracelet"];
      } else if (titlesArray.includes("Eternal Love Sterling Silver Bracelet") && !titlesArray.includes("Eternal Rose Present Bouquet")) {
        productData = testData["/products/eternal-rose-present-bouquet"];
      } else if (titlesArray.includes("Eternal Rose Present Bouquet") && titlesArray.includes("Eternal Love Sterling Silver Bracelet") && !titlesArray.includes("Infinity Engraved Bracelet Set")) {
        productData = testData["/products/infinitybracelets"];
      } else if (titlesArray.includes("Eternal Rose Present Bouquet") && titlesArray.includes("Eternal Love Sterling Silver Bracelet") && titlesArray.includes("Infinity Engraved Bracelet Set") && !titlesArray.includes("Personalized Love Letter Necklace")) {
        productData = testData["/products/loveletternecklace"];
      } else if (titlesArray.includes("Personalized Love Letter Necklace") && !titlesArray.includes("Eternal Rose Present Bouquet")) {
        productData = testData["/products/eternal-rose-present-bouquet"];
      } else if (titlesArray.includes("Eternal Rose Present Bouquet") && titlesArray.includes("Eternal Love Sterling Silver Bracelet") && titlesArray.includes("Infinity Engraved Bracelet Set") && titlesArray.includes("Personalized Love Letter Necklace")) {
        const overlay = document.querySelector('.eg-overlay');
        if (overlay) overlay.remove();
      }

      if (productData) {
        console.log("Selected Product Data:", productData);
      } else {
        console.log("No matching products found in the cart.");
      }

      if (productData) {
        if (productData.sliderimages) {
          const sliderHTML = generateSliderHTML(productData.sliderimages);
          document.querySelector('.eg-overlay .eg-popup .eg-image_section').innerHTML = sliderHTML;
        }
        if (productData.coloroption && !document.querySelector('.eg-color_option')) {
          const colorOptionsHTML = generateColorOptionsHTML(productData.coloroption);
          document.querySelector('.eg-overlay .eg-popup .eg-right_section .eg-buttons').insertAdjacentHTML('beforebegin', colorOptionsHTML);
        }
        if (productData.boxcolor && !document.querySelector('.eg-box_color')) {
          const boxColorHTML = generateBoxColorHTML(productData.boxcolor);
          document.querySelector('.eg-overlay .eg-popup .eg-right_section .eg-price').insertAdjacentHTML('afterend', boxColorHTML);
        }
        document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-product_name').innerText = productData.productName;
        document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-reviews > span:last-of-type').innerText = productData.Review;
        document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-price').innerText = productData.price;
        document.querySelectorAll('.eg-overlay .eg-popup .eg-buttons a:first-of-type').forEach(e => {
          e.setAttribute('data-productid', productData.productid);
        });
      }

      waitForElement('.eg-popup .eg-main_container .eg-image_section .eg-slider-nav', function () {
        slider();
      }, 50, 15000);

      if (!document.querySelector('.AB037 .eg-popup .eg-main_container .eg-right_section .eg-box_color')) {
        document.body.classList.add('eg-defproduct')
      }
      const productNameElement = document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-product_name');
      if (productNameElement) {
        const productNameText = productNameElement.textContent.toLowerCase();
        if (productNameText.includes('infinity engraved bracelet set')) {
          document.body.classList.add('eg-product')
          document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-box_color').insertAdjacentHTML('afterend', fieldHtml)
        } else if (productNameText.includes('personalized love letter necklace')) {
          document.querySelector('.eg-overlay .eg-container_new .eg-main_container .eg-box_color').insertAdjacentHTML('afterend', html)
        }
      }
    }

    function init() {
      document.body.classList.add('AB037')
      if (!document.querySelector('.eg-overlay')) {
        document.body.insertAdjacentHTML('beforeend', egstring);
      }

      const cartBubble = document.querySelector('.site-nav__icons [aria-controls="CartDrawer"] .cart-link__bubble-num');
      if (cartBubble) {
        const textContent = cartBubble.textContent.trim();
        if (textContent === '0') {
          console.log('zeroooo')
          getData();
          updateSlidesToShow();
        } else {
          console.log('nott zerooo')
          waitForElement('.slidecarthq .items .title', function () {
            getProductData();
            updateSlidesToShow();
          }, 50, 15000);
        }
      }
      clickevents();
    }

    function isProductInCart(productId) {
      return fetch(`${window.Shopify.routes.root}cart.js`)
        .then(response => response.json())
        .then(data => {
          const isInCart = data.items.some(item => item.id === productId);
          console.log('Is product in cart:', isInCart);
          return isInCart;
        });
    }

    function addToCart(productId, quantity = 1, properties = {}) {
      isProductInCart(productId)
        .then(isInCart => {
          if (!isInCart) {
            fetch(`${window.Shopify.routes.root}cart/add.js`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                'items': [{
                  'id': productId,
                  'quantity': quantity,
                  'properties': properties,
                }]
              }),
            })
              .then((resp) => {
                if (resp.ok && window.SLIDECART_UPDATE) {
                  window.SLIDECART_UPDATE();
                }
              })
              .catch((err) => console.error(err));
          }
        });
    }

    function updateSlidesToShow() {
      const slider = document.querySelector('.eg-popup .eg-main_container .eg-image_section .eg-thumbnail-slider');
      const images = document.querySelectorAll('.eg-popup .eg-main_container .eg-image_section .eg-thumbnail-slider .eg-image');
      if (!slider || images.length === 0) return;
      let slidesToShow = images.length;
      if (slidesToShow > 5) {
        if (window.innerWidth <= 767) {
          slider.setAttribute('data-slides-to-show', '4');
        } else {
          slider.setAttribute('data-slides-to-show', '5');
        }
      } else {
        document.body.classList.add('eg-product')
        slider.setAttribute('data-slides-to-show', slidesToShow);
      }
    }

    function clickevents() {
      live('.eg-overlay .eg-close_icon img, .eg-overlay .eg-popup .eg-buttons a:last-of-type', 'mousedown', function () {
        sessionStorage.removeItem('currentPath');
        document.body.classList.remove('eg-showpopup');
      });

      document.querySelector('.product-single__meta form [type="submit"]').addEventListener('mousedown', function () {
        const storedPath = sessionStorage.getItem('currentPath');
        if (storedPath === window.location.pathname) {
          console.log('Pathnames are the same:', storedPath);
          const overlay = document.querySelector('.eg-overlay');
          if (overlay) {
            overlay.remove();
          }
        }
        sessionStorage.setItem('currentPath', window.location.pathname);
        document.querySelector('.eg-main_container .eg-image_section .eg-main-slider .slick-next').click();
        setTimeout(() => {
          document.querySelector('.eg-main_container .eg-image_section .eg-main-slider .slick-prev').click();
          const loveLetterMessage = document.querySelector('#px-option-content-wrapper [data-title="Love Letter Message"]');
          if (loveLetterMessage) {
            if (loveLetterMessage.value.length > 0) {
              document.body.classList.add('eg-showpopup');
            }
          } else {
            document.body.classList.add('eg-showpopup');
          }
        }, 500);
      });

      document.querySelector('.eg-overlay').addEventListener('click', function (event) {
        if (!event.target.closest('.eg-popup')) {
          sessionStorage.removeItem('currentPath');
          document.body.classList.remove('eg-showpopup');
        }
      });


      live('.eg-overlay .eg-main_container .eg-color_option .eg-swatchcolor .eg-swatch-view-item', 'click', function () {
        const previouslyActive = document.querySelector('.eg-overlay .eg-main_container .eg-color_option .eg-swatchcolor .eg-swatch-view-item.eg-active');
        if (previouslyActive) {
          previouslyActive.classList.remove('eg-active');
        }
        this.classList.add('eg-active');
        let getvalue = this.getAttribute('imagecolor');
        document.querySelector('.eg-main_container .eg-color_option .eg-colorname span').innerText = getvalue;
        const matchingElement = document.querySelector(`.eg-popup .eg-image_section .eg-thumbnail-slider .eg-image[imagecolor="${getvalue}"]`);
        if (matchingElement) {
          matchingElement.click();
        }
      });

      live('.eg-overlay .eg-main_container .eg-box_color .eg-swacth_item .eg-item', 'click', function () {
        const previouslyActive = document.querySelector('.eg-overlay .eg-main_container .eg-box_color .eg-swacth_item .eg-item.eg-active');
        if (previouslyActive) {
          previouslyActive.classList.remove('eg-active');
        }
        this.classList.add('eg-active');
        let getvalue = this.getAttribute('imagecolor');
        document.querySelector('.eg-main_container .eg-box_color .eg-colorname span').innerText = getvalue;
        const matchingElement = document.querySelector(`.eg-popup .eg-image_section .eg-thumbnail-slider .eg-image[imagecolor="${getvalue}"]`);
        if (matchingElement) {
          matchingElement.click();
        }
      });

      live('.eg-overlay .eg-popup .eg-buttons a:first-of-type', 'click', function () {
        cartmessage(this);
      })
    }

    function slider() {
      waitForjQuery(function () {
        addScript();
        $ = window.jQuery;
        waitForSlick(function () {
          $('.eg-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            loop: false,
            asNavFor: '.eg-slider-nav',
            dots: false,
            customPaging: function (slider, i) {
              var slideNumber = i + 1;
              var totalSlides = slider.$slides.length;
              return '<a class="dot">' + slideNumber + ' of ' + totalSlides + '</a>';
            },
          });

          var slidesToShowNav = parseInt($('.eg-slider-nav').attr('data-slides-to-show'), 10);

          $('.eg-slider-nav').slick({
            slidesToShow: slidesToShowNav,
            slidesToScroll: 1,
            horizontal: true,
            loop: false,
            asNavFor: '.eg-slider-for',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            verticalSwiping: false,
            centermode: false,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  vertical: false,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  vertical: false,
                }
              },
              {
                breakpoint: 580,
                settings: {
                  vertical: false,
                  slidesToShow: slidesToShowNav,
                }
              },
              {
                breakpoint: 400,
                settings: {
                  vertical: false,
                  slidesToShow: slidesToShowNav > 1 ? slidesToShowNav - 1 : slidesToShowNav,
                }
              }
            ]
          });
        });
      });

      addTnsScript();
      waitForTns(() => {
        tns({
          container: '.eg-main_container .eg-color_option .eg-swatchcolor',
          items: 6,
          loop: false,
          mouseDrag: true,
          slideBy: 1,
          mouseDrag: true,
          swipeAngle: false,
          speed: 400,
          autoplay: false,
          autoplayTimeout: 4000,
          navPosition: "bottom",
        });
      });
    }

    function cartmessage(data) {
      const inputField = document.querySelector('.eg-main_container .eg-field_option input[data-title="Love Letter Message"]');
      if (inputField) {
        const inputValue = inputField.value.trim();
        if (inputValue.length > 0) {
          document.body.classList.remove('eg-error');
          let dataid = data.getAttribute('data-productid');
          addToCart(dataid, 1, { 'Love Letter Message': inputValue });
          document.body.classList.remove('eg-showpopup');
        } else {
          document.body.classList.add('eg-error');
        }
      } else {
        let dataid = data.getAttribute('data-productid');
        addToCart(dataid, 1);
        document.body.classList.remove('eg-showpopup');
      }
    }

    /* Initialize variation */
    waitForElement('.site-nav__icons [aria-controls="CartDrawer"] .cart-link__bubble-num', init, 500, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


