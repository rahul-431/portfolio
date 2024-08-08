import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full items-center flex justify-start h-14 text-white text-lg px-4 md:px-6 lg:px-10">
      <ul className="flex gap-6 ">
        <NavLink to="/projects" className="hover:text-yellow-500">
          Projects
        </NavLink>
        <NavLink to="/resume" className="hover:text-yellow-500">
          Resume
        </NavLink>
        <NavLink to="/about" className="hover:text-yellow-500">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:text-yellow-500">
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
