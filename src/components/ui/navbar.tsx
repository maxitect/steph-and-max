"use client";

import { Box, Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      position="fixed"
      w="100%"
      zIndex={999}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={4}
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex gap={8}>
          <Link href="/wedding-day">The Wedding Day</Link>
          <Link href="/location">Location</Link>
          <Link href="/accommodation">Accommodation</Link>
          <Link href="/rsvp">RSVP</Link>
          <Link href="/gifting">Gifting</Link>
          <Link href="/faq">FAQ</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
