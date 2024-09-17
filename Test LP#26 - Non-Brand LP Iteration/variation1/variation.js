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

    const workSection = `
    <div class="eg-work-container elementor-element elementor-element-44a637f e-con-full e-flex e-con e-parent" data-id="44a637f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_top&quot;:&quot;wave-brush&quot;,&quot;shape_divider_bottom&quot;:&quot;wave-brush&quot;}">
		<div class="eg-waves elementor-shape eg-elementor-shape-top" data-negative="false">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
				<path class="eg-elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
				<path class="eg-elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
				<path class="eg-elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
				<path class="eg-elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
				<path class="eg-elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
				<path class="eg-elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
				<path class="eg-elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
				<path class="eg-elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
				<path class="eg-elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
			</svg>
		</div>
		<div class="elementor-element elementor-element-8771aee e-flex e-con-boxed e-con e-child" data-id="8771aee" data-element_type="container">
			<div class="eg-heading-crontaine e-con-inner">
				<div class="elementor-element elementor-element-45e8221 elementor-widget elementor-widget-heading" data-id="45e8221" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
						<h2 class="eg-heading-title elementor-size-default">How it works</h2>
					</div>
				</div>
				<div class="elementor-element elementor-element-9356b9a elementor-widget elementor-widget-heading" data-id="9356b9a" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
						<p class="eg-heading-subtitle elementor-size-default">Not sure on how it all works? here’s a simple breakdown on what happens.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="elementor-element elementor-element-f04f154 e-flex e-con-boxed e-con e-child" data-id="f04f154" data-element_type="container">
			<div class="e-con-inner">
				<div class="eg-first-arrow elementor-element elementor-element-55ed635 e-con-full e-flex e-child" data-id="55ed635" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-ea09796 elementor-widget elementor-widget-image" data-id="ea09796" data-element_type="widget" data-widget_type="image.default">
						<div class="elementor-widget-container">
							<img loading="lazy" decoding="async" src="https://www.bellaandduke.com/wp-content/uploads/2024/04/how-it-works-bella-and-duke-cats-and-dogs.webp" alt="how it works bella and duke cats and dogs" width="126" height="118"> </div>
					</div>
					<div class="elementor-element elementor-element-511009f elementor-widget elementor-widget-heading" data-id="511009f" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<h3 class="eg-step-heading elementor-size-default">Tell us about your pet</h3>
						</div>
					</div>
					<div class="elementor-element elementor-element-54665f1 elementor-widget elementor-widget-heading" data-id="54665f1" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<p class="eg-step-subheading elementor-size-default">It’s all about them.</p>
						</div>
					</div>
				</div>
				<div class="eg-second-arrow elementor-element elementor-element-4666b1f e-con-full e-flex e-child" data-id="4666b1f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-e1c6348 elementor-widget elementor-widget-image" data-id="e1c6348" data-element_type="widget" data-widget_type="image.default">
						<div class="elementor-widget-container">
							<img loading="lazy" decoding="async" src="https://www.bellaandduke.com/wp-content/uploads/2024/03/icon.webp" alt="" width="126" height="118">
						</div>
					</div>
					<div class="elementor-element elementor-element-ff341a7 elementor-widget elementor-widget-heading" data-id="ff341a7" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<h3 class="eg-step-heading elementor-size-default">Tailored meal plan</h3>
						</div>
					</div>
					<div class="elementor-element elementor-element-1aa4ffe elementor-widget elementor-widget-heading" data-id="1aa4ffe" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<p class="eg-step-subheading elementor-size-default">We'll recommend the best range tailored to your pet's needs.</p>
						</div>
					</div>
				</div>
				<div class="eg-third-arrow elementor-element elementor-element-d13d009 e-con-full e-flex e-child" data-id="d13d009" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-ceccb98 elementor-widget elementor-widget-image" data-id="ceccb98" data-element_type="widget" data-widget_type="image.default">
						<div class="elementor-widget-container">
							<img loading="lazy" decoding="async" src="https://www.bellaandduke.com/wp-content/uploads/2024/03/icon-2.webp" alt="" width="126" height="118">
						</div>
					</div>
					<div class="elementor-element elementor-element-9287631 elementor-widget elementor-widget-heading" data-id="9287631" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<h3 class="eg-step-heading elementor-size-default">Delivered to your door</h3>
						</div>
					</div>
					<div class="elementor-element elementor-element-da0c6d0 elementor-widget elementor-widget-heading" data-id="da0c6d0" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<p class="eg-step-subheading elementor-size-default">Your pet's raw food will be delivered frozen by DPD.</p>
						</div>
					</div>
				</div>
				<div class="eg-fourth-arrow elementor-element elementor-element-1f35f5e e-con-full e-flex e-child" data-id="1f35f5e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-255c685 elementor-widget elementor-widget-image" data-id="255c685" data-element_type="widget" data-widget_type="image.default">
						<div class="elementor-widget-container">
							<img loading="lazy" decoding="async" src="https://www.bellaandduke.com/wp-content/uploads/2024/03/icon-1.webp" alt="" width="126" height="118">
						</div>
					</div>
					<div class="elementor-element elementor-element-9502dd5 elementor-widget elementor-widget-heading" data-id="9502dd5" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<h3 class="eg-step-heading elementor-size-default">Defrost, serve, enjoy!</h3>
						</div>
					</div>
					<div class="elementor-element elementor-element-9237224 elementor-widget elementor-widget-heading" data-id="9237224" data-element_type="widget" data-widget_type="heading.default">
						<div class="elementor-widget-container">
							<p class="eg-step-subheading elementor-size-default">Delicious, nutritious food for your pet from the first bite.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="elementor-element elementor-element-04b7dd6 e-flex e-con-boxed e-con e-child" data-id="04b7dd6" data-element_type="container">
			<div class="e-con-inner">
				<div class="elementor-element elementor-element-429fa9c elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="429fa9c" data-element_type="widget" data-widget_type="divider.default">
					<div class="elementor-widget-container">
						<style>
							/*! elementor - v3.22.0 - 17-06-2024 */
							.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-block-end:0;flex-grow:1;border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider--element-align-start .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-start .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-start .elementor-divider__element{margin-inline-start:0}.elementor-widget-divider--element-align-end .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-end .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-end .elementor-divider__element{margin-inline-end:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}
						</style>
						<div class="elementor-divider">
							<span class="elementor-divider-separator">
							</span>
						</div>
					</div>
				</div>
				<div class="elementor-element elementor-element-86b7786 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="86b7786" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
						<p class="elementor-heading-title elementor-size-default">Want to support your pet's health through nutrition? Sign up now to get <b>40% off</b> your first box, <b>30% off</b> your second and <b>20% off</b> your third.</p>
					</div>
				</div>
				<div class="elementor-element elementor-element-61a985a elementor-widget elementor-widget-button" data-id="61a985a" data-element_type="widget" data-widget_type="button.default">
					<div class="elementor-widget-container">
						<div class="elementor-button-wrapper">
							<a class="elementor-button how_it_works_cta elementor-button-link elementor-size-sm" href="https://hello.bellaandduke.com/coupon/TV432" data-faitracker-click-bind="true">
								<span class="elementor-button-content-wrapper">
										<span class="elementor-button-text">Get Started</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;

    /* Variation Init */
    function init() {
      const review = document.querySelector('.lp-new-template-default [data-elementor-type="single-post"] >div:nth-of-type(15)');
      if (review) {
        review.insertAdjacentHTML("afterend", workSection);
      }
    }

    waitForElement(
      '.lp-new-template-default [data-elementor-type="single-post"] >div:nth-of-type(15)',
      init,
      50,
      15000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
