import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between mt-10 md:mt-16 mx-6 md:mx-12 lg:mx-80">
      <a href="" className="font-semibold text-2xl tracking-wider">
        MUHARRIR.
      </a>
      <ul className="hidden md:flex gap-10 text-lg">
        {navs.map((v, i) => (
          <li key={i}>
            <NavLink to={v.href} className="hover:text-gray-400 ">
              {v.text}
              {/* <div
                className={
                  NavLink === v.href ? " w-7 h-2 border-b-2 border-black" : " "
                }
              ></div> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
