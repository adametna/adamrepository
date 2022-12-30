import React from "react";
import styles from "../styles/Card.module.scss";


function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img}
        src={props.img}
        alt="PSG Home Shirt"
      ></img>
      <h1>{props.title}</h1>
      <p className={styles.price}>{props.price}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}

export default Card;
