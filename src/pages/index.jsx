import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'

import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Rockstar Project Manager - JC de Borja
        </title>
        <meta name="robots" content="noindex"/>
        <meta
          name="description"
          content="A rockstar project manager 8-years of successful remote project & change management experience."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Screencasts />
      <Resources />
      <FreeChapters />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
