import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

interface NavItemProps {
  to: string;
  children: ReactNode;
}

export default function NavItem({ children, to }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => classNames([
          'text-sm',
          {
            underline: isActive,
          }
        ])}
      >
        {children}
      </NavLink>
    </li>
  );
}
