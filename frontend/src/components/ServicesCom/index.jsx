
const callouts = [
  {
    name: 'INSTALACIÓN',
    description: 'Los firewalls son una parte esencial de cualquier estrategia de seguridad de la información en una empresa u organización',
    imageSrc: '/firewall.jpg',
    href: '/consulting',
  },
  {
    name: 'ADMINISTRACIÓN',
    description: 'La implementación de buenas prácticas de administración de firewalls contribuye significativamente a la protección de los activos digitales de una empresa.',
    imageSrc: '/administracion.jpg',
    href: '/consulting',
  },
  {
    name: 'CIBERSEGURIDAD',
    description: 'En Guardian Security hemos desarrollado soluciones enfocadas a proteger los activos de nuestros clientes desde el vector más atacado que es el usuario final.',
    imageSrc: '/ciberseguridad.jpg',
    href: '/consulting',
  },
  {
    name: 'CONSULTORIA',
    description: 'Nuestros expertos en seguridad de la información están listos para ayudarte a proteger tus activos digitales. Ofrecemos servicios de consultoría personalizados para evaluar, fortalecer y garantizar la integridad y confidencialidad de tus datos.',
    imageSrc: '/consultoria.jpg',
    href: '/consulting',
  },
  {
    name: 'ASISTENCIA',
    description: 'Descubre cómo mantener la confidencialidad, integridad y disponibilidad de la información de tu empresa con nuestras herramientas y recursos confiables.',
    imageSrc: '/Asistencia.jpg',
    href: '/consulting',
  },
]

const Services = () => {

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-4xl text-center font-bold text-sky-900">Nuestros Servicios</h1>
          <br />
          <p className="text-2xl text-justify text-sky-900">
          Nuestra compañia ha realizado una serie de servicios especializados 
          buscamos cubrir todos los aspectos relacionados con las tecnologías 
          de la información, ciberseguridad y redes. 
          </p>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="text-8xl font-bold group relative text-stone-950">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt='services'
                    className="h-full w-full object-cover object-center"
                    width={200}
                    height={200}
                  />
                  
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base text-justify font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 