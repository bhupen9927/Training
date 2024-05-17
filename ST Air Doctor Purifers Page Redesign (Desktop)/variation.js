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

    const expertAdvice=
        `<div class"eg-expert-advice">
            <div class="eg-expert-advice-container">
                <h2 class="eg-expertAdvice-heading">Expert Advice</h2>
                <div class="eg-expert-advice-inner">
                    <div class="eg-expert-left-panel">
                        <img src="https://i.ibb.co/vB3YGxR/image-26.png">
                        <h3 class="eg-expert-heading"> How to choose an air Filter  for your home</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">Before you start breathing cleaner, friesher air, get all the setails you need to know to choose the perfect air purifier for your home.</p>
                        <a class="eg-expert-button" href="#" >Learn More</a>
                    </div>
                    <div class="eg-expert-right-panel">
                        <img src="https://i.ibb.co/vB3YGxR/image-26.png">
                        <h3 class="eg-expert-heading">7 health hezards of buying the wrong Air purifier</h3>
                        <div class="eg-line"></div>
                        <p class="eg-expert-content">To deal with declining air quality, here are the essential specs to look for in an Air Purifier</p>
                        <a class="eg-expert-button" href="#" >Get the Details Now</a>
                    </div>
                </div>
            </div>
        </div>`
    
    const difference=
      `<div class="eg-air-doctor-difference">
        <div class="eg-air-doctor-difference-container">
          <div class="eg-air-doctor-difference-inner">
            <div class="eg-difference-left-panel">
              <h2 class="eg-air-heading">The AirDoctor Difference</h2>
              <p class="eg-air-content">Enjoy peace of mind knowing that the air you breathe is clean <br><br>
              AirDoctor’s cutting-edge UltraHEPA filter captures 99.99% of airborne particles as small as 0.003 microns in size.<br><br>
              That’s 100 times smaller than the HEPA standard.</p>
            </div>
            <div class="eg-difference-right-panel">
              <img class="eg-air-image" src="https://i.ibb.co/J7cZGy0/Mask-group-1.png">
            </div>
            <div class="eg-shop-purifiers-button">
              <a class="eg-shop-cta" href=# >Shop Purifiers</a>
            </div>
          </div>
          <div class="eg-icons-container">
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/GpJYRBF/wifi.png">
              <p class="eg-air-icon-content">Control your air quality from anywhere</p>
              <p class="eg-air-icon-subcontent">with connected capabilities</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/T2F2v20/airflow.png">
              <p class="eg-air-icon-content">A higher level of air purification.</p>
              <p class="eg-air-icon-subcontent">with UltraHEPA filters</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/xGYLwyn/ozons.png">
              <p class="eg-air-icon-content">Eliminate dangerous ozone, odors and gases</p>
              <p class="eg-air-icon-subcontent">with dual action carbon/gas trap/voc filter</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/4m8ts3n/airpurification.png">
              <p class="eg-air-icon-content">Clean and fresh air 24/7</p>
              <p class="eg-air-icon-subcontent">with auto-mode & AirQuality sensor</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/Rzdxzp4/polutions.png">
              <p class="eg-air-icon-content">Reduce your exposure to pollutants</p>
              <p class="eg-air-icon-subcontent">with a sealed system</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/XCqQ57X/guesswork.png">
              <p class="eg-air-icon-content">Remove the guesswork</p>
              <p class="eg-air-icon-subcontent">with the change filter alert</p>
            </div>
            <div class="eg-air-icon-inner">
              <img claass="eg-air-icon" src="https://i.ibb.co/tCvjKgQ/productivity.png">
              <p class="eg-air-icon-content">Enhanced comfort and productivity</p>
              <p class="eg-air-icon-subcontent">with whisper-quiet performance</p>
            </div>
          </div>
        </div>
      </div>`;
      

    /* Variation Init */
    function init() {
      const footer = document.querySelector('#footer');
      if(footer){
        footer.insertAdjacentHTML('beforebegin',expertAdvice);
        footer.insertAdjacentHTML('beforebegin',difference);
        }

      if(window.innerWidth < 767){
        const rightPanel=document.querySelector('.eg-difference-right-panel');
        const content = document.querySelector('.eg-air-content');
          if(rightPanel && content){
            rightPanel.insertAdjacentElement('afterend',content);
          }
      }      

    }

    /* Initialize variation */
    waitForElement('#footer', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


