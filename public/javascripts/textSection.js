var textSectionText = $('.textSection .text h1').textillate({
  in: { effect: 'fadeInUp', delay: 0 },
  out: { effect: 'fadeOutUp', delay: 5 },
})

document.querySelectorAll('.textSection').forEach((elem) => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: '.textSection',
      start: 'top 10%',
      scrub: true,
    },
    onStart: () => {
      ;[...elem.children[0].children].forEach((ele) => {
        ele.style.opacity = '1'
      }),
        textSectionText.textillate('in')
    },
  })
})
