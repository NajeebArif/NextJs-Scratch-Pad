import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceDetails'
import ResourceHighlight from 'components/ResourceHighlight'


import React from 'react'

export default function Home({resources}) {
  return (
    <>
      <ResourceHighlight resources={resources.slice(0,2)}/>

      <Newsletter />

      <ResourceList resources={resources.slice(2)}/>

      <Footer />
    </>
  )
}

export async function getServerSideProps(){
  const dataJson = await fetch("http://localhost:3000/api/resources")
  const data  = await dataJson.json();
  console.log(data)
  return {
    props: {
      resources: data
    }
  }
}

// export async function getStaticProps(){
//   const dataJson = await fetch("http://localhost:3000/api/resources")
//   const data  = await dataJson.json();
//   console.log(data)
//   return {
//     props: {
//       resources: data
//     }
//   }
// }
