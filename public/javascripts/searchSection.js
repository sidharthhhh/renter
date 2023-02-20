let images2 = [
  '../images/cursor/1-SDK_NieuwBergen_AfterDark_copyrightWAX-3-1-480x600.jpg',
  '../images/cursor/2104_SDK_NieuwBergen_Hypotenuse_Rouge-480x600.jpg',
  '../images/cursor/2105_SDK_NieuwBergen_NoMorningNoGlory_Violet-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Catabaticwind_Jaune-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Collective_BLEU-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Eden_copyrightWAX-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Gateway_copyrightWAX-2-1-480x600.jpg',
]
let i = 0
let time = 0
let prevTime = 0
let flag = 0
let cursor = document.querySelector('#cursor')
let searchSection = document.querySelector('#searchSection')
let prevX = 0
let prevY = 0
document.querySelector('#searchSection').onmousemove = (event) => {
  let x = event.clientX
  let y = event.clientY
  if (Math.abs(x - prevX) > 80 || Math.abs(y - prevY) > 80) {
    prevX = x
    prevY = y

    let newImage = document.createElement('img')
    // let tempArr = `${document.querySelector('#main').style.transform}`.split(
    //   ',',
    // )
    let tempY = searchSection.getBoundingClientRect().y
    newImage.src = images2[i++ % 7]
    newImage.style.top = `${y}px`
    newImage.style.left = `${x}px`
    searchSection.appendChild(newImage)
    setTimeout(() => {
      newImage.style.opacity = 0
      setTimeout(() => {
        searchSection.removeChild(newImage)
      }, 300)
    }, 500)
    document.querySelectorAll('#searchSection img').forEach((elem) => {
      elem.style.top = `${
        elem.getBoundingClientRect().y +
        (-elem.getBoundingClientRect().y + prevY) / 5
      }px`
      elem.style.left = `${
        elem.getBoundingClientRect().x +
        (-elem.getBoundingClientRect().x + prevX) / 5
      }px`
    })
  }
}

function searchSectionTextAnimation() {
  $('#searchSection .text h1').textillate({
    minDisplayTime: 5000,
    initialDelay: 0, // set the initial delay to 0
    autoStart: true,
    in: { effect: 'fadeInDownBig', delay: 1, delayScale: 15 },
  })
}
searchSectionTextAnimation()
var showFlag = true
function showSearch() {
  if (showFlag)
    gsap.to('#searchSection', {
      clipPath: 'circle(100% at 50% 50%)',
      duration: 0.7,
      ease: 'cubic-bezier(.55,.21,0,.87)',
    })
  else {
    gsap.to('#searchSection', {
      clipPath: 'circle(2% at 93% 10%)',
      duration: 0.7,
      ease: 'cubic-bezier(.55,.21,0,.87)',
    })
  }
  showFlag = !showFlag
}
document
  .querySelector('#searchShowButton')
  .addEventListener('click', (event) => {
    showSearch()
  })
