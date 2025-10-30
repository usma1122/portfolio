import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="  w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:px-10 px-6 lg:px-24 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight"
        >
          Usman | Developer
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-zinc-800 dark:text-zinc-200 font-medium">
          <a
            href="#hero"
            className="hover:text-red-700 dark:hover:text-red-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-red-700 dark:hover:text-red-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-red-700 dark:hover:text-red-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-red-700 dark:hover:text-red-500 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-900 dark:text-zinc-100 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-md">
          <nav className="flex flex-col items-center space-y-5 py-5 text-zinc-900 dark:text-zinc-100 font-medium">
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-700 dark:hover:text-red-500"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-700 dark:hover:text-red-500"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-700 dark:hover:text-red-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-700 dark:hover:text-red-500"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
