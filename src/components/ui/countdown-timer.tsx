"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [visibleUnits, setVisibleUnits] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    if (timeLeft) {
      const timer = setInterval(() => {
        setVisibleUnits((prev) => (prev < 4 ? prev + 1 : prev));
      }, 300);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const timeUnits = timeLeft
    ? [
        { label: "days", value: timeLeft.days },
        { label: "hours", value: timeLeft.hours },
        { label: "minutes", value: timeLeft.minutes },
        { label: "seconds", value: timeLeft.seconds },
      ]
    : [];

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className={`transition-opacity duration-700 ${
            index < visibleUnits ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-6xl font-bold">{unit.value}</div>
          <div className="text-xl">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
