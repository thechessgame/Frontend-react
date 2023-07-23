import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const NavButton = (props) => {
  return (
    <>
      <li>
        <NavLink to={props.to} className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>
          {props.children}
        </NavLink>
      </li>
    </>
  );
};

export default NavButton;
