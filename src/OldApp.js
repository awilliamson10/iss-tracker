import { React, Suspense, Component, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { cos, sin } from "prelude-ls";
import satData from "./PlanetData";

function Sun() {
  const [colorMap] = useTexture(['images/2k_earth_daymap.jpg'])
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]}/>
      <meshStandardMaterial 
        map={colorMap}
      />
    </mesh>
  );
}

function ISS({ sat: {xRadius, zRadius}}) {
  const satRef = useRef();
  satRef.current.position.x = 20;
  satRef.current.position.z = 15;
  const gltf = useLoader(GLTFLoader, 'models/ISS.glb')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} ref={satRef} scale={[0.025,0.025,0.025]} />
    </Suspense>
  )
}

class App extends Component {

  intervalID;

  state = {
    data: [],
  }

  getCartesian(lat, long) {
    lat = lat * (Math.PI/180)
    long = long * (Math.PI/180)
    const R = 6.371
    let x = R * cos(lat) * cos(long)
    let y = R * cos(lat) * sin(long)
    let z = R * sin(lat)
    return [x, y, z]
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ data: data });
        // call getData() again in 5 seconds
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
        console.log(this.getCartesian(data.iss_position.latitude, data.iss_position.longitude));
      });
  }
  
  render() {
    return (
      <>
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
          <Suspense fallback={null}>
            <Sun />
            <ISS sat={satData} key={satData.id}/>
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </>
    );
  }
}

export default App;
