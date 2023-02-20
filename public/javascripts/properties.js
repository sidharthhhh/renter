function btnnAnimation() {
    gsap.to("#btnn1", {
      width: 30,
      scrollTrigger: {
        trigger: "#btnn1",
        start: "top end",
        scrub: 1,
        markers: true,
      },
    });
    gsap.to("#btnn1 h3", {
      width: 0,
      scrollTrigger: {
        trigger: "#btnn1",
        start: "top end",
        scrub: 1,
        markers: true,
      },
    });
  }
  btnnAnimation();
  