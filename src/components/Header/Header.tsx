import React, { FC } from 'react';
import { HeaderProps } from './Header.types';
import styles from './Header.style.module.css';

export const Header: FC<HeaderProps> = ( { title, desc } ) => {
    return (
        <header className={ styles.root }>
            <div className={ styles.forest } />
            <div className={ styles.container }>
                <h1>
                    { title }
                </h1>
                <p>
                    { desc }
                </p>
            </div>
        </header>
    );
};
