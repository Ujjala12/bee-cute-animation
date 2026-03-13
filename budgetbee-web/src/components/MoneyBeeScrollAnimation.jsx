"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 192;

export default function MoneyBeeScrollAnimation({ progress, className = "" }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  
  // Preload all frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, '0');
        img.src = `/ezgif-5b52668c24556430-jpg/ezgif-frame-${frameNumber}.jpg`;
        img.onload = () => {
          if (!isMounted) return;
          loadedImages[i - 1] = img;
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setImages([...loadedImages]);
          }
        };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Frame rendering logic
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (images.length === 0 || !images[index]) return;

    const img = images[index];
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync Framer Motion scroll progress with the Canvas Frame
  useMotionValueEvent(progress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle responsive canvas resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        
        const currentProgress = progress.get();
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(currentProgress * TOTAL_FRAMES))
        );
        renderFrame(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
