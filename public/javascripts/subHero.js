let subHeroSectionImages = document.querySelector('.images')
console.log(subHeroSectionImages)
for (let z = 0; z < 54; z++) {
  let image = document.createElement('img')
  image.src = `../images/subHero/${z}.jpg`
  subHeroSectionImages.appendChild(image)
}
function subHeroAnimation() {
  var tl = gsap.timeline()
  tl.to('#subHeroText', {
    scale: 0,
    duration: 1,
  })
    .to('#subHeroText', {
      opacity: 0,
    })
    .to('#subHeroText', {
      scale: 1,
      duration: 2,
    })
    .to(subHeroSectionImages, {
      opacity: 1,
      duration: 1,
      gap: '30px',
      ease: 'cubic-bezier(.55,.21,0,.87)',
    })

  subHeroSectionImages.childNodes.forEach((element) => {
    gsap
      .to(element, {
        opacity: 1,
        scale: 1,
        transform: 'translateZ(0px)',
        duration: Math.random() * (4.5 - 4.5) + 3,
        // ease: Circ.easeIn,
        // ease: Sine.easeIn,
        ease: 'cubic-bezier(.62,.03,.38,0)',
      })
      .delay(Math.random())
  })
  document.querySelector('#subHero').onmousemove = (event) => {
    gsap.to('#subHeroText', {
      opacity: 1,
      duration: 1,
    })
    subHeroSectionImages.style.transform = `translate(calc(-50% + ${
      (window.innerWidth / 2 - event.clientX) / 10
    }px),calc(-50% + ${
      (window.innerHeight / 2 - event.clientY) / 10
    }px)) scale(0.9)`
    document.querySelector(
      '.images',
    ).style.clipPath = `circle(8% at calc(50% - ${
      (window.innerWidth / 2 - event.clientX) * 1.15
    }px) calc(50% - ${
      (window.innerHeight / 2 - event.clientY) * 1.2 +
      document.querySelector('#subHero').getBoundingClientRect().y
    }px))`
  }
  gsap
    .to(subHeroSectionImages, {
      transform: 'translate(-50%, -50%) translateZ(90vh) scale(0.9)',
      duration: 3,
      gap: '30px',
      ease: 'cubic-bezier(.55,.21,0,.87)',
    })
    .delay(0.5)
}
gsap.to(subHeroSectionImages, {
  scrollTrigger: {
    once: true,
    trigger: '#subHero',
    start: 'top 0%',
    end: 'top -40%',
    scrub: true,
  },
  onStart: subHeroAnimation,
})
