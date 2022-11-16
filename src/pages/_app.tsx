import type { AppProps } from 'next/app'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'

import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider>
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}
