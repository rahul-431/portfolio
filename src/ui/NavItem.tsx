import { NavLink, useLocation } from "react-router-dom";

type NavItemType = {
  to: string;
  name: string;
};

const NavItem = ({ to, name }: NavItemType) => {
  const { pathname } = useLocation();
  const activeLink = pathname === to ? "text-yellow-500" : "";
  return (
    <NavLink to={to} className={`${activeLink} hover:text-yellow-500`}>
      {name}
    </NavLink>
  );
};

export default NavItem;
