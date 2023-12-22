import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomeTitle() {
    return(
        <div className={styles.equation}>
            <div className={styles.number}>teacher</div>
            <div className={styles.operand}>+</div>
            <div className={styles.lastNumber}>designer</div>
            <div className={styles.equals}></div>
            <div className={styles.answer}>PETER GRAHAM</div>
        </div>
    )

}