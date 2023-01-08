import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import Jerseys from "./Jerseys";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link href="/Home">
        {" "}
        <button className={styles.home_button}>HOME</button>{" "}
      </Link>
      <div className={styles.menu}>
        <button className={styles.jerseys_button}>JERSEYS</button>
        <div className={styles.dropdown_menu}>
          <a href="/Ligue-1">Ligue 1</a>
          <a href="/Premier-League">Premier League</a>
          <a href="/LaLiga">LaLiga</a>
          <a href="/SerieA">Serie A</a>
          <a href="/Bundesliga">Bundesliga</a>
          <a href="National_Teams">National Teams</a>
        </div>
      </div>
    </div>
  );
}
