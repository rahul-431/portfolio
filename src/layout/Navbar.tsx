import { Link } from "react-router-dom";
import NavItem from "../ui/NavItem";

const NavItems = [
  {
    to: "/projects",
    name: "Projects",
  },
  {
    to: "/resume",
    name: "Resume",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];
const Navbar = () => {
  return (
    <div className=" md:items-start  w-full  flex flex-col gap-2 text-white text-lg px-4 md:px-6 lg:px-10 py-2">
      <div className=" md:hidden flex justify-between items-center h-8 w-full">
        <Link to="/">
          <img
            src="rahul_logo.png"
            alt="Rahul Mijar"
            className="w-12 h-12 object-contain "
          />
        </Link>
        <h1>Software Engineer</h1>
      </div>
      <div className="">
        <ul className="flex gap-6 h-12 items-center justify-around">
          {NavItems.map((item) => (
            <NavItem to={item.to} name={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
