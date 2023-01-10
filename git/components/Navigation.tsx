import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import { useCart } from "../context/cartContext";
import SearchBar from "./Search";
import data from "./Search";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const { openCart, cartQuantity }: any = useCart();
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
      <div className={styles.right}>
        <div className={styles.searchBar}>
          <SearchBar placeholder="Search" data={data} />
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
            <div className={styles.cart_count}>{cartQuantity}</div>
          </button>
        </div>
        <div>
          <Button className={styles.loginButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 128 128"
              id="Layer_1"
              version="1.1"
              style={{ width: "2rem", height: "2rem" }}
            >
              <g>
                <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z" />

                <path d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z" />
              </g>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
