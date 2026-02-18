"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BackgroundBlobs() {
  const colors = [
    "rgba(168,85,247,0.5)", // purple
    "rgba(59,130,246,0.5)", // blue
    "rgba(236,72,153,0.5)", // pink
    "rgba(34,197,94,0.5)",  // green
    "rgba(250,204,21,0.5)", // yellow
  ];

  const blobCount = 6;

  type Blob = {
    x: number;
    y: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    pulseGlow: number;
  };

  const [blobs, setBlobs] = useState<Blob[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // Adjust base size based on screen width (smaller for mobile)
    const baseSize = screenW < 768 ? 150 : 400; // 150px for mobile, 400px for desktop

    const initialBlobs = Array.from({ length: blobCount }, (_, i) => ({
      x: Math.random() * screenW,
      y: Math.random() * screenH,
      size: baseSize + Math.random() * (screenW < 768 ? 30 : 50),
      color: colors[i % colors.length],
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      pulseGlow: 0,
    }));
    setBlobs(initialBlobs);

    const loop = () => {
      setBlobs((prev) =>
        prev.map((blob) => {
          let { x, y, vx, vy, pulseGlow, size } = blob;
          const screenW = window.innerWidth;
          const screenH = window.innerHeight;

          x += vx;
          y += vy;

          let collided = false;

          if (x <= 0 || x >= screenW - size) {
            vx *= -1;
            collided = true;
          }
          if (y <= 0 || y >= screenH - size) {
            vy *= -1;
            collided = true;
          }

          if (collided) {
            pulseGlow = 1;
          } else {
            pulseGlow *= 0.5;
          }

          return { ...blob, x, y, vx, vy, pulseGlow };
        })
      );

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white -z-10 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: 0.08, ease: "linear" }}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            willChange: "transform",
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: `blur(${blob.size / 3}px)`,
            boxShadow: `
              0 0 60px ${blob.color},
              0 0 ${120 + blob.pulseGlow * 100}px ${blob.color}
            `,
          }}
        />
      ))}
    </div>
  );
}
