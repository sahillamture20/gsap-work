let tl = gsap.timeline();

tl.from("nav h2", {
    y: -50,
    opacity: 0,
    ease: "power.inOut",
    duration: 1,
    delay: 0.5
})

tl.from("nav ul li", {
    y: -50,
    opacity: 0,
    ease: "power.inOut",
    duration: 1,
    stagger: 0.2
})
