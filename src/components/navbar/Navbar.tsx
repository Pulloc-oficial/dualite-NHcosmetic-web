// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { FaRegFileAlt, FaUserCircle, FaCube } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center px-4">
      <div className="w-full max-w-6xl bg-white/30 backdrop-blur-md shadow-md rounded-xl px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold text-gray-800">
          Dualité
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/pages" className="flex items-center text-gray-800 hover:text-green-600 transition">
            <FaRegFileAlt className="mr-1" /> Pages
          </Link>
          <Link to="/account" className="flex items-center text-gray-800 hover:text-green-600 transition">
            <FaUserCircle className="mr-1" /> Account
          </Link>
          <Link to="/blocks" className="flex items-center text-gray-800 hover:text-green-600 transition">
            <FaCube className="mr-1" /> Blocks
          </Link>
          <Link to="/docs" className="flex items-center text-gray-800 hover:text-green-600 transition">
            <MdInsertDriveFile className="mr-1" /> Docs
          </Link>
        </div>

        {/* Buy Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
