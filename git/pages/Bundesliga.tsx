import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Products.module.scss'


const Bundesliga = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <h1>BUNDESLIGA</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
    );
};

export default Bundesliga;