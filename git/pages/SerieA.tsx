import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Products.module.scss'


const SerieA = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <h1>SERIE A</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
    );
};

export default SerieA;