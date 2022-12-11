import React from "react";
import styles from "./memorials.module.scss";
import memorials from "./memorials.json";
import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
import Memorial from "./Memorial";
import { isMuiElement } from "@mui/material";
import { useRouter } from "next/router";

const Memorials = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;

  return (
    <div className={styles.memorials} name="memorials">
      {/* {memorials.map((el, i) => (
        <Memorial key={`${el.name}${i}`} data={el} i={i} />
      ))} */}
      <div className={styles.memorial_box}>
        <p>{t.p_one}</p>
        <span>{t.company_one}</span>
        <span>{t.title_one}</span>
      </div>
      <div className={styles.memorial_box}>
        <p>{t.p_two}</p>
        <span>{t.company_two}</span>
        <span>{t.title_two}</span>
      </div>
      <div className={styles.memorial_box}>
        <p>{t.p_three}</p>
        <span>{t.company_three}</span>
        <span>{t.title_three}</span>
      </div>
      <div className={styles.memorial_box}>
        <p>{t.p_four}</p>
        <span>{t.company_four}</span>
        <span>{t.title_four}</span>
      </div>
    </div>
  );
};

export default Memorials;
