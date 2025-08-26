import React from 'react'
import Herosection from '../components/Contactpage/Herosection'
import Contactussection from '../components/Contactpage/Contactussection'
import Footer from '../components/HomePage/Footer'
import Map from '../components/Contactpage/Map'

function page() {
  return (
    <div>
        <Herosection/>

        <Contactussection/>

        <Map/>
        
    </div>
  )
}

export default page