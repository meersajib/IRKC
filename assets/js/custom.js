// Fixed navigation
const mainNav = document.querySelector(".main-nav");

// Function to add or remove the 'fixed' class based on scroll position
function fixNav() {
  if (window.scrollY > mainNav.offsetHeight) {
    mainNav.classList.add("fixed");
  } else {
    mainNav.classList.remove("fixed");
  }
}

// Listen for the scroll event
window.addEventListener("scroll", fixNav);

// Gallery Slider
const swiper = new Swiper(".gallery-slider", {
  loop: true,
  spaceBetween: 15,
  pagination: false,
  centeredSlides: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".gallery-swiper-button-next",
    prevEl: ".gallery-swiper-button-prev",
  },

  // breakpoints
  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
});

// Slider
const swiper2 = new Swiper(".kolektyvai-slider", {
  loop: true,
  spaceBetween: 15,
  pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".kolektyvai-swiper-button-next",
    prevEl: ".kolektyvai-swiper-button-prev",
  },

  // breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper(".naujienos-slider", {
  loop: true,
  spaceBetween: 15,
  pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".naujienos-swiper-button-next",
    prevEl: ".naujienos-swiper-button-prev",
  },

  // breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
});

const swiper4 = new Swiper(".singing-slider", {
  loop: true,
  spaceBetween: 15,
  pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".singing-swiper-button-next",
    prevEl: ".singing-swiper-button-prev",
  },

  // breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
});

const swiper5 = new Swiper(".client-slider", {
  loop: true,
  pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1190: {
      slidesPerView: 5,
      spaceBetween: 97,
    },
  },
});

//desktop hover navigation
const parentMenuItems = document.querySelectorAll(".main-menu > li");

parentMenuItems.forEach((item) => {
  // Handle mouseenter event
  item.addEventListener("mouseenter", () => {
    const childMenu = item.querySelector("ul");
    if (childMenu) {
      childMenu.classList.add("expand-desktop-child-menu");
    }
  });

  // Handle mouseleave event
  item.addEventListener("mouseleave", () => {
    const childMenu = item.querySelector("ul");
    if (childMenu) {
      childMenu.classList.remove("expand-desktop-child-menu");
    }
  });

  // Handle click event
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    const childMenu = item.querySelector("ul");
    if (childMenu) {
      if (childMenu.classList.contains("expand-mobile-child-menu")) {
        childMenu.classList.remove("expand-mobile-child-menu");
      } else {
        document
          .querySelectorAll(".main-menu ul.expand-mobile-child-menu")
          .forEach((openMenu) => {
            openMenu.classList.remove("expand-mobile-child-menu");
          });
        childMenu.classList.add("expand-mobile-child-menu");
      }
    }
  });

  const childMenu = item.querySelector("ul");
  if (childMenu) {
    childMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

document.addEventListener("click", () => {
  document
    .querySelectorAll(".main-menu ul.expand-mobile-child-menu")
    .forEach((openMenu) => {
      openMenu.classList.remove("expand-mobile-child-menu");
    });
});

// Mobile navigation
document
  .getElementById("mobile_navigation")
  .addEventListener("click", function () {
    document.body.classList.toggle("expand-mobile-menu");
    document
      .getElementById("child")
      .classList.remove("expand-mobile-child-menu");
  });

/// Accordion expand
document.querySelectorAll(".accordion li").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    document
      .querySelectorAll(".accordion li")
      .forEach((li) => li.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Expand side-nav
document.querySelectorAll(".side-nav-parent li").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    document
      .querySelectorAll(".side-nav-parent li")
      .forEach((li) => li.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});
