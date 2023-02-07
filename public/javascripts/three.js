import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js'
let scene = new THREE.Scene()
let width = window.innerWidth
let height = window.innerHeight

// Creating sphere
let sphere = new THREE.SphereGeometry(3, 64, 64)
let material = new THREE.MeshStandardMaterial({
  color: '#df347a',
})
let mesh = new THREE.Mesh(sphere, material)
// Creating sphere

// Adding sphere to the scene
scene.add(mesh)
// Adding sphere to the scene

// lights
const light = new THREE.PointLight(0xffffff, 2, 100)
light.position.set(0, 10, 10)
scene.add(light)
// lights

// Creating camera
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
camera.position.z = 20
scene.add(camera)
// Creating camera

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)
renderer.render(scene, camera)

// Controls
const controls = new OrbitControls(camera, canvas)

window.addEventListener('resize', () => {
  console.log('ass')
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
})

const loop = () => {
  console.log('ass')
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()
