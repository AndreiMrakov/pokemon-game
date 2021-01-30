import React, { FC } from 'react';
import classnames from 'classnames';
import { LayoutProps } from './Layout.types';
import styles from './Layout.style.module.css';

export const Layout: FC<LayoutProps> = ( { title, children, bgColor, bgURL, id } ) => {
    const style = {
        background: bgURL ? `url(${ bgURL })` : bgColor || '',
    };
    return (
        <section className={ styles.root } id={ id } style={ style }>
            <div className={ styles.wrapper }>
                <article>
                    <div className={ styles.title }>
                        <h3>
                            { title }
                        </h3>
                        <span className={ styles.separator } />
                    </div>
                    <div className={ classnames( styles.desc, styles.full ) }>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    );
};
