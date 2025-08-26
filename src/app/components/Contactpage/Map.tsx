import React from 'react'

function Map() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 mt-8 mb-12">
      <div className="w-full max-w-8xl mx-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6103875932363!2d77.00953461071971!3d10.99275245512088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c88ee4cd65%3A0xb8c39ae3878d1b0e!2sSoftworks%20Technologies!5e0!3m2!1sen!2sin!4v1756110859314!5m2!1sen!2sin"
          className="w-full h-full rounded-lg shadow-md"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
