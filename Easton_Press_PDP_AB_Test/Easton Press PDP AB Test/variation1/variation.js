(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;

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

    live('.thumbnail-carousel-container .slick-next', 'click', function () {
      document.body.classList.remove('eg-show')
    });

    live('.eg-readmore', 'click', function () {
      document.body.classList.add('eg-show_para')
    });

    live('.eg-readless', 'click', function () {
      document.body.classList.remove('eg-show_para')
    });

    live('.pdp-images .swiperThumbs .swiper-slide', 'click', function () {
      document.body.classList.remove('eg-show')
    });

    let egstring = `<div class="eg-badges">
    <div class="eg-badge">
        <div class="eg-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
                <path
                    d="M42.9701 23.6948C41.4275 21.6971 41.4275 21.6971 39.885 19.6439C40.2156 18.2011 40.6012 15.3711 40.7665 13.9838C40.6563 13.6508 36.3042 12.3191 35.6431 11.9861C34.5413 9.37801 34.5413 9.37801 33.3844 6.76992C30.7952 7.15836 30.7952 7.15836 28.1509 7.60229C25.6718 5.99304 25.6719 5.99304 23.2479 4.38379C21.1545 5.99304 21.1545 5.99304 19.006 7.60229C16.2515 7.32483 16.2515 7.32483 13.497 6.99188C12.3952 9.48899 12.3952 9.48899 11.3485 11.9861C8.86946 13.0959 8.86946 13.0959 6.39041 14.1503C6.05987 14.3722 6.28023 14.8717 6.33532 15.3711C6.4455 16.8138 6.94131 18.867 7.16167 20.3653C5.56407 22.363 5.56407 22.363 3.96646 24.4162C5.61916 26.6913 5.61916 26.6913 7.27185 28.9664C6.94131 31.63 6.94131 31.63 6.55568 34.2936C9.08981 35.7364 9.08981 35.7364 11.5689 37.1792C12.4503 39.4543 12.4503 39.4543 13.3317 41.674C16.0862 41.3965 16.0862 41.3965 18.8407 41.1745C21.3748 42.7283 21.3748 42.7283 23.8539 44.2821C26.1126 42.6173 26.1126 42.6173 28.3713 40.9526C31.0707 40.8971 31.0707 40.8971 33.7701 40.8416C34.6515 38.6219 34.6515 38.6219 35.5329 36.4578C38.0671 34.904 38.0671 34.904 40.6563 33.3503C40.4359 32.8508 39.885 29.1329 39.6647 28.0231C41.3174 25.9144 41.3174 25.9144 42.9701 23.6948Z"
                    stroke="#B9B7B7" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.5569 22.252C19.5569 22.03 19.6671 21.8081 19.8874 21.6971C20.8239 21.2531 23.4132 19.9214 24.0191 17.8682C24.2395 17.0913 24.2395 16.2034 23.8539 15.0381C23.4683 13.8728 24.9557 12.541 26.2227 13.9283C27.7653 15.593 28.4814 17.6462 27.2144 20.6982C27.2144 20.6982 30.9054 20.6982 32.0623 20.7537C32.7784 20.7537 33.4395 21.3641 33.3844 22.5294C33.3293 23.7503 32.3928 23.9722 32.3928 23.9722C32.3928 23.9722 33.2742 24.3052 33.3844 25.4705C33.3844 25.4705 33.4946 26.8023 32.2275 27.0242C32.7233 27.4127 32.8886 27.6901 32.8335 28.467C32.7233 29.5768 31.3461 29.7988 31.3461 29.7988C31.3461 29.7988 31.6215 30.4092 31.2359 31.1861C30.9605 31.6855 30.3545 32.1294 29.473 32.1294C26.7736 32.1294 21.7054 31.741 20.0527 31.63C19.7772 31.63 19.5018 31.3526 19.5018 31.0751C19.5569 29.3549 19.5569 23.8057 19.5569 22.252Z"
                    fill="#B9B7B7" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.7856 21.919C18.7856 21.7526 18.7305 21.6416 18.6204 21.5306C18.5102 21.4196 18.3449 21.3641 18.2347 21.3641C17.0778 21.3641 14.5437 21.3641 13.3868 21.3641C13.2216 21.3641 13.1114 21.4196 13.0012 21.5306C12.891 21.6416 12.8359 21.8081 12.8359 21.919C12.8359 23.7503 12.8359 29.5769 12.8359 31.4636C12.8359 31.63 12.891 31.741 13.0012 31.852C13.1114 31.963 13.2766 32.0185 13.3868 32.0185C14.5437 32.0185 17.0778 32.0185 18.2347 32.0185C18.4 32.0185 18.5102 31.963 18.6204 31.852C18.7305 31.741 18.7856 31.5745 18.7856 31.4636C18.7856 29.5769 18.7856 23.7503 18.7856 21.919Z"
                    fill="#B9B7B7" />
            </svg>
        </div>
        <p>100% Satisfaction <br> Guaranteed</p>
    </div>
    <div class="eg-badge">
        <div class="eg-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="49" viewBox="0 0 47 49" fill="none">
                <path
                    d="M27.806 22.489H26.5676V19.4301C26.5676 17.7306 25.3856 16.3711 23.9784 16.3711H22.2898C20.8263 16.3711 19.7006 17.7306 19.7006 19.4301V22.489H18.5185C18.3497 22.489 18.1808 22.659 18.1808 22.8289V30.5329C18.1808 30.7029 18.3497 30.8728 18.5185 30.8728H27.8623C28.0311 30.8728 28.2 30.7029 28.2 30.5329V22.7723C28.2 22.6023 28.0311 22.489 27.806 22.489ZM21.164 19.7699C21.164 18.467 21.8395 17.4474 22.6275 17.4474H23.5844C24.4287 17.4474 25.1042 18.5237 25.1042 19.7699V22.4324H21.164V19.7699Z"
                    fill="#B9B7B7" />
                <path
                    d="M22.8527 5.09827C22.8527 5.09827 20.9389 9.8 10.5257 9.8V24.3017C10.5257 24.3017 10.3006 31.6092 13.4527 35.2347C17.5617 39.8798 22.9653 42.2023 22.9653 42.2023C22.9653 42.2023 28.3688 39.8798 32.4778 35.2347C35.6299 31.6092 35.4048 24.3017 35.4048 24.3017V9.8C24.9353 9.8 23.0215 5.09827 23.0215 5.09827H22.8527Z"
                    stroke="#B9B7B7" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <p>Safe & Secure <br> Payment</p>
    </div>
    <div class="eg-badge">
        <div class="eg-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <path
                    d="M6.28979 10.3549C6.28979 10.3549 11.9569 10.1711 16.0048 11.6417C20.0527 13.1122 22.4191 14.7052 22.4191 14.7052V45.1573C22.4191 45.1573 17.0012 42.7677 12.5173 41.7873C8.78081 40.9295 5.91614 41.0521 5.91614 41.0521C5.91614 41.0521 6.28979 9.8035 6.28979 10.3549Z"
                    fill="#B9B7B7" />
                <path
                    d="M24.4119 14.4601C24.4119 14.4601 21.4227 11.4578 17.0011 9.86475C12.5796 8.27168 8.53168 7.90405 8.53168 7.90405L7.16162 9.37457C7.16162 9.37457 15.8802 9.3133 23.6646 14.3376C23.976 14.5827 24.2251 14.5827 24.4119 14.4601Z"
                    fill="#B9B7B7" />
                <path
                    d="M26.0311 14.4601C26.0311 14.4601 23.4156 11.0902 19.2431 9.00694C15.0706 6.92371 10.7736 5.94336 10.7736 5.94336L9.15448 7.41388C9.15448 7.41388 18.1844 8.39423 25.3461 14.2763C25.5952 14.5214 25.8443 14.5214 26.0311 14.4601Z"
                    fill="#B9B7B7" />
                <path
                    d="M46.2084 10.3549C46.2084 10.3549 40.5413 10.1711 36.4934 11.6417C32.4455 13.1122 30.079 14.7052 30.079 14.7052V45.1573C30.079 45.1573 35.497 42.7677 39.9808 41.7873C43.7796 40.9908 46.582 41.1133 46.582 41.1133C46.582 41.1133 46.2084 9.8035 46.2084 10.3549Z"
                    fill="#B9B7B7" />
                <path
                    d="M28.0862 14.4601C28.0862 14.4601 31.0754 11.4578 35.497 9.86475C39.9185 8.27168 43.9664 7.90405 43.9664 7.90405L45.3365 9.37457C45.3365 9.37457 36.6179 9.3133 28.8335 14.3376C28.5844 14.5827 28.273 14.5827 28.0862 14.4601Z"
                    fill="#B9B7B7" />
                <path
                    d="M26.467 14.4601C26.467 14.4601 29.0826 11.0902 33.2551 9.00694C37.4275 6.92371 41.7245 5.94336 41.7245 5.94336L43.3437 7.41388C43.3437 7.41388 34.3137 8.39423 27.1521 14.2763C26.9652 14.5214 26.6539 14.5214 26.467 14.4601Z"
                    fill="#B9B7B7" />
                <path d="M29.2694 14.889H23.4778V45.4636H29.2694V14.889Z" fill="#B9B7B7" />
            </svg>
        </div>
        <p>Superb <br> craftsmanship</p>
    </div>
    <div class="eg-badge">
        <div class="eg-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="49" viewBox="0 0 47 49" fill="none">
                <path d="M28.0874 15.6347L23.0216 13.9919L11.3138 17.9572L16.3234 20.1664L28.0874 15.6347Z" fill="#B9B7B7" />
                <path d="M30.2264 16.3145L18.4623 21.1295L23.1341 23.2254L35.0671 17.9572L30.2264 16.3145Z" fill="#B9B7B7" />
                <path d="M11.0886 31.9491L22.7964 37.3873V23.7919L11.0886 18.637V31.9491Z" fill="#B9B7B7" />
                <path d="M35.4048 31.9491L23.7533 37.3873V23.7919L35.4048 18.637V31.9491Z" fill="#B9B7B7" />
                <path
                    d="M32.2527 7.59073C29.5509 6.1179 26.4551 5.26819 23.1341 5.26819C12.5521 5.26819 3.94012 13.9352 3.94012 24.585C3.94012 27.0208 4.39042 29.2867 5.17845 31.4393"
                    stroke="#B9B7B7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39 13L31.7529 2L31.3046 7.75839L26 10.1946L39 13Z" fill="#B9B7B7" />
                <path
                    d="M13.115 41.0694C16.0419 42.8821 19.4755 43.9017 23.1342 43.9017C33.7162 43.9017 42.3282 35.2347 42.3282 24.585C42.3282 22.4324 41.9904 20.3931 41.3713 18.467"
                    stroke="#B9B7B7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 36L13.225 46L13.975 40.9655L19 39.1034L7 36Z" fill="#B9B7B7" />
            </svg>
        </div>
        <p>Free <br> Returns</p>
    </div>
  </div>`

    const newHTML = `
        <div id="eg-best-seller" class="home-product-tiles eg-new-slider-main">
            <div class="hp-product-grid">
                <div>
                    <h2 class="eg-heading-rule">Recently Viewed</h2>
	                <div class="container eg-new-slider product-slider"></div>
                </div>
            </div>
        </div>  
        `;

    function init() {
      if (!document.querySelector('.eg-badges')) {
        document.querySelector('.product-detail .attributes').insertAdjacentHTML('afterend', egstring);
      }
      waitForElement('.w-video-wrapper + div .w-vulcan-overlays-table [aria-label="Pause"]', function () {
        if (window.innerWidth < 1200) {
          document.querySelectorAll('.w-video-wrapper + div .w-vulcan-overlays-table [aria-label="Pause"]').forEach(function (e) {
            e.click();
          })
        } else {
          document.querySelector('.w-video-wrapper + div .w-vulcan-overlays-table [aria-label="Pause"]').click();
        }
      }, 50, 15000);
      herosection();
      productdetails();
      carouselchange();
      recentlyviewed();
      customerviewed();
    }

    function recentlyviewed() {
      function generateHTMLFromLocalStorage() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        let html = '';
        products.forEach(product => {
          if (product.recentlyClicked) {
            return;
          }
          html += `
      <div class="eg-product">
        <a href="${product.link}" class="eg-product-details">
          <div class="eg-image">
            <img src="${product.imgUrl}">
          </div>
          <div class="eg-productname">
            <p>${product.text}</p>
          </div>
        </a>
      </div>`;
        });
        return html;
      }


      waitForjQuery(function () {
        $ = window.jQuery;
        waitForSlick(function () {
          const products = JSON.parse(localStorage.getItem('products')) || [];
          if (products.length > 1) {
            if (!document.querySelector('.eg-new-slider-main')) {
              document.querySelector('.description-and-detail').insertAdjacentHTML('afterend', newHTML);
            }
            const generatedHTML = generateHTMLFromLocalStorage();
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('eg-slider');
            containerDiv.innerHTML = generatedHTML;
            document.querySelector('.eg-new-slider').insertAdjacentElement('beforeend', containerDiv)
            toSlick();
          }
        });
      });
    }

    function herosection() {
      var productDetail = document.querySelector('.product-detail .pdp-images + div .product-name ');
      if (productDetail) {
        var productName = productDetail.textContent.trim();
        var words = productName.split(' ');
        var formattedProductName = words.map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        productDetail.innerText = formattedProductName;
      }

      var explainationText = document.querySelector('.product-detail .price-and-availability .explaination-text');
      if (explainationText) {
        var currentHtml = explainationText.innerHTML;
        var newText = currentHtml.replace(/<br\s*\/?>/gi, '');
        newText = 'ONLY ' + newText;
        explainationText.innerHTML = newText;
      }
      

      let pricingsection = document.querySelector('.product-detail .attributes .price-and-availability');
      if (pricingsection) {
        productDetail.insertAdjacentElement('afterend', pricingsection);
      }

      var dynamicMessaging = document.querySelector('.product-detail .attributes .prices-add-to-cart-actions .dynamic-messaging');
      if (dynamicMessaging) {
        var message = dynamicMessaging.textContent.trim();
        var updatedMessage = message.replace('In stock. ', '');
        updatedMessage = 'IN STOCK. ' + updatedMessage;
        dynamicMessaging.innerText = updatedMessage;
      }

      var explanationTextElement = document.querySelector('.product-detail .price-and-availability .explaination-text');
      if (explanationTextElement) {
        var explanationText = explanationTextElement.textContent.trim();
        var modifiedText = '(' + explanationText + ')';
        explanationTextElement.innerText = modifiedText;
      }

      document.querySelector('.short-description  > a:first-of-type').innerText = 'Read Less';
      document.querySelector('.short-description  > a:last-of-type').innerText = 'Read More';
      waitForElement('.product-detail .short-description .text-container p:last-of-type', function () {
        let egstring = `<a class="eg-readmore" href="javascript: void('0')" class="show-more-description">Read More</a>`;
        let egstrings = `<a class="eg-readless" href="javascript: void('0')" class="show-less-description">Read Less</a>`;
        document.querySelector('.product-detail .short-description .text-container p:nth-child(2)').insertAdjacentHTML('beforeend', egstring);
        document.querySelector('.product-detail .short-description .text-container p:last-of-type').insertAdjacentHTML('beforeend', egstrings);
      }, 50, 15000);

      var addtocartcontainer = document.querySelector('html body .product-detail .attributes .add-to-cart-container');
      var freeshipping = document.querySelector('.product-detail .attributes .prices-add-to-cart-actions .free-shipping-label');
      if (freeshipping) {
        addtocartcontainer.insertAdjacentElement('beforeend', freeshipping);
      }

      if (window.innerWidth < 767) {
        document.querySelector('.pdp-images').insertAdjacentElement('afterend', document.querySelector('.product-breadcrumb + div'))
      }

      if (!document.querySelector('.eg-logo-text')) {
        document.querySelector('html body header .logo-home').insertAdjacentHTML('beforeend', `<div class="eg-logo-text">Fine Leather-Bound Books</div>`);
      }

      document.querySelectorAll('html body .search-field').forEach(fld => {
        if (fld) {
          fld.setAttribute('placeholder', 'What can we help you find today?');
        }
      })
    }

    function productdetails() {

      let accordion = `<div class="accordion eg-new_section">
    <h2>Product Details</h2>
    <div class="accordion-item">
        <input type="checkbox" id="accordion1">
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>Product Features</label>
        <div class="accordion-item-desc eg-product_features"></div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion2">
        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Discover the Tolkien Collection</label>
        <div class="accordion-item-desc eg-collection"></div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion3">
        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Shipping & Returns</label>
        <div class="accordion-item-desc eg-shipping">
          <p><b>How long will it take for my order to be shipped?</b> <br> Your order will be shipped within 6 to 10 days of initial payment unless it is otherwise noted <b>in the product description above</b> or you choose a faster shipping method.</p>
          <p><b>What shipping method does the Easton Press normally use to ship me the product?</b> <br> Our normal method of shipment is by U.S. Postal Service or FedEx. Express shipping is available for most items upon request for an additional charge.</p>
          <p><b>What is your return policy?</b> <br>Your satisfaction is completely guaranteed. If you are not delighted with your purchase, you may return it for any reason within 30 days for replacement or full refund.</p>
        </div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion4">
        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>FAQs</label>
        <div class="accordion-item-desc eg-faqs">
          <p>You can order online by going to the web site page on which your product appears. Click on "Add To Cart". You'll be shown what's in your shopping cart. When you're ready to check out, just follow the prompts from there. It's easy. You may also call toll-free at&nbsp;<a href="tel:18002435160">1-800-243-5160</a>&nbsp;(9-5, MF, ET) or mail your order to us at: The Easton Press, 78 Technology Park Drive, Torrington, CT 06790.</p>
          <p><b>How do I know if it is safe to send credit card information to the Easton Press over the Internet?</b><br> We use the Secure Socket Layer Protocol to ensure your information is safe. If you still have concerns about ordering electronically, you can call <a href="tel:18002435160">1-800-243-5160</a> (9-5, MF, ET).</p>
          <p><b>When will my credit card be charged?</b><br> Your credit card will be charged upon shipment of your order. If you are paying in installments, your card will be charged in monthly intervals, beginning when your product is shipped.</p>
          <p><b>What forms of payment do you accept?</b><br> We accept Visa, MasterCard, Discover, American Express and PayPal for new orders and payments for existing orders on our web site. For mail-in orders, we accept credit cards or money orders denominated in U.S. dollars and drawn on a U.S. bank.</p>
          <p><b>How long will it take for my order to be shipped?</b><br> Your order will be shipped within 6 to 10 days of initial payment unless it was otherwise noted or you selected a faster shipping method. <a href="https://www.eastonpress.com/login">Click here to check the status of your order.</a></p>
          <p><b>Will I receive a confirming email once I place an order online?</b><br> Once you submit your order, you will see a “Confirmation” page in your web browser. This confirms that your order has been submitted and is being processed. You will also receive an email confirmation which you should keep for your records.</p>
          <p><b>What are installment payments?</b><br>
          When you choose to pay in installments, you can get your order now and split your purchase total into multiple budget-friendly payments. It's an easy, interest-free way to shop!<br>
          When installment billing is offered, the total cost of the item and shipping &amp; service charges are evenly divided by the number of installments for that item. Simply pay your first installment now. Subsequent installments are charged monthly, directly to the payment method you authorized at checkout.<br>
          There are no gimmicks or hidden fees. The total cost of an item doesn’t change whether paying in full or in installments. This is simply offered as a convenience to our customers.<br>
          Please be advised that installments are only available on orders placed with a major credit card.</p>
          <p><b>Does it cost more to pay by the installment plan than if you pay all at once?</b><br>
          No, there is no extra cost for paying by installments – this is a convenience that we offer to our customers.</p>
          <p><b>Why do I pay for shipping and service on each installment?</b><br>
          We take the total cost of shipping and service and divide it by the number of installments so that each installment is the same amount. The shipping and service charge is the same whether you pay in full or in installments.</p>
        </div>
    </div>

    </div>`
      if (!document.querySelector('.eg-new_section')) {
        document.querySelector('.description-and-detail').insertAdjacentHTML('beforeend', accordion);
      }

      document.querySelector('.eg-product_features').insertAdjacentElement('beforeend', document.querySelector('.description-and-detail .col-sm-5'));
      document.querySelector('.eg-collection').insertAdjacentElement('beforeend', document.querySelector('.description-and-detail .col-sm-7'));

      const accordionItems = document.querySelector('.accordion-item .eg-collection > div');
      if (!accordionItems.innerHTML.trim()) {
        accordionItems.closest('.accordion-item').classList.add('eg-remove-element');
      }

      var checkboxes = document.querySelectorAll('.accordion-item input[type="checkbox"]#accordion1');
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });

    }

    function carouselchange() {
      var slidesSelector = ".thumbnail-carousel-container .slick-list .slick-slide";
      var slides = document.querySelectorAll(slidesSelector);
      var slideCount = slides.length;
      var remainingSlides = slideCount - 4;

      document.body.classList.add('eg-show')
      if (slideCount > 5) {
        var egString = '<div class="eg-carousel_items">' +
          '<div class="eg-item"><p>+<span>' + remainingSlides + '</span></p></div>' +
          '</div>';
        if (!document.querySelector('.eg-carousel_items')) {
          document.querySelector('.thumbnail-carousel-container').insertAdjacentHTML('beforeend', egString);
        }
      } else {
        var existingElement = document.querySelector('.eg-carousel_items');
        if (existingElement) {
          existingElement.remove();
        }
      }

      if (window.innerWidth < 1200) {
        var slidesSelector = ".pdp-images .swiperThumbs .swiper-slide";
        var slides = document.querySelectorAll(slidesSelector);
        var slideCount = slides.length;
        var remainingSlides = slideCount - 4;
        if (slideCount > 5) {
          var egString = '<div class="eg-carousel_items">' +
            '<div class="eg-item"><p>+<span>' + remainingSlides + '</span></p></div>' +
            '</div>';
          if (!document.querySelector('.eg-carousel_items')) {
            document.querySelector('.pdp-images .swiperThumbs .swiper-slide:nth-child(8)').insertAdjacentHTML('beforeend', egString);
          }
        } else {
          var existingElement = document.querySelector('.eg-carousel_items');
          if (existingElement) {
            existingElement.remove();
          }
        }
      }
    }

    function toSlick() {
      $('.eg-slider').slick({
        arrows: true,
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnChange: false,
        focusOnSelect: false,
        infinite: false,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        nextArrow: "<button class=\"slick-next\" aria-label=\"Next\" type=\"button\">Next</button>",
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        prevArrow: "<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\">Previous</button>",
        respondTo: "window",
        rows: 1,
        rtl: false,
        slidesPerRow: 1,
        slidesToScroll: 4,
        slidesToShow: 4,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              slidesToScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots: false,
              // centerMode: true,
              centerPadding: "10px"
            }
          }
        ]
      });
    }

    function slick() {
      $('.recommendations .product-slider').slick({
        arrows: true,
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnChange: false,
        focusOnSelect: false,
        infinite: false,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        nextArrow: "<button class=\"slick-next\" aria-label=\"Next\" type=\"button\">Next</button>",
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        prevArrow: "<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\">Previous</button>",
        respondTo: "window",
        rows: 1,
        rtl: false,
        slidesPerRow: 1,
        slidesToScroll: 4,
        slidesToShow: 4,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              slidesToScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots: false,
              // centerMode: true,
              centerPadding: "10px"
            }
          }
        ]
      });
    }

    function customerviewed() {
      addScript();
      waitForjQuery(function () {
        $ = window.jQuery;
        waitForSlick(function () {
          $('.recommendations .product-slider').slick('unslick');
          slick();
        });
      });

      document.querySelector('.maincontent .recommendations .heading-rule').innerText = `Others Who Viewed This Also Viewed`;
      let egstring = `<div class="eg-learnmorecta"><a href=''>Learn More</a><div>`
      document.querySelectorAll('.product-tile .tile-body .pdp-link a.link').forEach(function (e) {
        e.insertAdjacentHTML('afterend', egstring);
        var href = e.getAttribute('href');
        e.parentElement.querySelector('.eg-learnmorecta a').setAttribute('href', href);
      })
    }

    waitForElement('.product-detail .attributes', init, 50, 15000);
    waitForElement('.product-grid .product', recentlyviewed, 50, 15000);
    waitForElement('.maincontent .recommendations .heading-rule', customerviewed, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


