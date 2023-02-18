function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger)
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  })
  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  })
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}
// locoTrigger()
