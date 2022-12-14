import { style } from "@mui/system";
import React, { useState, useContext } from "react";
import styles from "./email.module.scss";
import { useRouter } from "next/router";
import Router from "next/router";
import { useNotification, uniqueID } from "../../../store/NotificationProvider";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";

const Email = () => {
  const [fullName, setFullName] = useState("");
  const [info, setInfo] = useState("");
  const dispatch = useNotification();

  const router = useRouter();
  const { locale } = router;
  console.log(fullName, info);
  let disable;
  if (fullName.length <= 6 || info.length <= 6) {
    disable = true;
  }

  const t = locale === "en" ? en : locale === "pl" ? pl : rus;
  const sendEmailHandler = async (e) => {
    e.preventDefault();
    if (disable) {
      dispatch({
        id: uniqueID(),
        type: "ERROR",
        message: t.error,
      });
      return;
    }
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
      console.log(response);
      if (response.status === 200) {
        dispatch({
          id: uniqueID(),
          type: "SUCCESS",
          message: "Message Sent!",
        });
        setFullName("");
        setInfo("");
      } else
        dispatch({
          id: uniqueID(),
          type: "ERROR",
          message: "UPS Something Went Wrong",
        });
    } catch (error) {
      console.log(error.message);
    }
    setFullName("");
    setInfo("");
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
