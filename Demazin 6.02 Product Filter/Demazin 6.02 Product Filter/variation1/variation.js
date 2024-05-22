(function () {
  try {
    var debug = 0;
    var variation_name = "";
    var $;
    var wnd = window;
    wnd.EGTG = [
      "all", // 0
      ["coldflu", "coldflu_tabletsCapsule", "coldflu_chestRub", "coldflu_patches", "coldflu_nasalSprays"], // 1
      ["decongestantsVapours", "decongestantsVapours_adultsKids12+", "decongestantsVapours_kids6+", "decongestantsVapours_kids3+", "decongestantsVapours_kids2+"], // 2
      ["kids", "kids_kids6+", "kids_kids2+"], // 3
      "hayfeverAllergy",// 4
      "tabletsCapsule",// 5
      "chestRub",// 6
      "patches",// 7
      "nasalSprays",// 8
      "adultsKids12+",// 9
      "kids6+",// 10
      "kids3+",// 11
      "kids2+",// 12
    ];
    const tg = wnd.EGTG;
    wnd.allPds = [
      {
        "link": "https://demazin.com.au/product/demazin-allergy-hayfever-relief-tablets/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/Demazin-Cold-Flu-Tablets-Day_Night-48-600x600.png",
        "title": "Demazin Allergy + Hayfever Relief Tablets",
        tag: [tg[0], tg[4]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-12-hour-nasal-decongestant-spray/",
        "img": "https://demazin.com.au/wp-content/uploads/2023/02/98368_DZ_A5986_9314057016350_1.png",
        "title": "Demazin 12 Hour Nasal Decongestant Spray",
        tag: [tg[0], tg[1][0], tg[8], tg[1][4], tg[2][0], tg[2][2], tg[3][0], tg[10], tg[3][1], tg[4]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-nasal-decongestant/",
        "img": "https://demazin.com.au/wp-content/uploads/2023/02/Demazin-Nasal-Decongestant_24_600x600-1.png",
        "title": "Demazin Nasal Decongestant",
        tag: [tg[0], tg[1][0], tg[2][0], tg[9], tg[2][1], tg[4]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-ultra-cold-flu-cough-immune-defence-34-capsules/",
        "img": "https://demazin.com.au/wp-content/uploads/2023/02/94935_DZ_A5625-ULTRA-KIT-ColdFLuCough-Immune-Def_SKUvantage-Render_2D-FOP_v0.png",
        "title": "Demazin Ultra Cold & Flu + Cough + Demazin Immune Defence",
        tag: [tg[0], tg[1][0], tg[5], tg[1][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-cold-flu-cough-day-night-capsules/",
        "img": "https://demazin.com.au/wp-content/uploads/2022/01/Demazin-Cold-Flu-Cough-Day_Night-Capsules-24-1200x1200-1-600x600-1.png",
        "title": "Demazin Cold + Flu + Cough Day + Night Capsules",
        tag: [tg[0], tg[1][0], tg[5], tg[1][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-cold-flu-relief-day-night-tablets/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/4057599000047-1-Demazin-Cold-Flu-Tablets-Day_Night-24-1200x1200-1-600x600.png",
        "title": "Demazin Cold + Flu Relief Day + Night Tablets",
        tag: [tg[0], tg[1][0], tg[5], tg[1][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-kids-2-cold-flu-immune-defence-natural-berry-oral-liquid/",
        "img": "https://demazin.com.au/wp-content/uploads/2022/11/97928_A6082_DEMAZIN-KIDS-2-CFIM-DEF-LIQ-200ML_AU_CTN_FRONT_2D_V0.png",
        "title": "Demazin Kids 2+ Cold & Flu + Immune Defence Oral Liquid Natural Berry Flavour",
        tag: [tg[0], tg[3][0], tg[11], tg[3][2]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-cold-flu-relief-tablets/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/4057599000030-1-Demazin-Cold-Flu-Relief-Tablets-24-1200x1200-1-600x600.png",
        "title": "Demazin Cold + Flu Relief Tablets",
        tag: [tg[0], tg[1][0], tg[5], tg[1][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-kids-6-cold-relief-blue-syrup-peach-vanilla-flavour/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/INOV_9310160822789NZ-1-copy-600x600.png",
        "title": "Demazin Kids 6+ Cold Relief Blue Syrup Peach & Vanilla Flavour",
        tag: [tg[0], tg[3][0], tg[10], tg[3][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-kids-6-cold-relief-colour-free-syrup/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/9310160822758-22-Demazin-Kids-6-Cough-Cold-Relief-1200x1200-1-600x600.png",
        "title": "Demazin Kids 6+ Cold Relief Colour Free Syrup Peach & Vanilla Flavour",
        tag: [tg[0], tg[3][0], tg[10], tg[3][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-kids-6-cough-cold-relief-syrup/",
        "img": "https://demazin.com.au/wp-content/uploads/2021/08/9310160822840-1-Demazin-Kids-6-Cough-Cold-Relief-1200x1200-1-600x600.png",
        "title": "Demazin Kids 6+ Cough + Cold Relief Syrup Grape Flavour",
        tag: [tg[0], tg[3][0], tg[10], tg[3][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-chest-rub-stick/",
        "img": "https://demazin.com.au/wp-content/uploads/2022/11/97928_A6111_DEMAZIN-CHEST-RUB-STICK-40G_AU_FOP_Render_V0.png",
        "title": "Demazin Chest Rub Stick",
        tag: [tg[0], tg[1][0], tg[6], tg[1][2], tg[2][0], tg[12], tg[2][4], tg[3][0], tg[10], tg[3][1], tg[11], tg[3][2]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-vapourising-patches/",
        "img": "https://demazin.com.au/wp-content/uploads/2022/12/98076_A6216_-DZ_Vapourising-Patches_Render_Front_V0.png",
        "title": "Demazin Vapourising Patches",
        tag: [tg[0], tg[1][0], tg[7], tg[1][3], tg[2][0], tg[11], tg[2][3], tg[3][0], tg[10], tg[3][1]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-kids-2-cough-immune-defence-syrup-natural-berry-flavour/",
        "img": "https://demazin.com.au/wp-content/uploads/2022/11/97928_A6083_DEMAZIN-KIDS-COUGHIMMUNE-DEF-200ML_AU_CTN_FRONT_2D_V0.png",
        "title": "Demazin Kids 2+ Cough + Immune Defence Syrup Natural Berry Flavour",
        tag: [tg[0], tg[3][0], tg[11], tg[3][2]]
      },
      {
        "link": "https://demazin.com.au/product/demazin-hayfever-allergy-relief-non-drowsy-tablets/",
        "img": "https://demazin.com.au/wp-content/uploads/2024/03/Demazin-Hayfever-Allergy-Relief-Non-Drowsy-10-Tablets-1-1.jpg",
        "title": "Demazin Hayfever Allergy Relief Non-Drowsy Tablets",
        tag: [tg[0], tg[4]]
      }
    ];
    wnd.vrdt = {
      fnc: {
        waitFor: function (cssSelector, callback, timeout) {
          var stop,
            elementCached,
            check = function () {
              try {
                elementCached = document.querySelector(cssSelector);

                if (stop) return;

                if (elementCached) {
                  callback(elementCached);
                  clearTimeout(timeout);

                  console.log(cssSelector + " found");
                } else {
                  window.requestAnimationFrame(check);
                }
              } catch (err) {
                console.log(err.message);
              }
            };

          window.requestAnimationFrame(check);

          timeout = setTimeout(function () {
            stop = true;
            console.log(cssSelector + " not found");
          }, timeout);
        },
        live: function (selector, event, callback, context) {
          var addEvent = function (el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (node.parentNode || node.document).querySelectorAll(selector),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          var live = function (selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (el && found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        },
        monitorRqXHR: function (callback) {
          // xhr requests
          var send = XMLHttpRequest.prototype.send
          XMLHttpRequest.prototype.send = function () {
            this.addEventListener('load', function () {
              callback(this);
            })
            return send.apply(this, arguments)
          }
        },
        monitorRqFetch: function (callback) {
          // fetch requests
          var originalFetch = window.fetch;
          window.fetch = function (input, initt) {
            var fetchPromise = originalFetch(input, initt);
            fetchPromise.then(function (response) {
              callback(response);
            });
            return fetchPromise;
          }
        },
        fetchDtXHR: function (param) {
          /* param will be {callback, url, method = "POST", rspnsType = "", referrer = ""}*/
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
            if (xhr.status == 200) {
              var response = xhr;
              var callback = param.callback;
              if (callback) {
                param.callback(response)
              } else {
                console.log("Response : ", response);
              }
            } else {
              console.log("Something went wrong");
            }
          }
          var method = param.method || "GET";
          xhr.open(method, param.url);
          // Set response type
          if (param.rspnsType) {
            xhr.responseType = param.rspnsType;
          }
          // Set headers
          if (param.headers) {
            headers.forEach(function (hdr) {
              xhr.setRequestHeader(hdr.key, hdr.value); //eg : xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
            });
          }

          // Set referrer 
          if (param.referrer) {
            xhr.setRequestHeader("referrer", param.referrer);
            xhr.setRequestHeader("referrerPolicy", "origin-when-cross-origin");
          }
          // Set other properties : Include credentials
          // xhr.withCredentials = true;
          // Set the body
          xhr.send("t=" + Date.now());
        },
        addMutation: function (param) {
          var targetNode = param.targetNode;
          var config = param.config;
          var callback = function (mutationsList, observer) {
            mutationsList.forEach(function (mutation) {
              param.callback(mutation, observer);
            });
          };
          var observer = new MutationObserver(callback);
          observer.observe(targetNode, config);
        },
        jumpToSection: function (param) {
          var el = document.querySelector(param.targetSel);
          if (el) {
            var extrapart = param.extrapart;
            if (param.isCondition) {
              // add Contions for extrapart here
              /* example
                extrapart = param.condtions.1025;
              */
              switch (param.condtions) {
                case "1025":
                  if (window.innerWidth < 1025) {
                    extrapart = param.condtions[1025];
                  }
                  break;
                default:
                  extrapart = param.extrapart;
              }
            }
            var elTop = el.offsetTop + extrapart;
            window.scrollTo({
              top: elTop,
              left: 0,
              behavior: "smooth",
            });
          }
        },
        getCookie: function (name) {
          var nameEQ = name + '=';
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        },
        setCookie: function (name, value, days) {
          var expires = '';
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
          }
          document.cookie = name + '=' + value + expires + '; path=/';
        }
      },
      chks: {
        isMob: window.innerWidth < 768,
        isDesk: window.innerWidth > 768
      },
      othr: {
        crrPds: wnd.allPds,
        showPds: wnd.allPds
      },
    }

    const newHTML = `<div class="eg-container_main">
    <div class="eg-content-wrapper_main">
        <h2 class="eg-page-title_main">All Products</h2>
        <div class="eg-grid_main">
            <div class="eg-grid_main-left">
                <div class="eg-grid_main-left-wrapper">
                    <button class="eg-grid_main-left-cut-cta" type="button">
                        Refine results<span class="eg-cut-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                    fill="white"></path>
                            </svg></span>
                    </button>
                    <div class="eg-group eg-group-1">
                        <span class="eg-cta">To help with... <svg xmlns="http://www.w3.org/2000/svg" width="9"
                                height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M4.5 5.39998L0 0.599976L9 0.599976L4.5 5.39998Z" fill="#333333"></path>
                            </svg></span><span class="eg-num-selected"></span>
                        <ul class="eg-group-list">
                            <li class="eg-group-list-item" data-key="all">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">All<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="coldflu">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Cold &amp; Flu<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="decongestantsVapours">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Decongestants &amp; Vapours<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="kids">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Kids<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="hayfeverAllergy">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Hayfever &amp; Allergies<span class="eg-num"></span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="eg-group eg-group-2">
                        <span class="eg-cta">Product type<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6"
                                viewBox="0 0 9 6" fill="none">
                                <path d="M4.5 5.39998L0 0.599976L9 0.599976L4.5 5.39998Z" fill="#333333"></path>
                            </svg></span>
                        <span class="eg-num-selected"></span>
                        <ul class="eg-group-list">
                            <li class="eg-group-list-item">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">All<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="tabletsCapsule">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Tablets &amp; Capsules<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="chestRub">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Chest Rub<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="patches">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Patches<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="nasalSprays">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Nasal Sprays<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="adultsKids12+">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Adults &amp; Kids 12+<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="kids6+">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Kids 6+<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="kids3+">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Kids 3+<span class="eg-num"></span></p>
                            </li>
                            <li class="eg-group-list-item" data-key="kids2+">
                                <span class="eg-checkbox"></span>
                                <p class="eg-text-num">Kids 2+<span class="eg-num"></span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="eg-filter-popup-cta-group">
                        <button class="eg-search-filters" type="button">Search</button>
                        <button class="eg-clear-filters" type="button">Clear filters</button>
                    </div>
                </div>
            </div>
            <div class="eg-refine-results-cta-wrapper">
                <button class="eg-refine-results-cta" type="button">
                    <span class="eg-refine-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z"
                                fill="#DA291C"></path>
                        </svg></span>
                    <p class="eg-refine-content">
                        Refine results
                        <span class="eg-total-selected">Choose from concern & product type</span>
                    </p>
                </button>
            </div>
            <div class="eg-grid_main-right">
                <div class="eg-filters-info">
                    <span class="eg-total-filters"></span>
                    <div class="eg-applied-filters-wrap"></div>
                </div>
                <div class="eg-products"></div>
            </div>
        </div>
    </div>
</div>`;

    var init = function () {
      if (window.location.pathname === '/all-products/' && !document.querySelector('[data-targeted-page]')) {
        document.body.setAttribute('data-targeted-page', true);
        // update breadcrumb
        updateBreadcrumb();
        // add new container
        addNewContainer();
      }
    }

    function updateBreadcrumb() {
      document.querySelector('html body .breadcrumb>.container>span').childNodes[1].textContent = ">";
    }

    function addNewContainer() {
      if (!document.querySelector('.eg-container_main')) {
        document.querySelector('html body .wooCategory>.container').insertAdjacentHTML('afterend', newHTML);
        testEvents();
      }
      refreshContent(true);
    }

    function updateProducts() {
      const target = document.querySelector('html body .eg-grid_main-right');
      const pds = wnd.vrdt.othr.showPds;
      const pdsHTML = pds.reduce(function (t, crr) {
        return t += `
        <a class="eg-product" href="${crr.link}">
          <span class="eg-product-image">
            <img src="${crr.img}" alt="${crr.title}">
          </span>
          <span class="eg-product-title">${crr.title}</span>
        </a>`;
      }, '');
      target.querySelector('.eg-products').innerHTML = pdsHTML;
      const ShowingMsgEl = document.querySelector('html body .eg-filters-info .eg-total-filters');
      const checkedEl = document.querySelector('html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked');
      if (checkedEl) {
        ShowingMsgEl.innerText = `Showing ${pds.length} items for`;
      } else {
        if (window.innerWidth > 1024) {
          ShowingMsgEl.innerText = `Showing ${pds.length} items`;
        } else {
          ShowingMsgEl.innerText = '';
        }
      }
    }

    function updateFilters() {
      // updating filter counts
      {
        const helpChecked = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item.eg-checked');
        let subKey = '';
        if (helpChecked) {
          subKey = helpChecked.getAttribute('data-key') + "_";
        }
        const counts = {
          help: {
            all: 15,
            coldflu: 8,
            DecongestantsVapour: 4,
            kids: 8,
            HayfeverAllergies: 4
          },
          type: {
            tabletsCapsule: 0,
            chestRub: 0,
            patches: 0,
            nasalSprays: 0,
            adultsKids12: 0,
            kids6: 0,
            kids3: 0,
            kids2: 0
          }
        };
        // counting filters num
        wnd.vrdt.othr.crrPds.forEach(pd => {
          const tagList = pd.tag;
          if (tagList.includes(`${subKey}${tg[5]}`)) {
            counts.type.tabletsCapsule += 1;
          }
          if (tagList.includes(`${subKey}${tg[6]}`)) {
            counts.type.chestRub += 1;
          }
          if (tagList.includes(`${subKey}${tg[7]}`)) {
            counts.type.patches += 1;
          }
          if (tagList.includes(`${subKey}${tg[8]}`)) {
            counts.type.nasalSprays += 1;
          }
          if (tagList.includes(`${subKey}${tg[9]}`)) {
            counts.type.adultsKids12 += 1;
          }
          if (tagList.includes(`${subKey}${tg[10]}`)) {
            counts.type.kids6 += 1;
          }
          if (tagList.includes(`${subKey}${tg[11]}`)) {
            counts.type.kids3 += 1;
          }
          if (tagList.includes(`${subKey}${tg[12]}`)) {
            counts.type.kids2 += 1;
          }

        });
        // to help with
        const countsData = counts.help;
        const allEl = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item:nth-child(1)');
        const coldFluEl = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item:nth-child(2)');
        const DecongestantsEl = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item:nth-child(3)');
        const kidsEl = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item:nth-child(4)');
        const hayFeverEl = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item:nth-child(5)');
        allEl.querySelector('.eg-num').innerText = countsData.all;
        coldFluEl.querySelector('.eg-num').innerText = countsData.coldflu;
        DecongestantsEl.querySelector('.eg-num').innerText = countsData.DecongestantsVapour;
        kidsEl.querySelector('.eg-num').innerText = countsData.kids;
        hayFeverEl.querySelector('.eg-num').innerText = countsData.HayfeverAllergies;

        // product type
        const typeData = counts.type;
        const allElType = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(1)');
        const tabletEl = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(2)');
        const chestrubEl = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(3)');
        const patchesEl = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(4)');
        const nasalspraysEl = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(5)');
        const adultsKids12El = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(6)');
        const kids6El = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(7)');
        const kids3El = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(8)');
        const kids2El = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item:nth-child(9)');
        tabletEl.querySelector('.eg-num').innerText = typeData.tabletsCapsule;
        chestrubEl.querySelector('.eg-num').innerText = typeData.chestRub;
        patchesEl.querySelector('.eg-num').innerText = typeData.patches;
        nasalspraysEl.querySelector('.eg-num').innerText = typeData.nasalSprays;
        adultsKids12El.querySelector('.eg-num').innerText = typeData.adultsKids12;
        kids6El.querySelector('.eg-num').innerText = typeData.kids6;
        kids3El.querySelector('.eg-num').innerText = typeData.kids3;
        kids2El.querySelector('.eg-num').innerText = typeData.kids2;

        allElType.querySelector('.eg-num').innerText = countsData.all;
        if (helpChecked) {
          const attrVal = helpChecked.getAttribute('data-key');
          if (attrVal === tg[0]) {
            allElType.querySelector('.eg-num').innerText = countsData.all;
          } else if (attrVal === tg[1][0]) {
            allElType.querySelector('.eg-num').innerText = countsData.coldflu;
          } else if (attrVal === tg[2][0]) {
            allElType.querySelector('.eg-num').innerText = countsData.DecongestantsVapour;
          } else if (attrVal === tg[3][0]) {
            allElType.querySelector('.eg-num').innerText = countsData.kids;
          } else if (attrVal === tg[4]) {
            allElType.querySelector('.eg-num').innerText = countsData.HayfeverAllergies;
          }
        }
      }
    }

    function testEvents() {
      const live = wnd.vrdt.fnc.live;
      live('html body .eg-grid_main-left .eg-group>.eg-cta', 'click', function () {
        this.parentElement.classList.toggle('eg-opened');
      });
      live('html body .eg-grid_main-left .eg-group .eg-group-list-item', 'click', function () {
        const prevChecked = this.parentElement.querySelector('.eg-checked');
        const prevClicked = document.querySelector('html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-clicked');
        if (prevChecked && prevChecked !== this) {
          prevChecked.classList.remove('eg-checked');
        }
        this.classList.toggle('eg-checked');
        if (prevClicked && prevClicked !== this && this.classList.contains('eg-checked')) {
          prevClicked.classList.remove("eg-clicked");
        }
        this.classList.add('eg-clicked');
        // new logic
        if (window.innerWidth > 768) {
          refreshContent(true);
        } else {
          refreshContent(false);
        }
      });
      live('html body .eg-applied-filter', 'click', function () {
        const sel = this.getAttribute('data-click-target');
        uncheckFilters(sel);
      });
      live('html body .eg-clear-all-filter,html body .eg-filter-popup-cta-group>.eg-clear-filters', 'click', function () {
        const sel = 'html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked';
        uncheckFilters(sel);
      });
      live('html body .eg-refine-results-cta', 'click', function () {
        document.body.classList.add('eg-show-popup-filter');
      });

      live('html body .eg-grid_main-left-cut-cta .eg-cut-icon', 'click', function () {
        document.body.classList.remove('eg-show-popup-filter');
      });
      live('html body .eg-filter-popup-cta-group>.eg-search-filters', 'click', function () {
        updateRefineSelected();
      });
    }

    function uncheckFilters(sel) {
      const els = document.querySelectorAll(sel);
      if (els.length > 0) {
        els.forEach(el => {
          el.click();
          el.classList.remove('eg-clicked');
        });
      }
      if (window.innerWidth < 768) {
        document.querySelector('html body .eg-filter-popup-cta-group>.eg-search-filters').click();
      }
    }

    function generatePds() {
      const helpChecked = document.querySelector('html body .eg-grid_main-left .eg-group-1 .eg-group-list-item.eg-checked[data-key]');
      const typeChecked = document.querySelector('html body .eg-grid_main-left .eg-group-2 .eg-group-list-item.eg-checked[data-key]');
      let filterKey = 'all';
      let subKey;
      if (helpChecked) {
        filterKey = helpChecked.getAttribute('data-key');
        subKey = helpChecked.getAttribute('data-key') + "_";
      } else if (typeChecked) {
        filterKey = typeChecked.getAttribute('data-key');
      }
      wnd.vrdt.othr.crrPds = wnd.allPds.filter(function (sd) {
        const sdKeys = sd.tag;
        if (sdKeys.includes(filterKey)) {
          return sd;
        }
      });
      if (typeChecked && subKey) {
        const thisKey = typeChecked.getAttribute('data-key');
        wnd.vrdt.othr.showPds = wnd.vrdt.othr.crrPds.filter(function (pd) {
          const pdKeys = pd.tag;
          if (pdKeys.includes(`${subKey}${thisKey}`)) {
            return pd;
          }
        });
      } else if (
        (typeChecked && !helpChecked) ||
        (!typeChecked && !helpChecked) ||
        (helpChecked && !typeChecked)
      ) {
        wnd.vrdt.othr.showPds = wnd.vrdt.othr.crrPds;
      }

      // console.log("HELP : ", helpChecked, " TYPE: ", typeChecked, " FILTER: ", filterKey, " SUBKEY: ", subKey);
    }

    function generateAppliedFilters() {
      let appliedEls = document.querySelectorAll('html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked[data-key]');
      let html = '';
      if (appliedEls.length > 0) {
        html = [...appliedEls].reduce(function (t, crr) {
          const key = crr.getAttribute('data-key');
          let target = '';
          if (key && key !== "all") {
            target = `html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked[data-key='${key}']`;
          } else {
            target = `html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked:nth-child(1)`;
          }
          return t += `<a class="eg-applied-filter" data-click-target="${target}">${crr.querySelector('.eg-text-num').childNodes[0].textContent.trim()} <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M8 0.766727L7.23327 0L4 3.23327L0.766727 0L0 0.766727L3.23327 4L0 7.23327L0.766727 8L4 4.76673L7.23327 8L8 7.23327L4.76673 4L8 0.766727Z" fill="#DA291C"></path></svg></a>`
        }, '');
        html += `<a class="eg-clear-all-filter">Clear all<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <path d="M8 0.766727L7.23327 0L4 3.23327L0.766727 0L0 0.766727L3.23327 4L0 7.23327L0.766727 8L4 4.76673L7.23327 8L8 7.23327L4.76673 4L8 0.766727Z" fill="#444444"></path>
</svg></a>`;
      }
      document.querySelector('.eg-applied-filters-wrap').innerHTML = html;
    }

    function someSelected() {
      const selectedIngp1 = document.querySelector('html body .eg-grid_main-left .eg-group-1');
      const selectedIngp2 = document.querySelector('html body .eg-grid_main-left .eg-group-2');

      [selectedIngp1, selectedIngp2].forEach(selected => {
        const parent = selected.closest('.eg-group');
        const totalSelected = parent.querySelectorAll('.eg-checked');
        const numSelectedEl = parent.querySelector('.eg-num-selected');
        if (totalSelected.length > 0) {
          numSelectedEl.innerText = totalSelected.length + " selected";
          parent.classList.add('eg-some-selected');
        } else {
          parent.classList.remove('eg-some-selected');
        }
      });
    }

    function updateRefineSelected() {
      const el = document.querySelector('html body .eg-refine-results-cta .eg-refine-content .eg-total-selected');
      let selectedText = 'Choose from concern & product type';
      // after hitting search button
      const selectedEls = document.querySelectorAll('html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-checked');
      if (selectedEls.length > 0) {
        selectedText = `(${selectedEls.length} selected)`;
        document.body.classList.remove('eg-show-popup-filter');
      } else {
        const firstGrpEl = document.querySelector('html body .eg-grid_main-left .eg-group.eg-group-1');
        firstGrpEl.classList.add('eg-opened');
        firstGrpEl.scrollIntoView();
      }
      el.innerText = selectedText;
      refreshContent(true);
    }

    function updatePageTitle() {
      const pageTitleEl = document.querySelector('html body .eg-page-title_main');
      const clickedEl = document.querySelector('html body .eg-grid_main-left .eg-group .eg-group-list-item.eg-clicked .eg-text-num')
      if (clickedEl) {
        if (clickedEl.childNodes[0].textContent.trim().toLowerCase() === "all") {
          pageTitleEl.innerText = "All Products";
        } else {
          pageTitleEl.innerText = clickedEl.childNodes[0].textContent.trim();
        }
      } else {
        pageTitleEl.innerText = "All Products";
      }
      //console.log(clickedEl)
    }

    function refreshContent(isUpdate) {
      someSelected();
      generatePds();
      updateFilters();
      if (isUpdate) {
        updateProducts();
        generateAppliedFilters();
        setTimeout(function () {
          updatePageTitle();
        }, 1);
      }
    }

    wnd.vrdt.fnc.waitFor('html body .wooCategory>.container', init, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();