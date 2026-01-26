"use client";

import NavigationLink from "../links/navigation-link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChangeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header
      className="fixed top-0 left-0 z-100 h-0 overflow-visible"
      data-name="Header"
      data-node-id="2109:173"
    >
      <div className="flex w-full content-stretch items-center justify-center bg-linear-to-b from-gray-900 to-gray-900/0 py-10 max-sm:py-0">
        <nav
          className="relative flex shrink-0 content-stretch items-center gap-12.5 max-sm:hidden"
          data-name="Navigation"
          data-node-id="2108:165"
        >
          <NavigationLink href="/#about">About</NavigationLink>
          <NavigationLink href="/#skills">Skills</NavigationLink>
          <NavigationLink href="/#experience">Experience</NavigationLink>
          <NavigationLink href="/#portfolio">Portfolio</NavigationLink>
          <NavigationLink href="/#contacts">Contacts</NavigationLink>
        </nav>
      </div>
      <div className="realtive h-0 w-full">
        <nav
          onClick={handleChangeOpen}
          style={
            isOpen
              ? { transform: "translateX(0)" }
              : { transform: "translateX(-100%)" }
          }
          className="realtive z-100 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-gray-900 transition-all"
        >
          <NavigationLink href="/#about">About</NavigationLink>
          <NavigationLink href="/#skills">Skills</NavigationLink>
          <NavigationLink href="/#experience">Experience</NavigationLink>
          <NavigationLink href="/#portfolio">Portfolio</NavigationLink>
          <NavigationLink href="/#contacts">Contacts</NavigationLink>
        </nav>
        <button
          onClick={handleChangeOpen}
          className="absolute top-5 right-5 z-100 sm:hidden"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M3 6H21"
              animate={isOpen ? { d: "M3 3 L21 21" } : { d: "M3 6 L21 6" }}
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d="M3 12H21"
              animate={isOpen ? { d: "M3 3 L21 21" } : { d: "M3 12 L21 12" }}
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d="M3 18H21"
              animate={isOpen ? { d: "M3 21 L21 3" } : { d: "M3 18 L21 18" }}
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
      </div>
    </header>
  );
}
