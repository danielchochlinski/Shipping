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
      {memorials.map((el, i) => (
        <Memorial key={`${el.name}${i}`} data={el} i={i} />
      ))}
    </div>
  );
};

export default Memorials;
