let initialSGVales = "M 10 100 Q 500 100 990 100";

let finalSVGValues = "M 10 100 Q 500 100 990 100";

let string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d:path},
        duration: 0.5,
        ease: "power3.out"
    })
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d:finalSVGValues},
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
});