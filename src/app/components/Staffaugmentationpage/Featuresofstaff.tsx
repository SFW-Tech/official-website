import React from 'react'
import AnimateOnView from '../../../../animations/AnimateOnView'
import { textScale } from '../../../../animations/animations'

function Featuresofstaff() {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-10">
            
            <AnimateOnView variants={textScale} >
               

                <img src="/assets/Staffaugmentation/Ourmodel/2.png" alt="" className='max-w-5xl mx-auto w-full' />
            </AnimateOnView>
        </div>
    )
}

export default Featuresofstaff