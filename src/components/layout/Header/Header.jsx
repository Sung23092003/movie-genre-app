import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../../assets/image/logo_movie.png";
import NavBar from "./NavBar/NavBar";
import { searchMovies } from "../../../services/userService";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      try {
        const response = await searchMovies(searchTerm);
        console.log(response.data);
        navigate(`/movies?query=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
        setIsOpen(false);
      } catch (error) {
        console.error("Lỗi khi tìm phim:", error);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-red-500">Cinemas</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavBar />
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Tìm kiếm phim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1 rounded-md text-black outline-none"
            />
            <button
              type="submit"
              className="bg-[#E63946] px-3 py-1 rounded-md hover:opacity-80"
            >
              Tìm
            </button>
          </form>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4">
          <NavBar isMobile onLinkClick={() => setIsOpen(false)} />
          <form onSubmit={handleSearch} className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Tìm kiếm phim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 rounded-md text-black outline-none"
            />
            <button
              type="submit"
              className="bg-[#E63946] px-3 py-2 rounded-md text-white"
            >
              Tìm
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
