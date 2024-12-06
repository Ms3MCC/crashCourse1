import * as THREE from "three";
import { ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { distance } from "three/webgpu";
import { Pane } from "tweakpane";

// initialize pane
const pane = new Pane();


// initialize the scene
const scene = new THREE.Scene();

//texture loader

const textureLoader = new THREE.TextureLoader();

const cubeTextureLoader = new THREE.CubeTextureLoader()
cubeTextureLoader.setPath('static/textures/cubeMap/')


//adding textures

const sunTexture  = textureLoader.load('static/textures/2k_sun.jpg')
const mercuryTexture = textureLoader.load("static/textures/2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace

const venusTexture = textureLoader.load("static/textures/2k_venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace

const earthTexture = textureLoader.load("static/textures/2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace

const marsTexture = textureLoader.load("static/textures/2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace

const moonTexture = textureLoader.load("static/textures/2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace

const jupiterTexture=textureLoader.load("static/textures/jupiter2_4k.jpg");
jupiterTexture.colorSpace = THREE.SRGBColorSpace

const saturnTexture=textureLoader.load("static/textures/2k_saturn.jpg");
saturnTexture.colorSpace = THREE.SRGBColorSpace

const saturnRingTexture=textureLoader.load("static/textures/2k_saturn_ring_alpha.png");
saturnRingTexture.colorSpace = THREE.SRGBColorSpace

const uranusTexture=textureLoader.load("static/textures/2k_uranus.jpg");
uranusTexture.colorSpace = THREE.SRGBColorSpace

const neptuneTexture=textureLoader.load("static/textures/2k_neptune.jpg");
neptuneTexture.colorSpace = THREE.SRGBColorSpace
// const backgroundTexture=textureLoader.load("static/textures/2k_stars_milky_way.jpg")


const backgroundCubeMap =cubeTextureLoader.load([
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
]);

scene.background=backgroundCubeMap

//add materials

const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
});
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
});
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
});

const jupiterMaterial =  new THREE.MeshStandardMaterial({
  map: jupiterTexture,
});
const saturnMaterial =  new THREE.MeshStandardMaterial({
  map: saturnTexture,
});
const uranusMaterial =  new THREE.MeshStandardMaterial({
  map: uranusTexture,
});

const neptuneMaterial =  new THREE.MeshStandardMaterial({
  map: neptuneTexture,
});





// add stuff here

const SphereGeometry = new THREE.SphereGeometry(1,32,32)
const sunMaterial = new THREE.MeshBasicMaterial({
  map:sunTexture
})


const sun =new THREE.Mesh(SphereGeometry,sunMaterial)
scene.add(sun)
sun.scale.setScalar(5)

sunMaterial.roughness=1



const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    ring:0,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    ring:0,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    ring:0,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    ring:0,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
  {
    name: "Jupiter",
    radius: 2.8,
    distance: 60,
    speed: 0.001,
    material: jupiterMaterial,
    ring:0,
    moons: [
      {
        name: "Io",
        radius: 0.2,
        distance: 2,
        speed: 0.01,
      },
      {
        name: "Europa",
        radius: 0.2,
        distance: 3,
        speed: 0.008,
      },
      {
        name: "Ganymede",
        radius: 0.2,
        distance: 4,
        speed: 0.006,
      },
      {
        name: "Callisto",
        radius: 0.1,
        distance: 5,
        speed: 0.004,
      },
    ],
  },
  {
    name: "Saturn",
    radius: 2.5,
    distance: 100,
    speed: 0.0009,
    material: saturnMaterial,
    ring:1,
    moons: [
      {
        name: "Titan",
        radius: 0.3,
        distance: 3,
        speed: 0.005,
      },
      {
        name: "Enceladus",
        radius: 0.2,
        distance: 5,
        speed: 0.004,
      },
      {
        name: "Mimas",
        radius: 0.1,
        distance: 2,
        speed: 0.003,
      },
    ],
  },
  {
    name: "Uranus",
    radius: 2.8,
    distance: 140,
    speed: 0.0006,
    material: uranusMaterial,
    ring:0,
    moons: [
      {
        name: "Miranda",
        radius: 0.3,
        distance: 3,
        speed: 0.01,
      },
      {
        name: "Ariel",
        radius: 0.3,
        distance: 2,
        speed: 0.009,
      },
      {
        name: "Umbriel",
        radius: 0.3,
        distance: 4,
        speed: 0.008,
      },
    ],
  },
  {
    name: "Neptune",
    radius: 2.9,
    distance: 160,
    speed: 0.0005,
    material: neptuneMaterial,
    ring:0,
    moons: [
      {
        name: "Triton",
        radius: 0.3,
        distance: 2,
        speed: 0.007,
      },
    ],
  },
];




