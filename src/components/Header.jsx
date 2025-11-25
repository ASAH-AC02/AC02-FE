import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="p-4 flex justify-center items-center border-b border-[#2A3A4E] relative">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto" />
            </Link>
            <div className="flex gap-3 items-center absolute right-4">
              <button className="text-white hover:bg-[#2A3A4E] p-2 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
              <button className="text-white hover:bg-[#2A3A4E] p-2 rounded-lg transition-colors">
                <User size={20} />
              </button>
            </div>
          </header>
  )
}

export default Header