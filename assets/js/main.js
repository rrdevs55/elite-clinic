/***************************************************
==================== JS INDEX ======================
01. Service List Hover Animation

****************************************************/


(function ($) {
  "use strict";



  /* === rr-btn-primary (index) === */
  const buttons = document.querySelectorAll(".rr-btn-primary");
  buttons.forEach(button => {
    const textEl = button.querySelector(".text");

    if (!textEl) return;

    const hasIcon = button.querySelector(".left-icon") || button.querySelector("i");
    if (hasIcon) {
      button.classList.add("has-icon");
    }

    const text = textEl.textContent;
    textEl.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      const delay = (text.length - index) * 0.05;
      span.style.transitionDelay = `${delay}s`;
      textEl.appendChild(span);
    });

    button.addEventListener("mouseenter", () => {
      const spans = textEl.querySelectorAll("span");
      spans.forEach(span => {
        span.classList.remove("animate");
        void span.offsetWidth;
        span.classList.add("animate");
      });
    });
  });


  // Magnific Popup or similar plugin
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });



  // Popup Search Box
  $(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
  });

  $(window).scroll(function () {
    if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
      $(".search__popup").removeClass("search-opened");
    }
  });

  $(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
  });



  // Text Invert With Scroll 
  const split = new SplitText(".text-invertt", {
    type: "lines"
  });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 60%',
        end: "bottom center",
      }
    });
  });

  // rr_title_anim 
  if (document.querySelectorAll(".animation").length > 0) {
    let animation = document.querySelectorAll(".animation");

    animation.forEach((animation) => {
      let split = new SplitText(
        animation.querySelector(".rr_title_animation"),
        { type: "chars, words" }
      ),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: animation,
            start: "top bottom",
            toggleActions: "play none none reverse",
            onEnter: () => {
              tl.timeScale(2.3);
            },
            onLeaveBack: () => {
              tl.timeScale(2.3).reverse();
            },
          },
        });

      tl.to(animation.querySelector(".sup_animation"), {
        opacity: 1,
        x: -50,
        ease: "back",
      }).from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.05,
      });
    });
  }


  // GSAP title animation
  if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none '
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1
        });
      });
    }
  }


  //fade-top gsap animation
  if ($(".fade-wrapper").length > 0) {
    $(".fade-wrapper").each(function () {
      var section = $(this);
      var fadeItems = section.find(".fade-top");

      fadeItems.each(function (index, element) {
        var delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }

  document.querySelectorAll("[data-background]").forEach((el) => {
    el.style.backgroundImage = `url(${el.getAttribute("data-background")})`;
  });



  // team-section-active
  var testimonial_3_active = new Swiper(".services-2__active", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    // autoplay: true,
    speed: 2000,
    centeredSlides: false,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });


  var testimonial_3_active = new Swiper(".why-choose-us-2-active", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },

      1400: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });


  var work_section_active = new Swiper(".work-section-3__active", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });



  $(function () {
    let pricingMonthlyBtn = $("#Monthly"),
      pricingYearlyBtn = $("#Annually"),
      pricingSwitch = $("#checkbox"),
      pricingValues = $(".pricing-4__price h2");

    // --- Click by text buttons (Monthly / Annually) ---
    if (pricingMonthlyBtn.length && pricingYearlyBtn.length && pricingValues.length) {
      pricingMonthlyBtn.on("click", function () {
        updatePricingValues("monthly");
        pricingMonthlyBtn.addClass("active");
        pricingYearlyBtn.removeClass("active");
        pricingSwitch.prop("checked", false);
      });

      pricingYearlyBtn.on("click", function () {
        updatePricingValues("yearly");
        pricingYearlyBtn.addClass("active");
        pricingMonthlyBtn.removeClass("active");
        pricingSwitch.prop("checked", true);
      });
    }

    // --- Checkbox toggle ---
    if (pricingSwitch.length && pricingValues.length) {
      pricingSwitch.on("change", function () {
        if (pricingSwitch.is(":checked")) {
          updatePricingValues("yearly");
          pricingYearlyBtn.addClass("active");
          pricingMonthlyBtn.removeClass("active");
        } else {
          updatePricingValues("monthly");
          pricingMonthlyBtn.addClass("active");
          pricingYearlyBtn.removeClass("active");
        }
      });
    }
    function updatePricingValues(option) {
      pricingValues.each(function () {
        const pricingValue = $(this);
        const yearlyValue = pricingValue.attr("data-Annually");
        const monthlyValue = pricingValue.attr("data-Monthly");

        const newValue = option === "monthly" ? monthlyValue : yearlyValue;
        pricingValue.fadeOut(150, function () {
          pricingValue.html(newValue).fadeIn(150);
        });
      });
    }
  });




  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.booking__tab');
    const panelCalendar = document.querySelector('[data-panel="calendar"]');
    const panelSlots = document.querySelector('[data-panel="slots"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        // On small screens, toggle which panel shows
        if (window.matchMedia('(max-width: 560px)').matches) {
          if (tab.dataset.tab === 'calendar') {
            panelCalendar.style.display = '';
            panelSlots.style.display = 'none';
          } else {
            panelCalendar.style.display = 'none';
            panelSlots.style.display = '';
          }
        }
      });
    });


    const calendarDaysEl = document.getElementById('calendarDays');
    const monthLabelEl = document.querySelector('.calendar__month');
    const prevBtn = document.querySelector('.calendar__nav--prev');
    const nextBtn = document.querySelector('.calendar__nav--next');

    let current = new Date(2024, 0, 12);
    let selectedDate = 12;

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function renderCalendar(date, selectedDay) {
      const year = date.getFullYear();
      const month = date.getMonth();

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      monthLabelEl.textContent = `${monthNames[month]} ${selectedDay}, ${year}`;

      calendarDaysEl.innerHTML = '';

      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('span');
        empty.className = 'calendar__day calendar__day--empty';
        calendarDaysEl.appendChild(empty);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const btn = document.createElement('button');
        btn.className = 'calendar__day';
        btn.textContent = day;
        btn.dataset.day = day;

        if (day === selectedDay) {
          btn.classList.add('calendar__day--active');
        }

        btn.addEventListener('click', () => {
          selectedDate = day;
          renderCalendar(current, selectedDate);
        });

        calendarDaysEl.appendChild(btn);
      }
    }

    prevBtn.addEventListener('click', () => {
      current.setMonth(current.getMonth() - 1);
      selectedDate = 1;
      renderCalendar(current, selectedDate);
    });

    nextBtn.addEventListener('click', () => {
      current.setMonth(current.getMonth() + 1);
      selectedDate = 1;
      renderCalendar(current, selectedDate);
    });

    renderCalendar(current, selectedDate);

    /* ---------- Slots ---------- */
    const slotButtons = document.querySelectorAll('.slot');
    slotButtons.forEach(slot => {
      slot.addEventListener('click', () => {
        slotButtons.forEach(s => s.classList.remove('is-active'));
        slot.classList.add('is-active');
      });
    });

    /* ---------- Select Specialty button ---------- */
    const doctorSelect = document.getElementById('selectDoctor');
    const specialtySelect = document.getElementById('selectSpecialty');
    const submitBtn = document.getElementById('btnSelectSpecialty');

    submitBtn.addEventListener('click', () => {
      const activeSlot = document.querySelector('.slot.is-active');

      if (!doctorSelect.value || !specialtySelect.value) {
        alert('অনুগ্রহ করে Doctor এবং Specialty সিলেক্ট করুন।');
        return;
      }

      alert(
        `Appointment booked!\nDate: ${monthLabelEl.textContent}\nTime: ${activeSlot ? activeSlot.dataset.slot : 'N/A'}\nDoctor: ${doctorSelect.options[doctorSelect.selectedIndex].text}\nSpecialty: ${specialtySelect.options[specialtySelect.selectedIndex].text}`
      );
    });

  });

  // brand slider
  var swiper = new Swiper(".brand-3__slider", {
    slidesPerView: "auto",
    spaceBetween: 44,
    centeredSlides: true,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    }
  });

  // brand slider
  var swiper = new Swiper(".instagram-4__slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    }
  });

  // our-treatment-4 
  const items = document.querySelectorAll(".our-treatment-4__item");
  const image = document.querySelector(".our-treatment-4__thumb .image");

  items.forEach(item => {

    item.addEventListener("click", function () {
      items.forEach(i => i.classList.remove("active"));
      this.classList.add("active");

      const newImg = this.getAttribute("data-img");
      image.style.animation = "none";

      setTimeout(() => {
        image.src = newImg;
        image.style.animation = "fadeSimple 0.4s ease";
      }, 50);

    });

  });


  var work_section_active = new Swiper(".advanced-5__active", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });


  var work_section_active = new Swiper(".our-experts-5__active", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".our-experts-5-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });
  var service_5__active = new Swiper(".service-5__active", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".our-experts-5-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });


  var core_specialists__active = new Swiper(".core-specialists__active", {
    spaceBetween: 20,
    loop: true,
    // autoplay: true,
    speed: 2000,
    slidesPerView: 2,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".our-experts-5-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      993: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

      // brand slider
      var swiper = new Swiper(".brand__slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 10000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        }
      });
  


  document.addEventListener('DOMContentLoaded', function () {
    const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const minInput = document.getElementById('minInput');
    const maxInput = document.getElementById('maxInput');
    const fill = document.getElementById('rangeFill');
    const MAX = 5000;

    if (!minRange || !maxRange || !minInput || !maxInput || !fill) return;

    function updateFill() {
      fill.style.left = (minRange.value / MAX * 100) + '%';
      fill.style.right = (100 - maxRange.value / MAX * 100) + '%';
    }

    minRange.addEventListener('input', function () {
      if (+this.value > +maxRange.value - 10) this.value = +maxRange.value - 10;
      minInput.value = this.value;
      updateFill();
    });

    maxRange.addEventListener('input', function () {
      if (+this.value < +minRange.value + 10) this.value = +minRange.value + 10;
      maxInput.value = this.value;
      updateFill();
    });

    minInput.addEventListener('change', function () {
      minRange.value = this.value;
      updateFill();
    });

    maxInput.addEventListener('change', function () {
      maxRange.value = this.value;
      updateFill();
    });

    updateFill();
  });


  // progress-outer

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".progress-outer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const outer = entry.target;

            const bar = outer.querySelector(".progress-bar");
            const num = outer.querySelector(".progress-num");

            const value = bar.dataset.width;

            // text set
            num.textContent = value + "%";

            // animate bar
            bar.style.width = value + "%";

            // animate number position
            num.style.left = value + "%";

            observer.unobserve(outer); // ekbar animate hole ar na
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  });


  /* image compare js ***/
  var ctrl = jQuery('.filter__container .comparison-ctrl');
  var pic_right = jQuery('.filter__container .pic--right');
  Draggable.create(ctrl, {
    bounds: ctrl.parent(),
    type: "x",
    onDrag: function () {
      pic_right.css('left', 'calc(50% + ' + (this.x - 2) + 'px)');
    }
  });




})(jQuery);


