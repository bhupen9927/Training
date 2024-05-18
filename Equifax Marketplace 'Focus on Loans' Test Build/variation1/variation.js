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
      const marketplace=document.querySelector('#__next main >div:nth-child(2)');
      const right=document.querySelector('#__next main >div:nth-child(5)');
      if(marketplace){
        marketplace.insertAdjacentElement('beforebegin',right);
      }
      const header=document.querySelector('.my-auto .title-center-header');
      if(header){
        header.innerText='Find the right credit card or loan for you';
      }
      const content=document.querySelector('.my-auto .title-center-header>p');
      if(content){
        content.innerText='There are many providers in the market to consider when looking for a credit card, personal or secured loan. The credit card and  loan comparison tools helps to connect you with providers that suit your needs from the panel of lenders.';
      }
    }

    /* Initialize variation */
    waitForElement('#__next main >div:nth-child(2)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


