import React from 'react'
import AnimateOnView from '../../../../animations/AnimateOnView'
import { fadeDown, fadeUp } from '../../../../animations/animations'

function Ourmodel() {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-10">
            {/* Title */}
            <div className="text-center flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-10">

                {/* Fade Down */}
                <AnimateOnView variants={fadeDown}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        How to Get Started with
                    </h2>
                </AnimateOnView>

                {/* Fade Down */}
                <AnimateOnView variants={fadeDown}>
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
                        Our IT Staff Augmentation Model
                    </h2>
                </AnimateOnView>

                {/* Fade Up */}
                <AnimateOnView variants={fadeUp}>
                    <img
                        src="/assets/Staffaugmentation/Ourmodel/1.jpg"
                        alt="Our IT Staff Augmentation Model"
                        className="max-w-6xl mx-auto w-full"
                    />
                </AnimateOnView>
            </div>
        </div>
    )
}

export default Ourmodel
