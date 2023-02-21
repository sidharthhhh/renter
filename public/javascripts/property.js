function btnnAnimation() {
  gsap.to('#btnn1', {
    width: 80,
    borderRadius: 40,
    transform: `translateX(${
      document.querySelector('.left_section').getBoundingClientRect().width /
        2 -
      50
    }px)`,
    scrollTrigger: {
      trigger: '#btnn1',
      start: 'top end',
      scrub: 1,
    },
  })
  gsap.to('#btnn1 h3 span', {
    width: 0,
    padding: 0,
    scrollTrigger: {
      trigger: '#btnn1',
      start: 'top end',
      scrub: 1,
    },
  })
}
console.log(
  document.querySelector('.left_section').getBoundingClientRect().width / 2,
)
btnnAnimation()
