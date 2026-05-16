"use strict";
// const FOUNDER = document.querySelectorAll(".sect6cont");
// const Menu_links = document.querySelector(".menu");
// const Nav_links = document.querySelector(".nav-links");
// // const Project_breakdown=document.querySelector(".project")
// // const join=document.querySelector(".join")
// // const donate=document.querySelector(".donate")
//<----------ELEMENTS ---------->
const loader = document.querySelector(".loader");
const bodyWrapper = document.querySelector(".body-wrapper");
// const main = document.querySelector(".main");
// var i;
// // Project_breakdown.addEventListener("click",()=>{
// //     join.innerHTML="Donate"
// // })
// function init() {
//   setTimeout(() => {
//     loader.style.display = "none";
//     loader.style.opacity = 0;
//     main.style.display = "block";
//     setTimeout(() => (main.style.opacity = 1), 10);
//   }, 4000);
// }
// Menu_links.addEventListener("click", () => {
//   Menu_links.classList.toggle("active");
//   Nav_links.classList.toggle("active");
// });
// init();
// for (i = 0; i < FOUNDER.length; i++) {
//   console.log(FOUNDER[i]);
//   FOUNDER[i].addEventListener("click", ACTIVE);
// }
// function ACTIVE() {
//   removeallclasses();
//   this.classList.add("active");
// }
// function removeallclasses() {
//   for (i = 0; i < FOUNDER.length; i++) {
//     FOUNDER[i].classList.remove("active");
//   }
// }
window.addEventListener("load", () => {
    loader.classList.add("hide");
    bodyWrapper.classList.add("show");
    document.body.classList.remove("fixed");
});
