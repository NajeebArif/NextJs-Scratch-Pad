import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Newsletter from 'components/Newsletter'
import ResourceDetails from 'components/ResourceDetails'
import ResourceHighlight from 'components/ResourceHighlight'

import { resources } from 'api/data'

import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />

      <ResourceHighlight />
      {JSON.stringify(resources)}

      <Newsletter />

      <ResourceDetails />

      <Footer />
    </>
  )
}
