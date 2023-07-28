const body = document.querySelector("body"),
  darkMode = document.querySelector(".darkLight");
searchBox = document.querySelector(".searchBox");

sideBarOpen = document.querySelector(
  ".sideBarOpen"
);
sideBarClose = document.querySelector(
  ".sideBarClose"
);

const darkModeToggle = () => {
  darkMode.classList.toggle("active");
  body.classList.toggle("dark");
};

darkMode.addEventListener(
  "click",
  darkModeToggle
);

sideBarOpen.addEventListener("click", () => {
  Header.classList.add("active");
});
sideBarClose.addEventListener("click", () => {
  Header.classList.remove("active");
});
