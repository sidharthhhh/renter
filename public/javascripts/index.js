import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
let scene = new THREE.Scene()
let width = window.innerWidth
let height = window.innerHeight

// lights
const light1 = new THREE.HemisphereLight(0xffffff, 0x000000, 1.5)
var movingLight = new THREE.PointLight(0xff7700, 1, 130, 50)
light1.position.set(0, 10, 0)
scene.add(movingLight)
scene.add(light1)
// lights

// moving light
window.addEventListener('mousemove', (event) => {
  var x = event.clientX
  var y = event.clientY
  movingLight.position.set(
    -(window.innerWidth / 2 - x) / 90 - 0.663883763985861,
    1,
    -(window.innerHeight / 2 - y) / 100,
  )
})
// moving light

// Creating camera
const camera = new THREE.PerspectiveCamera(22, width / height, 0.1, 100)
camera.position.z += 10
camera.updateMatrixWorld(true)
camera.position.set(0, 20, 20)
scene.add(camera)
// Creating camera

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setPixelRatio(2)
renderer.setSize(width, height)
renderer.render(scene, camera)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.BasicShadowMap

// Use the GLTFLoader to load the model
const loader = new GLTFLoader()
loader.load('../export.gltf', (gltf) => {
  const model = gltf.scene
  model.scale.set(4, 4, 4)
  const box = new THREE.Box3().setFromObject(model)
  const center = new THREE.Vector3()
  box.getCenter(center)
  model.position.sub(center)
  // model.position.y = -3
  camera.lookAt(center)
  scene.add(model)
})

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.minPolarAngle = Math.PI / 2.6
controls.maxPolarAngle = Math.PI / 2.6
// controls.autoRotate = true

window.addEventListener('resize', () => {
  console.log('ass')
  width = window.innerWidth - 1
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix(true)
  renderer.setSize(width, height)
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  renderer.setClearColor(0x1d1d1d)
  window.requestAnimationFrame(loop)
}
loop()
