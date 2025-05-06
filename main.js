const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });
    selectCards[index].classList.add("show__info");
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  on: {
    slideChange: function () {
      updateSpecs(this.slides[this.activeIndex]);
    },
  },
});

function refreshPage(event) {
  // Prevent the default action (which is navigating to the href)
  event.preventDefault();
  // Reload the current page
  location.reload();
}

// Function to update specs from active slide
function updateSpecs(activeSlide) {
  if (!activeSlide) return;

  const specs = {
    price: activeSlide.getAttribute("data-price"),
    speed: activeSlide.getAttribute("data-speed"),
    mileage: activeSlide.getAttribute("data-mileage"),
    seats: activeSlide.getAttribute("data-seats"),
    gear: activeSlide.getAttribute("data-gear"),
  };

  if (specs.price) document.getElementById("select-price").textContent = specs.price;
  if (specs.speed) document.getElementById("select-speed").textContent = specs.speed;
  if (specs.mileage) document.getElementById("select-mileage").textContent = specs.mileage;
  if (specs.seats) document.getElementById("select-seats").textContent = specs.seats;
  if (specs.gear) document.getElementById("select-gear").textContent = specs.gear;
}

// On initial load
window.addEventListener("DOMContentLoaded", () => {
  const activeSlide = document.querySelector(".swiper-slide-active");
  updateSpecs(activeSlide);
});

// Scroll Reveal
ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500,
});


const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000,
});