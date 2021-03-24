import React, { useState, createContext } from 'react';
import { imgData } from './imgData';

export const GameBoardContext = createContext();
export const GameBoardScoreContext = createContext();
export const GameBoardBestScoreContext = createContext();
export const ClickedArrContext = createContext();


export function GameboardProvider(props){
    const [ cards, setCards ] = useState(imgData);
    const [ score, setScore ] = useState(0);
    const [ best, setBest ] = useState(0);

    return(
        <GameBoardContext.Provider value={[cards, setCards]}>
            <GameBoardScoreContext.Provider value={[score, setScore]}>
                <GameBoardBestScoreContext.Provider value={[best, setBest]}>
                    {props.children}
                </GameBoardBestScoreContext.Provider>
            </GameBoardScoreContext.Provider>
        </GameBoardContext.Provider>
    )

}