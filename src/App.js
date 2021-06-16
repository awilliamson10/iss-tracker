import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Loader, OrbitControls, useTexture, Stars } from "@react-three/drei";
import "./index.css";
import { propagate, twoline2satrec } from "satellite.js";
import Socials from "./Overlay"

function Sun() {
  const planetRef = useRef();
  const gltf = useLoader(GLTFLoader, 'models/ISS.glb');
  useFrame(() => {
    planetRef.current.rotation.y -= 0.0002;
  });
  return (
    <>
      <Suspense fallback = "loading...">
        <primitive ref={planetRef} object={gltf.scene} scale={[0.009,0.009,0.009]} />
      </Suspense>
    </>
  );
}

function Planet() {
  const planetRef = useRef();
  useFrame(() => {
    const ISS_TLE = `1 25544U 98067A   21166.54383293  .00001317  00000-0  32085-4 0  9997
    2 25544  51.6442 350.8519 0003487  96.6281 300.6517 15.48988341288347`;
    const satrec = twoline2satrec(
      ISS_TLE.split('\n')[0].trim(),
      ISS_TLE.split('\n')[1].trim());
    const date = new Date();
    const positionAndVelocity = propagate(satrec, date);
    planetRef.current.position.x = positionAndVelocity.position.x*0.005;
    planetRef.current.position.y = positionAndVelocity.position.y*0.005;
    planetRef.current.position.z = positionAndVelocity.position.z*0.005;
    planetRef.current.rotation.y += 0.00002;
  }); 
  const [colorMap] = useTexture(['images/2k_earth_daymap.jpg'])
  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[5, 32, 32]}/>
      <meshStandardMaterial 
        map={colorMap}
      />
    </mesh>
  );
}

function App () {
  const ISS_TLE = `1 25544U 98067A   21166.54383293  .00001317  00000-0  32085-4 0  9997
                   2 25544  51.6442 350.8519 0003487  96.6281 300.6517 15.48988341288347`;
  
  const satrec = twoline2satrec(
    ISS_TLE.split('\n')[0].trim(),
    ISS_TLE.split('\n')[1].trim());

  const date = new Date();
  const positionAndVelocity = propagate(satrec, date);

  return (
    <>
      <Canvas camera={{ position: [-positionAndVelocity.position.x*0.005, -positionAndVelocity.position.y*0.005, -positionAndVelocity.position.z*0.005], fov: 20 }}>
        <Suspense fallback="loading...">
          <Sun />
        </Suspense>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 0]} intensity={1}/>
        <Suspense fallback="loading...">
          <Planet planet={({
            xRadius: positionAndVelocity.position.x*0.005,
            yRadius: positionAndVelocity.position.y*0.005,
            zRadius: positionAndVelocity.position.z*0.005
          })}
          />
        </Suspense>
        <OrbitControls />
        <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={50000} // Amount of stars (default=5000)
        factor={6} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      </Canvas>
      <Loader />
      <Socials />
    </>
  );
}

export default App;