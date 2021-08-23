"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new WOW({
    offset: 110
  }).init(); // -------------Sliders--------------------------

  var swiper = new Swiper('.reviews__container', {
    autoHeight: true,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var phone = document.querySelector('#phone');
  phone.addEventListener('input', function (e) {
    if (phone.value.length > 15) {
      phone.value = phone.value.slice(0, -1);
    }

    phone.value = phone.value.replace(/[^\d|^\s]/g, '');
  });
  var timerBlock = document.querySelector('.timer'),
      timerText = document.querySelector('.timer__text'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds');
  var timer = setInterval(function () {
    seconds.textContent -= 1;

    if (seconds.textContent < 0) {
      seconds.textContent = 59;
      minutes.textContent -= 1;
    }

    if (seconds.textContent == 0 && minutes.textContent == 0) {
      removeTimer();
    }

    if (seconds.textContent.length < 2) {
      seconds.textContent = '0' + seconds.textContent;
    }

    if (minutes.textContent.length < 2) {
      minutes.textContent = '0' + minutes.textContent;
    }
  }, 1000);

  var removeTimer = function removeTimer() {
    clearInterval(timer);
    timerBlock.remove();
    timerText.textContent = "Акция окончена.";
  }; // -------------Smooth scroll--------------------------


  var pageup = document.querySelector('.pageup');
  window.addEventListener('scroll', checkOffset);

  function checkOffset() {
    if (window.pageYOffset > 700) {
      pageup.classList.add('show');
    } else {
      pageup.classList.remove('show');
    }
  }

  checkOffset();
  pageup.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (elm) {
    elm.addEventListener("click", function (event) {
      event.preventDefault();
      var blockId = this.getAttribute('href'),
          blockOffset = document.querySelector("".concat(blockId)).offsetTop + 200;
      window.scrollTo({
        top: blockOffset,
        behavior: "smooth"
      });
    });
  });
});