import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'

import { logo } from "../assets";
import { links } from "../assets/constants";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NavLinks = ({handleClick}) => (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row items-center justify-center my-8 text-lg font-bold text-white hover:text-yellowGreen"
          onClick={() =>handleClick && handleClick()}
        >
          <link.icon className="w-6 h-6 mr-2"/>
          {link.name}
        </NavLink>
      ))}
    </div>
  )

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-dimGrey bg-opacity-80 blur-[0.6px] h-screen">
      <img src={logo} alt="Logo" className="w-full h-16 object-contain" />
      <NavLinks />
    </div>
  )
};

export default Sidebar;
