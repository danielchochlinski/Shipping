import { style } from "@mui/system";
import React, { useState, useContext } from "react";
import styles from "./email.module.scss";
import { useRouter } from "next/router";
import Router from "next/router";
import { useNotification, uniqueID } from "../../../store/notification-context";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";

const Email = () => {
  const [fullName, setFullName] = useState();
  const [info, setInfo] = useState();

  const router = useRouter();
  const { locale } = router;
  console.log(fullName, info);
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  const sendEmailHandler = async (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      info: info,
    };

    console.log(data);

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        body: JSON.stringify(data),
      });
      //implement notifications
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <div>
          <span>{t.question}</span>
          <input
            placeholder={t.name}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <span>{t.answer}</span>
          <input
            placeholder={t.phone}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div>
          <button onClick={sendEmailHandler}>{t.send}</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
