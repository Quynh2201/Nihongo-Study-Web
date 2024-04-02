const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
}

/**preloader */
const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function() {
    preloader.classList.add("load");
    circle.style.animation = "none";
    document.body.classList.add("load");
})

/**navbar toggler for mobile */
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function(){
    overlay.classList.toggle("active");
}

addEventOnElements(navToggler, "click", toggleNavbar);

/**add active class on header when window scroll down to 100px */
const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);