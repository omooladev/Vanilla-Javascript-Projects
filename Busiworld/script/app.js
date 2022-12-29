const HiddenItems =
  document.querySelectorAll(".hidden");
const Header = document.querySelector(".header");
const mainBody = document.querySelector(".main");
const footer = document.querySelector(".footer");
const checkBox = document.querySelector(".menu");
const mobileMenu = document.querySelector(
  ".mobile-menu"
);

let isMenuActive;
mobileMenu.addEventListener("click", () => {
  isMenuActive = !checkBox.checked;
});

const closeNavigationHandler = () => {
  if (isMenuActive) {
    checkBox.checked = false;
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        return entry.target.classList.add("show");
      } else {
        return entry.target.classList.remove(
          "show"
        );
      }
    });
  }
);

HiddenItems.forEach((el) => observer.observe(el));
mainBody.addEventListener(
  "click",
  closeNavigationHandler
);
footer.addEventListener(
  "click",
  closeNavigationHandler
);
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 15) {
    Header.classList.add("sticky");
  } else {
    Header.classList.remove("sticky");
  }
});
