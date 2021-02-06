import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { Footer } from '@/components/Footer';
import './App.style.css';

import Bg1 from '@/assets/images/bg1.jpg';
import Bg3 from '@/assets/images/bg3.jpg';
import { PokemonCard } from '../components/PokemonCard';
import { pokemonsMock } from '../mock/pokemonsMock';

export function App() {
    const [ opened, setOpened ] = useState<string[]>( [] );
    
    const handleOpen = ( id: string ) => {
        setOpened( prev => prev.includes( id ) ? prev.filter( i => i !== id ) : [ ...prev, id ] );
    };
    
    const cards = () => pokemonsMock.map( pokemon => (
        <PokemonCard
            key={ pokemon.id }
            pokemon={ pokemon }
            opened={ opened.includes( pokemon.id ) }
            open={ handleOpen.bind( null, pokemon.id ) }
        />
    ) );
    
    return (
        <>
            <Header
                title={ 'Pokemon game' }
                desc={ 'First homework' }
            />
            <Layout
                id={ 'rules' }
                title={ 'Rules' }
                bgURL={ Bg1 }
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            </Layout>
            <Layout
                id="cards"
                title="Cards"
                bgURL="Bg1"
            >
                <div className="flex">
                    { cards() }
                </div>
            </Layout>
            <Layout
                id={ 'about' }
                title={ 'About' }
                bgURL={ Bg3 }
            >
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.</p>
                <p>To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.</p>
                <p>If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. </p>
                <p>If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
            </Layout>
            <Footer />
        </>
    );
}
