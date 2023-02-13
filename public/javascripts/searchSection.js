var images = [
  '../images/cursor/1-SDK_NieuwBergen_AfterDark_copyrightWAX-3-1-480x600.jpg',
  '../images/cursor/2104_SDK_NieuwBergen_Hypotenuse_Rouge-480x600.jpg',
  '../images/cursor/2105_SDK_NieuwBergen_NoMorningNoGlory_Violet-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Catabaticwind_Jaune-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Collective_BLEU-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Eden_copyrightWAX-480x600.jpg',
  '../images/cursor/SDK_NieuwBergen_Gateway_copyrightWAX-2-1-480x600.jpg',
]
var i = 0
var time = 0
var prevTime = 0
var flag = 0
var cursor = document.querySelector('#cursor')
var searchSection = document.querySelector('#searchSection')
var prevX = 0
var prevY = 0
document.querySelector('#searchSection').onmousemove = (event) => {
  var x = event.clientX
  var y = event.clientY
  if (Math.abs(x - prevX) > 80 || Math.abs(y - prevY) > 80) {
    prevX = x
    prevY = y

    var newImage = document.createElement('img')
    // var tempArr = `${document.querySelector('#main').style.transform}`.split(
    //   ',',
    // )
    var tempY = searchSection.getBoundingClientRect().y
    newImage.src = images[i++ % 7]
    console.log(tempY, y)
    newImage.style.top = `${y}px`
    console.log(newImage.style.top)
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
  // if (new Date().getTime() > prevTime + 10) {
  //   prevTime = new Date().getTime()
  //   prevX = x
  //   prevY = y
  // }
}
