'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </ChakraProvider>
  )
}