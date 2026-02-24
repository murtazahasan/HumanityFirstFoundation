import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const both = () => {
    toggleMenu();
    scrollToTop();
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden">
            {showMenu ? <HiMenuAlt1 size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
          <NavLink to="/" onClick={scrollToTop} className="flex">
            <img
              src="/HFF.png"
              alt=""
              className="sm:ml-6 ml-3 w-10 h-10 rounded-full"
            />
            <span className="text-3xl font-bold ml-2">Humanity First Foundation</span>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-black font-bold hover:text-cyan-700"
              onClick={scrollToTop}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {showMenu && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white flex flex-col p-4">
          <h2 className="font-bold text-xl mt-1 mb-16">Menu</h2>
          <ul className="space-y-5">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="border-t-2 border-b-2 border-gray-300"
              >
                <NavLink
                  to={item.path}
                  className="text-gray-700 hover:text-cyan-700"
                  onClick={both}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <HiMenuAlt1 size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;