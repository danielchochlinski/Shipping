import React from "react";
import styles from "./contact.module.scss";
import pl from "./locales/pl";
import en from "./locales/en";
import rus from "./locales/rus";
import { useRouter } from "next/router";
const boldStyle = {
  fontWeight: "500",
  fontSize: "28px",
  lineHeight: "36px",
};
const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "pl" ? pl : rus;

  return (
    <div className={styles.contact} name="contact">
      <div className={styles.contact_info}>
        <h4>{t.contact}</h4>
        <span>Ul.Bociana 22A lok. L1, Kraków</span>
        <span>{t.days}</span>
        <span style={boldStyle}>{t.phone_number}</span>
        <span> +48 793 766 538</span>
        <span>+380965180838</span>
        <span style={boldStyle}>{t.email}</span>
        <span> logistics.krk.2022@gmail.com</span>
      </div>
      <div className={styles.contact_map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.2481664895104!2d20.005572716423835!3d50.06291387942376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644d85af6a03f%3A0xc15129b2b057289e!2sGalicyjska%20Business%20Park!5e0!3m2!1sen!2spl!4v1669479593741!5m2!1sen!2spl"
          //   width="600"
          //   height="300"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
