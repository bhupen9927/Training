(function () {
  try {
    var debug = 0;
    var variation_name = "";

    const jsonData = {
      "categories": [
        {
          "topCategory": "Heating",
          "subCategories": [
            {
              "name": "Radiators",
              "link": "https://www.bathroommountain.co.uk/heating/radiators",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Heating.jpg",
              "subCategories": [
                "Vertical Radiators","Horizontal Radiators","Column Radiators","Radiators","Heating"
              ]
            },
            {
              "name": "Radiators By Colour",
              "link": "https://www.bathroommountain.co.uk/heating/radiators",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/2/32180-1000-Black-Triple-Column-Horizontal-Radiator-750x1415mm_3.jpg",
              "subCategories": [
                "Matt Black","Anthracite & Grey","White","Chrome","Raw Metal","Blue","Heating"
              ]
            },
            {
              "name": "Heated Towel Rails",
              "link": "https://www.bathroommountain.co.uk/heating/heated-towel-rails",
              "image": "https://www.bathroommountain.co.uk/img/400/400/resize/catalog/category/33204-Cat.jpg",
              "subCategories": [
                "Ladder Towel Rails","Designer Towel Rails", "Traditional Towel Rails", "Electric Towel Rails","heating"
              ]
            },
            {
              "name": "Towel Rails By Colour",
              "link": "https://www.bathroommountain.co.uk/heating/heated-towel-rails",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/3/C36392-1000-Electric-Blue-Heated-Towel-Rail-800x450mm_2.jpg",
              "subCategories": [
                "Matt Black","Anthracite Grey","White","Chrome","Brushed Brass","White","Blue","Heating"
              ]
            },
            {
              "name": "Heating Accessories",
              "link": "https://www.bathroommountain.co.uk/heating/heating-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/4/34010-w.jpg",
              "subCategories": [
                "Radiator Valves", "Radiator Stands","heating"
              ]
            }
          ]
        },
        {
          "topCategory": "Furniture",
          "subCategories": [
            {
              "name": "Vanity Units",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Furniture.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity & Toilet", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Toilet Units","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Furniture By Colour",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76306-1000-Bermuda-Chalk-White-Double-Basin-Vanity-1200mm_1.jpg",
              "subCategories": [
                "white","Grey","Blue","Green","Pink","Wooden Finish","Black Accents","Brushed Brass Accents","Furniture"
              ]
            },
            {
              "name": "Furniture By Style",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76246-1000-Corsica-Grey-Wall-Hung-Basin-Drawer-Vanity-600mm_1.jpg",
              "subCategories": [
                "Modern","Traditional","Fluted","Furniture"
              ]
            },
            {
              "name": "Furniture By Size",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C79920-1000-Gloss-White-Cloakroom-Wall-Hung-Basin-Vanity-400mm_1.jpg",
              "subCategories": [
                "400mm Cloakroom Vanity","500mm Vanity","600mm Vanity","800mm Vanity","1000mm Vanity","1200mm Double Vanity","1000mm Vanity & Toilet","1100mm Vanity & Toilet","1200mm Vanity & Toilet","1300mm Vanity & Toilet","1500mm Vanity & Toilet","Furniture"
              ]
            },
            {
              "name": "Furniture By Range",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/7/c76285-1000-bermuda-dove-grey-basin-vanity-600mm.jpg",
              "subCategories": [
                "Bermuda","Corsica","Harper","Monaco","Elba","Lucia","Avon","Trent","Foster","Bali","Quartz & Mersey","Crete","Austin","Furniture"
              ]
            }
          ]
        },
        {
          "topCategory": "Mirrors & Cabinets",
          "subCategories": [
            {
              "name": "Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Mirrors.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Mirrors By Colour",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73117v2-1000-black-framed-illuminated-led-mirror-700x500mm_1.jpg",
              "subCategories": [
                "Chrome","Matt Black","Brushed Brass","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Mirror Cabinets",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirror-cabinets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73345-1000-black-illuminated-led-mirror-cabinet-710x800mm.jpg",
              "subCategories": [
                "LED Mirror Cabinets","Non-illuminated Cabinets","Cloakroom Mirror Cabinets","Bluetooth LED Mirror Cabinets","Battery LED Mirror Cabinets","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Cabinets By Colour",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirror-cabinets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C73377-1000-Midnight-Green-Mirror-Cabinet-700x500mm_1.jpg",
              "subCategories": [
                "white","Grey","Chrome","Matt Black","Matt Brass","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },{
              "name": "Mirrors By Range",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirror-cabinets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73326-1000-brushed-brass-round-backlit-led-mirror-800mm.jpg",
              "subCategories": [
                "Mollie & Maya","Olivia","Mia","Emielia","Haisley","Aria & Blake","Ellie","Evelyn","Elena & Madelyn","Madison","Arabella & Allyson","Emilee & Darci","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            }
          ]
        },
        {
          "topCategory": "Shower Enclosures",
          "subCategories": [
            {
              "name": "Shower Doors",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Shower-Enclosures.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower"
              ]
            },
            {
              "name": "Shower Door By Colour",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/1/41190-1000-Black-Grid-Easy-Clean-6mm-Pivot-Shower-Door-700mm_1.jpg",
              "subCategories": [
                "Chrome","Matt Black","Brushed Brass","Shower"
              ]
            },
            {
              "name": "Showers Enclosures",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures",
              "image": "https://www.bathroommountain.co.uk/img/400/400/resize/catalog/category/41136tt.jpg",
              "subCategories": [
                "Quadrant Enclosures","Rectangular Enclosures","Walk In Shower Enclosures","Square Enclosures","Offset Quadrant Enclosures","Frameless Enclosure","Shower"
              ]
            },
            {
              "name": "Enclosure By Colour",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/4/C46188-1000-Matt-Black-Premium-Easy-Clean-8mm-Hinged-Shower-Enclosure_1_1.jpg",
              "subCategories": [
                "Chrome","Matt Black","Brushed Brass","Shower"
              ]
            },
            {
              "name": "Shower Trays",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-trays-1",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/H/K/HKT80Q100-1000_5.jpg",
              "subCategories": [
                "Quadrant","Offset Quadrant","Square","Rectangular","Grey Shower Trays","White Shower Trays","Shower"
              ]
            }
          ]
        },
        {
          "topCategory": "Showers",
          "subCategories": [
            {
              "name": "Shower Sets",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Showers.jpg",
              "subCategories": [
                "Exposed","Concealed","Traditional","Round Mirrors","Bath Filler Shower","Showers"
              ]
            },
            {
              "name": "Shower Sets By Colour",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/2/C26001-1000-Lismore-Round-Thermostatic-Bar-Shower-Set_1.jpg",
              "subCategories": [
                "Chrome","Matt Black","Brushed Brass","Gunmetal Grey","Showers"
              ]
            },
            {
              "name": "Showers By Style",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/2/3/23034-1000-Gunmetal-Grey-Square-Thermostatic-Shower-Set_1.jpg",
              "subCategories": [
                "Modern","Traditional","Showers"
              ]
            },
            {
              "name": "Shower Accessories",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/2/1/21057-1000-Traditional-Thermostatic-Shower-Valve-3-Outlets_1.jpg",
              "subCategories": [
                "Shower Valves","Shower Heads, Rails & Parts","Showers"
              ]
            }
          ]
        },
        {
          "topCategory": "Baths",
          "subCategories": [
            {
              "name": "Freestanding Baths",
              "link": "https://www.bathroommountain.co.uk/baths/freestanding-baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/5/c51099-1000-finsbury-1300mm-freestanding-bath.jpg",
              "subCategories": [
                "Freestanding Baths","Traditional Roll Top Baths","Back to Wall Baths","Baths"
              ]
            },
            {
              "name": "Shower Baths",
              "link": "https://www.bathroommountain.co.uk/baths/shower-baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/5/C57465-1000-1700x700-Shower-Bath-Brushed-Brass-Bath-Screen.jpg",
              "subCategories": [
                "L Shaped Shower Baths","P Shaped Shower Baths","Straight Shower Baths","Roll Top Shower Baths","Baths"
              ]
            },
            {
              "name": "Baths By Size",
              "link": "https://www.bathroommountain.co.uk/baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/5/C51097-1000-Richmond-1370mm-Freestanding-Slipper-Bath_1.jpg",
              "subCategories": [
                "Under 1499mm","1500mm to 1599mm","1600mm to 1699mm","1700mm to 1799mm","Over 1800mm","Baths"
              ]
            },
            {
              "name": "Baths By Style",
              "link": "https://www.bathroommountain.co.uk/baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/5/C51093-1000-Newham-V2-1700mm-Freestanding-Bath_6.jpg",
              "subCategories": [
                "Modern","Traditional","Singled Ended","Double Ended","Baths"
              ]
            },
            {
              "name": "Bath Accessories",
              "link": "https://www.bathroommountain.co.uk/baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/5/5/55124-1000-1400-acrylic-straight-bath-front-panel.jpg",
              "subCategories": [
                "Bath Panels","Bath Screens","Bath Wastes","Baths"
              ]
            }
          ]
        },
        {
          "topCategory": "Toilets",
          "subCategories": [
            {
              "name": "Toilets",
              "link": "https://www.bathroommountain.co.uk/toilets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/6/c66029-1000-seattle-close-coupled-toilet-with-soft-close-seat_1.jpg",
              "subCategories": [
                "Close Coupled Toilets","Back To Wall Toilets","Wall Hung Toilets","Toilets"
              ]
            },
            {
              "name": "Toilets By Feature",
              "link": "https://www.bathroommountain.co.uk/toilets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C79662-1000-Tungsten-Grey-Back-To-Wall-Unit-Toilet_1.jpg",
              "subCategories": [
                "Rimless Toilets","Comfort Height Toilets","Short Projection Toilets","Smart Toilets","Toilets"
              ]
            },
            {
              "name": "Toilets By Style",
              "link": "https://www.bathroommountain.co.uk/toilets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/6/C66031-1000-Denver-Close-Coupled-Toilet-With-Soft-Close-Seat.jpg",
              "subCategories": [
                "Modern Toilets","Traditional Toilets","Toilets"
              ]
            },
            {
              "name": "Toilet & Basin Sets",
              "link": "https://www.bathroommountain.co.uk/toilets/toilet-basin-sets/modern",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/6/C66256-1000-Rimless-Close-Coupled-Toilet-Pedestal-Basin-Set.jpg",
              "subCategories": [
                "Modern Basins & Toilets","Traditional Basins & Toilets", "Combined Vanity & Toilet","Toilets"
              ]
            },
            {
              "name": "Toilet Fittings",
              "link": "https://www.bathroommountain.co.uk/toilets/toilet-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/6/2/62043-1000-Denve-Smart-Bidet-Toilet-Seat_1.jpg",
              "subCategories": [
                "Toilet Fittings","Toilets"
              ]
            }
          ]
        },
        {
          "topCategory": "Basins",
          "subCategories": [
            {
              "name": "Basins",
              "link": "https://www.bathroommountain.co.uk/basins",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Basins.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Basins By Style",
              "link": "https://www.bathroommountain.co.uk/basins",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C81579-1000-White-Wall-Hung-Drawer-Vanity-Marble-Basin-600mm_1.jpg",
              "subCategories": [
                "Modern Basins","Traditional Basins","Basins"
              ]
            },
            {
              "name": "Basin & Toilet Sets",
              "link": "https://www.bathroommountain.co.uk/toilets/toilet-basin-sets/modern",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/6/C68062-1000-Traditional-High-Level-Toilet-Pedestal-Basin.jpg",
              "subCategories": [
                "Modern Basins & Toilets","Traditional Basins & Toilets", "Combined Vanity & Toilet","Basins"
              ]
            },
            {
              "name": "Basin Accessories",
              "link": "https://www.bathroommountain.co.uk/taps/tap-accessories/basin-wastes",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/6/4/64018-w.jpg",
              "subCategories": [
                "Basin Wastes","Plumbing Fittings","Basins"
              ]
            }
          ]
        },
        {
          "topCategory": "Taps",
          "subCategories": [
            {
              "name": "Taps",
              "link": "https://www.bathroommountain.co.uk/taps",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Taps.jpg",
              "subCategories": [
                "Basin","Bath","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Bath Tap","Taps","Tap"
              ]
            },
            {
              "name": "Taps By Styles",
              "link": "https://www.bathroommountain.co.uk/taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11001-1000-Trent-Chrome-Basin-Mixer-Tap_6.jpg",
              "subCategories": [
                "Modern Taps","Traditional Tap","Taps","Tap"
              ]
            },
            {
              "name": "Taps By Colour",
              "link": "https://www.bathroommountain.co.uk/taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11017-1000-Anke-Chrome-High-Rise-Basin-Mixer-Tap_1.jpg",
              "subCategories": [
                "Chrome","Matt Black","Brushed Brass","Gunmetal Grey","Taps","Tap"
              ]
            },
            {
              "name": "Taps Accessories",
              "link": "https://www.bathroommountain.co.uk/taps/tap-accessories/basin-wastes",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/6/4/64030-1000-chrome-dome-top-pop-up-basin-waste-slotted.jpg",
              "subCategories": [
                "Basin Wastes","Bath Wastes","Bottle Traps","Taps","Tap"
              ]
            }
          ]
        },
        {
          "topCategory": "Accessories",
          "subCategories": [
            {
              "name": "Mirrors & Cabinets",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73075-1000-dove-grey-bathroom-mirror-700x500mm.jpg",
              "subCategories": [
                "LED Illuminated Mirrors","LED Mirror Cabinets","Bathroom Mirrors","Bathroom Mirror Cabinets","Accessories"
              ]
            },
            {
              "name": "Bathroom Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/accessories-by-type/accessory-sets",
              "image": "https://m2.bathroommountain.co.uk/media/.renditions/wysiwyg/Accessories.jpg",
              "subCategories": [
                "Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Plumbing Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/shower-enclosure-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/3/43076-1000-Gummetal-Grey-Standard-90mm-Shower-Tray-Waste_2.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessories"
              ]
            }
          ]
        },
        {
          "topCategory": "Suites",
          "subCategories": [
            {
              "name": "Suites By Style",
              "link": "https://www.bathroommountain.co.uk/suites/suites-by-style/modern",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/8/c88129-1000.jpg",
              "subCategories": [
                "Modern Vanity & Toilet","Traditional Vanity & Toilet","Modern Suites","Traditional Suites","Suites"
              ]
            },
            {
              "name": "Suites By Type",
              "link": "https://www.bathroommountain.co.uk/suites/suites-by-type/vanity-unit-suites",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76985-1000-Grey-Vanity-Basin-and-Toilet-1200mm_1.jpg",
              "subCategories": [
                "Combined Vanity Toilet","Toilet & Basin Suites","Suites"
              ]
            },
            {
              "name": "Suites By Room",
              "link": "https://www.bathroommountain.co.uk/suites/suites-by-room/cloakroom",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/6/C68062-1000-Traditional-High-Level-Toilet-Pedestal-Basin.jpg",
              "subCategories": [
                "Cloakroom","En-Suite Bathroom","Suites"
              ]
            }
          ]
        }
      ]
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

    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
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
      addEvent(context || document, event, function (e) {
        var found,
          el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector)))
          el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }

    function createCategoryContainer(categories) {
      let categoryHtml = `<div class="eg-category-container"><div class="eg-category-list-container">`;
      categories.forEach(category => {
        categoryHtml += `
          <a class="eg-category" href="${category.link}">
            <div class="eg-category-image">
              <img class="eg-image-link" src="${category.image}" alt="${category.name}">
            </div>
            <p class="eg-category-name">${category.name}</p>
          </a>`;
      });
      categoryHtml += `</div></div>`;
      return categoryHtml;
    }

    function searchInJsonData(searchTerm) {
      let matchedCategories = [];

      jsonData.categories.forEach(category => {
        category.subCategories.forEach(subCategory => {
            if (
            subCategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            subCategory.subCategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
            ){
              matchedCategories.push({
                name: subCategory.name,
                link: subCategory.link,
                image: subCategory.image
              });
            }
        });
      });

      return [...new Set(matchedCategories)];
    }

    function init(searchTerm) {
      const dropdownList = document.querySelector('#search-mainmain .product-listing');
      if (dropdownList) {
        let matchedCategories = searchInJsonData(searchTerm);

        matchedCategories = matchedCategories.slice(0, 6);

        if (matchedCategories.length > 0) {
          const categoryHtml = createCategoryContainer(matchedCategories);
          if (!document.querySelector('.eg-category-container')) {
            dropdownList.insertAdjacentHTML('beforebegin', categoryHtml);
          } else {
            document.querySelector('.eg-category-container').innerHTML = categoryHtml;
          }
        }
        if (window.innerWidth > 767) {
          const categoryListContainer = document.querySelector('.eg-category-list-container');
          const productListing = document.querySelector('#search-mainmain .product-listing');

          if (categoryListContainer && productListing) {
            const height = categoryListContainer.offsetHeight;
            if (height > 216) {
              categoryListContainer.style.borderLeft = '1px solid #55575B';
              productListing.style.borderRight = 'none';
            } else {
              productListing.style.borderRight = '1px solid #55575B';
              categoryListContainer.style.borderLeft = 'none';
            }
          }
        }

      }
    }

    function observeSearchInput() {
      live('form .search-panel-input', 'input', function () {
        handleSearchInput();
      });

      live('form .search-panel-input', 'click', function () {
        handleSearchInput();
      });
    }

    function handleSearchInput() {
      const currentValue = document.querySelector('form .search-panel-input').value;
      if (currentValue.length > 2) {
        waitForElement('#search-mainmain .product-listing', function () {
          init(currentValue);
        }, 50, 3000);
      }
    }

    waitForElement('form .search-panel-input', observeSearchInput, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
