import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Products.module.scss";

export default function Jerseys() {
  return (
    <div className={styles.products}>
      <Navigation />
      <h1>Jerseys</h1>
    </div>
  );
}
