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

      <ResourceHighlight resources={resources.slice(0,2)}/>

      <Newsletter />

      <ResourceList resources={resources.slice(2)}/>

      <Footer />
    </>
  )
}
