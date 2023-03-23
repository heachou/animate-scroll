import { useRef } from "react"
import { NavLink } from "react-router-dom"
import headerLogo from "../../assets/header-logo.png"

const Logo = () => {
  return <NavLink to={'/'} className="flex items-center"
    style={{
      textDecoration: 'none',
    }}
  >
    <img src={headerLogo} className="h-9 md:h-12" alt="Logo" />
    <span className="self-center font-normal text-[16px] md:text-xl ml-2 md:ml-5 whitespace-nowrap text-fff">Vertex Innovation Technology</span>
  </NavLink>
}

const WebFooter = () => {
  return <footer className="px-2 md:px-4 py-5 bg-black relative">
    <div className="container flex flex-col md:block mx-auto">
      <div className="mx-auto">
        <Logo></Logo>
        <div className="mt-5 px-4 md:w-[400px] text-fff text-sm leading-[18px]">
        Vertex Innovation Technology is a software development company based in Hong Kong. Our team of experts has been recognized as part of the HKTech300 and HKSTP Ideation program, showcasing our dedication to professional excellence in the field. In this digital age, the transformation of traditional businesses through digitization is an absolute necessity for staying competitive. Our mission is to empower businesses to reach new heights of success by infusing innovation into their operations and positioning them at the forefront of their respective industries.
        </div>
      </div>
      <div className="text-center text-sm text-fff mt-4">@2023 Vertex Innovation Technology</div>
    </div>
  </footer>
}

export default WebFooter