function ClientsCardComponent() {
  return (
    <div className="w-full px-6 md:px-28 mt-6">

      <div className="flex justify-center">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
          Our Valuable Clients
        </h3>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 md:gap-x-12 xl:gap-9">

        <div>
          <img src="/assets/Home/clientassets/1.png" className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44  object-cover w-full" alt="" />
        </div>
        <div>
          <img src="/assets/Home/clientassets/2.png" className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44  object-cover w-full" alt="" />
        </div>
        <div>
          <img src="/assets/Home/clientassets/3.png" className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44  object-cover w-full" alt="" />
        </div>
        <div>
          <img src="/assets/Home/clientassets/4.png" className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44  object-cover w-full" alt="" />
        </div>
        <div>
          <img src="/assets/Home/clientassets/5.png" className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full" alt="" />
        </div>

      </div>

    </div>
  )
}

export default ClientsCardComponent
