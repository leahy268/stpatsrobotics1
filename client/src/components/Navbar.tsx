import { useState } from "react";
import { navLinks } from "../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stp-primary/15 bg-stp-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold text-stp-primary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stp-primary text-white font-display text-xl leading-none">S</span>
          <span>St Patrick's One Robotics</span>
        </a>
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-stp-primary/20 text-stp-dark"
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
          <ul className="mt-4 flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-sm font-medium text-stp-dark">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 hover:bg-stp-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
