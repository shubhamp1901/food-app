import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>Food Villa</h1>
        <div className={styles.navList}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
