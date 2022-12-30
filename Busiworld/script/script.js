const body = document.querySelector("body"),
  darkMode = document.querySelector(".darkLight");
searchBox = document.querySelector(".searchBox");

const darkModeToggle = () => {
  darkMode.classList.toggle("active");
  body.classList.toggle("dark");
};

darkMode.addEventListener(
  "click",
  darkModeToggle
);
