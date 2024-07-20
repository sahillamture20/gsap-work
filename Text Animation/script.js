function breakTheText() {

    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    console.log(h1Text);

    let clutter = "";

    let splittedText = h1Text.split("");

    splittedText.forEach(function (e, id) {
        // Text for Animation1
        // clutter += `<span>${e}</span>`;

        // Text for Animation2
        if(id<splittedText.length/2){
            clutter += `<span class="left">${e}</span>`
        }else{
            clutter += `<span class="right">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}
breakTheText();

// Animation1
// gsap.from("h1 span", {
//     y: 50,
//     duration: 1,
//     delay: 0.3,
//     stagger: 0.15,
//     opacity: 0,
//     ease: "elastic.out(0.5,0.3)"
// })

// Animation2
// gsap.from("h1 .left", {
//         y: 50,
//         duration: 1,
//         delay: 0.3,
//         stagger: 0.15,
//         opacity: 0,
//         ease: "elastic.out(0.5,0.3)"
//     })
// gsap.from("h1 .right", {
//         y: -50,
//         duration: 1,
//         delay: 0.3,
//         stagger: -0.15,
//         opacity: 0,
//         ease: "elastic.out(0.5,0.3)"
// })

// Animation3
gsap.from("h1 .left", {
    y: 50,
    duration: 1,
    delay: 0.3,
    stagger: 0.1,
    opacity: 0,
    ease: "power3.out"
})

gsap.from("h1 .right", {
    y: 50,
    duration: 1,
    delay: 0.3,
    stagger: -0.1,
    opacity: 0,
    ease: "power3.out"
})