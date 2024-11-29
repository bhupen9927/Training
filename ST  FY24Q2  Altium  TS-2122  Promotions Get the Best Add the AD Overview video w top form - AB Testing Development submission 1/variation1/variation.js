(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;

    /* Helper function to wait for an element */
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

    /* Video Popup HTML */
    const videoPopup = `
    <div class="eg-video-popup">
      <div class="eg-video-close"></div>
      <div class="eg-video-overlay"></div>
      <div class="eg-video-content">
          <div class="eg-b-video__wrap-media">
            <iframe class="b-video__elm-video" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Altium Designer 24 Overview" width="560" height="315" src="https://www.youtube.com/embed/69PpICzpj6M?enablejsapi=1&origin=https://www.altium.com" id="widget2"></iframe>
          </div>
      </div>
    </div>`;

    /* Watch Video Button HTML */
    const videoButton = `
    <div class="eg-video">
      <span class="eg-b-video__wrap" data-once="altiumNbsp">
        <a class="eg-wds-btn _large _secondary _dark _m-width-lg _with-ico wds-typography _font_inter">
          <img class="eg-video-icon" src="https://i.ibb.co/XZJrLDH/play-circle.png" alt="">Watch video
        </a>
      </span>
    </div>`;

    /* Initialize function */
    function init() {
      document.body.classList.add('TS2-2122');
      if(window.innerWidth < 767){
        const chatBtn = document.querySelector('.s-hero__text .s-hero__btn .am-btn');
        if (chatBtn && !document.querySelector('.eg-video')) {
          chatBtn.insertAdjacentHTML('afterend', videoButton);
        }
      }
        else{
          const chatButton = document.querySelector('.s-hero__text .s-hero__text-wrap p');
          if (chatButton && !document.querySelector('.eg-video')) {
            chatButton.insertAdjacentHTML('afterend', videoButton);
          }
        }
      

      if (!document.querySelector('.eg-video-popup')) {
        document.body.insertAdjacentHTML('beforeend', videoPopup);

        document.querySelector('.eg-video .eg-wds-btn').addEventListener('click', function () {
          document.querySelector('.eg-video-popup').classList.add('visible');
        });

        document.querySelector('.eg-video-close').addEventListener('click', function () {
          document.querySelector('.eg-video-popup').classList.remove('visible');
        });

        document.querySelector('.eg-video-overlay').addEventListener('click', function () {
          document.querySelector('.eg-video-popup').classList.remove('visible');
        });
      }
    }

    /* Initialize variation */
    waitForElement('.s-hero__text .s-hero__text-wrap p', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
