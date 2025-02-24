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
      document.body.classList.add('EG-COURSEPAGE');
      heroSection();
      courseOverviewSection();
      seek();
      mainSection();
    }

    function heroSection() {
      let buttonHTML = `<button class="btn eg-course_guide" data-toggle="modal" id="brochureBtnInpage" data-target="#brochureModal" data-position="brochure-button-inpage" fdprocessedid="mstju">
      <span class="">Download Course Guide</span>
      <img data-src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg" class="icon download-icon ls-is-cached lazyloaded" alt="course guide" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg">
      </button>`;

      let herobulletpoints = `<div class="eg-hero_bulletpoints eg-bulletpoints">
    <p>Take your analytics, problem solving, and math skills to the next level.</p>
    <ul class="eg-list">
        <li>Become a fully accredited accountant</li>
        <li>Understand core business concepts</li>
        <li>Develop skills in financial software</li>
        <li>Excel in data and analytical expertise</li>
        <li>Work on real-world case studies</li>
    </ul>
    </div>`

      document.querySelector('.course-glance-v2').classList.add('eg-heroSection');
      let leftsectionSel = document.querySelector('.course-glance-v2 .content-left');
      leftsectionSel.insertAdjacentElement('beforeend', document.querySelector('.course-glance-v2 .content-right'));

      if (!document.querySelector('.eg-hero_bulletpoints')) {
        let buttonSel = document.querySelector('.eg-heroSection .content-left .course-buttons');
        buttonSel.insertAdjacentHTML('beforeend', buttonHTML);
        document.querySelector('.eg-heroSection .content-right .intro').outerHTML = herobulletpoints;
      }

      let cspHTML = `<div class="eg-cspavaliable"><p><span>CSP Available | <br> </span>Eligible domestic students granted a CSP will pay a reduced estimated annual course fee of $4,124,00. <a>Learn more</a></p></div>`
      let uspSel = document.querySelector('.eg-heroSection .details-wrapper .details');

      if (!document.querySelector('.eg-cspavaliable')) {
        uspSel.insertAdjacentHTML('afterend', cspHTML);
      }

      let subjects = document.querySelector('.eg-heroSection .details-wrapper .details > div:nth-child(4)');
      if (subjects) {
        subjects.querySelector('p:not(.caption)').innerText = '24 SUBJECTS';
      }

      let startdate = document.querySelector('.eg-heroSection .details-wrapper .details > div:nth-child(3)');
      if (startdate) {
        startdate.querySelector('p:not(.caption)').innerText = 'MAR, JUL, SEPT, NOV';
      }
    }

    function courseOverviewSection() {
      var newOverviewContent = `
        <div class="eg-newOverview-content">
          <p class="eg-overview-content-intro">Swinburne Online's Bachelor of Accounting gives you the expertise to help individuals and businesses achieve their financial goals.</p>
          <ul class="eg-overview-content-list">
            <li>Learn with industry-leading software like Tableau and Xero.</li>
            <li>Work on real-world projects with clients like Acrodyne, NAB, and World Vision.</li>
            <li>Hear from industry experts and build valuable professional networks.</li>
            <li>Get accredited by CAANZ and CPA Australia.</li>
          </ul>
          <span class="eg-overview-graduate">Graduate ready to step into your dream accounting role!</span>
        </div>`;

      const courseOverview = document.querySelector('.course-overview');
      if (courseOverview) {
        courseOverview.classList.add('eg-courseOverview');

        const overviewTitle = courseOverview.querySelector('.container > div > div:first-child');
        if (overviewTitle) {
          overviewTitle.innerHTML = '<p class="eg-overviewTitle">Overview</p>';
        }

        const whatlearnTitle = courseOverview.querySelector('.container > div > div:last-child h2');
        if (whatlearnTitle) {
          whatlearnTitle.innerText = 'What you’ll learn ';
        }

        const overviewContent = document.querySelector('.course-overview .container > div > div:nth-child(2) h2');
        if (overviewContent && !document.querySelector('.eg-newOverview-content')) {
          overviewContent.insertAdjacentHTML('afterend', newOverviewContent);
        }
      }
    }

    function swinburneOnline() {
      const swionOnline =
        `<div class="eg-swinOnline-container">
        <div class="eg-swinOnline-wrapper container">
          <h3 class="eg-swinOnline-title">Swinburne Online</h3>
          <p class="eg-swinOnline-text">Your pathway to the career of your dreams</p>
          <div class="eg-swinOnline-ctas">
            <a class="eg-btn eg-apply-now" href="https://www.swinburneonline.edu.au/forms/start-your-enrolment/?course=Bachelor of Accounting" class="btn " target="_blank">
              <span class="text">Apply Now</span>    
              <img decoding="async" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-chevron_3efdef93.svg" class="icon chevron-icon" alt="icon">
            </a>
            <button class="eg-btn eg-course-guide" data-toggle="modal" id="brochureBtnInpage" data-target="#brochureModal" data-position="brochure-button-inpage">
              <span class="">Course Guide</span>
              <img data-src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg" class="icon download-icon ls-is-cached lazyloaded" alt="course guide" src="https://www.swinburneonline.edu.au/app/themes/sol/dist/images/icon-download-white_657cc66f.svg">
            </button>
          </div>
        </div>
      </div>`;
      const testimonial = document.querySelector('.course-testimonial ');
      if (testimonial && !document.querySelector('.eg-swinOnline-container')) {
        testimonial.insertAdjacentHTML('afterend', swionOnline);
      }
    }

    function seek() {
      waitForElement('.eg-courseOverview + section', function () {
        let seekSel = document.querySelector('.eg-courseOverview + section');
        seekSel.classList.add('eg-seek');
        document.querySelector('.main>.forms-layout').insertAdjacentElement('afterend', seekSel);
      }, 50, 15000);
    }

    function mainSection() {
      let mainhtml = `
      <div class="eg-main_section">
      <div class="eg-wrapper">
        <div class="eg-structure"></div>
        <div class="eg-entryrequirements"></div>
        <div class="eg-fees_scholarships"></div>
        <div class="eg-career_outcomes"></div>
        <div class="eg-onlinestudy"></div>
      </div>
      </div>`;
      if (!document.querySelector('.eg-main_section')) {
        document.querySelector('.main .course-tab-content').insertAdjacentHTML('afterend', mainhtml);
      }

      structure();
      entryRequirements();
      olineStudy()
    }

    function structure() {
      let structureHTML = `<div class="eg-structure">
    <div class="eg-main_heading"><h2>Structure</h2></div>
    <div class="eg-course_structure">
        <h2>Your degree structure:</h2>
        <p class="eg-content">To be awarded the Bachelor of Accounting you must complete 24 units in total made up of: </p>
        <ul class="eg-bullet_points">
            <li>6 Core Business Units: Essential foundational units for business knowledge.</li>
            <li>8 Accounting Major Units: Focus on developing key accounting expertise.</li>
            <li>8 Elective Units: Choose from a range of electives to tailor your degree to your interests or career goals. Or choose
            a second major or two minors and gain more career opportunities from your degree.</li>
            <li>2 Capstone Units: These units bring together everything you've learned, applying your skills to real-world business
            scenarios.</li>
        </ul>
        <p class="eg-content">Each year is split into 3 Teaching Periods (14 weeks per Teaching Period) and includes a break week and two weeks of
        exams at the end of each Teaching Period. You can choose to study full-time or part-time depending on your preference.</p>
    </div>
    <div class="eg-course_image">
        <h2>Full-Time Study Timeline </h2>
        <div class="eg-image"><img src="" alt=""></div>
    </div>
    <div class="eg-study">
        <h2>What you’ll study:</h2>
        <div class="accordion">
            <div class="accordion-item">
                <input type="checkbox" id="accordion1">
                <label for="accordion1" class="accordion-item-title"><span class="icon"></span>CORE UNITS</label>
                <div class="accordion-item-desc eg-coreunits">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt, molestias labore eveniet consequuntur voluptate ipsa commodi explicabo! Placeat, nihil?</p>
                </div>
            </div>
        
            <div class="accordion-item">
                <input type="checkbox" id="accordion2">
                <label for="accordion2" class="accordion-item-title"><span class="icon"></span>What are Capstone Units?</label>
                <div class="accordion-item-desc eg-capstone">
                    <div class="eg-content_wrapper">
                        <p>Capstone units are designed to:</p>
                        <ul class="eg-list">
                            <li>Combine the skills you've gained throughout your degree.</li>
                            <li>Allow you to apply your knowledge to real business problems.</li>
                            <li>Provide an opportunity to collaborate with peers and gain hands-on experience.</li>
                            <li>Help you build the confidence you need to transition into the workforce with practical skills.</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div class="accordion-item">
                <input type="checkbox" id="accordion3">
                <label for="accordion3" class="accordion-item-title"><span class="icon"></span>MAJOR UNITS</label>
                <div class="accordion-item-desc eg-major_unit">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, error ipsum. Laudantium, perspiciatis accusantium? Excepturi voluptas dolor reiciendis vel eum!</p>
                </div>
            </div>
        
            <div class="accordion-item">
                <input type="checkbox" id="accordion4">
                <label for="accordion4" class="accordion-item-title"><span class="icon"></span>ELECTIVES</label>
                <div class="accordion-item-desc eg-electives">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque dolore omnis fugiat inventore cupiditate minus eaque eligendi, enim placeat!
                </div>
            </div>
        </div>
    </div>
    </div>`;

      document.querySelector('.eg-main_section .eg-structure').outerHTML = structureHTML;

      var imgElement = document.querySelector('.course-tab-content #structure img[alt*="Undergraduate"]');
      var targetImg = document.querySelector('.eg-main_section .eg-structure .eg-course_image .eg-image img');
      if (imgElement && targetImg) {
        var imgSrc = imgElement.getAttribute('src');
        targetImg.setAttribute('src', imgSrc);
      }
    }

    function olineStudy() {
      let onlineStudyHTML = 
      `<div class="eg-onlinestudy container">
            <!-- Header Section -->
            <div class="eg-header-section">
                <h6 class="eg-subheading">online study</h6>
                <h4 class="eg-heading">Your study experience and support</h4>
                <p class="eg-description">
                    Our team of academic and online experts have developed engaging, media-rich course materials using 
                    cutting-edge digital technology and advanced teaching resources. Each degree is thoughtfully designed 
                    for online learning, ensuring you graduate with the skills and knowledge to excel in your future career.
                </p>
            </div>

            <!-- Key Features Section -->
            <h4 class="eg-heading">Here’s what you can expect</h4>
            <ul class="eg-features">
                <li>Personalise your study journey with full or part-time options, 100% online. No campus required.</li>
                <li>Start when it suits you with multiple intake dates and unit availability.</li>
                <li>Plan your study to fit around your life, family, and work, and study from anywhere, anytime.</li>
                <li>Make connections with students and industry experts through discussion boards, virtual classrooms, and communication tools.</li>
                <li>Study with confidence with 7-day support and dedicated online tutors.</li>
            </ul>

            <!-- Flexible Study Section -->
            <a href="#" class="eg-link">FLEXIBLE STUDY AT SWINBURNE ONLINE →</a>

            <!-- Flexible Study Image Section -->
            <div class="eg-flexible-study">
                <img class="eg-image" src="https://i.ibb.co/4wrPtKL8/047-Cat-Black2024-Swinburne-Previews-1-1.png" alt="Student Studying">
                <img class="eg-image eg-dot-grid" src="https://i.ibb.co/zVccpkW2/Dot-Grid.png" alt="Dot Grid">
            </div>

            <!-- Features Cards -->
            <div class="eg-features-cards">
                <div class="eg-card">
                    <h4 class="eg-card-title">
                        <span class="eg-icon">💡</span> A flexible online classroom experience
                    </h4>
                    <p class="eg-card-description">
                        Jump into engaging classes, tackle assignments, and connect with others on lively discussion boards. 
                        Get advice and support from expert tutors who bring real-world experience to the table. Stay on top 
                        of your progress, plan your studies with ease, and set your own pace—whether you want to fast-track 
                        your degree with up to 12 units a year or take it slow with part-time study. It’s all about balancing 
                        your studies with the rest of your life!
                    </p>
                </div>
                <div class="eg-card">
                    <h4 class="eg-card-title">
                        <span class="eg-icon">🏫</span> Your Online Campus: The Student Hub
                    </h4>
                    <ul class="eg-card-list">
                        <li>Access course management tools, technical support, and library resources.</li>
                        <li>Find everything you need to manage your studies and university services.</li>
                        <li>Stay connected and empowered throughout your learning journey.</li>
                    </ul>
                </div>
                <div class="eg-card">
                    <h4 class="eg-card-title">
                        <span class="eg-icon">🤝</span> Comprehensive Support for Students
                    </h4>
                    <p class="eg-card-description">
                        We have dedicated Student Advisors available 7 days a week for any questions you have. 
                        Our Online Learning Advisors (OLAs) offer help with technical issues, assignments, and referencing. 
                        We strive to support you from enrolment to graduation, ensuring your success. 
                        With continuous access to guidance and resources for a smooth study experience.
                    </p>
                </div>
            </div>
        </div>`;

      document.querySelector('.eg-main_section .eg-structure').outerHTML = onlineStudyHTML;
    }

    function entryRequirements() {
      let entryRequirements = `<div class="eg-entry_requirements">
    <div class="eg-main_heading"><h2>entry requirements</h2></div>
    <div class="eg-wrapper eg-desktop">
        <div class="eg-tabs">
            <div class="eg-tab" data-attr="1">entry requirements <span class="eg-icon"><img src="https://i.ibb.co/mCt7KkK5/chevron-down.png"></span></div>
            <div class="eg-tab" data-attr="2">Year 12 entry <span class="eg-icon"><img src="https://i.ibb.co/mCt7KkK5/chevron-down.png"></span></div>
            <div class="eg-tab" data-attr="3">Credit arrangements <span class="eg-icon"><img src="https://i.ibb.co/mCt7KkK5/chevron-down.png"></span></div>
            <div class="eg-tab" data-attr="4">Diploma entry pathways <span class="eg-icon"><img src="https://i.ibb.co/mCt7KkK5/chevron-down.png"></span></div>
            <div class="eg-tab" data-attr="5">Need More Info? <span class="eg-icon"><img src="https://i.ibb.co/mCt7KkK5/chevron-down.png"></span></div>
        </div>
        <div class="eg-content_wrapper">
            <div class="eg-content" data-attr="1">
                <h2 class="eg-heading">Non-Year 12 Entry</h2>
                <p class="eg-para">If you’re applying to Swinburne but haven’t completed Year 12, don’t worry! You can still apply if you have:</p>
                <ul class="eg-bullet_points">
                    <li><span>Completed or partially completed</span> an approved tertiary qualification (like a diploma, advanced diploma, associate
                    degree, or degree).</li>
                    <li><span>o Relevant work experience</span> and<span>English language skills</span>, or a<span>STAT result</span> (Special Tertiary Admissions Test), may also be
                    considered.</li>
                    <li><a href="https://www.swinburneonline.edu.au/faqs/">Read our applying and enrolling FAQs</a></li>
                </ul>
                <p>For those with prior tertiary studies, you might be eligible for <span>academic credit</span> of up to <span>12 units</span> if your previous
                studies meet part of the course requirements.</p>
            </div>
            <div class="eg-content" data-attr="2">
                <h2 class="eg-heading">Year 12 Entry</h2>
                <p class="eg-para">If you have completed Year 12 (the Victorian Certificate of Education – VCE, or an equivalent qualification from
                interstate or internationally), you can apply based on that.</p>
                <ul class="eg-bullet_points">
                    <li><span>Minimum ATAR</span> requirements may apply for some courses.</li>
                </ul>
            </div>
            <div class="eg-content" data-attr="3">
                <h2 class="eg-heading">Credit Arrangements</h2>
                <div class="eg-credit_transfer">
                    <h2>Credit Transfer</h2>
                    <p class="eg-para">If you've already studied or gained experience in a related area, you may be able to get
                        <span>advanced standing</span> (credit) for
                        your previous work.</p>
                    <ul class="eg-bullet_points">
                        <li><span>Case-by-case assessment:</span> Every applicant is assessed individually.</li>
                        <li><span>Credit for prior study:</span> If you’ve completed a <span>Diploma</span> in a related field, you may be
                            eligible for <span>up to 8 units</span> (a
                            third of the course).</li>
                        <li><span>Previous tertiary studies</span>: If your past studies meet part of the academic requirements for the
                            course, you may get
                            credit for up to <span>12 units.</span></li>
                    </ul>
                    <p>To learn more, reach out to a <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a> to
                        discuss applying for credit.</p>
                </div>
                <div class="eg-recognition">
                    <h2>Recognition of Prior Learning (RPL)</h2>
                    <ul class="eg-bullet_points">
                        <li><a href="https://www.swinburneonline.edu.au/recognition-of-prior-learning-vs-academic-credit/">Recognition of Prior Learning</a> (RPL) lets you gain credit based on <span>skills and knowledge</span> from your <span>work experience, life
                        experience,</span >or <span>formal training.</span></li>
                        <li>Like credit transfer, this is assessed on a <span>case-by-case basis.</span></li>
                        <li>Speak with a <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a> to learn more about RPL and how it might apply to your situation.</li>
                    </ul>
                </div>
            </div>
            <div class="eg-content" data-attr="4">
                <h2 class="eg-heading">Diploma Entry Pathways</h2>
                <p class="eg-para">Some students start their journey with a <span>Diploma</span>, which can help them progress to a degree.</p>
                <ul class="eg-bullet_points">
                    <li>Pathways allow you to move from one qualification to another.</li>
                    <li>o You could receive <span>up to 8 units</span> of credit, depending on your chosen major. Our course consultants can help guide you
                    through your pathway options.</li>
                </ul>
            </div>
            <div class="eg-content" data-attr="5">
                <h2 class="eg-heading">Need More Info?</h2>
                <ul class="eg-bullet_points">
                    <li>We have plenty of resources to help you! Visit our <span>Applying and Enrolling FAQs</span> or chat with a <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a> for
                    advice on your specific situation.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion eg-mobile">
        <div class="accordion-item">
            <input type="checkbox" id="accordion1">
            <label for="accordion1" class="accordion-item-title"><span class="icon"></span>Non-Year 12 Entry</label>
            <div class="accordion-item-desc">
                <div class="eg-content" data-attr="1">
                    <h2 class="eg-heading">Non-Year 12 Entry</h2>
                    <p class="eg-para">If you’re applying to Swinburne but haven’t completed Year 12, don’t worry! You can still apply
                        if you have:</p>
                    <ul class="eg-bullet_points">
                        <li><span>Completed or partially completed</span> an approved tertiary qualification (like a diploma, advanced
                            diploma, associate
                            degree, or degree).</li>
                        <li><span>o Relevant work experience</span> and<span>English language skills</span>, or a<span>STAT
                                result</span> (Special Tertiary Admissions Test), may also be
                            considered.</li>
                        <li><a href="https://www.swinburneonline.edu.au/faqs/">Read our applying and enrolling FAQs</a></li>
                    </ul>
                    <p>For those with prior tertiary studies, you might be eligible for <span>academic credit</span> of up to <span>12
                            units</span> if your previous
                        studies meet part of the course requirements.</p>
                </div>
            </div>
        </div>
    
        <div class="accordion-item">
            <input type="checkbox" id="accordion2">
            <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Year 12 Entry</label>
            <div class="accordion-item-desc">
                <div class="eg-content" data-attr="2">
                    <h2 class="eg-heading">Year 12 Entry</h2>
                    <p class="eg-para">If you have completed Year 12 (the Victorian Certificate of Education – VCE, or an equivalent
                        qualification from
                        interstate or internationally), you can apply based on that.</p>
                    <ul class="eg-bullet_points">
                        <li><span>Minimum ATAR</span> requirements may apply for some courses.</li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="accordion-item">
            <input type="checkbox" id="accordion3">
            <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Credit Arrangements</label>
            <div class="accordion-item-desc">
                <div class="eg-content" data-attr="3">
                    <h2 class="eg-heading">Credit Arrangements</h2>
                    <div class="eg-credit_transfer">
                        <h2>Credit Transfer</h2>
                        <p class="eg-para">If you've already studied or gained experience in a related area, you may be able to get
                            <span>advanced standing</span> (credit) for
                            your previous work.
                        </p>
                        <ul class="eg-bullet_points">
                            <li><span>Case-by-case assessment:</span> Every applicant is assessed individually.</li>
                            <li><span>Credit for prior study:</span> If you’ve completed a <span>Diploma</span> in a related field, you
                                may be
                                eligible for <span>up to 8 units</span> (a
                                third of the course).</li>
                            <li><span>Previous tertiary studies</span>: If your past studies meet part of the academic requirements for
                                the
                                course, you may get
                                credit for up to <span>12 units.</span></li>
                        </ul>
                        <p>To learn more, reach out to a <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a>
                            to
                            discuss applying for credit.</p>
                    </div>
                    <div class="eg-recognition">
                        <h2>Recognition of Prior Learning (RPL)</h2>
                        <ul class="eg-bullet_points">
                            <li><a href="https://www.swinburneonline.edu.au/recognition-of-prior-learning-vs-academic-credit/">Recognition
                                    of Prior Learning</a> (RPL) lets you gain credit based on <span>skills and knowledge</span> from
                                your <span>work experience, life
                                    experience,</span>or <span>formal training.</span></li>
                            <li>Like credit transfer, this is assessed on a <span>case-by-case basis.</span></li>
                            <li>Speak with a <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a> to learn
                                more about RPL and how it might apply to your situation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="accordion-item">
            <input type="checkbox" id="accordion4">
            <label for="accordion4" class="accordion-item-title"><span class="icon"></span>Diploma Entry Pathways</label>
            <div class="accordion-item-desc">
                <div class="eg-content" data-attr="4">
                    <h2 class="eg-heading">Diploma Entry Pathways</h2>
                    <p class="eg-para">Some students start their journey with a <span>Diploma</span>, which can help them progress to a
                        degree.</p>
                    <ul class="eg-bullet_points">
                        <li>Pathways allow you to move from one qualification to another.</li>
                        <li>o You could receive <span>up to 8 units</span> of credit, depending on your chosen major. Our course
                            consultants can help guide you
                            through your pathway options.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item"></div>
            <input type="checkbox" id="accordion5">
            <label for="accordion5" class="accordion-item-title"><span class="icon"></span>Need More Info?</label>
            <div class="accordion-item-desc">
                <div class="eg-content" data-attr="5">
                    <h2 class="eg-heading">Need More Info?</h2>
                    <ul class="eg-bullet_points">
                        <li>We have plenty of resources to help you! Visit our <span>Applying and Enrolling FAQs</span> or chat with a
                            <a href="https://www.swinburneonline.edu.au/contact-us/">Course Consultant</a> for
                            advice on your specific situation.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>`;

      document.querySelector('.eg-main_section .eg-entryrequirements').outerHTML = entryRequirements;
      document.querySelectorAll('.eg-entry_requirements .eg-wrapper .eg-tab').forEach(tab => {
        tab.addEventListener("click", function () {
          var dataAttrValue = this.getAttribute("data-attr");

          if (dataAttrValue) {
            document.querySelectorAll('.eg-content_wrapper [data-attr]').forEach(el => {
              el.classList.remove("active");
            });

            var targetElement = document.querySelector('.eg-content_wrapper [data-attr="' + dataAttrValue + '"]');
            if (targetElement) {
              targetElement.classList.add("active");
            }
          }
        });
      });
    }

    /* Initialize variation */
    waitForElement('.course-glance-v2 .content-left', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


