import { useEffect, useRef } from "react";

const POINT_COUNT = 60;
const CONNECTION_DISTANCE = 180;
const ROTATION_SPEED = 0.0004;
const MOBILE_BREAKPOINT = 768;

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("three").then((THREE) => {
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
      camera.position.z = isMobile ? 280 : 220;

      const accentColor = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue("--coral").trim() || "#1f6feb");

      const points: THREE.Vector3[] = [];
      for (let i = 0; i < POINT_COUNT; i++) {
        const range = isMobile ? 200 : 250;
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * range,
          (Math.random() - 0.5) * range,
          (Math.random() - 0.5) * range * 0.6,
        ));
      }

      const nodeGeometry = new THREE.BufferGeometry();
      const nodePositions = new Float32Array(points.length * 3);
      points.forEach((p, i) => {
        nodePositions[i * 3] = p.x;
        nodePositions[i * 3 + 1] = p.y;
        nodePositions[i * 3 + 2] = p.z;
      });
      nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

      const nodeMaterial = new THREE.PointsMaterial({
        color: accentColor,
        size: isMobile ? 1.5 : 2,
        transparent: true,
        opacity: 0.25,
        sizeAttenuation: true,
      });
      const nodeSystem = new THREE.Points(nodeGeometry, nodeMaterial);
      scene.add(nodeSystem);

      const connections: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          if (points[i].distanceTo(points[j]) < CONNECTION_DISTANCE) {
            connections.push({ start: points[i], end: points[j] });
          }
        }
      }

      let lineGeometry: THREE.BufferGeometry | null = null;
      let lineMesh: THREE.LineSegments | null = null;

      if (connections.length > 0) {
        const linePositions = new Float32Array(connections.length * 6);
        connections.forEach((conn, idx) => {
          linePositions[idx * 6] = conn.start.x;
          linePositions[idx * 6 + 1] = conn.start.y;
          linePositions[idx * 6 + 2] = conn.start.z;
          linePositions[idx * 6 + 3] = conn.end.x;
          linePositions[idx * 6 + 4] = conn.end.y;
          linePositions[idx * 6 + 5] = conn.end.z;
        });
        lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

        const lineMaterial = new THREE.LineBasicMaterial({
          color: accentColor,
          transparent: true,
          opacity: 0.12,
        });
        lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lineMesh);
      }

      const group = new THREE.Group();
      group.add(nodeSystem);
      if (lineMesh) group.add(lineMesh);
      scene.add(group);

      let width = 0;
      let height = 0;

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        const w = Math.round(rect.width);
        const h = Math.round(rect.height);
        if (w !== width || h !== height) {
          width = w;
          height = h;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };

      resize();

      let raf = 0;
      let running = true;

      const animate = () => {
        if (!running) return;
        if (!reduceMotion) {
          group.rotation.x += ROTATION_SPEED;
          group.rotation.y += ROTATION_SPEED * 1.3;
        }
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };

      const handleResize = () => {
        resize();
      };

      window.addEventListener("resize", handleResize);
      animate();

      return () => {
        running = false;
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        if (lineGeometry) lineGeometry.dispose();
        scene.clear();
      };
    }).catch(() => {
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
