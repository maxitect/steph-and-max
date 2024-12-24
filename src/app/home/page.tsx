"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import CountdownTimer from "@/components/ui/countdown-timer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {showContent && (
            <>
              <h1 className="text-6xl mb-8 transition-opacity duration-1000 opacity-100">
                Steph & Max
              </h1>
              <CountdownTimer targetDate="2025-10-18" />
            </>
          )}
        </div>
      </div>
      <div className="infinity-watermark">∞</div>
    </div>
  );
}
