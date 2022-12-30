import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Products.module.scss'
import Link from "next/link";

const NatTeams = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <h1>NATIONAL TEAMS</h1>
            <div>
            maillots tah les fous
            </div>
            
        </div>
    );
};

export default NatTeams;