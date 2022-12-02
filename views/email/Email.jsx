import { style } from "@mui/system";
import React from "react";
import styles from "./email.module.scss";
import { useRouter } from "next/router";
import Router from "next/router";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";

const Email = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;

  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <div>
          <span>{t.question}</span>
          <input placeholder={t.name} />
        </div>
        <div>
          <span>{t.answer}</span>
          <input placeholder={t.phone} />
        </div>
        <div>
          <button>{t.send}</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
