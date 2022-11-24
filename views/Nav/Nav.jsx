import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "./nav.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
const navStyle = {
  opacity: "1",
  transition: "all 0.5s ease-in-out",
};
const hideNav = {
  opacity: "0",
  transition: "all 0.5s ease-in-out",
};
const iconStyle = {
  color: "#1D2F52",
  //     width: "60px",
  //   height: "50px",
};
const Nav = () => {
  const [nav, setNav] = useState(true);
  useEffect(() => {
    const changeWidth = () => {
      // setScreenWidth(window.innerWidth);
      window.innerWidth > 720 ? setNav(true) : setNav(false);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  // const toggleNav = () => {
  //   setNav(!nav);
  // };
  return (
    <div className={styles.nav}>
      <div className={styles.nav_top}>
        <span>Ul.Galicyjska 1 biuro 51C, 31-586 Kraków</span>
        <span>Email: logistics.krk.2022@gmail.com</span>
        <span>+48 793 766 538 +380965180838</span>
      </div>

      <div class={styles.nav_bottom}>
        <div className={styles.logo}>
          <Image src={logo} width={150} height={100} alt="logo" />
        </div>

        <div className={styles.nav_links_div}>
          <div className={styles.hamburger}>
            <MenuIcon sx={iconStyle} onClick={() => setNav(!nav)} />
          </div>
          <div className={styles.nav_links} style={nav ? navStyle : hideNav}>
            <span>O Firmie</span>
            <span>Oferta</span>
            <span>Opinie</span>
            <span>Kontakt</span>
          </div>
        </div>

        <div className={styles.nav_lang}>
          <div>
            <select name="lan" id="lan">
              <option value="PL">PL</option>
              <option value="RUS">RUS</option>
              <option value="ENG">ENG</option>
            </select>
          </div>
          <div>
            <EmailIcon sx={iconStyle} fontSize="large" />
            <LocalPhoneIcon sx={iconStyle} fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
