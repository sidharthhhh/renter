const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  render()
})

function files(index) {
  var data = [
    '../images/hero/ProtohomesAssembling00.jpg',
    '../images/hero/ProtohomesAssembling01.jpg',
    '../images/hero/ProtohomesAssembling02.jpg',
    '../images/hero/ProtohomesAssembling03.jpg',
    '../images/hero/ProtohomesAssembling04.jpg',
    '../images/hero/ProtohomesAssembling05.jpg',
    '../images/hero/ProtohomesAssembling06.jpg',
    '../images/hero/ProtohomesAssembling07.jpg',
    '../images/hero/ProtohomesAssembling08.jpg',
    '../images/hero/ProtohomesAssembling09.jpg',
    '../images/hero/ProtohomesAssembling10.jpg',
    '../images/hero/ProtohomesAssembling11.jpg',
    '../images/hero/ProtohomesAssembling12.jpg',
    '../images/hero/ProtohomesAssembling13.jpg',
    '../images/hero/ProtohomesAssembling14.jpg',
    '../images/hero/ProtohomesAssembling15.jpg',
    '../images/hero/ProtohomesAssembling16.jpg',
    '../images/hero/ProtohomesAssembling17.jpg',
    '../images/hero/ProtohomesAssembling18.jpg',
    '../images/hero/ProtohomesAssembling19.jpg',
    '../images/hero/ProtohomesAssembling20.jpg',
    '../images/hero/ProtohomesAssembling21.jpg',
    '../images/hero/ProtohomesAssembling22.jpg',
    '../images/hero/ProtohomesAssembling23.jpg',
    '../images/hero/ProtohomesAssembling24.jpg',
    '../images/hero/ProtohomesAssembling25.jpg',
    '../images/hero/ProtohomesAssembling26.jpg',
    '../images/hero/ProtohomesAssembling27.jpg',
    '../images/hero/ProtohomesAssembling28.jpg',
    '../images/hero/ProtohomesAssembling29.jpg',
    '../images/hero/ProtohomesAssembling30.jpg',
    '../images/hero/ProtohomesAssembling31.jpg',
    '../images/hero/ProtohomesAssembling32.jpg',
    '../images/hero/ProtohomesAssembling33.jpg',
    '../images/hero/ProtohomesAssembling34.jpg',
    '../images/hero/ProtohomesAssembling35.jpg',
    '../images/hero/ProtohomesAssembling36.jpg',
    '../images/hero/ProtohomesAssembling37.jpg',
    '../images/hero/ProtohomesAssembling38.jpg',
    '../images/hero/ProtohomesAssembling39.jpg',
    '../images/hero/ProtohomesAssembling40.jpg',
    '../images/hero/ProtohomesAssembling41.jpg',
    '../images/hero/ProtohomesAssembling42.jpg',
    '../images/hero/ProtohomesAssembling43.jpg',
    '../images/hero/ProtohomesAssembling44.jpg',
    '../images/hero/ProtohomesAssembling45.jpg',
    '../images/hero/ProtohomesAssembling46.jpg',
    '../images/hero/ProtohomesAssembling47.jpg',
    '../images/hero/ProtohomesAssembling48.jpg',
    '../images/hero/ProtohomesAssembling49.jpg',
    '../images/hero/ProtohomesAssembling50.jpg',
    '../images/hero/ProtohomesAssembling51.jpg',
    '../images/hero/ProtohomesAssembling52.jpg',
    '../images/hero/ProtohomesAssembling53.jpg',
    '../images/hero/ProtohomesAssembling54.jpg',
    '../images/hero/ProtohomesAssembling55.jpg',
    '../images/hero/ProtohomesAssembling56.jpg',
    '../images/hero/ProtohomesAssembling57.jpg',
    '../images/hero/ProtohomesAssembling58.jpg',
    '../images/hero/ProtohomesAssembling59.jpg',
    '../images/hero/ProtohomesAssembling60.jpg',
    '../images/hero/ProtohomesAssembling61.jpg',
    '../images/hero/ProtohomesAssembling62.jpg',
    '../images/hero/ProtohomesAssembling63.jpg',
    '../images/hero/ProtohomesAssembling64.jpg',
    '../images/hero/ProtohomesAssembling65.jpg',
    '../images/hero/ProtohomesAssembling66.jpg',
    '../images/hero/ProtohomesAssembling67.jpg',
    '../images/hero/ProtohomesAssembling68.jpg',
    '../images/hero/ProtohomesAssembling69.jpg',
    '../images/hero/ProtohomesAssembling70.jpg',
    '../images/hero/ProtohomesAssembling71.jpg',
    '../images/hero/ProtohomesAssembling72.jpg',
    '../images/hero/ProtohomesAssembling73.jpg',
    '../images/hero/ProtohomesAssembling74.jpg',
    '../images/hero/ProtohomesAssembling75.jpg',
    '../images/hero/ProtohomesAssembling76.jpg',
    '../images/hero/ProtohomesAssembling77.jpg',
    '../images/hero/ProtohomesAssembling78.jpg',
    '../images/hero/ProtohomesAssembling79.jpg',
    '../images/hero/ProtohomesAssembling80.jpg',
    '../videos/video-desktop2.mp4',
  ]
  return data[index]
}

const frameCount = 80

const images = []
const imageSeq = {
  frame: 0,
}

for (let i = 0; i < frameCount; i++) {
  const img = new Image()
  img.src = files(i)
  images.push(img)
}

gsap.to(canvas, {
  top: 0,
  scrollTrigger: {
    start: 'top 0%',
    end: 'bottom -40%',
    scrub: 1,
    markers: true,
  },
})
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    trigger: '.dummy',
    scrub: 0.5,
    start: 'bottom 400%',
    end: 'bottom 100%',
  },
  onUpdate: render,
})
gsap.to('.videoCover', {
  height: window.innerHeight,
  scrollTrigger: {
    trigger: '.dummy',
    start: 'bottom 100%',
    end: 'bottom 0%',
    scrub: 0.5,
  },
})
// var video = document.querySelector('.realVideo')

// Create the ScrollTrigger

images[0].onload = render

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas
  var hRatio = canvas.width / img.width
  var vRatio = canvas.height / img.height
  var ratio = Math.max(hRatio, vRatio)
  var centerShift_x = (canvas.width - img.width * ratio) / 2
  var centerShift_y = (canvas.height - img.height * ratio) / 2
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio,
  )
}
