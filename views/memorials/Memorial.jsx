import React from "react";
import styles from "./memorials.module.scss";
import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
import { useRouter } from "next/router";
const Memorial = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  //   const { p, company, title } = data;
  //   console.log(data);
  //   console.log(p, company, title, "tis");
  return (
    <div className={styles.memorial_box}>
      <p>{t.p}</p>
      <span>{t.ompany}</span>
      <span>{t.title}</span>
    </div>
  );
};

export default Memorial;
