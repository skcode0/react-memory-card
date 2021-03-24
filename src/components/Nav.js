import React, { useContext } from 'react';
import { GameBoardScoreContext, GameBoardBestScoreContext } from './GameboardContext';
import './Nav.css';

export default function Nav(){

    const [score] = useContext(GameBoardScoreContext);
    const [best, setBest] = useContext(GameBoardBestScoreContext);

    function showBest(score){
        if(score > best){
            setBest(score);
        }
        return best;
    }

    return(
        <nav>
            <h1>Memory Game</h1>
            <p>Score: {score} | Best: {showBest(score)} </p>
        </nav>
    )
}