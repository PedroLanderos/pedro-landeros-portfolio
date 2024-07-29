import P from "../assets/Pv2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={P} alt="P" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/pedro-jonas-landeros-cortes-049a2225b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={36}/>
            </a>
            <a href="https://github.com/PedroLanderos" target="_blank" rel="noopener noreferrer">
                <FaGithub size={36}/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
