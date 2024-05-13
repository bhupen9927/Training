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

    var heroBanner = `
    <div class="eg-hero-section">
      <div class="eg-inner-container">
        <div class="eg-right-content">
          <h2>Ready to Breathe Cleaner, Healthier Air?</h2>
          <p>Say Goodbye to 99.99% of Airborne Allergens, Viruses and Smoke!</p>
          <ul>
            <p>Eliminate dangerous ozone, odor, and gases</p>
            <p>Enhance comfort and productivity with whisper-quiet performance</p>
            <p>Control your air quality from anywhere with connected capabilities</p>
          </ul>
          <div class="eg-hero-ctas">
            <a class="eg-purifiers" href="https://airdoctorpro.com/purifiers/">Shop Purifiers</a>
            <a class="eg-filters" href="https://airdoctorpro.com/store/">Replacement filters</a>
          </div>
        </div>
        <div class="eg-left-content">
        <video playsinline class="video-element relative Video__StyledVideo-sc-22jkbx-0 fUuqyl" controls crossorigin="anonymous" id="video" poster="">
          <source src="https://assets.frame.io/encode/4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1/h264_1080_best.mp4?x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&x-amz-meta-request_id=F874ymkVOQ0eE9QNCI_B&x-amz-meta-project_id=64d31ef0-66f4-48dc-ac0d-f207092a6e78&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=4c81c7b8-156d-4e01-b3c2-a7a14bab0ee1&Expires=1715644800&Signature=hcu11sN7rM~Eu~TlQ32vm49rrD468UOFvzmwSsF5VtkeUXys47ah3MKnLLAeYGA2Cpj-RMWSUEYdfLQDl-C~TYtgvTn4ZmPuxYKAaa~vXRA3HwnWw4tgBTz9E39vtBrFkmc6RmwxCWrpLOT55iZLmWeZf8w7uahrtuAo0V8YNDhYwPtQEy5E9xwrLM9Hz2p1-nmMQ0H46c0raB9mWE9rjJVEs-ZOZdvlsfNeBeyo7MQI9Rc85-F8AEGu4UggfukOMkD4z06ZXd2gUc6JVjtB04JxsFSxJelvTsJ8jKg7uvkW7tIQE8p~ZMM0KOYNoY8VwcLJwoGsur6XUi7h5jDsoQ__&Key-Pair-Id=K1XW5DOJMY1ET9" type="video/mp4">
        </video>
        <div class="eg-play-button"><i class="icon-play"></i></div>
        </div>
      </div>
    </div>`;


    /* Variation Init */
    function init() {
      if(!document.querySelector('.eg-hero-section')) {
        document.querySelector('#content .banner-section:first-child').insertAdjacentHTML("afterbegin", heroBanner);
      }
      var logoText = document.querySelector('.logo-section .section-content .text');
      if(logoText){
        logoText.innerText = 'Trusted By Over 200,000 Happy AirDoctor Customers and Featured On';
      }
    }

    /* Initialize variation */
    waitForElement('#content .banner-section:first-child', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
