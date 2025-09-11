import React from 'react'
import Herosection from '../components/Staffaugmentationpage/Herosection'
import Ourmodel from '../components/Staffaugmentationpage/Ourmodel'
import Productivity from '../components/Staffaugmentationpage/Productivity'
import Resourcesolution from '../components/Staffaugmentationpage/Resourcesolution'
import Serviceofferings from '../components/Staffaugmentationpage/Serviceofferings'
import Ourteam from '../components/Staffaugmentationpage/Ourteam'
import Talentpool from '../components/Staffaugmentationpage/Talentpool'
import Featuresofstaff from '../components/Staffaugmentationpage/Featuresofstaff'
import Reasonstochoose from '../components/Staffaugmentationpage/Reasonstochoose'

function page() {
  return (
    <>
    <Herosection/>
    <Ourmodel/>
    <Productivity/>
    <Resourcesolution/>
    <Ourteam/>
    <Serviceofferings/>
    <Talentpool/>
    <Featuresofstaff/>
    <Reasonstochoose/>
    </>
  )
}

export default page