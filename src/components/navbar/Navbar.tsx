// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleRoof, FaLeaf } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { GiMeditation } from "react-icons/gi";
import { useScroll } from "../../context/scrollContext";


interface Navbar1Props {
  onSwitch?: () => void;
}

const Navbar: React.FC<Navbar1Props> = ({ onSwitch }) => {
  const { isScrolled } = useScroll();

  return (
    <nav className={`fixed w-full z-50 flex justify-center ${ isScrolled ? "" : "top-5"}`}>
      <div className={`w-full shadow-md backdrop-blur-md  px-6 py-3 flex justify-between items-center ${
        isScrolled ? "bg-[#4E5F46]" : "rounded-xl max-w-7xl bg-[#E8C88A]/15" }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="./public/images/logoB.png" alt="Transistor" width="158" height="48"/>
        </Link  >

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#D6D9BA] text-lg inter-titulos">
          <Link to="/productos" className="flex items-center hover:text-[#FFFFFF] transition ">
            <FaLeaf className="mr-1 text-white" /> Productos
          </Link>
          <Link to="/holistica" className="flex items-center hover:text-[#FFFFFF] transition">
            <GiMeditation className="mr-1 text-white" /> Holística
          </Link>
          <Link to="/nosotros" className="flex items-center hover:text-[#FFFFFF] transition">
            <FaPeopleRoof className="mr-1 text-white" /> Nosotros
          </Link>
          <Link to="/eventos" className="flex items-center hover:text-[#FFFFFF] transition">
            <FaCalendarAlt className="mr-1 text-white" /> Eventos
          </Link>
          <Link to="/eventos" className="flex items-center hover:text-[#FFFFFF] transition">
            <AiOutlineMail className="mr-1 text-white" /> Contacto
          </Link>
        </div>

        {/* Buy Button */}
        <a
          href="#"
          className={`hidden md:inline-block text-[#1A1A1A] px-4 py-2 rounded-2xl 
           transition-all duration-300 shadow-md inter-navegacion hover:text-white 
          ${ isScrolled ? "bg-[#E8C88A] hover:bg-[#4E5F46] " : "bg-[#FFEBCF] hover:bg-[#4E5F46]" }`}
        >
          Buy Nowx
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
