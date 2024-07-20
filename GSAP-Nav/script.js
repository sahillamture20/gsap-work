let tl = gsap.timeline();

let menu = document.querySelector("nav i");
let cross = document.querySelector("#options i");

tl.to("#options", {
    right: 0,
    duration: 0.5
})
tl.from("#options h4", {
    x:150,
    duration: 0.5,
    stagger: 0.25,
    opacity: 0
})
tl.from("#options i", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", function(){
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
})
