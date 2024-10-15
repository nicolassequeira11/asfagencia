import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    {
      name: "Inicio",
      link: "/"
    },
    {
      name: "Sobre Nosotros",
      link: "/sobre-nosotros"
    },
    {
      name: "Servicios",
      link: "/servicios"
    },
    {
      name: "Jugadores",
      link: "/jugadores"
    },
    {
      name: "Contacto",
      link: "/contacto"
    }
  ]

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev); // Alternar el estado
  };

  const handleClickLink = () => {
    setIsMenuOpen(false)
  }

  return(
    <header>
      <nav className="flex py-6 text-center font-montserrat max-sm:justify-between">

        {/* Logo */}
        <div className="w-1/4 my-auto max-sm:w-fit max-sm:ms-4">
          <p className="my-auto text-[30px] font-[800] max-sm:text-[20px]">
            ASF Agencia
          </p>
        </div>

        {/* Links */}
        <div className="w-2/4 my-auto grid grid-cols-5 max-sm:hidden">
          {links.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="text-[17px] "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Redes */}
        <div className="w-1/4 flex mx-auto justify-center gap-[10px] my-auto max-sm:hidden">
          <a 
            href="" 
            target="_blank" 
            className="bg-gold-base hover:bg-gold-dark p-2 rounded-full text-white"
          >
            <FaInstagram 
              className="size-5" 
            />
          </a>
          <a 
            href="" 
            target="_blank" 
            className="bg-gold-base hover:bg-gold-dark p-2 rounded-full text-white"
          >
            <FaWhatsapp 
              className="size-5" 
            />
          </a>
        </div>

        {/* Menú Mobile */}
        <GiHamburgerMenu 
          onClick={handleMenuOpen}
          className="my-auto w-fit text-[35px] text-black-base me-4 max-sm:flex hidden"
        />
        
        {isMenuOpen ? 
          <div 
            className="w-full py-6 absolute top-[80px] z-50 flex flex-col bg-black-base"
          >
            {links.map((item, index) => (
              <Link 
                key={index} 
                to={item.link}
                onClick={handleClickLink}
                className="text-[25px] py-[10px] font-[600] 
                  text-white hover:text-gold-base active:text-gold-dark"
              >
                {item.name}
              </Link>
            ))}
          </div>
        : ""}
      </nav>
    </header>
  )
}