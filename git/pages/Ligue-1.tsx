import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import styles from "../styles/Products.module.scss";
import Card from "../components/product_card";
import { getProduct } from "../api/getProduct";

const Ligue1 = () => {
  const [product, setProduct]: any = useState();
  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <div className={styles.header}>
        <h1>Ligue 1</h1>
        All Ligue 1 Jerseys
      </div>
      <div className={styles.body}>
        <div className={styles.cards}>
          {product
            ?.filter((product: any, index: any) => {
              if (product.categoryName === "Ligue 1") {
                return product;
              }
            })
            .map((product: any, index: any) => {
              return <Card props={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Ligue1;
