import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 pb-2 sm:flex sm:items-center sm:justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-0">
          <img src="/HFF.png" alt="Logo" className="w-8 h-8 rounded-4xl" />
          <h2 className="text-lg font-semibold tracking-wide">Humanity First Foundation</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-700 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-700 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/join" className="hover:text-cyan-700 transition">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t pt-3 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
