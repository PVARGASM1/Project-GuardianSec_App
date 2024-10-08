
const BannerHome = () => {
    
  return (
    <>
      <div className="bg-white py-24 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Trabajamos con las mejores técnologías y marcas del mercado.
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/cisco.png'}
              alt="Cisco"
              width={158}
              height={48} />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/fortinet.png'}
              alt="Fortinet"
              width={158}
              height={48} />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={'/amazon.png'}
              alt="AWS"
              width={158}
              height={48} />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={'/Azure.png'}
              alt="Azure"
              width={158}
              height={48} />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={'/aruba.jpg'}
              alt="aruba"
              width={158}
              height={48} />
          </div>
        </div> 
      </div>
    </>

    );
}

export default BannerHome