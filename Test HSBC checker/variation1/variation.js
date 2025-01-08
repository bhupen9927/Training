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

    let wrapHTML = `
    <div class="eg-hsbc_checker">
    <div class="eg-container_new"></div>
    </div>`

    /* Variation Init */
    function init() {
      document.body.classList.add('EG-CHECKER');
      if (!document.querySelector('.eg-hsbc_checker')) {
        document.querySelector("[class*='home'] [class*='home__content'] > div:first-of-type").insertAdjacentHTML('beforebegin', wrapHTML);
      }
      mainSection();
      startSection();
      resultSection();
    }

    function resultSection() {
      let resultHTML = `<div class="eg-result-container">
    <div class="eg-result-header">
      <button class="eg-result-button">Results</button>
      <h1>Thank you!</h1>
      <p>Here is a summary of your company's strengths and areas for improvement in Target Market</p>
    </div>
    <div class="eg-result-summary">
      <div class="eg-result-card eg-result-strengths">
        <h2>Strengths: <img class="eg-result-icon" src="https://i.ibb.co/88s6LRC/strength.png"></h2>
        <ol>
          <li class="eg-rs-one">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
          <li class="eg-rs-two">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="eg-result-card eg-result-improvements">
        <h2>Area for improvement: <img class="eg-result-icon" src="https://i.ibb.co/3MkQg6m/improvement.png"></h2>
        <ol>
          <li class="eg-rs-one">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
          <li class="eg-rs-two">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <ul>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
    <div class="eg-result-finish">
      <button class="eg-result-finish-button">Finish</button>
    </div>
  </div>`;

      if (!document.querySelector('.container')) {
        document.querySelector('.eg-hsbc_checker .eg-container_new').insertAdjacentHTML('beforeend', resultHTML);
      }
    }

    function mainSection() {
      var takeTestHtml = `
      <section class="eg-cards">
        <div class="eg-promo-card">
          <h2 class="eg-promo-card__heading">Are you feeling <br> expansion ready?</h2>
          <div class="eg-promo-card__content">Expanding your business is rarely a straight line; but we’ve
            discovered the key driving factors of success. You can bank on HSBC to help your business grow
            globally with confidence.</div>
          <div class="eg-complete-time"><img src="https://i.ibb.co/mHx9P6G/Dark.png">5 minutes to complete</div>
          <div class="eg-promo-card__link">
            <button class="eg-test-btn">
              <span>Take the test</span>
            </button>
          </div>
        </div>
        <figure class="eg-start-image"><img alt="HSBC Innovation Banking" width="800" height="495"
        data-object-fit="cover" data-object-position="center" loading="lazy"
        src="https://i.ibb.co/FK8qwrY/Image-1.png"></figure>
    </section>`

      if (!document.querySelector('.eg-cards')) {
        document.querySelector('.eg-hsbc_checker .eg-container_new').insertAdjacentHTML('afterbegin', takeTestHtml);
      }
    }

    function startSection() {
      let startHTML = `<div class="eg-start_section">
    <div class="eg-timing"><span><img src="https://i.ibb.co/w435wQY/Dark.png"></span>5 minutes to complete</div>
    <div class="eg-wrapper_elem">
        <div class="eg-left_section">
            <div class="eg-heading">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
            </div>
            <div class="eg-content">
                <p>Here at HSBC we take your privacy seriously, and will only use your personal information for providing you
                    with X. Your responses in this self-diagnostic are strictly confidential. By filling out this form you agree
                    that we can process your data in line with our <a href="">Privacy Policy.</a></p>
            </div>
        </div>
        <div class="eg-right_section">
            <div class="eg-image"><img src="https://i.ibb.co/SyrcYyB/Image.png"></div>
        </div>
    </div>
    <div class="eg-button"><a>Start</a></div>
    </div>`

      if (!document.querySelector('.eg-start_section')) {
        document.querySelector('.eg-hsbc_checker .eg-container_new').insertAdjacentHTML('beforeend', startHTML);
      }
    }

    /* Initialize variation */
    waitForElement("[class*='home'] [class*='home__content'] > div:first-of-type", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


