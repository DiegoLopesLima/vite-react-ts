import { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";

interface NavItemProps {
  to: To;
  children: ReactNode;
}

export default function NavItem({ children, to }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `${isActive ? 'bg-black bg-opacity-30' : ''} py-2 px-2.5 rounded-md text-sm`}
      >
        {children}
      </NavLink>
    </li>
  );
}