const createPlanet=(planet)=>{
  const planetMesh = new THREE.Mesh(
    SphereGeometry,
    planet.material
  )
  planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x =planet.distance
  // planetMesh.position.y=planet.distance
  planetMesh.position.z=planet.distance

  
  return planetMesh

}

const createMoon=(moon)=>{
  const moonMesh = new THREE.Mesh(SphereGeometry,moonMaterial)
    moonMesh.scale.setScalar(moon.radius)
    moonMesh.position.x=moon.distance
    return moonMesh
}



const  planetMeshes =planets.map((planet)=>{
  console.log(planet)
  
  const planetMesh= createPlanet(planet)
  scene.add(planetMesh)

  planet.moons.forEach((moon)=>{
    const moonMesh=createMoon(moon)
    planetMesh.add(moonMesh)
  })

 
  return planetMesh
})





const asteroidBeltRadius = (planets[3].distance + planets[4].distance) / 2; // Between Mars and Jupiter

const createAsteroid = () => {
  const asteroidGeometry = new THREE.SphereGeometry(Math.random() * 0.2 + 0.1, 8, 8); // Random small size
  const asteroidMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(Math.random(), Math.random(), Math.random()), // Random color
  });
  const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

  // Random position around the asteroid belt
  const angle = Math.random() * Math.PI * 2; // Random angle for the asteroid's position
  const distance = asteroidBeltRadius + Math.random() * 5 - 2.5; // Random distance within the belt's radius range

  asteroid.position.x = Math.sin(angle) * distance;
  asteroid.position.z = Math.cos(angle) * distance;

  // Random rotation for variety
  asteroid.rotation.x = Math.random() * Math.PI;
  asteroid.rotation.y = Math.random() * Math.PI;
  asteroid.rotation.z = Math.random() * Math.PI;

  return asteroid;
};

// Create asteroid belt
const asteroidBelt = new THREE.Group(); // To hold all the asteroids as a single group
const asteroidCount = 200; // Adjust for the number of asteroids

for (let i = 0; i < asteroidCount; i++) {
  const asteroid = createAsteroid();
  asteroidBelt.add(asteroid);
}

scene.add(asteroidBelt);



const animateAsteroidBelt = () => {
  asteroidBelt.rotation.y += 0.0005; // Rotate the belt to simulate orbital motion
};







//adding light

const light  =new THREE.AmbientLight(0xffffff,0.5)
scene.add(light)

const pointLight= new THREE.PointLight(
  0xffffff,
  200000
)

scene.add(pointLight)



// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400000
);



camera.position.z = 10000000;
camera.position.y = 5;



// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20



// add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// render loop
const renderloop = () => {

  sun.rotation.y+=0.005
  //adding animation

  planetMeshes.forEach((planet,index)=>{
    planet.rotation.y+=1*planets[index].speed
    planet.position.x=Math.sin( planet.rotation.y)*planets[index].distance
    planet.position.z=Math.cos( planet.rotation.y)*planets[index].distance
   

    planet.children.forEach((moon,moonIndex)=>{
      moon.rotation.y += planets[index].moons[moonIndex].speed
      moon.position.x=Math.sin(moon.rotation.y)*planets[index].moons[moonIndex].distance
      moon.position.z=Math.cos(moon.rotation.y)*planets[index].moons[moonIndex].distance

    })



 
  })
  
  animateAsteroidBelt();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};


