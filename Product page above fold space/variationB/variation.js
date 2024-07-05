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


    var tickIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px" style="&#10;    fill: #00ac8e;&#10;"><path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 11 17.414063 L 6.292969 12.707031 L 7.707031 11.292969 L 11 14.585938 L 18.292969 7.292969 L 19.707031 8.707031 Z"/></svg>`;

    var beforeButtonContent = `<p class="top-sub-heading">Office space for rent</p>
<h2 class="eg-heading">Flexible office spaces designed for every business</h2>
<p class="eg-para">If you’re looking for beautifully-designed office space for rent, ours are suitable for any size of team and come fully serviced. So you can concentrate on growing your business distraction-free. Whether you need something for the short term, longer term or want to take a flexible approach, we’ve got an office space rental solution to suit you.</p>
<ul class="eg-details">
    <li>`+tickIcon+` Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
    <li>`+tickIcon+` Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
    <li>`+tickIcon+` Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
</ul>`;

var afterButtonContent = `<div class="solution-container">
    <div class="solution-image">
        <img src="https://www.regus.com/icons/media/regus/redesign/navigation-icons/svg/16/contact.svg" alt="contac icon">
    </div>
    <div class="solution-text">
        <p class="solution-heading">Call our solution advisors</p>
        <a href="tel:+911166155180" class="eg-phone">+911166155180</a>
    </div>
</div>`;


    function init() {

        document.querySelector('[class*="HeroContentWrapper"] [class*="headlineFontCss"]').insertAdjacentHTML('beforebegin', beforeButtonContent);
        document.querySelector('[class*="HeroContentWrapper"] [class*="buttonsWrapper"]').insertAdjacentHTML('afterend', afterButtonContent);
 
 
    }

    waitForElement('[class*="HeroContentWrapper"] [class*="buttonsWrapper"]', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
