function animation1() {
  let tl1 = gsap.timeline();

  tl1.from("nav #logo, nav #options h4, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    delay: 0.5,
  });

  tl1.from(
    "#hero #left",
    {
      x: -150,
      opacity: 0,
      ease: "power3.in",
      duration: 0.5,
    },
    "hero"
  );

  tl1.from(
    "#hero #right",
    {
      x: 150,
      opacity: 0,
      ease: "power3.in",
      duration: 0.5,
    },
    "hero"
  );

  tl1.from("#company img", {
    y: 50,
    opacity: 0,
    ease: "bounce.out",
    duration: 0.3,
    stagger: 0.2,
  });
}

function animation2() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from("#services #heading", {
    y: 30,
    opacity: 0,
    duration: 0.3,
  });

  tl2.from(
    ".line1-left",
    {
      x: -200,
      opacity: 0,
    },
    "line1"
  );
  tl2.from(
    ".line1-right",
    {
      x: 200,
      opacity: 0,
    },
    "line1"
  );

  tl2.from(
    ".line2-left",
    {
      x: -200,
      opacity: 0,
    },
    "line2"
  );
  tl2.from(
    ".line2-right",
    {
      x: 200,
      opacity: 0,
    },
    "line2"
  );
}

function animation3() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#proposal",
      scroller: "body",
      start: "top 80%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl3.from("#proposal", {
    opacity: 0,
    duration: 0.5,
  });

  tl3.from(
    "#proposal #content",
    {
      x: -100,
      opacity: 0,
      ease: "elastic.out(0.7, 0.3)",
      duration: 0.5,
      stagger: 0.3,
    },
    "proposal"
  );
  tl3.from(
    "#proposal img",
    {
      x: 100,
      opacity: 0,
      ease: "elastic.out(0.7, 0.3)",
      duration: 0.5,
      stagger: 0.3,
    },
    "proposal"
  );
}

function animation4(){
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger:"#cases",
            scroller:"body",
            // markers: true,
            start:"top 50%",
            end:"top 0%",
            scrub: 2
        }
    })
    
    tl4.from("#cases #heading",{
        y:150,
        opacity: 0,
        duration: 0.3,
    })
    
    tl4.from("#case", {
        y: 30,
        opacity:0, 
        duration:0.3,
    })
    tl4.from("#case .card1, #case .card2, #case .card3", {
        y: 50,
        opacity:0,
        duration:1,
        stagger: 0.5
    })
}
animation1()
animation2()
animation3()
animation4()

