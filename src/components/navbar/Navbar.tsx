// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { FaRegFileAlt, FaUserCircle, FaCube } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">Dualité</div>

          {/* Menu */}
          <div className="flex items-center space-x-6">
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

            {/* Buy Button */}
            <a
              href="#"
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
