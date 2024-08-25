import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Instalación',
      description:
        'Servicio de instalación de tus equipos de seguridad.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Seguridad',
      description:
        'Ciberseguridad de tus redes y aplicaciones.',
      icon: LockClosedIcon,
    },
    {
      name: 'Consultoria',
      description:
        'Consultoria y asesoría de servicios de ciberseguridad, con los mejores especilistas en seguridad de la información y certificados.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Asistencia técnica y administración',
      description:
        'Asistencia en migración de plataformas de seguridad.',
      icon: FingerPrintIcon,
    },
  ]

const ServicesHome = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="flex-auto text-3xl font-semibold items-center justify-center text-slate-900">Ciberseguridad</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas en seguridad de la información lo encuentras en Guardian Security.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-900">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div><div className="bg-white py-24 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Nuestros clientes
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/emermedica.png'}
              alt="emermedica"
              width={158}
              height={48}
              placeholder = 'empty' />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/colmedica.jpg'}
              placeholder = 'empty'
              alt="Colmedica"
              width={158}
              height={48} />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={'/rua_group.png'}
              placeholder = 'empty'
              alt="rua"
              width={158}
              height={48} />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={'/GCN-logo-yellow.png'}
              placeholder = 'empty'
              alt="GCN"
              width={158}
              height={48} />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={'/mercados_zapatoca.png'}
              placeholder = 'empty'
              alt="zapatoca"
              width={158}
              height={48} />

          </div>
        </div>
      </div>
    </> 
  )
}

export default ServicesHome