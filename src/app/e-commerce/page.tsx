import React from 'react'
import Herosection from '../components/e-commercepage/Herosection'
import Ecommerce from '../components/e-commercepage/Ecommerce'
import Whychooseus from '../components/e-commercepage/Whychooseus'
import Features from '../components/e-commercepage/Features'
import Carouselcomp from '../components/mobiledevelopmentpage/Carouselcomp'


function page() {
    return (
        <>
            <Herosection />
            <Ecommerce />
            <Whychooseus />
            <Features />
            <Carouselcomp/>
        </>
    )
}

export default page