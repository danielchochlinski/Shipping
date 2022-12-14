import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import About from "../src/views/about/About";
import Add from "../src/views/add/Add";
import Contact from "../src/views/contact/Contact";
import Email from "../src/views/email/Email";
import Footer from "../src/views/footer/Footer";
import Hero from "../src/views/hero/Hero";
import Memorials from "../src/views/memorials/Memorials";
import Nav from "../src/views/nav/Nav";
import Offer from "../src/views/offer/Offer";
import NotificationProvider from "../store/NotificationProvider";

export default function Home() {
  useEffect(() => {
    const locale = "pl";
    Router.push("/", "/", { locale });
  }, []);
  return (
    // <NotificationProvider>
    <div>
      <Head>
        <title>Transcomlogistics</title>
        <meta name="description" content="Transportation company" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="fZn0BmjbvLY_LyBoGkUxz3FWtNeNqX_P9XnlifdRoqI"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <div className={styles.main_top} name="top">
          <Nav />
          <Hero />
        </div>
        <About />
        <Offer />
        <Add />
        <Memorials />
        <Contact />
        <Email />
        <Footer />
      </main>
    </div>
    // </NotificationProvider>
  );
}
