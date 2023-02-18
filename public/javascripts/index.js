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
    '../images/hero2/ezgif-frame-001.webp',
    '../images/hero2/ezgif-frame-002.webp',
    '../images/hero2/ezgif-frame-003.webp',
    '../images/hero2/ezgif-frame-004.webp',
    '../images/hero2/ezgif-frame-005.webp',
    '../images/hero2/ezgif-frame-006.webp',
    '../images/hero2/ezgif-frame-007.webp',
    '../images/hero2/ezgif-frame-008.webp',
    '../images/hero2/ezgif-frame-030.webp',
    '../images/hero2/ezgif-frame-031.webp',
    '../images/hero2/ezgif-frame-032.webp',
    '../images/hero2/ezgif-frame-033.webp',
    '../images/hero2/ezgif-frame-034.webp',
    '../images/hero2/ezgif-frame-035.webp',
    '../images/hero2/ezgif-frame-036.webp',
    '../images/hero2/ezgif-frame-037.webp',
    '../images/hero2/ezgif-frame-038.webp',
    '../images/hero2/ezgif-frame-039.webp',
    '../images/hero2/ezgif-frame-040.webp',
    '../images/hero2/ezgif-frame-041.webp',
    '../images/hero2/ezgif-frame-042.webp',
    '../images/hero2/ezgif-frame-043.webp',
    '../images/hero2/ezgif-frame-044.webp',
    '../images/hero2/ezgif-frame-045.webp',
    '../images/hero2/ezgif-frame-046.webp',
    '../images/hero2/ezgif-frame-047.webp',
    '../images/hero2/ezgif-frame-048.webp',
    '../images/hero2/ezgif-frame-049.webp',
    '../images/hero2/ezgif-frame-050.webp',
    '../images/hero2/ezgif-frame-051.webp',
    '../images/hero2/ezgif-frame-052.webp',
    '../images/hero2/ezgif-frame-053.webp',
    '../images/hero2/ezgif-frame-054.webp',
    '../images/hero2/ezgif-frame-055.webp',
    '../images/hero2/ezgif-frame-056.webp',
    '../images/hero2/ezgif-frame-057.webp',
    '../images/hero2/ezgif-frame-058.webp',
    '../images/hero2/ezgif-frame-059.webp',
    '../images/hero2/ezgif-frame-060.webp',
    '../images/hero2/ezgif-frame-061.webp',
    '../images/hero2/ezgif-frame-062.webp',
    '../images/hero2/ezgif-frame-063.webp',
    '../images/hero2/ezgif-frame-064.webp',
    '../images/hero2/ezgif-frame-065.webp',
    '../images/hero2/ezgif-frame-066.webp',
    '../images/hero2/ezgif-frame-067.webp',
    '../images/hero2/ezgif-frame-068.webp',
    '../images/hero2/ezgif-frame-069.webp',
    '../images/hero2/ezgif-frame-070.webp',
    '../images/hero2/ezgif-frame-071.webp',
    '../images/hero2/ezgif-frame-072.webp',
    '../images/hero2/ezgif-frame-073.webp',
    '../images/hero2/ezgif-frame-074.webp',
    '../images/hero2/ezgif-frame-075.webp',
    '../images/hero2/ezgif-frame-076.webp',
    '../images/hero2/ezgif-frame-077.webp',
    '../images/hero2/ezgif-frame-078.webp',
    '../images/hero2/ezgif-frame-079.webp',
    '../images/hero2/ezgif-frame-080.webp',
    '../images/hero2/ezgif-frame-081.webp',
    '../images/hero2/ezgif-frame-082.webp',
    '../images/hero2/ezgif-frame-083.webp',
    '../images/hero2/ezgif-frame-084.webp',
    '../images/hero2/ezgif-frame-085.webp',
    '../images/hero2/ezgif-frame-086.webp',
    '../images/hero2/ezgif-frame-087.webp',
    '../images/hero2/ezgif-frame-088.webp',
    '../images/hero2/ezgif-frame-089.webp',
    '../images/hero2/ezgif-frame-090.webp',
    '../images/hero2/ezgif-frame-091.webp',
    '../images/hero2/ezgif-frame-092.webp',
    '../images/hero2/ezgif-frame-093.webp',
    '../images/hero2/ezgif-frame-094.webp',
    '../images/hero2/ezgif-frame-095.webp',
    '../images/hero2/ezgif-frame-096.webp',
    '../images/hero2/ezgif-frame-097.webp',
    '../images/hero2/ezgif-frame-098.webp',
    '../images/hero2/ezgif-frame-099.webp',
    '../images/hero2/ezgif-frame-100.webp',
    '../images/hero2/ezgif-frame-101.webp',
    '../images/hero2/ezgif-frame-102.webp',
    '../images/hero2/ezgif-frame-103.webp',
    '../images/hero2/ezgif-frame-104.webp',
    '../images/hero2/ezgif-frame-105.webp',
    '../images/hero2/ezgif-frame-106.webp',
    '../images/hero2/ezgif-frame-107.webp',
    '../images/hero2/ezgif-frame-108.webp',
    '../images/hero2/ezgif-frame-109.webp',
    '../images/hero2/ezgif-frame-110.webp',
    '../images/hero2/ezgif-frame-111.webp',
    '../images/hero2/ezgif-frame-112.webp',
    '../images/hero2/ezgif-frame-113.webp',
    '../images/hero2/ezgif-frame-114.webp',
    '../images/hero2/ezgif-frame-115.webp',
    '../images/hero2/ezgif-frame-116.webp',
    '../images/hero2/ezgif-frame-117.webp',
    '../images/hero2/ezgif-frame-118.webp',
    '../images/hero2/ezgif-frame-119.webp',
    '../images/hero2/ezgif-frame-120.webp',
    '../images/hero2/ezgif-frame-121.webp',
    '../images/hero2/ezgif-frame-122.webp',
    '../images/hero2/ezgif-frame-123.webp',
    '../images/hero2/ezgif-frame-124.webp',
    '../images/hero2/ezgif-frame-125.webp',
    '../images/hero2/ezgif-frame-126.webp',
    '../images/hero2/ezgif-frame-127.webp',
    '../images/hero2/ezgif-frame-128.webp',
    '../images/hero2/ezgif-frame-129.webp',
    '../images/hero2/ezgif-frame-130.webp',
    '../images/hero2/ezgif-frame-131.webp',
    '../images/hero2/ezgif-frame-132.webp',
    '../images/hero2/ezgif-frame-133.webp',
    '../images/hero2/ezgif-frame-134.webp',
    '../images/hero2/ezgif-frame-135.webp',
    '../images/hero2/ezgif-frame-136.webp',
    '../images/hero2/ezgif-frame-136.webp',
  ]
  return data[index]
}
// [
//   '../images/hero/ProtohomesAssembling00.jpg',
//   '../images/hero/ProtohomesAssembling01.jpg',
//   '../images/hero/ProtohomesAssembling02.jpg',
//   '../images/hero/ProtohomesAssembling03.jpg',
//   '../images/hero/ProtohomesAssembling04.jpg',
//   '../images/hero/ProtohomesAssembling05.jpg',
//   '../images/hero/ProtohomesAssembling06.jpg',
//   '../images/hero/ProtohomesAssembling07.jpg',
//   '../images/hero/ProtohomesAssembling08.jpg',
//   '../images/hero/ProtohomesAssembling09.jpg',
//   '../images/hero/ProtohomesAssembling10.jpg',
//   '../images/hero/ProtohomesAssembling11.jpg',
//   '../images/hero/ProtohomesAssembling12.jpg',
//   '../images/hero/ProtohomesAssembling13.jpg',
//   '../images/hero/ProtohomesAssembling14.jpg',
//   '../images/hero/ProtohomesAssembling15.jpg',
//   '../images/hero/ProtohomesAssembling16.jpg',
//   '../images/hero/ProtohomesAssembling17.jpg',
//   '../images/hero/ProtohomesAssembling18.jpg',
//   '../images/hero/ProtohomesAssembling19.jpg',
//   '../images/hero/ProtohomesAssembling20.jpg',
//   '../images/hero/ProtohomesAssembling21.jpg',
//   '../images/hero/ProtohomesAssembling22.jpg',
//   '../images/hero/ProtohomesAssembling23.jpg',
//   '../images/hero/ProtohomesAssembling24.jpg',
//   '../images/hero/ProtohomesAssembling25.jpg',
//   '../images/hero/ProtohomesAssembling26.jpg',
//   '../images/hero/ProtohomesAssembling27.jpg',
//   '../images/hero/ProtohomesAssembling28.jpg',
//   '../images/hero/ProtohomesAssembling29.jpg',
//   '../images/hero/ProtohomesAssembling30.jpg',
//   '../images/hero/ProtohomesAssembling31.jpg',
//   '../images/hero/ProtohomesAssembling32.jpg',
//   '../images/hero/ProtohomesAssembling33.jpg',
//   '../images/hero/ProtohomesAssembling34.jpg',
//   '../images/hero/ProtohomesAssembling35.jpg',
//   '../images/hero/ProtohomesAssembling36.jpg',
//   '../images/hero/ProtohomesAssembling37.jpg',
//   '../images/hero/ProtohomesAssembling38.jpg',
//   '../images/hero/ProtohomesAssembling39.jpg',
//   '../images/hero/ProtohomesAssembling40.jpg',
//   '../images/hero/ProtohomesAssembling41.jpg',
//   '../images/hero/ProtohomesAssembling42.jpg',
//   '../images/hero/ProtohomesAssembling43.jpg',
//   '../images/hero/ProtohomesAssembling44.jpg',
//   '../images/hero/ProtohomesAssembling45.jpg',
//   '../images/hero/ProtohomesAssembling46.jpg',
//   '../images/hero/ProtohomesAssembling47.jpg',
//   '../images/hero/ProtohomesAssembling48.jpg',
//   '../images/hero/ProtohomesAssembling49.jpg',
//   '../images/hero/ProtohomesAssembling50.jpg',
//   '../images/hero/ProtohomesAssembling51.jpg',
//   '../images/hero/ProtohomesAssembling52.jpg',
//   '../images/hero/ProtohomesAssembling53.jpg',
//   '../images/hero/ProtohomesAssembling54.jpg',
//   '../images/hero/ProtohomesAssembling55.jpg',
//   '../images/hero/ProtohomesAssembling56.jpg',
//   '../images/hero/ProtohomesAssembling57.jpg',
//   '../images/hero/ProtohomesAssembling58.jpg',
//   '../images/hero/ProtohomesAssembling59.jpg',
//   '../images/hero/ProtohomesAssembling60.jpg',
//   '../images/hero/ProtohomesAssembling61.jpg',
//   '../images/hero/ProtohomesAssembling62.jpg',
//   '../images/hero/ProtohomesAssembling63.jpg',
//   '../images/hero/ProtohomesAssembling64.jpg',
//   '../images/hero/ProtohomesAssembling65.jpg',
//   '../images/hero/ProtohomesAssembling66.jpg',
//   '../images/hero/ProtohomesAssembling67.jpg',
//   '../images/hero/ProtohomesAssembling68.jpg',
//   '../images/hero/ProtohomesAssembling69.jpg',
//   '../images/hero/ProtohomesAssembling70.jpg',
//   '../images/hero/ProtohomesAssembling71.jpg',
//   '../images/hero/ProtohomesAssembling72.jpg',
//   '../images/hero/ProtohomesAssembling73.jpg',
//   '../images/hero/ProtohomesAssembling74.jpg',
//   '../images/hero/ProtohomesAssembling75.jpg',
//   '../images/hero/ProtohomesAssembling76.jpg',
//   '../images/hero/ProtohomesAssembling77.jpg',
//   '../images/hero/ProtohomesAssembling78.jpg',
//   '../images/hero/ProtohomesAssembling79.jpg',
//   '../images/hero/ProtohomesAssembling80.jpg',
//   '../images/hero/ProtohomesAssembling81.jpg',
//   '../videos/video-desktop2.mp4',
// ]
const frameCount = 114

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
