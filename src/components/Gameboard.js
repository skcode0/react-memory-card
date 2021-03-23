import React from 'react';
import {imgData} from './imgData';
import Card from './Card';
import './Gameboard.css';

export default function GameBoard(){
    return(
        <main>
            {
                imgData.map(img => <Card img={img} key={img.id} />)
            }
        </main>
    )
}