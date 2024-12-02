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
              "name": "Vertical Radiators",
              "link": "https://www.bathroommountain.co.uk/heating/radiators/vertical-radiators",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/1/31054-1000-faro-white-double-flat-panel-vertical-radiator-1800x560mm.jpg",
              "subCategories": [
                "Vertical Radiators","Horizontal Radiators","Column Radiators","Radiators","Heating"
              ]
            },
            {
              "name": "Horizontal Radiators",
              "link": "https://www.bathroommountain.co.uk/heating/radiators/horizontal-radiators ",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/2/32167-1000-Matt-Black-Double-Flat-Panel-Radiator-600x1820mm_2.jpg",
              "subCategories": [
                "Vertical Radiators","Horizontal Radiators","Column Radiators","Radiators","Heating"
              ]
            },
            {
              "name": "Column Radiators",
              "link": "https://www.bathroommountain.co.uk/heating/radiators-by-style/traditional-radiators",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/2/32087-1000-White-Double-Column-Horizontal-Traditional-Radiator-600x1415mm_1.jpg",
              "subCategories": [
                "Vertical Radiators","Horizontal Radiators","Column Radiators","Radiators","Heating"
              ]
            },
            {
              "name": "Mirror Radiators",
              "link": "https://www.bathroommountain.co.uk/heating/radiators/mirror-radiators",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/3/1/31170V2-1000-White-Double-Vertical-Mirror-Radiator-1800x500mm_2.jpg",
              "subCategories": [
                "Vertical Radiators","Horizontal Radiators","Column Radiators","Mirror Radiators","Radiators","Heating"
              ]
            }
          ]
        },
        {
          "topCategory": "Furniture",
          "subCategories": [
            {
              "name": "Floorstanding Vanity",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/floorstanding",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C81065-1000-Slate-Grey-Vanity-Semi-Recessed-Basin-750mm.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Wall Hung Vanity",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/wall-mounted",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C77052-1000-Grey-Wall-Hung-Vanity-with-Marble-Top-and-Counter-Top-Basin_2.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Combined Vanity & Toilet",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/combined-vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C77442-1000-Charcoal-Elm-Combination-Vanity-Basin-and-Toilet-1200mm.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity & Toilet", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Toilet Units","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Counter Top Basin Vanity",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/counter-top-vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76242-1000-White-Drawer-Vanity-with-Oval-Counter-Top-Basin_1.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity ", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Double Basin Vanity",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/double",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/7/c76287-1000-bermuda-dove-grey-double-basin-vanity-1200mm.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity ", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Cloakroom & Space Saving",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/cloakroom",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76283-SHOP-Bermuda-Dove-Grey-Cloakroom-Basin-Vanity-400mm_1.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity ", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Toilet Units",
              "link": "https://www.bathroommountain.co.uk/furniture/cabinets-and-storage/toilet-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/4/74101-1000-Capri-Mystic-Green-Back-To-Wall-Toilet-Unit-600mm_3.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity & Toilet", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Tall Units & Storage","Furniture"
              ]
            },
            {
              "name": "Tall Units & Storage",
              "link": "https://www.bathroommountain.co.uk/furniture/cabinets-and-storage/tall-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C82009-1000-Midnight-Green-Floor-Standing-Tall-Cabinet-1500x300mm_1.jpg",
              "subCategories": [
                "Wall Hung Vanity","Floorstanding Vanity","Combined Vanity & Toilet", "Counter Top Basin Vanity","Cloakroom & Space Saving","Double Basin Vanity","Toilet Units","Tall Units & Storage","Furniture"
              ]
            }
          ]
        },
        {
          "topCategory": "Shower Enclosures",
          "subCategories": [
            {
              "name": "Quadrant",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/quadrant",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/1/41137-1000-London-Matt-Black-6mm-Quadrant-Shower-Enclosure-800x800mm_2.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            },
            {
              "name": "Sliding",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1/sliding",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/1/41141-1000-london-matt-black-6mm-sliding-shower-door-1200mm.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            },
            {
              "name": "Hinged & Pivot",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1/pivot",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/1/41234_-1000-brushed-brass-8mm-hinged-shower-door-1400mm.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            },
            {
              "name": "Bi-Fold",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1/bifold-shower-doors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/1/41174-1000-London-Matt-Black-6mm-Bifold-Shower-Door-760mm_1.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            },
            {
              "name": "Wetroom Glass",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1/wetroom-screens",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/3/43066-1000-Matt-Black-8mm-Pivotal-Glass-Return-Panel-250mm.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            },{
              "name": "Frameless",
              "link": "https://www.bathroommountain.co.uk/shower-enclosures/shower-doors-1/frameless-shower-doors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/4/C46215-1000-8mm-Walk-Through-Wet-Room-Shower-Glass-Panel-1400mm_1.jpg",
              "subCategories": [
                "Quadrant","Sliding","Hinged & Pivot","Bi-Fold","Wetroom Glass","Frameless","Shower Enclosures"
              ]
            }
          ]
        },
        {
          "topCategory": "Showers",
          "subCategories": [
            {
              "name": "Exposed",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets/exposed",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/2/3/23036-1000-gunmetal-grey-round-thermostatic-shower-set.jpg",
              "subCategories": [
                "Exposed","Concealed","Traditional","Round Mirrors","Bath Filler Shower","Showers"
              ]
            },
            {
              "name": "Concealed",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets/concealed",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/2/C27059-1000-Matt-Black-Round-Thermostatic-Shower-Set-300mm-Head_1.jpg",
              "subCategories": [
                "Exposed","Concealed","Traditional","Round Mirrors","Bath Filler Shower","Showers"
              ]
            },
            {
              "name": "Traditional",
              "link": "https://www.bathroommountain.co.uk/showers/showers-by-style/traditional",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/2/3/23032-1000-Brushed-Brass-Traditional-Thermostatic-Shower-Set_1.jpg",
              "subCategories": [
                "Exposed","Concealed","Traditional","Round Mirrors","Bath Filler Shower","Showers"
              ]
            },
            {
              "name": "Bath Filler Shower",
              "link": "https://www.bathroommountain.co.uk/showers/shower-sets/bath-filler-shower",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/2/3/23019-1000-Round-Matt-Black-Thermostatic-Bath-Filler-Shower-Set_3.jpg",
              "subCategories": [
                "Exposed","Concealed","Traditional","Round Mirrors","Bath Filler Shower","Showers"
              ]
            },
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
              "name": "Traditional Roll Top Baths",
              "link": "https://www.bathroommountain.co.uk/baths/freestanding-baths/roll-top-baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/5/6/56053-c.jpg",
              "subCategories": [
                "Freestanding Baths","Traditional Roll Top Baths","Back to Wall Baths","Baths"
              ]
            },
            {
              "name": "Back to Wall Baths",
              "link": "https://www.bathroommountain.co.uk/baths/freestanding-baths/back-to-wall-baths",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/5/C56074-1000-1700mm-Back-To-Wall-Roll-Top-Bath-Chrome-Ball-Feet_1.jpg",
              "subCategories": [
                "Freestanding Baths","Traditional Roll Top Baths","Back to Wall Baths","Baths"
              ]
            }
          ]
        },
        {
          "topCategory": "Mirrors & Cabinets",
          "subCategories": [
            {
              "name": "Arch Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/arch-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73361-1000-black-framed-arched-bathroom-mirror-750x500mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "LED Illuminated Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/illuminated-mirrorss",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73046v2-1000-black-framed-round-illuminated-led-mirror-600mm_1.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Black Framed Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/black-framed-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73162-1000-olivia-black-framed-rectangular-bathroom-mirror-600x400mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Round Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/round-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73048v2-1000-aria-round-illuminated-led-mirror-600mm_1.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Backlit LED Mirror",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/backlit-led-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73326-1000-brushed-brass-round-backlit-led-mirror-800mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Non Illuminated Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/non-illuminated",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73119-1000-arabella_black_framed_rectangular_bathroom_mirror_700x500mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Battery LED Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/battery-powered-led-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73013-1000-battery-operated-illuminated-led-mirror-700x500mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Bluetooth LED Mirrors",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/bluetooth-led-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73024-1000-illuminated-led-mirror-with-bluetooth-speaker_1.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
            {
              "name": "Traditional LED Mirror",
              "link": "https://www.bathroommountain.co.uk/mirrors-and-cabinets/mirrors/traditional-led-mirrors",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/3/73269-1000-illuminated-led-mirror-600x1200mm.jpg",
              "subCategories": [
                "Arch Mirrors","LED Illuminated Mirrors","Black Framed Mirrors","Round Mirrors","Backlit LED Mirror","Non Illuminated Mirrors","Battery LED Mirrors","Bluetooth LED Mirrors","Traditional LED Mirror","Mirrors & Cabinets","Mirrors","Cabinets"
              ]
            },
          ]
        },
        {
          "topCategory": "Toilets",
          "subCategories": [
            {
              "name": "Close Coupled Toilets",
              "link": "https://www.bathroommountain.co.uk/toilets/close-coupled",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/6/C66181-1000-Back-to-Wall-Close-Coupled-Toilet-Soft-Close-Seat.jpg",
              "subCategories": [
                "Close Coupled Toilets","Back To Wall Toilets","Wall Hung Toilets","Toilets"
              ]
            },
            {
              "name": "Back To Wall Toilets",
              "link": "https://www.bathroommountain.co.uk/toilets/back-to-wall",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/6/c66197-1000-hudson-traditional-back-to-wall-toilet-wooden-seat.jpg",
              "subCategories": [
                "Close Coupled Toilets","Back To Wall Toilets","Wall Hung Toilets","Toilets"
              ]
            },
            {
              "name": "Wall Hung Toilets",
              "link": "https://www.bathroommountain.co.uk/toilets/wall-hung",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/6/c66174-1000-rimless-wall-hung-toilet-with-soft-close-seat.jpg",
              "subCategories": [
                "Close Coupled Toilets","Back To Wall Toilets","Wall Hung Toilets","Toilets"
              ]
            }
          ]
        },
        {
          "topCategory": "Basins",
          "subCategories": [
            {
              "name": "Vanity Units",
              "link": "https://www.bathroommountain.co.uk/basins/vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C76283-SHOP-Bermuda-Dove-Grey-Cloakroom-Basin-Vanity-400mm_1.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Counter Top Basins",
              "link": "https://www.bathroommountain.co.uk/basins/countertop",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C81475-1000-Navy-Blue-Vanity-Basin-600mm-Traditional-Handles_1.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Wall Hung Basins",
              "link": "https://www.bathroommountain.co.uk/basins/wall-hung",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C77052-1000-Grey-Wall-Hung-Vanity-with-Marble-Top-and-Counter-Top-Basin_2.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Combined Vanity & Toilet",
              "link": "https://www.bathroommountain.co.uk/furniture/vanity-units/combined-vanity-units",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C77442-1000-Charcoal-Elm-Combination-Vanity-Basin-and-Toilet-1200mm.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Double Basins",
              "link": "https://www.bathroommountain.co.uk/basins/double",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/7/c76568-1000-trent-gloss-white-double-basin-vanity-1200mm.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Cloakroom Basins",
              "link": "https://www.bathroommountain.co.uk/basins/cloakroom",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C79569-1000-Navy-Blue-Vanity-with-Semi-Recessed-Basin-600mm_1.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            },
            {
              "name": "Pedestal Basins",
              "link": "https://www.bathroommountain.co.uk/basins/pedestal",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/6/c67001-1000-austin-pedestal-basin-550mm.jpg",
              "subCategories": [
                "Vanity Units","Counter Top Basins","Wall Hung Basins","Combined Vanity & Toilet","Double Basins","Cloakroom Basins","Pedestal Basins","Basins"
              ]
            }
          ]
        },
        {
          "topCategory": "Taps",
          "subCategories": [
            {
              "name": "Basin",
              "link": "https://www.bathroommountain.co.uk/taps/basin-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11090-1000-lea-matt-black-high-rise-basin-mixer-tap.jpg",
              "subCategories": [
                "Basin","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Tap","Taps","Tap"
              ]
            },
            {
              "name": "Bath",
              "link": "https://www.bathroommountain.co.uk/taps/bath-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/2/12004-1000-Trent-Chrome-Freestanding-Bath-Shower-Mixer-Tap-Tap_5.jpg",
              "subCategories": [
                "Basin","Bath","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Bath Tap","Taps","Tap"
              ]
            },
            {
              "name": "Counter Top",
              "link": "https://www.bathroommountain.co.uk/taps/countertop",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11090-1000-lea-matt-black-high-rise-basin-mixer-tap.jpg",
              "subCategories": [
                "Basin","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Tap","Taps","Tap"
              ]
            },
            {
              "name": "Cloakroom",
              "link": "https://www.bathroommountain.co.uk/taps/cloakroom-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11124-1000-Brushed-Brass-Cloakroom-Basin-Mixer-Tap_2.jpg",
              "subCategories": [
                "Basin","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Tap","Taps","Tap"
              ]
            },
            {
              "name": "Waterfall",
              "link": "https://www.bathroommountain.co.uk/taps/waterfall-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/c/1/c16065-1000-avon-matt-black-waterfall-basin-_-bath-mixer-tap-set.jpg",
              "subCategories": [
                "Basin","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Tap","Taps","Tap"
              ]
            },
            {
              "name": "Wall Mounted",
              "link": "https://www.bathroommountain.co.uk/taps/wall-mounted-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/1/11117-1000-Brushed-Brass-Wall-Mounted-Basin-Mixer_2.jpg",
              "subCategories": [
                "Basin","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Tap","Taps","Tap"
              ]
            },
            {
              "name": "Freestanding Bath Tap",
              "link": "https://www.bathroommountain.co.uk/taps/freestanding-taps",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/1/2/12057-1000-sherbourne-chrome-freestanding-bath-shower-mixer-tap.jpg",
              "subCategories": [
                "Basin","Bath","Counter Top","Cloakroom","Waterfall","Wall Mounted","Freestanding Bath Tap","Taps","Tap"
              ]
            }
          ]
        },
        {
          "topCategory": "Accessories",
          "subCategories": [
            {
              "name": "Basin Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/accessories-basins",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/6/4/64018-w.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Bath Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/bath-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/5/C55007-1000-Inky-Blue-Wooden-Bath-Panel-Pack-1700x680mm.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Shower Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/shower-enclosure-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/4/3/43076-1000-Gummetal-Grey-Standard-90mm-Shower-Tray-Waste_2.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Toilet Accessories",
              "link": "https://www.bathroommountain.co.uk/toilets/toilet-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/6/2/62052-1000-Matt-Cappuccino-Quick-Release-Soft-Close-Seat_2.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Accessory Sets",
              "link": "https://www.bathroommountain.co.uk/accessories/accessories-by-type/accessory-sets",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/9/C96014-1000-Eloise-Matt-Black-3-Pieces-Accessory-Set.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Bathroom Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/accessories-by-type/view-all",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/9/1/91005-1000_1.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            },
            {
              "name": "Furniture Accessories",
              "link": "https://www.bathroommountain.co.uk/accessories/furniture-accessories",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/7/5/75089-1000-matt-black-handle-for-wall-hung-anity-800mm.jpg",
              "subCategories": [
                "Basin Accessories","Bath Accessories","Shower Accessories","Toilet Accessories","Accessory Sets","Bathroom Accessories","Furniture Accessories","Accessories"
              ]
            }
          ]
        },
        {
          "topCategory": "Suites",
          "subCategories": [
            {
              "name": "Modern Vanity & Toilet",
              "link": "https://www.bathroommountain.co.uk/suites/toilet-basin-suites/modern-vanity-toilet-combo",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C79717-1000-Gloss-White-Vanity-Basin-Toilet-Black-Accents.jpg",
              "subCategories": [
                "Modern Vanity & Toilet","Traditional Vanity & Toilet","Modern Suites","Traditional Suites","Suites"
              ]
            },
            {
              "name": "Traditional Vanity & Toilet",
              "link": "https://www.bathroommountain.co.uk/suites/toilet-basin-suites/traditional-vanity-toilet-combo",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C81468-1000-Navy-Blue-Combination-Vanity-Basin-Toilet-1300mm_1.jpg",
              "subCategories": [
                "Modern Vanity & Toilet","Traditional Vanity & Toilet","Modern Suites","Traditional Suites","Suites"
              ]
            },
            {
              "name": "Modern Suites",
              "link": "https://www.bathroommountain.co.uk/suites/suites-by-style/modern",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/8/C88122-1000-Trent-Gloss-White-Cloakroom-Floor-Standing-Basin-Vanity-400mm-and-Toilet-Set_2.jpg",
              "subCategories": [
                "Modern Vanity & Toilet","Traditional Vanity & Toilet","Modern Suites","Traditional Suites","Suites"
              ]
            },
            {
              "name": "Traditional Suites",
              "link": "https://www.bathroommountain.co.uk/suites/suites-by-style/traditional",
              "image": "https://www.bathroommountain.co.uk/img/310/300/resize/catalog/product/C/7/C79009-1000-Green-Vanity-Basin-Marble-Top-Toilet-1200mm_1.jpg",
              "subCategories": [
                "Modern Vanity & Toilet","Traditional Vanity & Toilet","Modern Suites","Traditional Suites","Suites"
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
      let secondaryMatches = [];

      jsonData.categories.forEach(category => {
        if (category.topCategory.toLowerCase().includes(searchTerm.toLowerCase())) {
          category.subCategories.forEach(subCategory => {
            if (
              subCategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              subCategory.subCategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              matchedCategories.push({
                name: subCategory.name,
                link: subCategory.link,
                image: subCategory.image
              });
            }
          });
        } else {
          // Secondary search outside top-category match
          category.subCategories.forEach(subCategory => {
            if (
              subCategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              subCategory.subCategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              secondaryMatches.push({
                name: subCategory.name,
                link: subCategory.link,
                image: subCategory.image
              });
            }
          });
        }
      });

      // Merge relevant matches first, then secondary matches
      return [...new Set([...matchedCategories, ...secondaryMatches])];
    }

    function init(searchTerm) {
      const dropdownList = document.querySelector('#search-mainmain .product-listing');
      if (dropdownList) {
        let matchedCategories = searchInJsonData(searchTerm);

        matchedCategories = matchedCategories.slice(0, 5);

        if (matchedCategories.length > 0) {
          const categoryHtml = createCategoryContainer(matchedCategories);
          if (!document.querySelector('.eg-category-container')) {
            dropdownList.insertAdjacentHTML('beforebegin', categoryHtml);
          } else {
            document.querySelector('.eg-category-container').innerHTML = categoryHtml;
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
