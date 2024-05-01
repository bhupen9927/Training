document.addEventListener("DOMContentLoaded", function() {
    // Get the product block element
    var productBlock = document.querySelector('.product-block');

    // Create the SVG icon element
    var svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("width", "13");
    svgIcon.setAttribute("height", "13");
    svgIcon.setAttribute("viewBox", "0 0 13 13");
    svgIcon.style.backgroundColor = "white"; // Set background color to white
    svgIcon.style.fill = "black"; // Set color to black
    svgIcon.innerHTML = '<path d="M6.5 3.45055V3.44444M6.5 9.55556V5.27778M12 6.5C12 9.53759 9.53759 12 6.5 12C3.46244 12 1 9.53759 1 6.5C1 3.46244 3.46244 1 6.5 1C9.53759 1 12 3.46244 12 6.5Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"></path>';

    // Create the size info link
    var sizeInfoLink = document.createElement('a');
    sizeInfoLink.href = '#';
    sizeInfoLink.textContent = 'Size Info';
    sizeInfoLink.classList.add('size-info-link');
    
    // Insert the SVG icon before the size info link
    productBlock.parentNode.insertBefore(svgIcon, productBlock.nextSibling);
    // Insert the size info link after the SVG icon
    svgIcon.parentNode.insertBefore(sizeInfoLink, svgIcon.nextSibling);

    // Create the popup element
    var popup = document.createElement('div');
    popup.id = 'size-info-popup';
    popup.classList.add('popup');
    popup.style.display = 'none';
    // Center the popup on the webpage
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#ffffff'; // Background color
    popup.style.padding = '20px'; // Padding
    popup.style.borderRadius = '5px'; // Rounded corners

    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    // Apply font family to popup content
    popupContent.style.fontFamily = 'quasimoda_light, sans-serif';

    // Add content to the popup
    popupContent.innerHTML = `
        <span class="close-popup" style="cursor: pointer; position: absolute; top: 10px; right: 10px;">&times;</span>
        <p style="font-weight: 700; font-size: 12px; margin-bottom: 10px;">Regular — Fits Most (Small to Large)</p>
        <p style="font-weight: 400; font-size: 12px; margin-bottom: 10px;">This bracelet is designed to fit most wrists, with an adjustable size ranging from 16 CM (6") to 19 CM (7.5"). It comes with a 2 CM (1") extension chain that can be used to increase the length up to 20 CM (8"). If you're unsure about your size, this bracelet will fit the majority of our customers.</p>
        <p style="font-weight: 700; font-size: 12px; margin-bottom: 10px;">Extra Large (Fits XL–XXL)</p>
        <p style="font-weight: 400; font-size: 12px; margin-bottom: 10px;">This bracelet is designed to fit wrists measuring between 19 CM (7") – 21 CM (8.5"). The bracelet measures around 20 CM (7.5") without the extension chain, but it can be extended up to 22 CM (8.5") with the 2 CM (1") extension chain.</p>
        <p style="font-weight: 700; font-size: 12px; margin-bottom: 10px;">Extra Small (Fits XXS–XS)</p>
        <p style="font-weight: 400; font-size: 12px; margin-bottom: 10px;">This bracelet is designed to fit wrists that measure between 13 CM (5") – 16 CM (6.5"). The bracelet measures around 15 CM (6") without the extension chain, but can be extended up to 17 (7") with the 2 CM (1") extension chain.</p>
        <p style="font-weight: 400; font-size: 12px; margin-bottom: 10px;">Read more on the Details Tab on each product page.</p>
    `;

    // Append popup content to the popup element
    popup.appendChild(popupContent);

    // Insert the popup after the size info link
    sizeInfoLink.insertAdjacentElement('afterend', popup);

    // Add click event listener to the size info link
    sizeInfoLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Display the popup
        popup.style.display = 'block';
        // Set the background color of the webpage to be lighter
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });

    // Add click event listener to the SVG icon
    svgIcon.addEventListener('click', function(event) {
        event.preventDefault();
        // Trigger click event on size info link to open the popup
        sizeInfoLink.click();
    });

    // Add click event listener to the close button
    var closePopupButton = popup.querySelector('.close-popup');
    closePopupButton.addEventListener('click', function() {
        // Hide the popup
        popup.style.display = 'none';
        // Restore the background color of the webpage
        document.body.style.backgroundColor = '';
    });

    // Close the popup when clicked outside of it
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            // Hide the popup
            popup.style.display = 'none';
            // Restore the background color of the webpage
            document.body.style.backgroundColor = '';
        }
    });
});
