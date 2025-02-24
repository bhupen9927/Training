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

    var desktopnavData = {
      "navigation": {
        "Analytics": {
          "studyarea": "Analytics",
          "viewalllink": "https://online.monash.edu/online-courses/analytics-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/graduate-certificate-applied-data-science/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Diploma of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-diploma-data-science/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-master-applied-data-science/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Analytics",
              "courseUrl": "https://online.monash.edu/online-courses/analytics-courses/online-graduate-certificate-analytics/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Analytics",
              "courseUrl": "https://online.monash.edu/online-courses/analytics-courses/online-master-analytics/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Managerial Analytics",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/graduate-certificate-of-managerial-analytics/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Managerial Analytics",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-managerial-analytics/",
              "id": "eg-course"
            }
          ]
        },
        "Business": {
          "studyarea": "Business",
          "viewalllink": "https://online.monash.edu/online-courses/business-courses/",
          "courses": [
            {
              "coursename": "Business Graduate Certificate of Business Administration (Digital)",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/online-graduate-certificate-business-administration-digital/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Human Resource Management",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/online-graduate-certificate-human-resource-management/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Human Resource Management",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/master-human-resource-management/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Business Management",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/online-graduate-certificate-business-management/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Business Management",
              "isAvailable": false,
              "subcourses": [
                {
                  "subcoursename": "Managerial Analytics",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-managerial-analytics/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Advanced Project Management",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-advanced-project-management/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Digital Communications",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-digital-communications/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Digital Enterprise",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-specialising-in-digital-enterprise/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Health Administration",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-health-administration/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Human Resource Management",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/online-master-business-management-specialising-human-resource-management/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Marketing",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-marketing/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Project Management",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-project-management/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Public Health",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-public-health/",
                  "id": "eg-subcourse"
                },
                {
                  "subcoursename": "Sustainable Enterprise",
                  "subcourseUrl": "https://online.monash.edu/online-courses/business-courses/master-of-business-management-specialising-in-sustainable-enterprise/",
                  "id": "eg-subcourse"
                }
              ]
            }, {
              "coursename": "Master of Business Administration (Digital)",
              "courseUrl": "https://online.monash.edu/online-courses/business-courses/online-master-business-administration-digital/",
              "id": "eg-course"
            }
          ]
        },
        "Education": {
          "studyarea": "Education",
          "viewalllink": "https://online.monash.edu/online-courses/education-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Educational Design",
              "courseUrl": "https://online.monash.edu/online-courses/education-courses/online-graduate-certificate-educational-design/",
              "id": "eg-course"
            }
          ]
        },
        "Health": {
          "studyarea": "Health",
          "viewalllink": "https://online.monash.edu/online-courses/health-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Epidemiology",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/graduate-certificate-of-epidemiology/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Health Promotion",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/graduate-certificate-of-health-promotion/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Public Health",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/graduate-certificate-of-public-health/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Public Health",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/online-master-public-health/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Certificate of Health Administration",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/graduate-certificate-of-health-administration/",
              "id": "eg-course"
            },
            {
              "coursename": "Master of Health Administration",
              "courseUrl": "https://online.monash.edu/online-courses/health-courses/online-master-health-administration/",
              "id": "eg-course"
            }
          ]
        },
        "Information Technology": {
          "studyarea": "Information Technology",
          "viewalllink": "https://online.monash.edu/online-courses/information-technology-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Artificial Intelligence",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-certificate-artificial-intelligence/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Certificate of Cybersecurity",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-certificate-cybersecurity/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Certificate of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/graduate-certificate-applied-data-science/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Diploma of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-diploma-data-science/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Applied Data Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-master-applied-data-science/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Certificate of Computer Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-certificate-computer-science/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Diploma of Computer Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-graduate-diploma-computer-science/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Computer Science",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/online-master-computer-science/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Computer Science – specialising in Artificial Intelligence",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/master-of-computer-science-artificial-intelligence/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Computer Science – specialising in Cybersecurity",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/master-of-computer-science-cybersecurity/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Computer Science – specialising in Software Engineering",
              "courseUrl": "https://online.monash.edu/online-courses/information-technology-courses/master-of-computer-science-software-engineering/",
              "id": "eg-course"
            }
          ]
        },
        "Marketing and Digital Communications": {
          "studyarea": "Marketing and Digital Communications",
          "viewalllink": "https://online.monash.edu/online-courses/marketing-digital-communications-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Marketing and Digital Communications",
              "courseUrl": "https://online.monash.edu/online-courses/marketing-digital-communications-courses/online-graduate-certificate-marketing-digital-communications/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Marketing and Digital Communications",
              "courseUrl": "https://online.monash.edu/online-courses/marketing-digital-communications-courses/online-master-marketing-digital-communications/",
              "id": "eg-course"
            }
          ]
        },
        "Project Management": {
          "studyarea": "Project Management",
          "viewalllink": "https://online.monash.edu/online-courses/project-management-courses/",
          "courses": [
            {
              "coursename": "Graduate Certificate of Project Management",
              "courseUrl": "https://online.monash.edu/online-courses/project-management-courses/online-graduate-certificate-project-management/",
              "id": "eg-course"
            }, {
              "coursename": "Graduate Diploma of Project Management",
              "courseUrl": "https://online.monash.edu/online-courses/project-management-courses/online-graduate-diploma-project-management/",
              "id": "eg-course"
            }, {
              "coursename": "Master of Project Management",
              "courseUrl": "https://online.monash.edu/online-courses/project-management-courses/online-master-project-management/",
              "id": "eg-course"
            }
          ]
        },
        "Psychology": {
          "studyarea": "Psychology",
          "viewalllink": "https://online.monash.edu/online-courses/psychology-courses/",
          "courses": [
            {
              "coursename": "Graduate Diploma of Psychology Advanced",
              "courseUrl": "https://online.monash.edu/online-courses/psychology-courses/online-graduate-diploma-psychology-advanced/",
              "id": "eg-course"
            },
            {
              "coursename": "Graduate Diploma in Psychology",
              "courseUrl": "https://online.monash.edu/online-courses/psychology-courses/online-graduate-diploma-psychology/",
              "id": "eg-course"
            }, {
              "coursename": "Professional Certificate of Human Behaviour and Applied Research",
              "courseUrl": "https://online.monash.edu/online-courses/psychology-courses/professional-certificate-of-human-behaviour-and-applied-research/",
              "id": "eg-course"
            }
          ]
        }
      }
    };

    function desktopMegaMenuHTML(data) {
      return `
    <div class="eg-courses_menu">
      <div class="eg-container">
        <div class="eg-study-area">
          <div class="eg-header"><h2>Study Areas</h2></div>
          <ul class="eg-studyarea_container">
            ${Object.keys(data.navigation).map(studyArea => `
              <li class="eg-studyarea-item" data-studyarea="${studyArea}">
                ${studyArea}
              </li>
            `).join('')}
          </ul>
          <a class="eg-studyarea-button" href="https://online.monash.edu/online-courses/">View all courses</a>
        </div>
        <div class="eg-courses">
          <div class="eg-header"><h2>Courses</h2></div>
          ${Object.values(data.navigation).map(area => `
            <ul class="eg-courses_container" data-studyarea="${area.studyarea}">
              ${area.courses.map(course => `
                <li class="${course.id}" ${course.isAvailable === false ? 'isavailable="false"' : 'isavailable="true"'}>
                  ${course.courseUrl ? `<a href="${course.courseUrl}">${course.coursename}</a>` : `<span>${course.coursename} </span>`}

                  ${course.subcourses && course.subcourses.length > 0 ? `
                    <div class="eg-submenu_container">
                      <ul class="eg-submenu-list">
                        ${course.subcourses.map(subcourse => `
                          <li class="eg-submenu-item">
                            ${subcourse.subcourseUrl ? `<a href="${subcourse.subcourseUrl}">${subcourse.subcoursename}</a>` : `<span>${subcourse.subcoursename}</span>`}
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </li>
              `).join('')}
            </ul>
            <a class="eg-course-button" href="${area.viewalllink}">View all ${area.studyarea} courses</a>
          `).join('')}
          <div class="eg-contact-section">
            <div class="eg-number">Call us on <a href="tel:1300272509">1300 272 509</a></div>
            <div class="eg-date">Mon to Thu - 8:30am to 5pm, Fri - 9am to 5pm</div>
          </div>
        </div>
      </div>
    </div>`;
    }

    /* Variation Init */
    function init() {
      document.body.classList.add('eg-MOL1001');
      let megamenuhtml = desktopMegaMenuHTML(desktopnavData);
      document.body.insertAdjacentHTML('beforeend', megamenuhtml);
      waitForElement('[data-studyarea="Analytics"]', function () {
        document.querySelectorAll('[data-studyarea="Analytics"]').forEach(function (e) {
          e.classList.add('eg-active');
        })
      }, 50, 15000);
      desktopclickEvents();
    }

    function desktopclickEvents() {
      live('.eg-courses_menu .eg-studyarea-item', 'click', function () {
        let clickedValue = this.getAttribute("data-studyarea");
        let allCards = document.querySelectorAll(".eg-courses_menu .eg-courses_container");
        allCards.forEach(card => card.classList.remove("eg-active"));
        document.querySelectorAll('.eg-courses_menu .eg-studyarea-item').forEach(item => item.classList.remove("eg-active"));

        this.classList.add("eg-active");
        allCards.forEach(card => {
          if (card.getAttribute("data-studyarea") === clickedValue) {
            card.classList.add("eg-active");
          }
        });
      });

      live('.eg-courses_menu .eg-courses_container [isavailable="false"]', 'click', function () {
        this.classList.toggle('eg-show');
      });
    }

    function generateMobileMenu(data) {
      return `
    <div class="eg-mobile-menu" data-menu="mobile">
        <div class="eg-courses" data-section="courses">
            <p>COURSES</p>
            <div class="eg-study-area" data-section="studyarea">
                <div class="eg-header">
                    <span class="eg-backicon">
                        <img src="https://i.ibb.co/Ng8ggM0j/Vector.png" alt="Back">
                    </span>
                    <span>courses</span>
                </div>
                ${Object.keys(data.navigation).map(studyArea => `
                    <div class="eg-study-container" data-studyarea="${studyArea}">
                        <p>${data.navigation[studyArea].studyarea}</p>
                        <div class="eg-course-container" data-container="course">
                            <div class="eg-header">
                                <span class="eg-backicon">
                                    <img src="https://i.ibb.co/Ng8ggM0j/Vector.png" alt="Back">
                                </span>
                                <span>${data.navigation[studyArea].studyarea} courses</span>
                            </div>
                            <ul class="eg-course-list" data-list="courses">
                                ${data.navigation[studyArea].courses.map(course => `
                                    <li data-course="${course.id}">
                                        ${course.courseUrl ? `<a href="${course.courseUrl}">${course.coursename}</a>` : `<span>${course.coursename}</span>`}
                                        ${course.subcourses && course.subcourses.length > 0 ? `
                                            <div class="eg-submenu-container">
                                                <ul class="eg-submenuitems">
                                                    ${course.subcourses.map(subcourse => `
                                                        <li>
                                                            ${subcourse.subcourseUrl ? `<a class="${subcourse.id}" href="${subcourse.subcourseUrl}">${subcourse.subcoursename}</a>` : `<span class="${subcourse.id}">${subcourse.subcoursename}</span>`}
                                                        </li>
                                                    `).join('')}
                                                </ul>
                                            </div>
                                        ` : ''}
                                    </li>
                                `).join('')}
                              <a class="eg-course-button" href="${data.navigation[studyArea].viewalllink}">View all ${data.navigation[studyArea].studyarea} courses</a>
                            </ul>
                        </div>
                    </div>
                `).join('')}
                <a class="eg-studyarea-button" href="https://online.monash.edu/online-courses/">View all courses</a>
            </div>
        </div>
    </div>`;
    }

    function funMobile() {
      document.body.classList.add('eg-MOL1001');
      let megamenuhtml = generateMobileMenu(desktopnavData);
      document.querySelector('#menu-main-menu > li:first-of-type').outerHTML = megamenuhtml;
      document.querySelector('.main-menu__content-wrap .main-menu__list li:last-of-type').innerText = 'Mon to Thu - 8:30am to 5pm, Fri - 9am to 5pm';
      mobclickEvents();
    }

    function mobclickEvents() {
      live('.eg-mobile-menu .eg-courses > p, .eg-mobile-menu .eg-study-area .eg-study-container>p', 'click', function () {
        parentElem = this.parentElement.children[1];
        parentElem.classList.add('eg-show');
      });

      live('.eg-mobile-menu .eg-course-list [data-course="undefined"] > span', 'click', function () {
        parentElem = this.parentElement.children[1];
        parentElem.classList.toggle('eg-show');
      });

      live('.eg-mobile-menu .eg-header', 'click', function () {
        parentElem = this.parentElement
        parentElem.classList.remove('eg-show');
      });
    }

    /* Initialize variation */
    if (window && window.screen && window.screen.width > 992) {
      waitForElement('#menu-main-menu > li:first-of-type > .sub-menu', init, 50, 15000);
    } else {
      waitForElement('#menu-main-menu > li:first-of-type', funMobile, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();






