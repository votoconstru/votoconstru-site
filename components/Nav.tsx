import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Início', href: '#', current: false },
  { name: 'Destaques', href: '#destaques', current: false },
  { name: 'Departamentos', href: '#departamentos', current: false },
  { name: 'Sobre Nós', href: '#sobre', current: false },
  { name: 'Contato', href: '#contato', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-loja-blue">
      {({ open }) => (
        <>
          <div className="px-main mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className='relative w-16 h-16'>
                    <Image
                      layout='fill'      
                      src="/images/logo.png"
                      alt="Votoconstru logo"
                    />
                  </div>
                  <p className='ml-1 text-white font-oswald text-2xl'>VOTOCONSTRU</p>
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-loja-red text-white'
                            : 'text-gray-300 hover:bg-gray-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-loja-blue inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-loja-red text-white' : 'text-gray-300 hover:bg-gray-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>              
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}