import React from "react";
import styles from "./offer.module.scss";
import Image from "next/image";
import Land from "../../public/land.png";
import { useRouter } from "next/router";

import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
const Offer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;

  return (
    <div className={styles.offer} name="offer">
      <h2>{t.offer}</h2>

      <div className={styles.offer_box}>
        <img src="./land.svg" alt="land" />
        <h3>{t.road_header}</h3>
        <p>{t.road_p}</p>
      </div>

      <div className={styles.offer_box}>
        <img src="./sea.svg" alt="sea" />
        <h3>{t.naval_header}</h3>
        <p>{t.naval_p}</p>
      </div>

      <div className={styles.offer_box}>
        <img src="./air.svg" alt="air" />
        <h3>{t.air_header}</h3>
        <p>{t.air_p}</p>
      </div>
    </div>
  );
};

export default Offer;
