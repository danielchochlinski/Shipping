import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <Link to="about" smooth={true} spy={true} duration={500} offset={-150}>
          <span>O firmie</span>
        </Link>
        <Link to="offer" smooth={true} spy={true} duration={500} offset={-190}>
          <span>Oferta</span>
        </Link>
        <Link
          to="memorials"
          smooth={true}
          spy={true}
          duration={500}
          offset={-150}
        >
          <span>Opinie</span>
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-150}
        >
          <span>Kontakt</span>
        </Link>
      </div>
      <div className={styles.footer_img}>
        <img src="./footer.svg" alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
