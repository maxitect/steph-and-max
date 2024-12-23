"use client";

import { Box, Text, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" mb={8}>
        Until We Say I Do
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            {timeLeft.days}
          </Text>
          <Text>Days</Text>
        </Box>
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            {timeLeft.hours}
          </Text>
          <Text>Hours</Text>
        </Box>
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            {timeLeft.minutes}
          </Text>
          <Text>Minutes</Text>
        </Box>
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            {timeLeft.seconds}
          </Text>
          <Text>Seconds</Text>
        </Box>
      </Grid>
    </Box>
  );
}
