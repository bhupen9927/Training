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
      addEvent(context || document, event, function (e) {
        var found,
          el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector)))
          el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }

    var miniCart = `
    <div class="eg-miniCart">
      <div class="eg-mini-wrapper">
        <div class="eg-cart-header">
          <h2 class="eg-miniCart-title">My Bag,
            <span class="eg-item-quantity"></span>
          </h2>
          <button class="eg-close-icon" aria-label="Close" type="button">
            <img src="https://i.ibb.co/9YGJyBF/close.png" alt="close">
          </button>
        </div>
        <div class="eg-cart-body">
          <div class="eg-card-body-wrapper">
            <ul class="eg-products"></ul>
          </div>
        </div>
        <div class="eg-cart-footer">
          <a class="eg-basket-button" href="https://www.keithprowse.co.uk/basket/" type="button">
            <span>View Full Basket</span>
          </a>
          <a class="eg-checkout-button" href="https://www.keithprowse.co.uk/login/?ReturnUrl=https%3a%2f%2fwww.keithprowse.co.uk%2fpersonal-details%2f" type="button">
            <span>Checkout</span>
          </a>
        </div>
      </div>
    </div>`;

    var miniCartOverlay = `<div class="eg-mini-overlay"></div>`

    const order = `
      <div class="eg-your-order">
        <h3>Your Order</h3>
        <div class="eg-orders-container"></div>
        <div class="eg-coupan basket-page-top-checkout-bar basket-page-checkout-bar-wrapper">
          <div class="eg-coupan-con container basket-page-checkout-bar">
            <form action="/basket/" method="post" autocomplete="off">                        
              <label class="m-voucher__label">
                <input class="m-voucher__input" type="text" name="ApplyVoucher" placeholder="Discount code">
                <button class="m-voucher__apply" type="submit" name="ApplyVoucher">APPLY</button>
              </label>
            </form>                
          </div>
        </div>
        <div class="eg-cart-total"></div>
      </div>`;

    function updatePrices() {
      var fetchedAmounts = document.querySelectorAll('.basket-page-package-section-package-total-amount');
      var targetPrices = document.querySelectorAll('.basket-page-package-section-main-details-total-price');

      if (fetchedAmounts && targetPrices) {
        fetchedAmounts.forEach((amount, index) => {
          const targetPrice = targetPrices[index];
          if (targetPrice) {
            targetPrice.textContent = amount.textContent;
          }
        });
        console.log("Data updated successfully.");
      }
    }

    function init() {
      getdata();
      document.body.classList.add('KS-5-6');
      const yourDetails = document.querySelector('.about-us> form');
      if (yourDetails && !document.querySelector('.eg-your-order')) {
        yourDetails.insertAdjacentHTML('afterend', order);
      }

      const formElement = document.querySelector('.about-us > form');
      const yourOrderElement = document.querySelector('.eg-your-order');
      if (formElement && yourOrderElement) {
        const parentWrapper = document.createElement('div');
        parentWrapper.className = 'eg-parent';
        formElement.parentNode.insertBefore(parentWrapper, formElement);
        parentWrapper.appendChild(formElement);
        parentWrapper.appendChild(yourOrderElement);
      }

      const basketIcon = document.querySelector('#header .basket-li a');
      basketIcon.removeAttribute('href');
      if (!document.querySelector('.eg-miniCart')) {
        basketIcon.insertAdjacentHTML('afterend', miniCart);
      }

      const overlayDest = document.querySelector('#header .basket-li')
      if(!document.querySelector('.eg-mini-overlay')) {
        overlayDest.insertAdjacentHTML('afterend', miniCartOverlay);
      }

      getHTML('https://www.keithprowse.co.uk/basket/');

      live('#header .basket-li a', 'click', function () {
        document.body.classList.add('eg-show-mimiCart');
      });

      live('.eg-close-icon, .eg-mini-overlay', 'click', function () {
        document.body.classList.remove('eg-show-mimiCart');
      });

      live('.basket-page-package-section-main-details-toggle-link', 'click', function (e) {
        var parentWrapper = this.closest('.basket-page-package-section-main-details-wrapper');
        if (parentWrapper) {
          parentWrapper.classList.toggle('eg-show-details');
        }
      });

      totalItems();

      live('[data-updatebasketmethod="DescreaseBasketQtyConfirm"]', 'click', function () {
        const orderLineId = this.getAttribute('data-orderlineid'); 
        const bodyData = `Quantity=0&OrderLineId=${orderLineId}`;
        
        fetch("https://www.keithprowse.co.uk/api/sitecore/basket/updatebasket", {
          method: "POST",
          headers: {
            "accept": "*/*",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest"
          },
          body: bodyData,
          credentials: "include"
        })
        .then(response => {
          if (response.ok) {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            console.error("Failed to remove product");
          }
        })
        .catch(err => console.error("Error:", err));
      });      
    }

    function getdata() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var d = document.createElement('div');
          d.innerHTML = this.responseText;
          var elements = d.querySelectorAll('#wrapper .about-us > div');

          const cartTotalContainer = document.querySelector('.eg-cart-total');
          if (cartTotalContainer && elements.length > 0) {
            const lastDiv = elements[elements.length - 1].cloneNode(true);
            cartTotalContainer.appendChild(lastDiv);
          }

          const orderContainer = document.querySelector('.eg-orders-container');
          if (orderContainer) {
            elements.forEach((el, index) => {
              if (index > 1 && index < elements.length - 1) {
                orderContainer.appendChild(el.cloneNode(true));
              }
            });
          }

          console.log("Elements inserted successfully.");
          updatePrices();
        }
      };
      xhttp.open("GET", "https://www.keithprowse.co.uk/basket/", true);
      xhttp.send();
    }

    function getHTML(url) {
      try {
        var xhr = new XMLHttpRequest();
    
        xhr.onload = function () {
          var data = xhr.responseText; 
          var parser = new DOMParser();
          var doc = parser.parseFromString(data, 'text/html');
          var sectionHTML = doc.querySelector("#wrapper > .about-us");
    
          if (sectionHTML) {
            replaceContent(sectionHTML);
          } else {
            console.log("Section not found in fetched HTML");
          }
        };
    
        xhr.onerror = function () {
          console.log("XHR error");
        };
    
        xhr.open("GET", url);  // Pass the correct URL
        xhr.send();
      } catch (err) {
        console.log(err.message);
      }
    }    
    
    function replaceContent(newContent) {
      var newSection = document.querySelector('.eg-products');
      if (newSection) {
        newSection.innerHTML = '';
        newSection.appendChild(newContent);
      } 
    }

    function totalItems() {
      waitForElement("#header .icon-basket [data-basketproperty='TotalItemsCount']", function() {
        const basketTotal = document.querySelector("#header .icon-basket [data-basketproperty='TotalItemsCount']");
        const miniCartQuantity = document.querySelector(".eg-item-quantity");
      
        if (basketTotal && miniCartQuantity) {
          const itemCount = basketTotal.textContent;
          if (itemCount) {
            miniCartQuantity.textContent = `${itemCount[0]} items`;
          }
        }
      }, 500, 15000);
    }    

    function checkUpdates() {
      const send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
          const responseURL = this.responseURL;
          if (responseURL && responseURL.includes('/updatebasket')) {
            waitForElement('#header .container-substitute .nav-inner-wrap', function () {
              getHTML('https://www.keithprowse.co.uk/basket/');
              totalItems();
            }, 1000, 15000);
          }
        });
    
        return send.apply(this, arguments);
      };
    }

    waitForElement('#header .container-substitute .nav-inner-wrap', checkUpdates, 50, 15000);
    if (window.location.href.indexOf('/personal-details/') !== -1) {
        waitForElement('.about-us > form', init, 10, 15000);
    } else {
        waitForElement('#header .container-substitute .nav-inner-wrap', init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();  
