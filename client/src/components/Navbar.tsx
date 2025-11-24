import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stp-secondary-dark/40 bg-gradient-to-b from-stp-secondary via-stp-secondary to-stp-secondary-dark shadow-md backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <img
            src="/assets/colour-logo.jpg"
            alt="St Patrick's One Robotics logo"
            className="h-10 w-10 shadow-lg shadow-stp-dark/20"
          />
          <span>St Patrick's One Robotics</span>
        </Link>
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 text-white"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "max-h-96" : "max-h-0"
          } w-full overflow-hidden transition-[max-height] duration-300 ease-out lg:max-h-none lg:w-auto lg:overflow-visible`}
        >
          <ul className="mt-4 flex flex-col gap-2 text-sm font-medium text-white lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="block rounded-md px-3 py-2 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
