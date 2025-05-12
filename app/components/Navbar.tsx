"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import Image from "next/image";
import KoinBx from "../assets/Images/KoinbxLogo.jpg";

const navLinks = ["Markets", "Fees", "Trade", "List Your Crypto", "Earnings"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Image
            src={KoinBx}
            alt="KoinBX Logo"
            width={190}
            height={50}
            className="object-contain"
          />

          <div className="hidden md:flex items-center space-x-6 font-semibold">
            <Menu size={20} className="text-gray-600 dark:text-gray-300" />
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-1 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition">
              Login
            </button>
            <button className="px-4 py-1 bg-cyan-400 text-white hover:bg-cyan-600 transition rounded-full">
              Register
            </button>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <Download size={20} />
          </button>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t shadow">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                {link}
              </a>
            ))}
            <button className="w-full text-left px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
              Login
            </button>
            <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