renderloop();







































// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { Pane } from "tweakpane";



// const pane = new Pane()

// const scene = new THREE.Scene()

// const cube = new THREE.BoxGeometry(1,1,1)

// const sphere = new THREE.SphereGeometry(1,32,32)

// const plane =new THREE.PlaneGeometry(1,1)
// const tkg=new THREE.TorusKnotGeometry(0.5,0.15,100,16)

// const cyld =new THREE.CylinderGeometry(0.5,0.5,1,32)
// console.log(cyld)

// const textureLoader = new  THREE.TextureLoader()
// const grassAlbedo = textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png')
// const grassAo = textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png')
// const grassHeight = textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png')
// const grassMetallic = textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png')
// const grassNoramal=textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png')
// const grassPreview=textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_preview.jpg')
// const grassRough=textureLoader.load('static/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png')


// // grassTexture.repeat.set(2,2)
// // grassTexture.wrapS=THREE.RepeatWrapping
// // grassTexture.wrapT=THREE.RepeatWrapping
// // grassTexture.wrapS=THREE.MirroredRepeatWrapping
// // grassTexture.wrapT=THREE.MirroredRepeatWrapping

// // const geometry = new THREE.PlaneGeometry(1,1,2,2)

// // const geometry = new THREE.TorusKnotGeometry(10,3,100,16)


// // const material = new THREE.MeshBasicMaterial({color:"red" , wireframe:true,transparent:true, opacity:0.5})

// // const material = new THREE.MeshLambertMaterial()
// // const material = new THREE.MeshPhongMaterial()
// // const material = new THREE.MeshStandardMaterial()
// const material = new THREE.MeshStandardMaterial()
// material.map=grassAlbedo
// material.roughnessMap=grassRough
// material.metalnessMap=grassMetallic
// material.normalMap=grassNoramal
// material.roughness=1
// material.displacementMap=grassHeight

// // material.color = new THREE.Color('red')


// pane.addBinding(material, 'metalness', {
//   min: 0,
//   max: 1,
//   step: 0.01,
// });

// pane.addBinding(material, 'roughness', {
//   min: 0,
//   max: 1,
//   step: 0.01,
// });

// pane.addBinding(material, 'displacementScale', {
//   min: 0,
//   max: 1,
//   step: 0.01,
// });


// // material.shininess=100
// // material.color = new THREE.Color('red')

// // pane.addBinding(material, 'shininess', {
// //   min: 0,
// //   max: 2000,
// //   step: 1,
// // });
// // const material = new THREE.MeshBasicMaterial({color:"red"})
// // const material2 = new THREE.MeshBasicMaterial({color:"red"})
// // const material3 = new THREE.MeshBasicMaterial({color:"green"})
// // material.color="red"



// const cubeMesh = new THREE.Mesh(
//   cube,
//   material
// )

// const sphereMesh = new THREE.Mesh(
//   sphere,
//   material
// )


// const tkgMesh = new THREE.Mesh(
//   tkg,
//   material
// )
// const planeMesh=new THREE.Mesh(plane,material)


// // const cyldMesh = new THREE.Mesh()

// // cyldMesh.geometry=cyld
// // cyld.material=material

// const cyldMesh = new THREE.Mesh()
// cyldMesh.geometry=cyld
// cyldMesh.material=material

// // scene.add(cubeMesh)
// // scene.add(sphereMesh)
// // scene.add(planeMesh)
// // scene.add(tkgMesh)
// // scene.add(cyldMesh)

// cyldMesh.position.y=-2

// cubeMesh.position.x=3
// // sphereMesh.position.x=-3
// tkgMesh.position.x=-3
// planeMesh.position.y=2

// // planeMesh.position.x=-1.5
// // planeMesh.rotation.x= -(Math.PI*0.5)
// // planeMesh.scale.set(1000,1000)


// const group = new THREE.Group()

