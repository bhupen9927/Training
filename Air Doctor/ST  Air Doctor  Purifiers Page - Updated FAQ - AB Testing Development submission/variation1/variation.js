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

    const thirdFAQ_answer=
        `<div class="eg-thidFaq">
            <p class="eg-thirdFaq-content">Great question! Choosing the right air purifier will depend on the size of your room and the air circulations per hour. According to the Harvard University study, 4 air changes per hour are recommended for optimal purification. AirDoctor units are designed to meet this standard. </p>
            <p> Here’s a chart that should help: </p>
            <table class="eg-thirdFaq-table">
                <thead>
                    <tr class="eg-thirdFaq-table-heading">
                        <th>Room Type</th>
                        <th>Air Circulations Per Hour</th>
                        <th>AirDoctor Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="eg-thirdFaq-table-content">
                        <td>Bedrooms, living rooms, kitchens</td>
                        <td>Circulates the air 4x/hour in 630 sq. ft.</td>
                        <td class="eg-productName">AirDoctor 3500</td>
                    </tr>
                    <tr class="eg-thirdFaq-table-content">
                        <td>Bedrooms, nurseries, home offices</td>
                        <td>Circulates the air 4x/hour in 305 sq. ft.</td>
                        <td class="eg-productName">AirDoctor 2000</td>
                    </tr>
                    <tr class="eg-thirdFaq-table-content">
                        <td>Smaller rooms</td>
                        <td>Circulates the air 4x/hour in 285 sq. ft.</td>
                        <td class="eg-productName">AirDoctor 1000</td>
                    </tr>
                    <tr class="eg-thirdFaq-table-content">
                        <td>Extra large spaces, high ceilings, open concepts</td>
                        <td>Circulates the air 4x/hour in 1,043 sq. ft.</td>
                        <td class="eg-productName">AirDoctor 5500</td>
                    </tr>
                </tbody>
            </table>
         </div>`;

        const fourthFAQ_answer=
            `<div class="eg-fourthFaq">
                <p><b class="eg-fourth-heading">AirDoctor 1000:</b> Replace UltraHEPA® and Carbon/VOC filters every 6 months.</p>
                <p class="eg-fourth-heading eg-fourth-subheading">All other AirDoctor units: </p>
                <ul class="eg-replace">
                    <li>Replace Carbon/VOC filters every 6 months. </li>
                    <li>Replace UltraHEPA® filters every 12 months.</li>
                </ul>
                <p>The indicator light on your AirDoctor will also light on when it’s time to replace your filter <br>
                – no more guesswork! </p>
            </div>`;



    /* Variation Init */
    function init() {
        const firstFAQ_ans= document.querySelector('.product-faq .accordion>div:nth-child(1)>div>p');
        if (firstFAQ_ans){
            firstFAQ_ans.innerText = "Air changes per hour (ACH) refers to how many times the air is changed with new, clean air in a given space within the span of an hour. A Harvard University Study cited by the CDC recommends at least 4 air changes per hour to effectively remove allergens like smoke, bacteria, viruses, dust, and pollen.";
        }
        const secondFAQ= document.querySelector('.product-faq .accordion>div:nth-child(2)>a>span');
        if (secondFAQ){
            secondFAQ.innerText = "What is CADR, and why’s it important?";
        }
        const secondFAQ_ans= document.querySelector('.product-faq .accordion>div:nth-child(2)>div>p');
        if (secondFAQ_ans){
            secondFAQ_ans.innerText = "CADR, or Clean Air Delivery Rate, refers to your air purifier's efficiency in removing these three contaminants over time: pollen, dust, and smoke. Higher CADR numbers indicate better air cleaning performance. The smoke CADR number is most stringent, reflecting the unit's ability to eliminate the smallest and most dangerous particles from your indoor air.";
        }
        const thirdFAQ= document.querySelector('.product-faq .accordion>div:nth-child(3)>a>span');
        if (thirdFAQ){
            thirdFAQ.innerText = "Which air purifier is right for me? ";
        }
        const thirdFAQ_ans= document.querySelector('.product-faq .accordion>div:nth-child(3)>div');
        if (thirdFAQ_ans){
            thirdFAQ_ans.insertAdjacentHTML('beforeend',thirdFAQ_answer);
        }
        const fourthFAQ_ans= document.querySelector('.accordion a[href="#accordion-item-how-often-do-i-need-to-change-the-filters?"] + div');
        if (fourthFAQ_ans){
            fourthFAQ_ans.insertAdjacentHTML('afterbegin',fourthFAQ_answer);
        }
        const fifthFAQ_ans= document.querySelector('.accordion a[href="#accordion-item-what-is-your-return-policy?"] + div p');
        if (fifthFAQ_ans){
        fifthFAQ_ans.innerText = "We stand behind the quality of our products. That's why we offer a 30-day money-back guarantee on all purchases. If for any reason you're not completely satisfied with your AirDoctor, simply reach out to our friendly customer service team at 1-800-221-2515, and we'll gladly issue you a full refund, minus shipping and processing fees.";
        }
        const sixFAQ_ans= document.querySelector('.accordion a[href="#accordion-item-do-you-offer-payment-plans?"] + div p');
        if (sixFAQ_ans){
        sixFAQ_ans.innerHTML = "Yes! If you’re interested in a payment plan option, just select the Affirm payment option at checkout and follow the instructions. Terms and conditions apply.** <br> <br> **Various purchase plans are available based on approval. Regretfully, Affirm is NOT available in Iowa or West Virginia due to state-specific financial regulations. ";
        }
    }

    /* Initialize variation */
    if(window.location.pathname === '/purifiers/'){
    waitForElement('.product-faq .accordion>div:nth-child(1)>div>p', init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


