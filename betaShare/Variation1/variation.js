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
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    };

    var factsheetForm = `
        <div role="dialog" aria-modal="true" aria-labelledby="modal--title" class="absolute top-0 right-0 w-full h-full max-w-md overflow-y-auto bg-white p-gutter xl:p-8 lg:p-14 sm:rounded-tl-md sm:rounded-bl-md lg:rounded-tl-xl lg:rounded-bl-xl modal-from-right">
			<header>
				<h3 class="modal-title mb-3 text-base font-medium md:text-xl font-heading lg:pr-10 sm:mb-5 lg:mb-8 inline-block"></h3>
				<button aria-label="Close modal" data-micromodal-close="" class="absolute top-0 right-0 z-10 flex items-center justify-center p-5 lg:right-2 lg:top-2">
					<span class="pointer-events-none"><svg viewBox="0 0 12 12" width="12" height="12" class="" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path d="M6 4.88 1.12 0 0 1.13 4.88 6 0 10.88 1.13 12 6 7.12 10.88 12 12 10.87 7.12 6 12 1.13 10.87 0 6 4.87Z"></path></svg>
                    </span>
				</button>
			</header>
			<div class="form-loader absolute top-0 left-0 w-full h-full bg-offWhite" style="display: none;">
				<svg viewBox="0 0 100 100" width="30" height="30" class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
                    <path fill="#FC4D16" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
                        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
	                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </path>
	                <path fill="#FC4D16" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
                        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
		                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
	                </path>
	                <path fill="#FC4D16" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
                        L82,35.7z">
		                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
	                </path>
                </svg>
			</div>
			<div class="modal-content w-full h-full">
                <div class="gf_browser_chrome gform_wrapper gravity-theme gform-theme--no-framework" data-form-theme="gravity-theme" data-form-index="0" id="gform_wrapper_39" style="">
                        <div class="gform_heading">
                            <h2 class="gform_title">Fund Infopack Request</h2>
							<p class="gform_required_legend"></p>
                        </div>
                        <form method="post" enctype="multipart/form-data" target="gform_ajax_frame_39" id="gform_39" action="" data-formid="39" novalidate="" data-form-name="fund-infopack-request">
                        <div class="gform-body gform_body">
                            <div id="gform_fields_39" class="gform_fields top_label form_sublabel_below description_above validation_below">
                                <div id="field_39_15" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_15">
                                    <div class="ginput_container ginput_container_text"><input data-event-property="form_id" name="input_15" id="input_39_15" type="hidden" class="gform_hidden" aria-invalid="false" value="fund_infopack">
                                    </div>
                                </div>
                            <div id="field_39_18" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_18">
                                <div class="ginput_container ginput_container_text"><input data-event-property="event" name="input_18" id="input_39_18" type="hidden" class="gform_hidden" aria-invalid="false" value="Fund Infopack Requested">
                                </div>
                            </div>
                            <div id="field_39_24" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_24">
                                <div class="ginput_container ginput_container_text"><input data-event-property="visitor_type" name="input_24" id="input_39_24" type="hidden" class="gform_hidden" aria-invalid="false" value="retail">
                                </div>
                            </div>
                            <div id="field_39_26" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_26">
                                <div class="ginput_container ginput_container_text"><input data-event-property="market_region" name="input_26" id="input_39_26" type="hidden" class="gform_hidden" aria-invalid="false" value="AU">
                                </div>
                            </div>
                            <div id="field_39_22" class="gfield gfield--type-symbol gfield--input-type-symbol gfield--width-full field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_22">
                                <div class="ginput_container ginput_container_text"><input name="input_22" id="input_39_22" type="hidden" class="gform_hidden" aria-invalid="false" value="A200">
                                </div>
                            </div>
                            <div id="field_39_16" class="gfield gfield--type-text gfield--input-type-text gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_16"><label class="gfield_label gform-field-label" for="input_39_16">First name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                                <div class="ginput_container ginput_container_text"><input name="input_16" id="input_39_16" type="text" value="" class="large" tabindex="1" aria-required="true" aria-invalid="false"> 
                                </div>
                            </div>
                            <div id="field_39_17" class="gfield gfield--type-text gfield--input-type-text gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_17"><label class="gfield_label gform-field-label" for="input_39_17">Last name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                                <div class="ginput_container ginput_container_text"><input name="input_17" id="input_39_17" type="text" value="" class="large" tabindex="2" aria-required="true" aria-invalid="false"> 
                                </div>
                            </div>
                            <div id="field_39_5" class="gfield gfield--type-email gfield--input-type-email gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_5"><label class="gfield_label gform-field-label" for="input_39_5">Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                                <div class="ginput_container ginput_container_email"><input data-event-property="email" name="input_5" id="input_39_5" type="email" value="" class="large" tabindex="3" aria-required="true" aria-invalid="false">
                                </div>
                            </div>
                            <div id="field_39_19" class="gfield gfield--type-select gfield--input-type-select gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_19"><label class="gfield_label gform-field-label" for="input_39_19">Investor type<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                                <div class="ginput_container ginput_container_select"><select name="input_19" id="input_39_19" class="large gfield_select" tabindex="4" aria-required="true" aria-invalid="false">
                                    <option value="" class="gf_placeholder">Select...</option>
                                    <option value="Individual investor">Individual investor</option>
                                    <option value="Individual Investor SMSF">Individual Investor SMSF</option>
                                    <option value="Financial Planner">Financial Planner</option>
                                    <option value="Stockbroker">Stockbroker</option>
                                    <option value="Institutional">Institutional</option>
                                    <option value="Accountant">Accountant</option>
                                    <option value="Other">Other</option></select>
                                </div>
                            </div>
                            <div id="field_39_27" class="gfield gfield--type-text gfield--input-type-text gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_27" data-conditional-logic="hidden" style="display: none;"><label class="gfield_label gform-field-label" for="input_39_27">Company name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                                <div class="ginput_container ginput_container_text"><input name="input_27" id="input_39_27" type="text" value="" class="large" tabindex="5" aria-required="true" aria-invalid="false" disabled="disabled"> 
                                </div>
                            </div>
                            <div id="field_39_23" class="gfield gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_23"><p>By submitting this form, you agree that we may: (a) use your information in accordance with our <a href="https://www.betashares.com.au/files/regulatory/privacy/privacy-collection-statement.pdf" target="_blank" id="">Privacy Collection Statement</a>; and (b) contact you from time to time regarding our products and services.</p>
                            </div>
                            <div id="field_39_28" class="gfield gfield--type-honeypot gform_validation_container field_sublabel_below gfield--has-description field_description_above field_validation_below gfield_visibility_visible" data-js-reload="field_39_28"><label class="gfield_label gform-field-label" for="input_39_28">Email</label>
                                <div class="gfield_description" id="gfield_description_39_28">This field is for validation purposes and should be left unchanged.</div><div class="ginput_container"><input name="input_28" id="input_39_28" type="text" value="" autocomplete="new-password">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gform_footer top_label"> <input type="submit" id="gform_submit_button_39" class="gform_button button" value="Submit" tabindex="6" onclick="if(window[&quot;gf_submitting_39&quot;]){return false;}  if( !jQuery(&quot;#gform_39&quot;)[0].checkValidity || jQuery(&quot;#gform_39&quot;)[0].checkValidity()){window[&quot;gf_submitting_39&quot;]=true;}  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_39&quot;]){return false;} if( !jQuery(&quot;#gform_39&quot;)[0].checkValidity || jQuery(&quot;#gform_39&quot;)[0].checkValidity()){window[&quot;gf_submitting_39&quot;]=true;}  jQuery(&quot;#gform_39&quot;).trigger(&quot;submit&quot;,[true]); }" data-conditional-logic="visible"> <input type="hidden" name="gform_ajax" value="form_id=39&amp;title=1&amp;description=&amp;tabindex=1&amp;theme=gravity-theme">
                        <input type="hidden" class="gform_hidden" name="is_submit_39" value="1">
                        <input type="hidden" class="gform_hidden" name="gform_submit" value="39">
            
                        <input type="hidden" class="gform_hidden" name="gform_unique_id" value="">
                        <input type="hidden" class="gform_hidden" name="state_39" value="WyJ7XCIxOVwiOltcIjlkODY5MmJmNjNhZDMwMjVlNThjMDQwZjA1M2JiMjg0XCIsXCJlNTdhMzdmMzY0NmI4NGE5OGE4NDM3NDZkMWFmNDRjOVwiLFwiNDk1NWRkNWRkMWQ1ZDdjYWRhMDM1NDA1MWE2ZjU4MzNcIixcIjZhNWJlYmNmNjdkOTZiY2FlMDg3ZjQ2MzlmNjBiMjQwXCIsXCI5OTAzOGQzZTQxMjU3NjhjM2IwZWQzNzY4M2RjNjJiMFwiLFwiMzU5ZTk5ZjA4YzcxNDAxMWI4NDJjYjExZGE0NzUzY2NcIixcIjcwZWVlMmMzM2QwNmZjYmFhMDc0OTgwMDA5YzgzYWQ3XCJdfSIsImIwZTc3MTgyMjgxZTI0ZmNmYmUyZjkxNzVkYjZkNzU5Il0=">
                        <input type="hidden" class="gform_hidden" name="gform_target_page_number_39" id="gform_target_page_number_39" value="0">
                        <input type="hidden" class="gform_hidden" name="gform_source_page_number_39" id="gform_source_page_number_39" value="1">
                        <input type="hidden" name="gform_field_values" value="symbol=A200">
            
                    </div>
                        <p style="display: none !important;" class="akismet-fields-container" data-prefix="ak_"><label>Δ<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="ak_js" value="108"><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p></form>
                        </div><span id="gform_visibility_test_39"></span>
		                <iframe style="display:none;width:0px;height:0px;" src="about:blank" name="gform_ajax_frame_39" id="gform_ajax_frame_39" title="This iframe contains the logic required to handle Ajax powered Gravity Forms." data-gtm-yt-inspected-33="true"></iframe>
		                    <script> gform.initializeOnLoaded( function() {gformInitSpinner( 39, 'https://www.betashares.com.au/wp-content/plugins/gravityforms/images/spinner.svg', true );jQuery('#gform_ajax_frame_39').on('load',function(){var contents = jQuery(this).contents().find('*').html();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_39');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_39').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_39').html(form_content.html());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_39').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_39').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */  }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_39').val();gformInitSpinner( 39, 'https://www.betashares.com.au/wp-content/plugins/gravityforms/images/spinner.svg', true );jQuery(document).trigger('gform_page_loaded', [39, current_page]);window['gf_submitting_39'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').html();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_39').replaceWith(confirmation_content);jQuery(document).trigger('gform_confirmation_loaded', [39]);window['gf_submitting_39'] = false;wp.a11y.speak(jQuery('#gform_confirmation_message_39').text());}, 50);}else{jQuery('#gform_39').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger("gform_pre_post_render", [{ formId: "39", currentPage: "current_page", abort: function() { this.preventDefault(); } }]);        if (event?.defaultPrevented) {                return;        }        const gformWrapperDiv = document.getElementById( "gform_wrapper_39" );        if ( gformWrapperDiv ) {            const visibilitySpan = document.createElement( "span" );            visibilitySpan.id = "gform_visibility_test_39";            gformWrapperDiv.insertAdjacentElement( "afterend", visibilitySpan );        }        const visibilityTestDiv = document.getElementById( "gform_visibility_test_39" );        let postRenderFired = false;        function triggerPostRender() {            if ( postRenderFired ) {                return;            }            postRenderFired = true;            jQuery( document ).trigger( 'gform_post_render', [39, current_page] );            gform.utils.trigger( { event: 'gform/postRender', native: false, data: { formId: 39, currentPage: current_page } } );            if ( visibilityTestDiv ) {                visibilityTestDiv.parentNode.removeChild( visibilityTestDiv );            }        }        function debounce( func, wait, immediate ) {            var timeout;            return function() {                var context = this, args = arguments;                var later = function() {                    timeout = null;                    if ( !immediate ) func.apply( context, args );                };                var callNow = immediate && !timeout;                clearTimeout( timeout );                timeout = setTimeout( later, wait );                if ( callNow ) func.apply( context, args );            };        }        const debouncedTriggerPostRender = debounce( function() {            triggerPostRender();        }, 200 );        if ( visibilityTestDiv && visibilityTestDiv.offsetParent === null ) {            const observer = new MutationObserver( ( mutations ) => {                mutations.forEach( ( mutation ) => {                    if ( mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null ) {                        debouncedTriggerPostRender();                        observer.disconnect();                    }                });            });            observer.observe( document.body, {                attributes: true,                childList: false,                subtree: true,                attributeFilter: [ 'style', 'class' ],            });        } else {            triggerPostRender();        }    } );} );
                         </script>
                        <script>
                            gform.initializeOnLoaded( function() { jQuery(document).on('gform_post_render', function(event, formId, currentPage){if(formId == 39) {gf_global["number_formats"][39] = {"15":{"price":false,"value":false},"18":{"price":false,"value":false},"24":{"price":false,"value":false},"26":{"price":false,"value":false},"22":{"price":false,"value":false},"16":{"price":false,"value":false},"17":{"price":false,"value":false},"5":{"price":false,"value":false},"19":{"price":false,"value":false},"27":{"price":false,"value":false},"23":{"price":false,"value":false},"28":{"price":false,"value":false}};if(window['jQuery']){if(!window['gf_form_conditional_logic'])window['gf_form_conditional_logic'] = new Array();window['gf_form_conditional_logic'][39] = { logic: { 27: {"field":{"enabled":true,"actionType":"show","logicType":"any","rules":[{"fieldId":"19","operator":"is","value":"Financial Planner"},{"fieldId":"19","operator":"is","value":"Stockbroker"},{"fieldId":"19","operator":"is","value":"Accountant"},{"fieldId":"19","operator":"is","value":"Institutional"}]},"nextButton":null,"section":null},0: {"field":"","section":null} }, dependents: { 27: [27],0: [0] }, animation: 0, defaults: {"15":"fund_infopack","18":"Fund Infopack Requested","24":"retail","26":"AU","22":"A200"}, fields: {"15":[0],"18":[0],"24":[0],"26":[0],"22":[0],"16":[0],"17":[0],"5":[0],"19":[0,27],"27":[0],"23":[0],"28":[0]} }; if(!window['gf_number_format'])window['gf_number_format'] = 'decimal_dot';jQuery(document).ready(function(){gform.utils.trigger({ event: 'gform/conditionalLogic/init/start', native: false, data: { formId: 39, fields: null, isInit: true } });window['gformInitPriceFields']();gf_apply_rules(39, [27,0], true);jQuery('#gform_wrapper_39').show();jQuery(document).trigger('gform_post_conditional_logic', [39, null, true]);gform.utils.trigger({ event: 'gform/conditionalLogic/init/end', native: false, data: { formId: 39, fields: null, isInit: true } });} );} if(typeof Placeholders != 'undefined'){
                             Placeholders.enable();
                            }} } );jQuery(document).on('gform_post_conditional_logic', function(event, formId, fields, isInit){} ) } );
                        </script>
                        <script>
                            gform.initializeOnLoaded( function() {jQuery(document).trigger("gform_pre_post_render", [{ formId: "39", currentPage: "1", abort: function() { this.preventDefault(); } }]);        if (event?.defaultPrevented) {                return;        }        const gformWrapperDiv = document.getElementById( "gform_wrapper_39" );        if ( gformWrapperDiv ) {            const visibilitySpan = document.createElement( "span" );            visibilitySpan.id = "gform_visibility_test_39";            gformWrapperDiv.insertAdjacentElement( "afterend", visibilitySpan );        }        const visibilityTestDiv = document.getElementById( "gform_visibility_test_39" );        let postRenderFired = false;        function triggerPostRender() {            if ( postRenderFired ) {                return;            }            postRenderFired = true;            jQuery( document ).trigger( 'gform_post_render', [39, 1] );            gform.utils.trigger( { event: 'gform/postRender', native: false, data: { formId: 39, currentPage: 1 } } );            if ( visibilityTestDiv ) {                visibilityTestDiv.parentNode.removeChild( visibilityTestDiv );            }        }        function debounce( func, wait, immediate ) {            var timeout;            return function() {                var context = this, args = arguments;                var later = function() {                    timeout = null;                    if ( !immediate ) func.apply( context, args );                };                var callNow = immediate && !timeout;                clearTimeout( timeout );                timeout = setTimeout( later, wait );                if ( callNow ) func.apply( context, args );            };        }        const debouncedTriggerPostRender = debounce( function() {            triggerPostRender();        }, 200 );        if ( visibilityTestDiv && visibilityTestDiv.offsetParent === null ) {            const observer = new MutationObserver( ( mutations ) => {                mutations.forEach( ( mutation ) => {                    if ( mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null ) {                        debouncedTriggerPostRender();                        observer.disconnect();                    }                });            });            observer.observe( document.body, {                attributes: true,                childList: false,                subtree: true,                attributeFilter: [ 'style', 'class' ],            });        } else {            triggerPostRender();        }    } );
                        </script>
                    </div>
		</div>`;

    function initDesk() {
      var factsheetcta = document.querySelector('.fund-mod-buttons [data-ga4-type="Factsheet"]');
      if (factsheetcta) {
        var href = factsheetcta.getAttribute('href');
        factsheetcta.removeAttribute('href');
        var newcta = `<a class='eg-newcta' href='${href}' target="_blank">Factsheet</a>`;
        if (!document.querySelector('.eg-newcta')) {
          factsheetcta.insertAdjacentHTML('afterend', newcta);
        }
      }
      if (!document.querySelector('#eg-modal-form')) {
        document.querySelector('#modal-form').insertAdjacentHTML("afterend", factsheetForm);
      }
      testeventsdesk();
    }

    function initmob() {
      var factsheetcta = document.querySelector("#request-menu a");
      if (factsheetcta) {
        var href = factsheetcta.getAttribute('href');
        factsheetcta.removeAttribute('href');
        var newcta = `<a class='eg-newcta' href='${href}' target="_blank">Factsheet</a>`;
        if (!document.querySelector('.eg-newcta')) {
          factsheetcta.insertAdjacentHTML('afterend', newcta);
        }
      }
      var modalFormContainer = document.querySelector('#modal-form');
      if (modalFormContainer && !document.querySelector('#eg-modal-form')) {
        modalFormContainer.insertAdjacentHTML("afterend", factsheetForm);
      }
      testeventsmob();
    }

    

    function testeventsdesk() {
      live('.fund-mod-buttons [data-ga4-type="Factsheet"]', 'click', function () {
        document.body.classList.add('eg-showform');
      });

      live('.eg-close', 'click', function () {
        document.body.classList.remove('eg-showform');
      });

      live('.eg-select-investor', 'change', function (event) {
        var selectedValue = event.target.value;
        var showCompanyValues = [
          'Financial Planner',
          'Stockbroker',
          'Institutional',
          'Accountant'
        ];

        if (showCompanyValues.includes(selectedValue)) {
          document.body.classList.add('eg-showCompany');
        } else {
          document.body.classList.remove('eg-showCompany');
        }
      });

      live('.eg-submit-button', 'click', function (event) {
        if (!validateForm()) {
          event.preventDefault();
        } else {
          var element = document.querySelector('.eg-newcta');
          if (element) {
            element.click();
          }
        }
      });
    }

    // Function to handle events for mobile
    function testeventsmob() {
      live('#request-menu a', 'click', function () {
        document.body.classList.add('eg-showform');
      });

      live('.eg-close', 'click', function () {
        document.body.classList.remove('eg-showform');
      });

      live('.eg-select-investor', 'change', function (event) {
        var selectedValue = event.target.value;
        var showCompanyValues = [
          'Financial Planner',
          'Stockbroker',
          'Institutional',
          'Accountant'
        ];

        if (showCompanyValues.includes(selectedValue)) {
          document.body.classList.add('eg-showCompany');
        } else {
          document.body.classList.remove('eg-showCompany');
        }
      });

      live('.eg-submit-button', 'click', function (event) {
        if (!validateForm()) {
          event.preventDefault();
        } else {
          var element = document.querySelector('.eg-newcta');
          if (element) {
            element.click();
          }
        }
      });
    }

    if (window.innerWidth > 545) {
      waitForElement('.fund-mod-buttons [data-ga4-type="Factsheet"]', initDesk, 1000, 15000);
    } else {
      waitForElement("#request-menu a", initmob, 1000, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
