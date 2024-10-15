
import { Menu,X } from "lucide-react"
import { useState } from "react"
import { navItems } from "../constants"
import logo from "../assets/logo1.jpg"

const Navbar = () => {

  const [mobileDrawerOpen, setmobileOpen]=useState(false);

  const toggleNavbar=()=>{
    setmobileOpen(!mobileDrawerOpen);

  };


  return (
    <>
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <img src={logo} className="h-20 w-20 mr-2 rounded-full" alt="" />
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item,index)=>(
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>

          {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="py-2 px-3 border rounded-md">
              Connexion
            </a>

            <a href="" className="bg-gradient-to-r from-blue-400 to-blue-950 py-2 px-3 border rounded-md">
              Inscription
            </a>
          </div> */}

          <div className="lg:hidden md:flex  flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>

        {
          mobileDrawerOpen && (
            <div className="fixed backdrop-blur-lg border-b right-0 z-20 bg neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul >
              {navItems.map((item,index)=>(
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
          {/* <div className="flex space-x-6">
          <a href="" className="py-2 px-3 border rounded-md">
              Connexion
            </a>

            <a href="" className="bg-gradient-to-r from-blue-400 to-blue-950 py-2 px-3 border rounded-md">
              Inscription
            </a>
          </div> */}
            </div>
          )
        }
      </div>
    </nav>
    </>
  )
}

export default Navbar