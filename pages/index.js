import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceDetails'
import ResourceHighlight from 'components/ResourceHighlight'

import { resources } from 'api/data'

import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />

      <ResourceHighlight resources={resources}/>

      <Newsletter />

      <ResourceList resources={resources}/>

      <Footer />
    </>
  )
}
