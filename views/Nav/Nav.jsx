import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import Router from "next/router";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
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
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  const [nav, setNav] = useState(true);

  useEffect(() => {
    window.innerWidth > 1050 ? setNav(true) : "";
    window.innerWidth < 1050 ? setNav(false) : "";
    const changeWidth = () => {
      window.innerWidth > 1050 ? setNav(true) : "";
      window.innerWidth < 1050 ? setNav(false) : "";
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    Router.push("/", "/", { locale });
  };
  return (
    <div className={styles.nav}>
      <div className={styles.nav_top}>
        <span>Ul.Galicyjska 1 biuro 51C, 31-586 Kraków</span>
        <span>{t.email}</span>
        <span>+48 793 766 538 +380965180838</span>
      </div>

      <div className={styles.nav_bottom}>
        <div className={styles.logo}>
          <Link to="top" smooth={true} spy={true} duration={500} offset={-110}>
            <Image src={logo} width={150} height={100} alt="logo" />
          </Link>
        </div>

        <div className={styles.nav_links_div}>
          <div className={styles.hamburger}>
            <MenuIcon sx={iconStyle} onClick={() => setNav(!nav)} />
          </div>
          <div className={styles.nav_links} style={nav ? navStyle : hideNav}>
            <Link
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
            >
              <span>{t.about_us}</span>
            </Link>
            <Link
              to="offer"
              smooth={true}
              spy={true}
              duration={500}
              offset={-190}
            >
              <span>{t.offer}</span>
            </Link>
            <Link
              to="memorials"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
            >
              <span>{t.memorials}</span>
            </Link>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
            >
              <span>{t.contact}</span>
            </Link>
          </div>
        </div>

        <div className={styles.nav_lang}>
          <div>
            <select name="lan" id="lan" onChange={changeLanguage}>
              <option value="pl">pl</option>
              <option value="rus">rs</option>
              <option value="en">en</option>
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
