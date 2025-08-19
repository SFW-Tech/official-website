import React from 'react'
import Herosection from '../components/Webapplicationpage/Herosection'
import Applicationtypessection from '../components/Webapplicationpage/Applicationtypessection'
import Ourprocesssection from '../components/Webapplicationpage/Ourprocesssection'

function page() {
  return (
    <div>
      <Herosection/>
      <Applicationtypessection/>
      <Ourprocesssection/>
    </div>
  )
}

export default page