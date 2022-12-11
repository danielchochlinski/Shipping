import React from "react";
import styles from "./about.module.scss";
import { useRouter } from "next/router";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  return (
    <div className={styles.about} name="about">
      <div className={styles.about_text}>
        <h2>{t.about}</h2>
        <p>{t.about_p}</p>
      </div>
      <div className={styles.about_pic}>
        <div>
          <span>5+</span>
          <span>{t.years}</span>
        </div>
        <div>
          <span>2000</span>
          <span>{t.amount}</span>
        </div>
        <div>
          <span>1</span>
          <span>{t.shippments}</span>
        </div>
      </div>
    </div>
  );
};

export default About;
