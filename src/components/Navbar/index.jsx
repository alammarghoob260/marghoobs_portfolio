import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">MyPortfolio</div>
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col space-y-3">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
