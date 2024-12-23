"use client";

import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import CountdownTimer from "@/components/ui/countdown-timer";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.1); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentYear, setCurrentYear] = useState(1);
  const [showInfinity, setShowInfinity] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [infinityRotation, setInfinityRotation] = useState(0);

  const photos = [
    { year: 2017, src: "/images/2017.jpg", date: "June 2017" },
    { year: 2018, src: "/images/2018.jpg", date: "November 2018" },
    { year: 2019, src: "/images/2019.jpg", date: "May 2019" },
    { year: 2020, src: "/images/2020.jpg", date: "September 2020" },
    { year: 2021, src: "/images/2021.jpg", date: "September 2021" },
    { year: 2022, src: "/images/2022.jpg", date: "July 2022" },
    { year: 2023, src: "/images/2023.jpg", date: "July 2023" },
    { year: 2024, src: "/images/2024.jpg", date: "January 2024" },
  ];

  const skipIntro = () => {
    setShowIntro(false);
    setShowMainContent(true);
  };

  useEffect(() => {
    if (showInfinity) {
      const timer = setTimeout(() => {
        setInfinityRotation(90);
        setTimeout(() => setShowNames(true), 1000);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showInfinity]);

  return (
    <ParallaxProvider>
      {showIntro ? (
        <Box h="100vh" overflow="auto" position="relative">
          <Button
            position="fixed"
            bottom="4"
            right="4"
            zIndex={999}
            onClick={skipIntro}
            colorScheme="blackAlpha"
          >
            Skip Intro
          </Button>

          {photos.map((photo, index) => (
            <Parallax
              key={photo.year}
              speed={-10}
              onProgressChange={(progress) => {
                if (progress > 0.5) setCurrentYear(index + 1);
                if (progress > 0.9 && index === photos.length - 1) {
                  setShowInfinity(true);
                }
              }}
            >
              <Box h="100vh" position="relative" overflow="hidden">
                <Image
                  src={photo.src}
                  alt={`Year ${photo.year}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <Box
                  position="absolute"
                  bottom="10%"
                  left="10%"
                  color="white"
                  textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                >
                  <Text fontSize="2xl">{photo.date}</Text>
                </Box>
              </Box>
            </Parallax>
          ))}

          {showInfinity && (
            <Box
              position="fixed"
              top="50%"
              left="50%"
              fontSize="15rem"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              css={css`
                animation: ${scaleIn} 1s ease-out;
                transform: translate(-50%, -50%) rotate(${infinityRotation}deg);
                transition: transform 1s ease-in-out;
              `}
            >
              ∞
            </Box>
          )}

          {showNames && (
            <Box
              position="fixed"
              top="60%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              css={css`
                animation: ${fadeIn} 1s ease-out;
              `}
            >
              <Text fontSize="6xl">Steph & Max</Text>
            </Box>
          )}

          <Box
            position="fixed"
            top="50%"
            left="10%"
            transform="translateY(-50%)"
            fontSize="20rem"
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            opacity={0.5}
          >
            {currentYear}
          </Box>
        </Box>
      ) : null}

      {showMainContent && (
        <Flex direction="column" minH="100vh">
          <Navbar />
          <Box flex="1" position="relative">
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
            >
              <CountdownTimer targetDate="2025-10-18" />
            </Box>
          </Box>
        </Flex>
      )}
    </ParallaxProvider>
  );
}
