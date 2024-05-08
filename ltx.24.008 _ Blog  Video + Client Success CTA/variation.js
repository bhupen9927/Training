/*fecli-injected JavaScript*/
  ;(function(){
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

    let clientSuccess = `
    <div class="eg-video-client">
    <img class="eg-video-image" src="https://embed-ssl.wistia.com/deliveries/5bed1d74d86cb26ed06693fe6baac126.webp?image_crop_resized=1280x720">
    <div class="eg-right-container">
     <h2>See how Lytx’s solutions improve safety & efficiency.</h2>
     <div class="eg-ctas">
        <a href="https://www.lytx.com/videos" class="eg-see-all">See all Videos</a>
        <a href="https://www.lytx.com/our-clients/success-stories-overview" class="eg-case-study">Read Case Studies</a>
     </div>
    </div>
</div>`;


    /* Variation Init */
    function init() {
      if (!document.querySelector('.eg-video-client')) {
        document.querySelector('.article__main .article__content').insertAdjacentHTML('beforeend', clientSuccess)
      }

      if (window.innerWidth < 767) {
        document.querySelector('.eg-video-client').insertAdjacentElement("afterbegin", document.querySelector('.eg-right-container h2'));
      }
    }


    waitForElement('head', function () {
      var style = document.createElement('style'); style.type = 'text/css'; style.appendChild(document.createTextNode('html body .eg-video-client {    width: 100% !important;    max-width: 941px !important;    margin: auto;    background: #27343C !important;    padding: 27px 21px !important;    display: flex;    grid-gap: 14px;    margin-top: 40px !important;}html body .eg-video-client h2 {    color: #FFF;    font-family: "DINNextLTPro-Bold", sans-serif;    font-size: 26px;    font-style: normal;    font-weight: 700;    line-height: normal;    margin-bottom: 35px !important;    margin-top: 8px !important;    text-align: center;}html body .eg-video-image {    width: 266px;    height: 148px;    background-size: cover;    background-repeat: no-repeat;    object-fit: cover;    margin: 0 !important;}html body .eg-video-client .eg-ctas a:hover {    background: #fff;    color: #009CDE;    text-decoration: none !important;}html body .eg-video-client .eg-ctas a {    padding: 10px 15px !important;    border-radius: 25px;    border: 1px solid #FFF;    background: rgba(170, 170, 170, 0.00);    color: #FFF;    text-align: center;    font-family: "Open Sans";    font-size: 14.08px;    font-style: normal;    font-weight: 700;    line-height: normal;    display: flex;    justify-content: center;    align-items: center;    text-transform: uppercase;    text-decoration: none !important;}html body .eg-video-client .eg-ctas {    display: flex;    flex-direction: row;    justify-content: center;    align-items: center;    grid-gap: 22px;}@media only screen and (min-width: 768px) and (max-width:1024px) {    html body .eg-video-client .eg-ctas {        flex-direction: column !important;        grid-gap: 10px;        margin-top: 10px;    }    html body .eg-video-client h2 {        margin-bottom: 15px !important;        font-size: 24px !important;    }    html body .eg-video-client {        align-items: center !important;        flex-direction: column;    }}@media only screen and (max-width:767px) {    html body .eg-video-client {        flex-direction: column;        align-items: center;        padding: 25px 20px;        grid-gap: 14px;        margin-top: 40px !important;    }    html body .eg-video-client h2 {        text-align: center;        margin-bottom: 5px !important;        margin-top: 0 !important;    }    html body .eg-video-client .eg-ctas {        display: flex;        flex-direction: column;        grid-gap: 18px;        margin-top: 6px !important;    }}@media only screen and (min-width:450px) and (max-width:767px) {    html body .eg-video-image {        width: 335px !important;        height: 180px !important;        background-size: cover;        background-repeat: no-repeat;    }}')); document.head.appendChild(style);
    }, 50, 15000);
    /* Initialize variation */
    waitForElement('.article__main .article__content', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


var style=document.createElement('style');style.type='text/css';style.appendChild(document.createTextNode('html body .eg-video-client {    width: 100% !important;    max-width: 941px !important;    margin: auto;    background: #27343C !important;    padding: 27px 21px !important;    display: flex;    grid-gap: 14px;    margin-top: 40px !important;}html body .eg-video-client h2 {    color: #FFF;    font-family: "DINNextLTPro-Bold", sans-serif;    font-size: 26px;    font-style: normal;    font-weight: 700;    line-height: normal;    margin-bottom: 35px !important;    margin-top: 8px !important;    text-align: center;}html body .eg-video-image {    width: 266px;    height: 148px;    background-size: cover;    background-repeat: no-repeat;    object-fit: cover;    margin: 0 !important;}html body .eg-video-client .eg-ctas a:hover {    background: #fff;    color: #009CDE;    text-decoration: none !important;}html body .eg-video-client .eg-ctas a {    padding: 10px 15px !important;    border-radius: 25px;    border: 1px solid #FFF;    background: rgba(170, 170, 170, 0.00);    color: #FFF;    text-align: center;    font-family: "Open Sans";    font-size: 14.08px;    font-style: normal;    font-weight: 700;    line-height: normal;    display: flex;    justify-content: center;    align-items: center;    text-transform: uppercase;    text-decoration: none !important;}html body .eg-video-client .eg-ctas {    display: flex;    flex-direction: row;    justify-content: center;    align-items: center;    grid-gap: 22px;}@media only screen and (min-width: 768px) and (max-width:1024px) {    html body .eg-video-client .eg-ctas {        flex-direction: column !important;        grid-gap: 10px;        margin-top: 10px;    }    html body .eg-video-client h2 {        margin-bottom: 15px !important;        font-size: 24px !important;    }    html body .eg-video-client {        align-items: center !important;        flex-direction: column;    }}@media only screen and (max-width:767px) {    html body .eg-video-client {        flex-direction: column;        align-items: center;        padding: 25px 20px;        grid-gap: 14px;        margin-top: 40px !important;    }    html body .eg-video-client h2 {        text-align: center;        margin-bottom: 5px !important;        margin-top: 0 !important;    }    html body .eg-video-client .eg-ctas {        display: flex;        flex-direction: column;        grid-gap: 18px;        margin-top: 6px !important;    }}@media only screen and (min-width:450px) and (max-width:767px) {    html body .eg-video-image {        width: 335px !important;        height: 180px !important;        background-size: cover;        background-repeat: no-repeat;    }}'));document.head.appendChild(style);

})();
/*fecli-injected JavaScript*/