(function () {
  try {
    var debug = 0;
    var variation_name = "";
    var tag = "products";
    var tagList = "recentpagesList";

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

    function init() {
      if (!document.querySelector(".testActivated")) {
        document.body.classList.add("testActivated");
        const titleElement = document.querySelector('.product-detail .pdp-images + div .product-name');
        let imgElement = document.querySelector('.product-detail .pdp-images .main-carousel-container .zoom-container img');
        if (!imgElement) {
          imgElement = document.querySelector('.thumbnail-carousel-container .slick-track > div:nth-child(5) img');
        }

        if (titleElement && imgElement) {
          const title = titleElement.textContent.trim();
          const img = imgElement.getAttribute('src');
          const link = window.location.pathname;
          const localData = JSON.parse(localStorage.getItem(tag)) || [];
          const recentpagesList = JSON.parse(localStorage.getItem(tagList)) || [];
          if (!recentpagesList.includes(link)) {
            recentpagesList.push(link);
            localStorage.setItem(tagList, JSON.stringify(recentpagesList));
            const newObj = {
              "imgUrl": img,
              "text": title,
              "link": link,
              "recentlyClicked": true
            };
            const updatedData = localData.map(product => {
              return { ...product, recentlyClicked: false };
            });
            updatedData.push(newObj);
            localStorage.setItem(tag, JSON.stringify(updatedData));
          }
          console.log(updatedData, recentpagesList);
        }
      }
    }

    waitForElement('.product-detail .pdp-images + div .product-name', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
