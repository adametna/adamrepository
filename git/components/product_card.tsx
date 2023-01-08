import React from "react";
import styles from "../styles/Card.module.scss";
import Router from "next/router";


export default function Card({props}: any) {
  const redirect=() => {
    localStorage.setItem('clickId', props._id)
    Router.push("/Product_page")
  }
  return (
    <div className={styles.card} onClick={redirect}>
      <img className={styles.img}
        src={props.image}
        alt="Shirt"
      ></img>
      <h1>{props.name}</h1>
      <p className={styles.price}>{props.price}.00€</p>
    </div>
  );
}

