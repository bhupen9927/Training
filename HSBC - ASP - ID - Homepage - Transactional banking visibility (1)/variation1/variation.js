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

    const bankSolution =
        `<div class="eg-sol-Section">
            <div class="eg-content-container">
                <div class="eg-explore">
                    <h2>Explore our range of <br> Banking Solutions</h2>
                </div>
                <div class="eg-explore-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel laboriosam nihil.<br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel laboriosam nihil.</p>
                    <a class="eg-view-all" href="#">View all business products</a>
                </div>
                <div class="eg-expsol-container">
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">HSBCnet <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">Trade Finance <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">HSBC Dart <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">HSBC Omni Collect <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">HSBC Corporate Card <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                    <div class="eg-expsol-list">
                        <div class="eg-expsol-icon">
                           <img src="https://i.ibb.co/ZGhnpF6/Icon-1-1.png">
                        </div>
                        <div class="eg-expsol-right">
                            <div>
                                <h3 class="eg-expsol-hd">Trade Transaction Tracker <svg font-size="m" class="eg-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg></h3>
                            </div>
                            <div class="eg-expsol-content">
                                <p class="eg-expsol-para"> With all your banking done in one platform, you can simplify your everyday and focus on what matters.</p>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                                <a class="eg-expsol-link" href="#">Related link with longer title <svg font-size="m" class="eg-sm-SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011"><path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                                <path fill="none" d="M0 16V0h11v16z"></path></svg> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`


    /* Variation Init */
    function init() {
      const hero=document.querySelector('[class*="home__header"]')
      if(hero){
        hero.insertAdjacentHTML('afterend', bankSolution);
      }
    }
    /* Initialize variation */
    waitForElement('[class*="home__header"]', init, 1000, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
