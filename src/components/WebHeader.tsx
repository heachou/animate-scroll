import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import headerLogo from "../assets/header-logo.png"

const Links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
]

const WebHeader = () => {

  return <nav className="border-black border px-2 md:px-4 py-2.5 bg-black">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <NavLink to={'/'} className="flex items-center">
        <img src={headerLogo} className="h-9 md:h-12" alt="Logo" />
        <span className="self-center font-normal text-[18px] md:text-[26px] ml-3 md:ml-5 whitespace-nowrap text-[#19EFFD]">Vertex Innovation Technology</span>
      </NavLink>
      <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden">
        <span className="sr-only">打开菜单</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-[#19EFFD]">
          {
            Links.map((link, index) => {
              return <li key={index}>
                <NavLink to={link.path}>
                  <span>{link.name}
                  </span>
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  </nav>

}

export default WebHeader