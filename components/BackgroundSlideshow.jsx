"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  { src: "/assets/bg1.png", color: "#1a1816" },
  { src: "/assets/bg2.jpg", color: "#7c7b79" },
  { src: "/assets/bg3.jpg", color: "#4d4747" },
  { src: "/assets/bg4.jpg", color: "#7f7c7b" },
  { src: "/assets/bg5.jpg", color: "#514c4b" },
  { src: "/assets/bg6.jpg", color: "#342f2d" },
  { src: "/assets/bg7.jpg", color: "#63747e" },
  { src: "/assets/bg8.jpg", color: "#3e1d0f" },
  { src: "/assets/bg9.jpg", color: "#211e1a" },
  { src: "/assets/bg10.jpg", color: "#49423c" },
];

const DURATION = 5000;
export default function BackgroundSlideshow() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setAnimate(false);
      return;
    }

    if (!animate) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, DURATION);

    return () => clearInterval(id);
  }, [animate]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-20" />

      {IMAGES.map((item, i) => (
        <div
          key={item.src}
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            backgroundColor: item.color,
            zIndex: i === active ? 10 : 0,
          }}
        >
          <Image
            src={item.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}
