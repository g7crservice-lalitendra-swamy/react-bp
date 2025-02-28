import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const CoffeeCup = () => {
  const canvasRef = useRef<any>(null);
  const [object, setObject] = useState<THREE.Object3D | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth , y: window.innerHeight });
  const cameraRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);  // Store renderer in a ref

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z =  25 ;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(325, 325);
    rendererRef.current = renderer;  // Store renderer in the ref

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(0,0,0);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 5);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
     controlsRef.current = controls;
    

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      "/models/coffee-cup/scene.gltf",
      (gltf: any) => {
        const coffeeCup = gltf.scene;

        // Scale the coffee cup (increase size)
        coffeeCup.scale.set(3,3,3);  // Change 2 to whatever factor you need (e.g., 1.5, 2, etc.)
        coffeeCup.position.set(0,0,0);  // Change 2 to whatever factor you need (e.g., 1.5, 2, etc.)
           
        setObject(coffeeCup);
        scene.add(coffeeCup);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Mouse move handling
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);

       if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();
  }, [object, mousePosition]);

  return <canvas style={{border:'1px solid black'}}  ref={canvasRef} />;
};

export default CoffeeCup;
