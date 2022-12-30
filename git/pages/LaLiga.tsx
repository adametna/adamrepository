import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Products.module.scss'


const LaLiga = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <h1>LaLIGA</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
    );
};

export default LaLiga;