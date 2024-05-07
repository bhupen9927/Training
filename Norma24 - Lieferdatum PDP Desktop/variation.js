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
            const addWorkingDays = (date, days) => {
                let count = 0;
                while (count < days) {
                    date.setDate(date.getDate() + 1);
                    if (date.getDay() !== 0 && date.getDay() !== 6) {
                        count++;
                    }
                }
                return date;
            };

            const deliveryDate = addWorkingDays(new Date(), 3);

            const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

            const deliveryElement = document.querySelector('.delivery--label');
            if (deliveryElement) {
                deliveryElement.textContent = `Lieferzeit: ca. ${formattedDeliveryDate}`;
            }

        }

        /* Initialize variation */
        waitForElement('.delivery--label', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
    })();


