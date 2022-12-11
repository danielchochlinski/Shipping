/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./offer.module.scss";
import Image from "next/image";
import Land from "../../../public/land.png";
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
        <span>{t.road_h}</span>
        <div className={styles.bullets}>
          <span>{t.road_one}</span>
          <span>{t.road_two}</span>
          <span>{t.road_three}</span>
          <span>{t.road_four}</span>
        </div>
        <p>{t.road_p_two}</p>
      </div>

      <div className={styles.offer_box}>
        <img src="./sea.svg" alt="sea" />
        <h3>{t.naval_header}</h3>
        <p>{t.naval_p}</p>
        <div className={styles.naval_box}>
          <span>{t.naval_q_one}</span>
          <span>{t.naval_a_one}</span>
        </div>
        <div className={styles.naval_box}>
          <span>{t.naval_q_two}</span>
          <span>{t.naval_a_two}</span>
        </div>
      </div>

      <div className={styles.offer_box}>
        <img src="./air.svg" alt="air" />
        <h3>{t.air_header}</h3>
        <p>{t.air_p}</p>
        <div className={styles.naval_box}>
          <span>{t.naval_q_one}</span>
          <span>{t.naval_a_one}</span>
        </div>
        <div className={styles.naval_box}>
          <span>{t.air_q_two}</span>
          <span>{t.air_a_two}</span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
