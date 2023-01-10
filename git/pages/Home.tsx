import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navigation />
      <h1>ouais ouais l'accueil</h1>
      <div>/* lastest product */</div>
    </div>
  );
};

export default Home;
