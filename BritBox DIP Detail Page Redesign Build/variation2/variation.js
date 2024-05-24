(function () {
  try {
    var debug = 0;
    var variation_name = "";
    var dt = {
      urls: {
        "imgs": {
          "radiotimeslogo": "https://cdn.optimizely.com/img/25686490086/c8d7f9c80ff94b9f9de40e4f294b9341.png",
          "roku": "https://cdn.optimizely.com/img/25686490086/72d8b58af8c647ef9232cb1cc99631b2.png",
          "samsung": "https://cdn.optimizely.com/img/25686490086/fae10c6b602a454cb08f1ae53af552c5.png",
          "windows": "https://cdn.optimizely.com/img/25686490086/e9463ec5e9de4f0f852da4e7c1eb83c8.png",
          "xfinity": "https://cdn.optimizely.com/img/25686490086/364575c6213545caa23e1c2c5185759e.png",
          "xumo": "https://cdn.optimizely.com/img/25686490086/890b7be1ac144efda252b47971a07f72.png",
          "android": "https://cdn.optimizely.com/img/25686490086/160da66c8ac0466a93a9e9832343ddfd.png",
          "androidtv": "https://cdn.optimizely.com/img/25686490086/faf77d5226bc4a6fa3857b218db90b2f.png",
          "appletv": "https://cdn.optimizely.com/img/25686490086/3354cf0618b5414cb93c2d0f5204c928.png",
          "chromecast": "https://cdn.optimizely.com/img/25686490086/25dcc10b313f453d89d8c0340e741bb3.png",
          "chromeos": "https://cdn.optimizely.com/img/25686490086/22f20247681d45e0b2a54935209297c6.png",
          "deathparadiseseasonlogo": "https://cdn.optimizely.com/img/25686490086/5703cd1e7c524212827320dd3adf293b.png",
          "evenexplore_agatha": "https://cdn.optimizely.com/img/25686490086/483dc03990f84d7cb2747b3dcf2a638c.png",
          "evenexplore_comedy": "https://cdn.optimizely.com/img/25686490086/e893f9a3bfa649f08c6f281e7a6f228e.png",
          "evenexplore_crimedrama": "https://cdn.optimizely.com/img/25686490086/764524278b644d07bdade02a7d8c2559.png",
          "evenexplore_drama": "https://cdn.optimizely.com/img/25686490086/1ec7204beed0413f888aca72c9893b12.png",
          "evenexplore_mystry": "https://cdn.optimizely.com/img/25686490086/c8d88b8d5f3b401186b30813cbdd8149.png",
          "firetv": "https://cdn.optimizely.com/img/25686490086/74634f8911fe49da81e964efe04ae2b0.png",
          "heroimage": "https://cdn.optimizely.com/img/25686490086/716c1e87f88b4fe49340799cfd6ebcf1.png",
          "ios": "https://cdn.optimizely.com/img/25686490086/9ce042084bc14a80a8220c8f8f4db135.png",
          "itslikeimage": "https://cdn.optimizely.com/img/25686490086/f2583dfafa004e318235fb79e3a39cd0.png",
          "lg": "https://cdn.optimizely.com/img/25686490086/5c0be94d53d946a4873db39b0acfe8b6.png",
          "macos": "https://cdn.optimizely.com/img/25686490086/4218dacc65a84fc1aa7e43da6075eefc.png",
          "heroimagemob": "https://cdn.optimizely.com/img/25686490086/728f83c91797458d8ffb9ad6f1575c9a.jpg",
          "itslikeimagemob": "https://cdn.optimizely.com/img/25686490086/99c4842c710b41ed9bd9e7f9e2cc939b.png",
        },
        "ctaLnks": {
          hromncta: "https://www.britbox.com/us/account/signup?returnURL=/us/show/Death_in_Paradise_b01pvmf6",
          evenexplore_drama: 'https://www.britbox.com/us/genre/drama',
          evenexplore_mystry: 'https://www.britbox.com/us/genre/mystery',
          evenexplore_comedy: "https://www.britbox.com/us/genre/comedy"
        },
        "videos": {
          mdashowcasevd: 'https://player.vimeo.com/video/832629177?h=8bddc8a92b?title=0&autoplay=0&muted=0&controls=1&sidedock=0&loop=0'
        }
      }
    };

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

    const newSectionUp = `
      <section class="eg-nwsctup">
        <!-- hero -->
        <div class="eg-nwsctup-hero"></div>
        <!-- media showcase -->
        <div class="eg-nwsctup-mediashowcase"></div>
      </section>
    `;
    const newSectionDwn = `
    <section class="eg-nwsctdwn">
      <!-- even more to explore -->
      <div class="eg-nwsctdwnevnexplore"></div>
      <!-- available on -->
      <div class="eg-nwsctdwnavailable"></div>
    </section>
    `;
    function init() {
      if (!document.querySelector('.eg-nwsctup')) {
        // adding top new section above tabs wrapper
        const target = document.querySelector('.top-banner');
        if (target) {
          target.insertAdjacentHTML('afterend', newSectionUp);
          addCtatopbar();
          addHero();
          addMediaShowCase();
        }

        // adding bottom new section below tabs wrapper
        const target2 = document.querySelector('html body .additional-information');
        if (target2) {
          target2.insertAdjacentHTML('afterend', newSectionDwn);
          addevenmore();
          addAvailableOn();
        }
      }
    }


    function addCtatopbar() {
      waitForElement('html body .top-bar .actions>.profile:nth-child(4) a ', function () {
        document.querySelector('html body .top-bar .actions>.profile:nth-child(4) a ').innerText = "Start Watching Now";
      }, 300, 15000);
    }

    function addHero() {
      const target = document.querySelector('.eg-nwsctup-hero');
      const bgImg = window.innerWidth < 768 ? dt.urls.imgs.heroimagemob : dt.urls.imgs.heroimage;
      const bgImgStyle = `
        background-image:url('${bgImg}');
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center 0;
      `;
      const newHeroHTML = `
        <div class="eg-hronwmn" style="${bgImgStyle}">
          <div class="eg-hronwcnt">
            <div class="eg-hronwcntcont">
              <div class="eg-hronwcntcontwpr">
                <div class="eg-hronwcntcontwprimg">
                  <img src="${dt.urls.imgs.deathparadiseseasonlogo}"/>
                </div>
                <a class="eg-hronwcntcontwprcta" href="${dt.urls.ctaLnks.hromncta}">Start watching now</a>
              </div>
            </div>
          </div>
        </div>
      `;
      if (!document.querySelector(".eg-hro_nw_mn")) {
        target.insertAdjacentHTML('beforeend', newHeroHTML);
      }
    }

    function addMediaShowCase() {
      const target = document.querySelector('.eg-nwsctup-mediashowcase');
      const itslikeimg = window.innerWidth < 768 ? dt.urls.imgs.itslikeimagemob : dt.urls.imgs.itslikeimage;
      const mediaShowCaseHTML = `
          <section class="eg-mdanwsctn">
            <div class="eg-mdanwsctn-container row">
              <!-- video -->
              <div class="eg-mdanwsctn_video">
                  <!-- left -->
                  <div class="eg-left">
                    <span class="eg-title">Now Streaming: Season Twelve</span>
                    <p class="eg-para">Death in Paradise is back for another season! Return to the beautiful Caribbean island of Saint Marie with fish-out-of-water British detective Neville Parker, who solves murder mysteries alongside the brillant, ambitious sergeant Naomi Thomas in this fan-favorite whodunnit with a light touch and a warm heart.</p>
                  </div>
                  <!-- video -->
                  <div class="eg-video-container"><iframe src="${dt.urls.videos.mdashowcasevd}"></iframe></div>
              </div>
              
              <!-- bnr bellow video-->
              <div class="eg-mdanwsctn_video-bnr">
                <!-- left img -->
                <div class="eg-left-img-div">
                  <img src="${itslikeimg}"/>
                </div>
                <!-- text box -->
                <div class="eg-right-text-div">
                  <p class="eg-text">"It's like Midsomer Murders<br>meets Agatha Christie with<br>added sunshine and reggae."</p>
                  <span class="eg-logo"><img src="${dt.urls.imgs.radiotimeslogo}"></span>
                </div>
              </div>
            </div>
          </section>
          `;
      if (!document.querySelector('.eg-mdanwsctn')) {
        target.insertAdjacentHTML("beforeend", mediaShowCaseHTML);
      }
    }

    function addevenmore() {
      const target = document.querySelector('.eg-nwsctdwnevnexplore');
      const newEvenMoreHTML = `
      <div class="eg-nwevnmrexplore">
        <span class="eg-nwevmrexploretitle">Even More to Explore</span>
        <ul class="eg-nwevmrexploretestimonials">
          <a class="eg-nwevmrexploretestimonial" href="${dt.urls.ctaLnks.evenexplore_mystry}">
            <img src="${dt.urls.imgs.evenexplore_mystry}"/>
            <span>MYSTERY</span>
          </a>

          <a class="eg-nwevmrexploretestimonial" href="${dt.urls.ctaLnks.evenexplore_comedy}">
            <img src="${dt.urls.imgs.evenexplore_comedy}"/>
            <span>COMEDY</span>
          </a>

          <a class="eg-nwevmrexploretestimonial" href="${dt.urls.ctaLnks.evenexplore_drama}">
            <img src="${dt.urls.imgs.evenexplore_drama}"/>
            <span>DRAMA</span>
          </a>

          <a class="eg-nwevmrexploretestimonial">
            <img src="${dt.urls.imgs.evenexplore_agatha}"/>
            <span>AGATHA CHRISTIE</span>
          </a>

          <a class="eg-nwevmrexploretestimonial">
            <img src="${dt.urls.imgs.evenexplore_crimedrama}"/>
            <span>CRIME DRAMA</span>
          </a>
        </ul>
      </div>
      `;
      if (!document.querySelector('.eg-nwevnmrexplore')) {
        target.insertAdjacentHTML('beforeend', newEvenMoreHTML);
      }
    }

    function addAvailableOn() {
      const target = document.querySelector('.eg-nwsctdwnavailable');
      const ctaText = window.innerWidth < 768 ? "Start watching now" : "Sign Up Today";
      const nwAvion = `
      <div class="eg-nwavon">
        <span class="eg-nwavontitle">Available on the Most Popular Devices</span>
        <ul class="eg-nwavontestimonials">
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.androidtv}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.appletv}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.firetv}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.macos}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.ios}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.samsung}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.lg}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.xfinity}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.windows}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.android}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.chromecast}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.roku}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.xumo}"/>
          </a>
          <a class="eg-nwavontestimonial">
            <img src="${dt.urls.imgs.chromeos}"/>
          </a>
        </ul>
        <a class="eg-nwavoncta" href="/us/account/signup?returnURL=/us//show/Death_in_Paradise_b01pvmf6">${ctaText}</a>
        <span class="eg-nwavonnote">Free 7-day trial, then just $8.99/month or $89.99/year</span>
      </div>
      `;
      if (!document.querySelector('.eg-nwavon')) {
        target.insertAdjacentHTML('beforeend', nwAvion);
      }
    }

    waitForElement('footer', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


