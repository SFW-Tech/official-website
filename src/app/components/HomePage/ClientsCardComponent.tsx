function ClientsCardComponent() {
  return (
    <div className="w-full h-14 md:h-20 lg:h-24 xl:h-[140px] mt-6">

      <div className="flex justify-center">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
          Our Valuable Clients
        </h3>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <img
          src="/assets/Home/clientassets/clients.png"
          alt="Clients"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}

export default ClientsCardComponent
