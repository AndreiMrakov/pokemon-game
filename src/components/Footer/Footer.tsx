import React, { FC } from 'react';
import styles from './Footer.style.module.css';

export const Footer: FC = () => {
    return (
        <footer>
            <div className={ styles.wrapper }>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
};
