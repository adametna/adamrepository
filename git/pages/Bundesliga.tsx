import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Products.module.scss";
import Card from "../components/product_card";
import { getProduct } from "../api/getProduct";

const Bundesliga = () => {
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
        <h1>Bundesliga</h1>
        All Bundesliga Jerseys
      </div>
      <div className={styles.body}>
        <div className={styles.cards}>
          {product
            ?.filter((product: any, index: any) => {
              if (product.categoryName === "Bundesliga") {
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

export default Bundesliga;
