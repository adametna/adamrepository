import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Products.module.scss";
import { getProduct } from "../api/getProduct";
import Card from "../components/product_card";

const SerieA = () => {
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
        <h1>Serie A</h1>
        <div>All Serie A Jerseys</div>
      </div>
      <div className={styles.body}>
        <div className={styles.cards}>
          {product
            ?.filter((product: any, index: any) => {
              if (product.categoryName === "Serie A") {
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
export default SerieA;
