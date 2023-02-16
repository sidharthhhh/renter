function pageanimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".subHeroEffect",
      start: window.innerWidth<650?"top 10%":'top top' ,
      end: "top -50%",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });
  tl.to(
    ".img1",
    {
      scale: 0.3,
      x: -600,
      y: -400,
      ease: Power1,
    },
    "same"
  )
    .to(
      ".img2",
      {
        scale: 0.3,
        y: -400,
        ease: Power1,
      },
      "same"
    )
    .to(
      ".img3",
      {
        scale: 0.3,
        x: 600,
        y: -500,
        ease: Power1,
      },
      "same"
    )
    .to(
      ".img4",
      {
        // scale: 0.3,
        x: -600,
        ease: Power1,
      },
      "same"
    )
    .to(
      ".img6",
      {
        // scale:0.3,
        x: 600,
        ease: Power1,
      },
      "same"
    )
    .to(
      ".img5",
      {
        scale: 1.6,
        y: -200,
        zIndex: 9,
        //    markers: true,
        //    start:"top 30%",
        scale: 1.2,
      },
      "same"
    );
}
pageanimation();
