import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Newsletter from 'components/Newsletter'
import ResourceDetails from 'components/ResourceDetails'
import ResourceHighlight from 'components/ResourceHighlight'

import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />

      <ResourceHighlight />

      <Newsletter />

      <ResourceDetails />

      <Footer />
    </>
  )
}
