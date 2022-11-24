import React from "react";
import styles from "./memorials.module.scss";
import memorials from "./memorials.json";
console.log(memorials);
const Memorials = () => {
  return (
    <div className={styles.memorials}>
      {memorials.map((el, i) => (
        <div className={styles.memorial_box} key={`mem ${i}`}>
          <p>{el.p}</p>
          <span>{el.company}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Memorials;
