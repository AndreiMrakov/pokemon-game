import classNames from 'classnames';
import React, { FC } from 'react';
import { PokemonCardProps } from './PokemonCard.types';
import CardBack from '@/assets/images/card-back-side.jpg';
import styles from './PokemonCard.style.module.css';

export const PokemonCard: FC<PokemonCardProps> = ( { pokemon, opened, open } ) => {
    return (
        <div className={ styles.root } onClick={open}>
            <div className={ classNames( styles.pokemonCard, { [styles.active]: opened } ) }>
                <div className={ styles.cardFront }>
                    <div className={ classNames( styles.wrap, styles.front ) }>
                        <div className={ classNames( styles.pokemon, styles[pokemon.type] ) }>
                            <div className={ styles.values }>
                                <div className={ classNames( styles.count, styles.top ) }>
                                    { pokemon.values.top }
                                </div>
                                <div className={ classNames( styles.count, styles.right ) }>
                                    { pokemon.values.right }
                                </div>
                                <div className={ classNames( styles.count, styles.bottom ) }>
                                    { pokemon.values.bottom }
                                </div>
                                <div className={ classNames( styles.count, styles.left ) }>
                                    { pokemon.values.left }
                                </div>
                            </div>
                            <div className={ styles.imgContainer }>
                                <img src={ pokemon.img } alt={ pokemon.name || 'pokemon name' } />
                            </div>
                            <div className={ styles.info }>
                                <span className="number">
                                    #{ pokemon.id }
                                </span>
                                <h3 className="name">
                                    { pokemon.name }
                                </h3>
                                <small className="type">Type: <span>{ pokemon.type }</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.cardBack }>
                    <div className={ classNames( styles.wrap, styles.back ) }>
                        <img src={ CardBack } alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    );
};