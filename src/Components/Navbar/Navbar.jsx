import React, { useEffect, useRef, useState } from "react";
import logo from "/assets/logo.jpg";

import { motion } from "motion/react";

import { CiMenuFries } from "react-icons/ci";

import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef()

  const openMenu = () => {
    if(menu){
      setMenu(false)
    }
    else{
      setMenu(true)
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
  
    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);
  

  return (
    <nav className="py-5 flex items-center justify-between relative">
      {/* logo section */}
      <motion.img
        src={logo}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-16 rounded-full"
        alt=""
      />
      {/* hamburger section */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CiMenuFries
          size={46}
          onClick={openMenu}
          className="text-white cursor-pointer border p-3 rounded-full hover:bg-[var(--myPrimaryColor)] hover:border-none duration-500"
        />
      </motion.div>

      <div ref={menuRef} className={`fixed top-0 -right-20 z-100 ${menu ? 'w-40 right-0' : '-w-10'} h-screen p-5 bg-[var(--myPrimaryColor)] duration-500`}>
        <IoMdClose
        onClick={openMenu}
          className="border border-white p-2 rounded-full ms-auto cursor-pointer hover:bg-white hover:text-[var(--myPrimaryColor)]"
          size={40}
        />
        <div className="flex flex-col gap-2 items-center justify-center h-screen">
          <div className="w-[1px] h-[70px] bg-white"></div>
          <div className="gap-6 *:my-4 text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className="w-[1px] h-[70px] bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
