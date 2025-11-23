import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-stp-primary/15 bg-stp-light py-10 text-sm text-stp-dark/70">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <p>© {new Date().getFullYear()} St Patrick's One Robotics. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <Link className="hover:text-stp-primary" to="/">
          Back to top
        </Link>
        <span aria-hidden="true" className="text-stp-primary/30">
          •
        </span>
        <a
          className="hover:text-stp-primary"
          href="https://www.canva.com/"
          target="_blank"
          rel="noreferrer"
        >
          Canva inspiration
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
