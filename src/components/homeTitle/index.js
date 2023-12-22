import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomeTitle() {
    return(
        <div className={styles.equation}>
            <div className={styles.number}>Teacher</div>
            <div className={styles.operand}>+</div>
            <div className={styles.lastNumber}>Designer</div>
            <div className={styles.equals}></div>
            <div className={styles.number}>Peter Graham</div>
        </div>
    )

}