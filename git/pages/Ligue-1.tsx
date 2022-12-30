import React from "react";
import Navigation from "./Navigation";
import styles from "../styles/Products.module.scss";
import Card from "../components/product_card";

const Ligue1 = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.header}>
        <h1>Ligue 1</h1>
        All Ligue 1 Jerseys
      </div>
      <div className={styles.body}>
      <div className={styles.cards}>
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://olbtqtwiccdn.ol.fr/31436-zoom_default/maillot-domicile-homme-22-23.jpg"
          title="OL 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://api.prod.panini.cloud/pub/media/catalog/product/resized/1200/3/1/312220j_1.jpg"
          title="FC Nantes 22/23 Away Shirt"
          price="89.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        />
        <Card
          img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
          title="PSG 22/23 Home Shirt"
          price="69.99€"
        /><Card
        img="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-kids_ss4_p-13303155+u-1824j3u4q84mqudg2bs4+v-98d7a9e6ba714cd3af0ecce8be20e205.jpg?_hv=2&w=900"
        title="PSG 22/23 Home Shirt"
        price="69.99€"
      />
      </div>
      </div>
    </div>
  );
};

export default Ligue1;
