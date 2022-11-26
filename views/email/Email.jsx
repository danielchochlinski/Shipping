import { style } from "@mui/system";
import React from "react";
import styles from "./email.module.scss";

const Email = () => {
  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <div>
          <span>Masz pytania?</span>
          <input placeholder="Imię Nazwisko" />
        </div>
        <div>
          <span>Zostaw swoje dane i my skontaktujemy się z tobą</span>
          <input placeholder="Telefon" />
        </div>
        <div>
          <button>Wyślij</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
