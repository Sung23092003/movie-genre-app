import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isMobile = false, onLinkClick }) => {
  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Phim", path: "/movies" },
    { name: "Tin tức", path: "/news" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <ul className={isMobile ? "space-y-2" : "flex space-x-6"}>
      {navLinks.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `${isMobile ? "block py-2 border-b border-gray-700" : ""}
              ${isActive ? "text-red-500 font-semibold" : "text-white"}
              hover:text-red-400 transition-colors duration-200`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
