// Get the product policies
var productBlock = document.querySelector('.product-single__meta > div:nth-child(2) > .product-block:nth-child(1) .product__policies');

// Check if the .product__policies element exists
if (!productBlock) {
    console.error("Error: '.product__policies' element not found.");
} else {
    // Create SVG icon 
    var svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("width", "13");
    svgIcon.setAttribute("height", "13");
    svgIcon.setAttribute("viewBox", "0 0 13 13");
    svgIcon.classList.add('svg-icon-size');
    svgIcon.innerHTML = '<path d="M6.5 3.45055V3.44444M6.5 9.55556V5.27778M12 6.5C12 9.53759 9.53759 12 6.5 12C3.46244 12 1 9.53759 1 6.5C1 3.46244 3.46244 1 6.5 1C9.53759 1 12 3.46244 12 6.5Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"></path>';

    // Create size info link
    var sizeInfoLink = document.createElement('a');
    sizeInfoLink.href = '#';
    sizeInfoLink.textContent = 'Size chart';
    sizeInfoLink.classList.add('size-info-link');

    // Insert SVG icon before size info link
    productBlock.parentNode.insertBefore(svgIcon, productBlock.nextSibling);

    // Insertsize info link after SVG icon
    svgIcon.parentNode.insertBefore(sizeInfoLink, svgIcon.nextSibling);

    // Create popup 
    var popup = document.createElement('div');
    popup.id = 'size-info-popup';
    popup.classList.add('popup');

    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Add content to popup
    popupContent.innerHTML = `
        <span class="close-popup" style="cursor: pointer; position: absolute; top: 4px; right: 9px;">&times;</span>
        <p style="font-weight: 700; ">Regular — Fits Most (Small to Large)</p>
        <p style="font-weight: 400; ">This bracelet is designed to fit most wrists, with an adjustable size ranging from 16 CM (6") to 19 CM (7.5"). It comes with a 2 CM (1") extension chain that can be used to increase the length up to 20 CM (8"). If you're unsure about your size, this bracelet will fit the majority of our customers.</p>
        <p style="font-weight: 700; ">Extra Large (Fits XL–XXL)</p>
        <p style="font-weight: 400; ">This bracelet is designed to fit wrists measuring between 19 CM (7") – 21 CM (8.5"). The bracelet measures around 20 CM (7.5") without the extension chain, but it can be extended up to 22 CM (8.5") with the 2 CM (1") extension chain.</p>
        <p style="font-weight: 700; ">Extra Small (Fits XXS–XS)</p>
        <p style="font-weight: 400; ">This bracelet is designed to fit wrists that measure between 13 CM (5") – 16 CM (6.5"). The bracelet measures around 15 CM (6") without the extension chain, but can be extended up to 17 (7") with the 2 CM (1") extension chain.</p>
        <p style="font-weight: 400; ">Read more on the Details Tab on each product page.</p>
    `;

    popup.appendChild(popupContent);

    // Insert popup after the size info link
    sizeInfoLink.insertAdjacentElement('afterend', popup);

    // Create overlay
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Add click event listener to size info link
    sizeInfoLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Displaypopup and overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';
        //make popup appear above overlay
        popup.style.zIndex = '10001';
    });

    
       svgIcon.addEventListener('click', function(event) {
        event.preventDefault();
        // Displaypopup and overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';
        //make popup appear above overlay
        popup.style.zIndex = '10001';
    });

    // Add click event listener to close button
    var closePopupButton = popup.querySelector('.close-popup');
    closePopupButton.addEventListener('click', function() {
        // Hide the popup and overlay
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close popup when clicked outside of it
    window.addEventListener('click', function(event) {
        if (event.target == overlay) {
            // Hide the popup and overlay
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

    // Dynamically add CSS
    var cssStyles = `
        html body .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            width: 1188px;
            transform:translate(-50%, -50%);
            z-index: 10000;
            text-align: left;
        }

        .popup-content {
            background-color: #fefefe;
            margin: 20% auto;
            padding: 45px;
            width: 60%;
            position: relative;
            font-size: 12px;
            font-family: quasimoda_light, sans-serif;
        }

        .popup-content p {
            margin-bottom: 15px;
        }

        .close-popup {
            color: black;
            font-size: 31px;
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }

        .close-popup:hover,
        .close-popup:focus {
            text-decoration: none;
        }

        .size-info-link {
            color: black;
            font-family: Quasimoda;
            font-size: 10px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            text-decoration: underline;
        }

        .svg-icon-size {
            width: 13px;
            height: 13px;
            vertical-align: middle;
            cursor: pointer;
            fill: none;
            background-color: white;
        }

        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #e6e6e6;
            opacity: 0.5;
            z-index: 9999;
        }

        @media screen and (max-width:767px){
                    html body .popup{
                        width: 100%;
                        max-width: 93%;
                    }

                    .popup-content{
                        padding: 45px 13px 20px;
                        font-size: 10px;
                        width: 100%;
                    }

                }
    `;

    var styleElement = document.createElement('style');
    styleElement.textContent = cssStyles;

    // Append style element to the head of the document
    document.head.appendChild(styleElement);
}