
import React from 'react'
import Herosection from '../components/Careerspage/Herosection'
import Exploresection from '../components/Careerspage/Exploresection'
import Jobsection from '../components/Careerspage/Jobsection'
import Footer from '../components/HomePage/Footer'

function page() {
  return (
    <div>
        <Herosection/>
        <Exploresection/>
        <Jobsection/>
        
    </div>
  )
}

export default page