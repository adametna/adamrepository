import React from "react";
import styles from "../styles/Card.module.scss";
import { useCart } from "../context/cartContext";

export default function Card({ props }: any) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  }: any = useCart();
  const quantity = getItemQuantity(props.id);

  // const redirect=() => {
  //   localStorage.setItem('clickId', props._id)
  //   Router.push("/Product_page")
  // }

  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.image} alt="Shirt"></img>
      <h1>{props.name}</h1>
      <p className={styles.price}>{props.price}.00€</p>
      <button onClick={() => increaseCartQuantity(props._id, props)}>
        Add to cart
      </button>
    </div>
  );
}
