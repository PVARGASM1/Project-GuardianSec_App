import { useState } from 'react'
import { Link } from 'react-router-dom';
import AboutUs from '../AboutUs'
import Footer from '../Footer/index'
import BannerHome from '../BannerHome'
import ServicesHome from '../ServicesHome'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'

const products = [
  { name: 'Instalación', description: 'Instalación de firewalls', href: '/services', icon: ChartPieIcon },
  { name: 'Administración', description: 'Asesoria directa con nuestros clientes', href: '/services', icon: CursorArrowRaysIcon },
  { name: 'Seguridad', description: 'Ciberseguridad para redes y aplicaciones', href: '/services', icon: FingerPrintIcon },
  { name: 'Consultoria', description: 'Consultoria y asesoría de servicios de ciberseguridad', href: '/services', icon: SquaresPlusIcon },
  { name: 'Asistencia', description: 'Migración de plataformas de seguridad', href: '/services', icon: ArrowPathIcon },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white py-2">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 base:px-2">
        <div className="flex lg:flex-1 p-1">
          <a href="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Guardian Security App</span>
            <img alt="Logo" src="./public/LogoSinBack.png" className="h-18 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >

          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-xl font-semibold leading text-white-900">
              Servicios
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
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
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </PopoverPanel>

          </Popover>

          <a href="/consulting" className="text-xl font-semibold leading text-white-900">
            Agendar Consultoria
          </a>
          <Link to="/register" className="text-xl font-semibold leading text-white-900">
            Registrate ahora
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-xl font-semibold leading text-white-900">
             <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="./public/LogoSinBack.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/consulting"
                  className="-mx-3 block rounded-base px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Agendar consultoria
                </a>
                <a
                  href="/home"
                  className="-mx-3 block rounded-base px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nuestra Compañia
                </a>

              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>


             
      <AboutUs/>
      <BannerHome/>
      <ServicesHome/>
      <Footer/>
    </header>

    

    
  )
}

export default Header;