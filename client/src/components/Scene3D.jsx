import React, { useEffect } from 'react';
import * as THREE from 'three';

export function Scene3D({ canvasRef }) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x8b5cf6, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xec4899, 1);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.2
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Cubes
    const cubes = [];
    const cubeData = [
      { position: [-3, 2, -2], color: 0xec4899 },
      { position: [3, -1, -2], color: 0x06b6d4 },
      { position: [-2, -2, 0], color: 0xf59e0b },
      { position: [4, 2, 1], color: 0x10b981 }
    ];

    cubeData.forEach(data => {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        metalness: 0.6,
        roughness: 0.3
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(...data.position);
      cube.userData.baseY = data.position[1];
      cube.userData.offset = data.position[0];
      scene.add(cube);
      cubes.push(cube);
    });

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const starsVertices = [];

    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Interaction and Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      sphere.rotation.x = time * 0.2;
      sphere.rotation.y = time * 0.3;
      sphere.position.y = Math.sin(time) * 0.2;

      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y = cube.userData.baseY + Math.sin(time + cube.userData.offset) * 0.3;
      });

      stars.rotation.y += 0.0002;
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      // Dispose Geometries and Materials to prevent memory leaks
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      cubes.forEach(cube => {
          cube.geometry.dispose();
          cube.material.dispose();
      });
    };
  }, [canvasRef]);

  return null;
}