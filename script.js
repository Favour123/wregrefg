let tablinks =document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let fixed =document.querySelector(".fix");
let Top =document.querySelector(".top");
let Logo = document.querySelector( ".logo" ); 
// Write JavaScript code here
document.addEventListener("DOMContentLoaded",() =>{
  const rightArrow = document.getElementById('right');
  const leftArrow = document.getElementById('left');
   const carousel = document.querySelector('.rooms');

   // Function to handle clicking on the right arrow
   rightArrow.addEventListener('click', function () {
       carousel.scrollBy({
           left: 100,
           behavior: 'smooth'
       });
   });
    leftArrow.addEventListener('click', function () {
       carousel.scrollBy({
           left: -100, // Adjust this value as needed for desired scroll distance
           behavior: 'smooth'
       });
   });
});

document.addEventListener("DOMContentLoaded", () => {
     let Navlinks = document.querySelectorAll(".nav-link");
     const currentPage = location.pathname.split("/").pop();
     
     Navlinks.forEach(link => {
       if (link.getAttribute("href") === currentPage) {
         link.classList.add("active");
         link.style.color = "lightseagreen";
       }
       link.addEventListener("click", (event) => {
         event.preventDefault();
         const clickedLink = event.target;
         Navlinks.forEach(link => link.classList.remove("active"));
         clickedLink.classList.add("active");
         setTimeout(() => {
           window.location.href = clickedLink.getAttribute("href");
         }, 300);
       });
     });
   });
  
window.onscroll = function() {
     if (window.scrollY > 20) {
          fixed.classList.add("show");
          fixed.classList.add("slide-bottom");
          Logo.style.display = window.innerWidth < 768 ? "block" : "none";
          fixed.style.zIndex = "100000";
          fixed.style.backGround = "white";
          Top.style.display = "none";
          // innerLinks.forEach(function(link) 
          //     link.classList.add("text-dark");
          // });
      } else {
          fixed.classList.remove("show");
          fixed.classList.remove("slide-bottom");
          Top.style.display = "block";
          fixed.style.backGround = "white";
          Logo.style.display= "block";
          // innerLinks.forEach(function(link) {
          //     link.classList.remove("text-dark");
          // });
      }
 };

function opentab(tabname){
      for (const tablink of tablinks) {
        tablink.addEventListener('click',() =>{
          tablink.style.color = "#31cec3";
            });
           tablink.classList.remove("active-link");
           tablink.style.color = "black"; 
      }
      for (const tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab");
}
