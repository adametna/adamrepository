import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import styles from "../styles/Products.module.scss";
import Card from "../components/product_card";
import { getProduct } from "../api/getProduct";

const PremierLeague = () => {
    const  [product, setProduct]: any= useState();
  useEffect(()=>{
getProduct().then((res)=>{
setProduct(res.data)


})
  }, [])

    return (
        <div>
            <Navigation/>
        <div className={styles.header}>
            <h1>PREMIER LEAGUE</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
        <div className={styles.body}>
      <div className={styles.cards}>
        {product?.filter((product: any, index: any)=> {
          if (product.categoryId==="Premier League") {
            return product;
          }
        })
        .map((product: any, index: any)=> {
          return (
            <Card props={product}/>
          ) 
          
        })}
        
      </div>
      </div>
        
        </div>
        
        
    );
};

export default PremierLeague;