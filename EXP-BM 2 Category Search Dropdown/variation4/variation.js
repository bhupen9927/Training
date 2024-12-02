(function () {
  try {
    var debug = 0;
    var variation_name = "";

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
    
    const dropdownList =
      `<div class="eg-category-container">
        <div class="eg-category-container">
          <div class="eg-category-list-container">
          <a class="eg-category" href="https://www.bathroommountain.co.uk/heating/radiators">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Heating.jpg">
            </div>
            <p class="eg-category-name">Radiators</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/heating/heated-towel-rails">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://www.bathroommountain.co.uk/img/400/400/resize/catalog/category/33204-Cat.jpg">
            </div>
            <p class="eg-category-name">Towel Rails</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/furniture/vanity-units">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Furniture.jpg">
            </div>
            <p class="eg-category-name">Vanity Units</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Mirrors.jpg">
            </div>
            <p class="eg-category-name">Mirrors</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/showers">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Showers.jpg">
            </div>
            <p class="eg-category-name">Showers</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/baths">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/5/c51099-1000-finsbury-1300mm-freestanding-bath.jpg">
            </div>
            <p class="eg-category-name">Baths</p>
          </a>
          <a class="eg-category" href="https://www.bathroommountain.co.uk/toilets">
            <div class="eg-category-image">
              <img class="eg-image-link" src="https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/6/c66029-1000-seattle-close-coupled-toilet-with-soft-close-seat_1.jpg">
            </div>
            <p class="eg-category-name">Toilets</p>
          </a>
          </div>
        </div>
      </div>`;

    function init() {
      const dropdown = document.querySelector('#search-mainmain .product-listing');
        if (!document.querySelector('.eg-category-container')) {
            dropdown.insertAdjacentHTML('beforebegin',dropdownList);
        }
        if (window.innerWidth > 767) {
          const categoryListContainer = document.querySelector('.eg-category-list-container');
          const productListing = document.querySelector('#search-mainmain .product-listing');

          if (categoryListContainer && productListing) {
            const height = categoryListContainer.offsetHeight;
            if (height > 216) {
              categoryListContainer.style.borderLeft = '1px solid #55575B';
              productListing.style.borderRight = 'none';
            } else {
              productListing.style.borderRight = '1px solid #55575B';
              categoryListContainer.style.borderLeft = 'none';
            }
          }
        }
      }

    function observeSearchInput() {
      live('form .search-panel-input', 'input', function () {
        handleSearchInput();
      });

      live('form .search-panel-input', 'click', function () {
        handleSearchInput();
      });
    }

    function handleSearchInput() {
      const currentValue = document.querySelector('form .search-panel-input').value;
      if (currentValue.length > 2) {
        waitForElement('#search-mainmain .product-listing', function () {
          init(currentValue);
        }, 50, 3000);
      }
    }

    waitForElement('form .search-panel-input', observeSearchInput, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
