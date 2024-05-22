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

    /* Variation Init */
    function init() {
      const smart_wifi = document.querySelector('.product-footer >div:nth-child(1)>div:nth-child(4)>label');
      if (smart_wifi && smart_wifi.innerText.trim() === 'Connect') {
        smart_wifi.innerText = 'Smart';
      }

      const smart_Alkaline = document.querySelector('.product-footer >div:nth-child(1)>div:nth-child(5)>label');
      if (smart_Alkaline && smart_Alkaline.innerText.trim() === 'Connect, Alkaline') {
        smart_Alkaline.innerText = 'Smart, Alkaline';
      }

      const nav_Smart = document.querySelector('.tagcloud>a:nth-child(3)');
      if (nav_Smart && nav_Smart.innerText.trim() === 'Connect') {
        nav_Smart.innerText = 'Smart';
      }

      const aqua_Smart = document.querySelector('.companylogo>span:nth-child(1)');
      if (aqua_Smart && aqua_Smart.innerText.trim() === 'AquaTru Connect') {
        aqua_Smart.innerText = 'AquaTru Smart';
      }
      else if(aqua_Smart && aqua_Smart.innerText.trim() === 'AquaTru Alkaline, Connect') {
        aqua_Smart.innerText = 'AquaTru Alkaline, Smart';
      }

      const wifi_enable = document.querySelector('.cnct');
      if (wifi_enable) {
        wifi_enable.innerText = 'Wi-Fi Enabled  (+$50)';
      }

    }

    /* Initialize variation */
    waitForElement('.tagcloud>a:nth-child(3)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
