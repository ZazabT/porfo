'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code2, Home, User, X, Menu, Mail } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Code2,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/30 backdrop-blur-2xl shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl p-4">
        {/* Logo */}
       <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.1,
       
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href="/"  className={`text-4xl font-bold font-serif capitalize${
                  scrolled ? "text-black" : "text-white"
                }`}>
        Tizazab<span className="text-blue-500">.</span>
      </Link>
    </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <Button
                variant="link"
                className={`flex gap-1 text-base ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <link.icon className={`mr-2 h-7 w-7 ${scrolled ? "text-black" : "text-white"}`} />
                {link.name }
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button Toggle */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute bg-background/80 backdrop-blur-lg p-5 gap-3"
          >
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <Button
                  variant="link"
                  className={`flex gap-2 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  <link.icon
                    className={`mr-2 h-4 w-4 ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  />
                  {link.name}
                </Button>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
