/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    path: "/",
  },
  {
    id: 4,
    title: "Our Team",
    path: "/",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* logo section */}
        <div>
            <h1 className='font-bold text-2xl'>The Coding Journey</h1>
        </div>
        {/* menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary
                  absolute mt-2 rounded-full left-1/2 -translate-x-1/2
                  top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* mobile hamburger section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar