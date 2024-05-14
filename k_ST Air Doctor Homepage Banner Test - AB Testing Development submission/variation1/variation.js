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
          <source src="https://assets.frame.io/encode/4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1/h264_1080_best.mp4?x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&amp;x-amz-meta-request_id=F89AgSpunrjQpsUB9MAB&amp;x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&amp;x-amz-meta-resource_type=asset&amp;x-amz-meta-resource_id=4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1&amp;Expires=1715731200&amp;Signature=UIbuWR0FEMjvzM~3YTgM26Ge3noLiMgsXHlzFZ-w6T7AnvEDPAL4jJRjhqzhmhr5Td8VKRD7Cipdhb8SZsGFwKLdD7GJzF-Ip90uq~bjLhMY5Q8nIOM~IsoGVK5AFC7eLI5WSVO~HZvJAbP2zMhrhbVyEnCwAtvW~cm1SWRiHgfoLtgxH-5FJfpqGFUh-SUKutWVlSh8FjuDv8wDnfwBioq8vudHBnZIg-wAb7WAmjnXWXqblYAK4LGq9mqmbxkju-yrnTZW60Rh1~escbWtdMcsxIPVCFLz7Ngd4-p3weR6lvS7jVXdugwlxeMiwI4BxOXIw77No~vg9PAgi-pIYQ__&amp;Key-Pair-Id=K1XW5DOJMY1ET9" type="video/mp4">
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
