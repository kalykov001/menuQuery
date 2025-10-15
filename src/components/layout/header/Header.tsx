import scss from "./header.module.scss";
import headerLogo from "../../../assets/headerLogo.svg";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img src={headerLogo} alt="" />
          <nav className={scss.nav}>
            <NavLink to="/">
              <p>Menu</p>
            </NavLink>
            <NavLink to="/orders">
              <p>Orders</p>
            </NavLink>
            <NavLink to="/admin">
              <p>Admin</p>
            </NavLink>
              <span onClick={() => setBurgerMenu(!burgerMenu)}>
                <CiMenuBurger />
              </span>
               {burgerMenu && (
    <div className={scss.burgerMenu}>
      <NavLink to="/">Menu</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </div>
  )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
