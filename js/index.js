// Your code goes here

// Event Listener 1 & 2
const moveBus = document.querySelector("#mainBus");

moveBus.addEventListener("mouseenter", () => {
    moveBus.style.transform = "scale(1.2)";
    moveBus.style.transition = "transform 1s";
})
moveBus.addEventListener("mouseleave", () => {
    moveBus.style.transform = "scale(1)";
})

// Event Listener 3
const clickNav = document.querySelector(".main-navigation");

clickNav.addEventListener("contextmenu", () => {
    alert ("Don't click that!");
})

// Event Listener 4
document.querySelectorAll(".text-content h2").forEach(el => {
    el.addEventListener("click", function() {
        el.style.color = "dodgerblue";
    })
})

// //Event Listener 5
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("dblclick", function () {
        el.style.display = "none";
    })
})

//Event Listener 6
const mapImage = document.querySelector("#mapImg");

window.addEventListener("resize", () => {
    mapImage.src = "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
})

//Event Listener 7
const spinImg = document.querySelector("#destImg");

spinImg.addEventListener("mouseleave", () => {
    spinImg.style.transform = "rotate(0.5turn)";
    spinImg.style.transition = "transform 2s";
})

//Event Listener 8
const seeYa = document.querySelector("#funImg");

seeYa.addEventListener("click", () => {
    seeYa.style.display = "none";
})

//Event Listener 9
const logo = document.querySelector(".logo-heading");
const navBg = document.querySelector(".main-navigation");

navBg.addEventListener("mouseover", () => {
    navBg.style.backgroundColor = "hotpink";
})

navBg.addEventListener("mouseout", () => {
    navBg.style.backgroundColor = "white";
})


//Event Listener 10
logo.addEventListener("mouseover", (event) => {
    navBg.style.backgroundColor = "dodgerblue";
    event.stopPropagation();
})


//stop the nav items
const navItems = document.querySelectorAll(".nav a");

navItems.forEach(function(el){
    el.addEventListener("click", function(e){
        console.log("a nav item was clicked");
        e.preventDefault();
    })
})