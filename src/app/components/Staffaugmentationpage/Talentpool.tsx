import React from 'react'
import AnimateOnView from '../../../../animations/AnimateOnView';
import { fadeDown, headingVariant, textScale } from '../../../../animations/animations';

function Talentpool() {
    const webTechs = [
        "NodeJS Developers",
        "MEAN Stack Developers",
        "MERN Stack Developers",
        "JAVA Developers",
        "GoLang Developers",
        "PHP Laravel Developers",
        "ROR Developers",
        ".NET Developers",
        "Magento Developers",
        "Laravel Developers",
        "Full-stack Developers"
    ];

    const mobileTechs = [
        "iOS Developers",
        "iOS Swift Developers",
        "Android Developers",
        "Flutter Developers",
        "React Native Developers",
        "Ionic Developers",
        "Kotlin Developers",
        "Hybrid App Developers"
    ];

    const serviceNowModules = [
        "ITSM",
        "ITBM",
        "ITOM",
        "ITAM",
        "IRM",
        "SecOps"
    ];

    const qualityAssurance = [
        "Mobile App Tester",
        "Mobile Test Automation",
        "Selenium Test Engineer",
        "Cypress Test Engineer",
        "Web Test Automation",
        "Security and Penetration Tester",
        "Usability Tester",
        "Manual Tester",
        "Software Tester",
        "QA Engineers"
    ];

    const platform = [
        "Mobile",
        "Web",
        "Desktop"
    ]

    const frontend = [
        "Angular",
        "React",
        "Golang",
        "Vue.JS",
        "TypeScript",
        "JavaScript"
    ];
    const backend = [
        "Java",
        ".Net",
        "Python",
        "NodeJS"
    ];
    const mobile = [
        "Java",
        "Android",
        "Kotlin",
        "iOS",
        "Windows",
        "Laravel"
    ];
    const database = [
        "MongoDB",
        "MySQL",
        "PostgreSQL"
    ];
    const deployment = [

        "Servers",
        "VMs",
        "Containers",
        "Kubernetes",
        "Serverless"
    ];
    const testing = [
        "Selenium",
        "JMeter",
        "Cypress",
        "Security and Penetration Testing"
    ];
    const projecttools = [
        "JIRA"
    ]
    const devops = [
        "Jenkins",
        "Azure Pipelines",
        "AWS Code Build"
    ];
    const analytics = [
        "Google Big Query",
        "Amazon Redshift",
        "Firebase Analytics"
    ];


    return (
        <div className=" mt-20">

            {/* Headings */}
            <div className="flex flex-col gap-6 md:gap-12 text-center px-4 md:px-12 lg:px-20 xl:px-28">
                <AnimateOnView variants={headingVariant}>
                <h3 className="text-2xl font-bold">
                    Take Advantage of Our Extended Talent Pool Through
                </h3>
                </AnimateOnView>
                <AnimateOnView variants={headingVariant}>
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#001A5A]">
                    IT Staff Augmentation
                </h1>
                </AnimateOnView>
                <AnimateOnView variants={fadeDown}>

                <p className="text-gray-700 leading-relaxed text-left text-sm md:text-base max-w-6xl mx-auto">
                    Create a fabulous team of skilled software engineers, UI/UX designers, business analysts, scrum masters, QA specialists, and the most in-demand technology specialists to create cutting-edge digital solutions. Use our resource augmentation services to gain immediate access to the professionals listed below:
                </p>
                </AnimateOnView>
            </div>

            {/* Grid */}
            <AnimateOnView variants={fadeDown} className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10 mt-14 px-4 md:px-12 lg:px-20 xl:px-28'>

                {/* Web Technology */}
                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Web Technology</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {webTechs.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== webTechs.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                {/* Mobile Technology */}
                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Mobile Technology</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {mobileTechs.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== mobileTechs.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                {/* Service Now */}
                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Service Now</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {serviceNowModules.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== serviceNowModules.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                {/* Quality Assurance */}
                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Quality Assurance</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {qualityAssurance.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== qualityAssurance.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

            </AnimateOnView>


            <div className='w-full bg-cover bg-center my-10 px-4'
                style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}>

                <AnimateOnView variants={textScale} className='text-center py-12 text-xl font-bold text-white'>Cutting-edge Technology Stack Used by Our Experts</AnimateOnView>

            </div>


            {/* Grid -2 section */}


            <AnimateOnView variants={fadeDown} className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-10 mt-14 px-4 md:px-12 lg:px-20 xl:px-28'>

                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Platform</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {platform.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== platform.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Front-End</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {frontend.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== frontend.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Back-End</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {backend.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== backend.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Mobile</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {mobile.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== mobile.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>


                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Database</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {database.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== database.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>


                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Deployment</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {deployment.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== deployment.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Testing</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {testing.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== testing.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>


                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Project Tools</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {projecttools.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== projecttools.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>


                <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>DevOps</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {devops.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== devops.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                 <div className='flex flex-col gap-2 items-start w-full'>
                    <div className='px-6 py-4 bg-[#001A5A] w-full text-center'>
                        <h1 className='text-xl font-bold text-white'>Analytics</h1>
                    </div>
                    <ul className='flex flex-col gap-3 mt-4 list-disc list-inside w-full'>
                        {analytics.map((tech, index) => (
                            <React.Fragment key={index}>
                                <li className="text-left">{tech}</li>
                                {index !== analytics.length - 1 && <hr className="border-gray-300 w-full" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                



            </AnimateOnView>

        </div>
    )
}

export default Talentpool
