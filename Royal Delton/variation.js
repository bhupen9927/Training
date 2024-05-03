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
      
        const dispatchElement = document.createElement('div');
        dispatchElement.className = 'dispatch-info';

        // const dispatchImage = document.createElement('img');
        // dispatchImage.src = 'https://svgshare.com/i/13go.svg';
        // dispatchImage.alt = 'Dispatch Icon';
        // dispatchElement.appendChild(dispatchImage);

        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("width", "13");
        svgIcon.setAttribute("height", "13");
        svgIcon.setAttribute("viewBox", "0 0 32 32");
        svgIcon.classList.add('svg-icon-size');
        svgIcon.innerHTML = '<path d="M16.512 2.984v.004a.493.507 0 0 0-.018 0 .493.507 0 0 0-.049 0 .493.507 0 0 0-.049.01.493.507 0 0 0-.048.016.493.507 0 0 0-.051.017L4.357 8.443A.493.507 0 0 0 4 8.93v14.849a.493.507 0 0 0 .285.461l12 5.713a.493.507 0 0 0 .168.045.493.507 0 0 0 .012.002.493.507 0 0 0 .012 0 .493.507 0 0 0 .232-.047l12.004-5.717a.493.507 0 0 0 .287-.46V8.917a.493.507 0 0 0-.408-.498h-.002L16.703 3.023a.493.507 0 0 0-.191-.039zm-.002 1.06 10.642 4.829-4.52 1.645a.493.507 0 0 0-.095-.057L12.451 5.885l4.059-1.84zm-5.28 2.394.057.025.05.023.058.026 9.896 4.492-4.805 1.748L5.838 8.881l5.392-2.444zm16.784 3.197V23.45l-11.02 5.246V13.643l11.02-4.008zm-23.028.011 11.012 4.006v15.045L4.986 23.455V9.647z"  </path>';
        dispatchElement.appendChild(svgIcon);

        const dispatchText = document.createElement('p');
        dispatchText.textContent = 'DISPATCHED FROM OUR WAREHOUSE WITHIN 2 BUSINESS DAYS';
        dispatchText.className = 'dispatch-text';
        dispatchElement.appendChild(dispatchText);

        const stockReference = document.querySelector('.find-in-store-wrapper');

        stockReference.insertAdjacentElement('afterend', dispatchElement);
    }

    /* Initialize variation */
    waitForElement('.find-in-store-wrapper', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();