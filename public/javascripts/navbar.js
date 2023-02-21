var textAnt = $('#menu ul h1').textillate({
  autoStart: true,
  in: { effect: 'fadeInUp', delay: 10 },
  out: { effect: 'fadeOutUp', delay: 5 },
})
var toggleFlag = true
var temp = []
document.querySelector('#menuToggle').addEventListener('click', (event) => {
  if (toggleFlag) {
    document.querySelector('#menuToggle').classList.remove('ri-menu-line')
    document.querySelector('#menuToggle').classList.add('ri-close-line')
    document.querySelector('#menuToggle').style.color = '#fff'
    document.querySelector('#menu').style.right = `0px`
    document.querySelector('#menu').style.left = `0px`
    textAnt.textillate('in')
    document.querySelectorAll('.menuButtons a').forEach((elm) => {
      elm.classList.remove('btn-outline-dark')
      elm.classList.add('btn-outline-light')
    })
  } else {
    textAnt.textillate('out')
    document.querySelector('#menuToggle').classList.add('ri-menu-line')
    document.querySelector('#menuToggle').classList.remove('ri-close-line')
    setTimeout(() => {
      document.querySelector('#menuToggle').style.color = '#000'
      document.querySelector('#menu').style.right = `${window.innerWidth}px`
      document.querySelector('#menu').style.left = `-${window.innerWidth}px`
      document.querySelectorAll('.menuButtons a').forEach((elm) => {
        elm.classList.add('btn-outline-dark')
        elm.classList.remove('btn-outline-light')
      })
    }, 700)
  }
  toggleFlag = !toggleFlag
})
