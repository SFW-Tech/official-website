import React from 'react'
import Herosection from '../components/mobiledevelopmentpage/Herosection'
import Applicationtypessection from '../components/mobiledevelopmentpage/Applicationtypessection'
import Businessbenefits from '../components/mobiledevelopmentpage/Businessbenefits'

function page() {
    return (
        <>
            <Herosection />
            <Businessbenefits/>
            <Applicationtypessection />
        </>
    )
}

export default page