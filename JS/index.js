window.onscroll = function() {scrollFunction()};
let nav         = document.querySelector("nav")
let nav_link    = document.querySelectorAll(".nav-link");
let brand_logo  = document.querySelector("#brand-logo");
let hamburger   = document.querySelector("#hamburger");
let nav_btn     = document.querySelector("#nav-btn")

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "#1C4F94";
    nav_link.forEach(element => {
        element.style.color = "#fff";
        element.style.setProperty('--nav-link-line','#fff');
    });
    
    hamburger.style.color = "#ffffff";

    brand_logo.src = "./assets/logo-white.svg";
  } else {
    nav.style.backgroundColor = "";
    nav_link.forEach(element => {
        element.style.color = "#000";
        element.style.setProperty('--nav-link-line','#000');
    });
    hamburger.style.color = "#0B6E8E";
    brand_logo.src = "./assets/logo.svg";
  }
} 
