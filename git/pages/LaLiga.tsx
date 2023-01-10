import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Products.module.scss";
import Card from "../components/product_card";
import { getProduct } from "../api/getProduct";

const LaLiga = () => {
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
        <h1>La Liga</h1>
        <div>All La Liga Jerseys</div>
      </div>
      <div className={styles.body}>
        <div className={styles.cards}>
          {product
            ?.filter((product: any, index: any) => {
              if (product.categoryName === "La Liga") {
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
export default LaLiga;
