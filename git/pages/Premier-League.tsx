import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Products.module.scss'

const PremierLeague = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <h1>PREMIER LEAGUE</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
    );
};

export default PremierLeague;