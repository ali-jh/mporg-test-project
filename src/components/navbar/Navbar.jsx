import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/image/logo.png";
import useLocalStorage from "../../hooks/useLocalStorage";

const Navbar = () => {
  const [userProfile, setUserProfile] = useLocalStorage("userProfile", null);
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {userProfile ? (
            <span>{userProfile?.username}</span>
          ) : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
