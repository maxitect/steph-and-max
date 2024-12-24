import { useEffect, useState } from "react";

interface NumberAnimationProps {
  currentYear: number;
  isRotating: boolean;
  scrollProgress: number;
}

export default function NumberAnimation({
  currentYear,
  isRotating,
  scrollProgress,
}: NumberAnimationProps) {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isRotating) {
      setAnimationClass("animate-rotate-infinity");
    } else {
      setAnimationClass("");
    }
  }, [isRotating]);

  const getNumberStyle = () => {
    const bottomProgress = 10 + scrollProgress * 40;
    const leftProgress = 10 + scrollProgress * 40;
    const fontSize = 3 + scrollProgress * 37;

    return {
      bottom: `${bottomProgress}%`,
      left: `${leftProgress}%`,
      fontSize: `${fontSize}vw`,
      transform: isRotating ? "translate(-50%, -50%)" : "none",
    };
  };

  return (
    <div
      className={`fixed text-white z-10 ${animationClass}`}
      style={getNumberStyle()}
    >
      {currentYear === 8 && isRotating ? "∞" : currentYear}
    </div>
  );
}
