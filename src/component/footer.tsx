import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="bg-black px-4 py-6 text-white border-t border-white/20 text-sm">

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Name & Copyright */}
      <div className="text-black text-xs md:text-sm">
        © {new Date().getFullYear()} <span className="text-white font-medium">Prince Merja</span> — All rights reserved.
      </div>

      {/* Quick Navigation */}
      <div className="flex gap-4 text-black text-xs md:text-sm">
        <a href="#hero" className="hover:text-white transition-all">Home</a>
        <a href="#about" className="hover:text-white transition-all">About</a>
        <a href="#skills" className="hover:text-white transition-all">Skills</a>
        <a href="#projects" className="hover:text-white transition-all">Projects</a>
        <a href="#contact" className="hover:text-white transition-all">Contact</a>
      </div>

      {/* Social Links */}
      <div className="flex gap-3 text-black text-lg">
        <a
          href="https://www.instagram.com/prince_merja_.1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/prince-merja-26532b2a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/princemerja1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </footer>
);
}
