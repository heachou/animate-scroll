import { useRef } from "react"
import { NavLink } from "react-router-dom"
import headerLogo from "../../assets/header-logo.png"
import "./style.less"  

const Links = [
  { name: 'Home', path: '/home' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/service' },
  { name: 'Contact Us', path: '/contact' },
]

const Logo = () => {
  return <NavLink to={'/'} className="flex items-center"
  style={{
    textDecoration: 'none',
  }}
>
  <img src={headerLogo} className="h-9 md:h-12" alt="Logo" />
  <span className="self-center font-normal text-[18px] md:text-[26px] ml-3 md:ml-5 whitespace-nowrap text-primary">Vertex Innovation Technology</span>
</NavLink>
}

const WebHeader = ({className}:{className?:string}) => {
  const menuRef = useRef<any>()

  const toggleMenu = () => {
    menuRef.current.classList.toggle('active')
  }

  return <nav className={`px-2 md:px-4 py-2.5 bg-black relative ${className}`}>
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Logo />
      <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden" onClick={toggleMenu}>
        <span className="sr-only">打开菜单</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>
      {/* pc menu */}
      <div className="hidden md:block menu_wrap bottom-[-216px] md:bottom-0">
        <ul className="flex flex-col p-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          {
            Links.map((link, index) => {
              return <li key={index} >
                <NavLink to={link.path} className="py-1 text-primary text-base border border-transparent px-4 link hover:rounded-full hover:border hover:border-primary">
                  <span>{link.name}</span>
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
    </div>
    {/* mobile menu */}
    <div className="mobile_menu md:hidden absolute z-10 left-0 bg-black w-full" ref={menuRef}>
        <ul className="flex flex-col p-4">
          {
            Links.map((link, index) => {
              return <li key={index} onClick={toggleMenu}>
                <NavLink to={link.path} className="block py-2 md:py-1 text-primary text-base border border-transparent link">
                  <span>{link.name}
                  </span>
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
  </nav>

}

export default WebHeader