"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NumberAnimation from "@/components/ui/number-animation";

export default function Home() {
  const router = useRouter();
  const [currentYear, setCurrentYear] = useState(1);
  const [showInfinity, setShowInfinity] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);

  const photos = [
    "/images/2017.jpg",
    "/images/2018.jpg",
    "/images/2019.jpg",
    "/images/2020.jpg",
    "/images/2021.jpg",
    "/images/2022.jpg",
    "/images/2023.jpg",
    "/images/2024.jpg",
  ];

  const skipIntro = () => {
    router.push("/home");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (introRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = introRef.current.scrollHeight;
        const progress = scrollPosition / (fullHeight - windowHeight);
        setScrollProgress(progress);

        const yearIndex = Math.min(
          Math.floor(progress * photos.length),
          photos.length - 1
        );
        setCurrentYear(yearIndex + 1);

        if (progress >= 0.95 && !showInfinity) {
          setShowInfinity(true);
          setTimeout(() => {
            router.push("/home");
          }, 2000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [photos.length, showInfinity, router]);

  return (
    <div>
      <div ref={introRef} className="h-[800vh] overflow-hidden">
        {photos.map((src, index) => (
          <div
            key={index}
            className="h-screen sticky top-0 overflow-hidden flex items-center justify-center"
          >
            <div className="w-[80vmin] h-[80vmin] relative overflow-hidden">
              <Image
                src={src}
                alt={`Year ${2017 + index}`}
                layout="fill"
                objectFit="cover"
                className="animate-pan"
              />
            </div>
          </div>
        ))}

        <NumberAnimation
          scrollProgress={scrollProgress}
          currentYear={currentYear}
          isRotating={showInfinity}
        />

        <button
          className="fixed bottom-5 right-5 px-4 py-2 bg-white bg-opacity-20 text-white border border-white rounded hover:bg-opacity-30 transition-colors duration-200"
          onClick={skipIntro}
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
