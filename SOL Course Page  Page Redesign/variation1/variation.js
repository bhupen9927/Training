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
      document.body.classList.add('EG-COURSEPAGE');
      heroSection();
      swinburneOnline()
    }

    function heroSection() {
      let buttonHTML = `<button class="btn eg-course_guide" data-toggle="modal" id="brochureBtnInpage" data-target="#brochureModal" data-position="brochure-button-inpage" fdprocessedid="mstju">
                        <span class="">Course Guide</span>
                        <img data-src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg" class="icon download-icon ls-is-cached lazyloaded" alt="course guide" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg">
                        </button>`;

      let herobulletpoints = `<div class="eg-hero_bulletpoints eg-bulletpoints">
    <p>Take your analytics, problem solving, and math skills to the next level.</p>
    <ul class="eg-list">
        <li>Become a fully accredited accountant</li>
        <li>Understand core business concepts</li>
        <li>Develop skills in financial software</li>
        <li>Excel in data and analytical expertise</li>
        <li>Work on real-world case studies</li>
    </ul>
    </div>`

      document.querySelector('.course-glance-v2').classList.add('eg-heroSection');

      let leftsectionSel = document.querySelector('.course-glance-v2 .content-left');
      leftsectionSel.insertAdjacentElement('beforeend', document.querySelector('.course-glance-v2 .content-right'));

      if (!document.querySelector('.eg-hero_bulletpoints')) {
        let buttonSel = document.querySelector('.eg-heroSection .content-left .course-buttons');
        buttonSel.insertAdjacentHTML('beforeend', buttonHTML);
        document.querySelector('.eg-heroSection .content-right .intro').outerHTML = herobulletpoints;
      }
    }

    function swinburneOnline(){
      const swionOnline=
      `<div class="eg-swinOnline-container">
        <div class="eg-swinOnline-wrapper container">
          <h3 class="eg-swinOnline-title">Swinburne Online</h3>
          <p class="eg-swinOnline-text">Your pathway to the career of your dreams</p>
          <div class="eg-swinOnline-ctas">
            <a class="eg-btn eg-apply-now" href="https://www.swinburneonline.edu.au/forms/start-your-enrolment/?course=Bachelor of Accounting" class="btn " target="_blank">
              <span class="text">Apply Now</span>    
              <img decoding="async" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-chevron_3efdef93.svg" class="icon chevron-icon" alt="icon">
            </a>
            <button class="eg-btn eg-course-guide" data-toggle="modal" id="brochureBtnInpage" data-target="#brochureModal" data-position="brochure-button-inpage">
              <span class="">Course Guide</span>
              <img data-src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg" class="icon download-icon ls-is-cached lazyloaded" alt="course guide" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg">
            </button>
          </div>
        </div>
      </div>`;
      const testimonial = document.querySelector('.course-testimonial ');
      if(testimonial && !document.querySelector('.eg-swinOnline-container')){
        testimonial.insertAdjacentHTML('afterend',swionOnline);
      }
    }

    /* Initialize variation */
    waitForElement('.course-glance-v2 .content-left', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


