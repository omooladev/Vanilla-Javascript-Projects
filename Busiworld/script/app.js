const HiddenItems =
  document.querySelectorAll(".hidden");
const Header = document.querySelector(".header");

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

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 15) {
    Header.classList.add("sticky");
  } else {
    Header.classList.remove("sticky");
  }
});
