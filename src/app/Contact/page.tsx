import React from 'react'
import Herosection from '../components/Contactpage/Herosection'
import Contactussection from '../components/Contactpage/Contactussection'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
        <Herosection/>

        <Contactussection/>

        <Footer/>
    </div>
  )
}

export default page