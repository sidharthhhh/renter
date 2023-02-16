var toggleFlag = true
document.querySelector('#menuToggle').addEventListener('click', (event) => {
  if (toggleFlag) {
    document.querySelector('#menu').style.right = `${window.innerWidth * 0.4}px`
    document.querySelector('#menu').style.left = `0px`
  } else {
    document.querySelector('#menu').style.right = `${window.innerWidth}px`
    document.querySelector('#menu').style.left = `-${window.innerWidth * 0.6}px`
  }
  toggleFlag = !toggleFlag
})
