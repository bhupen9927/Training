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

    var heroBanner = `
    <div class="eg-hero-section">
      <div class="eg-inner-container">
        <div class="eg-right-content">
          <h2>Ready to Breathe Cleaner, Healthier Air?</h2>
          <p>Say Goodbye to 99.99% of Airborne Allergens, Viruses and Smoke!</p>
          <div class="eg-hero-ctas">
            <a class="eg-purifiers" href="https://airdoctorpro.com/purifiers/">Shop Purifiers</a>
            <a class="eg-filters" href="https://airdoctorpro.com/store/">Replacement filters</a>
          </div>
        </div>
        <div class="eg-left-content">
        <video playsinline class="video-element w-100 h-100 relative Video__StyledVideo-sc-22jkbx-0 fUuqyl" controls crossorigin="anonymous" id="video" poster="">
          <source src="https://assets.frame.io/encode/4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1/h264_1080_best.mp4?x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&x-amz-meta-request_id=F89EijYPe0tij0gCBsxF&x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1&Expires=1715731200&Signature=lwOX3zu3YS7rFvcVQX~cDuuNAEYbwodn~MPiD-Qz9kiA1KxNRirE~nJt5B4hEGeQ4TmISa~wToKVUFqlUEy1kgy60CD0gymO0e7RbN19nBlX3689Uqv7R8S1SsWqN5LJIpmv~QTZjFJwWGk6JTQU9OWasIBvncCqHT8lflMg-yWMC8h0Wc2zCnMtfXHCiozOxwt4vRf~X865MSLRIlmCvGunIzVDSrMh44CF~VqTOP7Y5Ds9u2uY3tGlsF0spp8xFIVSo07phqbBk01dSwHFU-A58TGdYb8DdnhY3qoWSQUg7tCwrO1f1borsZDCQkEKxy5d3Q7ZYrI6F9e4EQAazA__&Key-Pair-Id=K1XW5DOJMY1ET9">
        </video>
        <div class="eg-play-button">
          <i class="icon-play"></i>
        </div>
        </div>
      </div>
    </div>`;


    /* Variation Init */
    function init() {
      if(!document.querySelector('.eg-hero-section')) {
        document.querySelector('#content .banner-section:first-child').insertAdjacentHTML("afterbegin", heroBanner);
        attachPlayButtonEvent();
      }
      var logoText = document.querySelector('.logo-section .section-content .text');
      if(logoText){
        logoText.innerText = 'Trusted By Over 200,000 Happy AirDoctor Customers and Featured On';
      }
    }

    function playVideo() {
      const videoElement = document.querySelector('.eg-left-content .video-element');
      if (videoElement) {
          videoElement.play();
      }
    }
    
    function attachPlayButtonEvent() {
      const videoContainer = document.querySelector('.eg-left-content');
      live('.eg-play-button', 'click', function () {
         if (!videoContainer.classList.contains('eg-play')) {
            videoContainer.classList.add('eg-play');
            playVideo();
          } else {
            videoContainer.classList.remove('eg-play');
            pauseVideo();
        }
      });
    }

    function pauseVideo() {
      const videoElement = document.querySelector('.eg-left-content .video-element');
      if (videoElement) {
        videoElement.pause();
      }
    }


    /* Initialize variation */
    waitForElement('#content .banner-section:first-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();