// group.add(cubeMesh,sphereMesh,tkgMesh,planeMesh,cyldMesh)
// scene.add(group)


// // const cubeMesh2 = new THREE.Mesh(
// //   cubeGeometry,
// //   cubeMaterial
// // )

// // const cubeMesh3 = new THREE.Mesh(
// //   cubeGeometry,
// //   cubeMaterial
// // )


// material.side=THREE.DoubleSide
// // material2.side=THREE.DoubleSide
// // material3.side=THREE.DoubleSide

// // const fog  =new THREE.Fog(0xffffff,1,7)
// // scene.fog=fog

// // scene.background =new THREE.Color(0xffffff)



// const light  =new THREE.AmbientLight(0xffffff,1)
// scene.add(light)

// const pointLight = new THREE.PointLight(0xffffff,100)
// pointLight.position.set(0,0,5)
// scene.add(pointLight)

// // cubeMesh.rotation.y = THREE.MathUtils.degToRad(90)
// // cubeMesh.rotation.x = THREE.MathUtils.degToRad(45)
// // cubeMesh.scale.x = 2




// // const group =new THREE.Group();
// // group.add(cubeMesh)
// // group.add(cubeMesh2)
// // group.add(cubeMesh3)
// // scene.add(group)


// // cubeMesh.position.set(0,1,0)
// // cubeMesh2.position.set(3,0,0)
// // cubeMesh3.position.set(-3,0,0)

// // cubeMesh.position.y=1
// // cubeMesh.position.z=-1

// // group.scale.set(2,1,1)
// // group.scale.x=2
// const axisHelper=new THREE.AxesHelper(2)

// scene.add(axisHelper)


// const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.01,10000)

// const ar =window.innerWidth/window.innerHeight // aspect ratio
// // const camera =new  THREE.OrthographicCamera(-1,
// //   1*ar,
// //   1*ar,
// //   -1,
// //   0.1,
// //   200
// // )

// camera.position.z=5
// // camera.position.y=5

// // scene.add(camera)


// // cubeMesh.position.y=1
// // cubeMesh.position.z=1

// const canvas =document.querySelector('canvas.threejs')
// console.log(canvas)

// const renderer = new THREE.WebGLRenderer({
//   canvas:canvas,
//   antialias:true,
// });

// const controls = new OrbitControls(camera,canvas)

// renderer.setSize(window.innerWidth,window.innerHeight)
// controls.enableDamping=true
// // controls.autoRotate=true
// // controls.autoRotateSpeed=true

// const maxPixelRatio = Math.min(window.devicePixelRatio,2)
// console.log(window.devicePixelRatio)

// renderer.setPixelRatio(maxPixelRatio)


// window.addEventListener('resize',() =>{
//   console.log("resized")

//   camera.aspect=window.innerWidth/window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth,window.innerHeight)

// })

// const clock = new THREE.Clock()
// let previousTime =0



// const renderLoop=()=>{

//   // group.children.forEach((child) =>{
//   //   if(child instanceof THREE.Mesh){
//   //     child.rotation.y+=0.02
//   //   }

//   // })

//   // if(cubeMesh.position.z > 4)
//   // {
//   //   cubeMesh.position.z=-3
//   // }

//   // const currentTime= clock.getElapsedTime()
//   // const delta = currentTime-previousTime
//   // previousTime=currentTime
//   // cubeMesh.rotation.y += THREE.MathUtils.degToRad(1)*delta*200
//   // cubeMesh.rotation.x += THREE.MathUtils.degToRad(1)*delta*200
//   // cubeMesh.rotation.z += THREE.MathUtils.degToRad(1)*delta*200

//   // cubeMesh.scale.x =Math.sin(currentTime)*2
//   // cubeMesh.position.z=Math.sin(currentTime)+2
  
//   // cubeMesh.position.z += THREE.MathUtils.degToRad(1)*delta*20

//   controls.update()
//   renderer.render(scene,camera)
//   window.requestAnimationFrame(renderLoop)
// }

// renderLoop()

