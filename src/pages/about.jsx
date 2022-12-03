import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}