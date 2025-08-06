import React from 'react'

function StaffAugmentation() {
    return (
        <div className='mt-24 px-35 grid grid-cols-2 gap-8'>



            <div className="flex justify-center items-center relative w-[500px] h-[500px] translate-x-[70px]">


                {/* Center Circle */}
                <div className="w-[250px] h-[250px] rounded-full flex justify-center items-center shadow-lg z-10 bg-white">
                    <img
                        src="/assets/Staffaugmentationassets/logo staff aug.png"
                        alt="center"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Top Left */}
                <div className="absolute top-[-190px] left-[-190px]">
                    <img
                        src="/assets/Staffaugmentationassets/staff aug 1.png"
                        alt="1"
                        className="w-[500px]"
                    />
                </div>

                {/* Top Right */}
                <div className="absolute top-[-190px] right-[-200px]">
                    <img
                        src="/assets/Staffaugmentationassets/staff aug 2.png"
                        alt="2"
                        className="w-[500px]"
                    />
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-[-190px] left-[-200px]">
                    <img
                        src="/assets/Staffaugmentationassets/staff aug 3.png"
                        alt="3"
                        className="w-[500px]"
                    />
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-[-190px] right-[-200px]">
                    <img
                        src="/assets/Staffaugmentationassets/staff aug 4.png"
                        alt="4"
                        className="w-[500px]"
                    />
                </div>
            </div>



            <div className='flex flex-col gap-4 p-18 leading-relaxed justify-center'>

                <h3 className='text-3xl text-gray-700 font-bold'>Staff Augmentation Your Developers and Our Integration</h3>

                <p className='text-gray-500'>Our staff augmentation services follow a streamlined approach to help you scale efficiently. We consult with you to understand your project goals and skill requirements. Next, we help you select the right talent from our pool of qualified professionals who align with your business needs. Once onboarded, they work seamlessly with your internal teams, ensuring productivity and transparency. Throughout the engagement, we provide continuous support to ensure smooth collaboration, performance tracking, and successful project delivery.</p>


            </div>





        </div>
    )
}

export default StaffAugmentation