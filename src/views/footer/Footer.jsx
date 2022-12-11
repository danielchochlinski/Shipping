import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import Router from "next/router";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <Link to="about" smooth={true} spy={true} duration={500} offset={-150}>
          <span>{t.about_us}</span>
        </Link>
        <Link to="offer" smooth={true} spy={true} duration={500} offset={-190}>
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
      <div className={styles.footer_img}>
        <img src="./footer.svg" alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
