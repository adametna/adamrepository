import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import Jerseys from "./Jerseys";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div>
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
      <div>
        <button className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: "2rem", height: "2rem" }}
          >
            <g data-name="Layer 2">
              <g data-name="shopping-cart">
                <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z" />
                <circle cx="7.5" cy="19.5" r="1.5" />
                <circle cx="17.5" cy="19.5" r="1.5" />
              </g>
            </g>
          </svg>
          <div className={styles.cart_count}>3</div>
        </button>
      </div>
    </div>
  );
}
