import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Instalación', description: 'Instalación de firewalls', href: '/services', icon: ChartPieIcon },
  { name: 'Administración', description: 'Asesoria directa con nuestros clientes', href: '/services', icon: CursorArrowRaysIcon },
  { name: 'Seguridad', description: 'Ciberseguridad para redes y aplicaciones', href: '/services', icon: FingerPrintIcon },
  { name: 'Consultoria', description: 'Consultoria y asesoría de servicios de ciberseguridad', href: '/services', icon: SquaresPlusIcon },
  { name: 'Asistencia', description: 'Migración de plataformas de seguridad', href: '/services', icon: ArrowPathIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white py-2">

    <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 base:px-2" aria-label="Global">

      <div className="flex lg:flex-1 p-1">
        <Link href={'/'} className="-m-1.5 p-1.5">
          <span className="sr-only">Our Company</span>
          <Link href={'/'}>
            <Image 
              src={'/LogoSinBack.png'}
              priority={false}
              alt='logoGS'
              width={250}
              height={250}
            />
          </Link>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-4">
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading text-white-900">
            Servicios
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </Popover.Panel>
          </Transition>
        </Popover>

        <Link href={'/consulting'} className="text-xl font-semibold leading text-white-900">
          Agendar consultoria
        </Link>

        <Link href={'/register'} className="text-xl font-semibold leading text-white-900">
          Registrate ahora
        </Link>
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href={'/login'} className="text-xl font-semibold leading text-white-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
    
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href={'/home'} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image 
              src={'/LogoSinBack.png'}
              priority={false}
              alt='logoGS'
              width={100}
              height={100}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-2">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Servicios
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...products].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-base py-2 pl-6 pr-3 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Link
                href={'/consulting'}
                className="-mx-3 block rounded-base px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Agendar consultoria
              </Link>

              <Link
                href={'/'}
                className="-mx-3 block rounded-base px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Nuestra Compañia
              </Link>
            </div>
            <div className="py-4">
              <Link
                href={'/login'}
                className="-mx-3 block rounded-base px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  );
};

export default Header;