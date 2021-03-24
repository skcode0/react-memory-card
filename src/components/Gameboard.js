import React, {useEffect, useContext, useState} from 'react';
import {imgData} from './imgData';
import Card from './Card';
import './Gameboard.css';
import { GameBoardContext, GameBoardScoreContext } from './GameboardContext';

export default function GameBoard(){
    const [cards, setCards] = useContext(GameBoardContext);
    const [score, setScore] = useContext(GameBoardScoreContext);
    const [clickedArr, setClickedArr] = useState([]);

    //ES6 ver. of Durstenfeld shuffle (optimized version of Fisher-Yates)
    function shuffle(cards){
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    useEffect(() => {
        // shuffle whenever score changes
        setCards(shuffle(cards));
    }, [score]);

    const handleClick = (e) =>{
        let filteredCard = cards.filter(card => card.id === +e.target.id);

        setClickedArr(prevArr => prevArr.concat(filteredCard[0].id));
        if(clickedArr.includes(+e.target.id)){
            // reset if image was clicked before
            setScore(0);
            setClickedArr([]);
            setCards(shuffle(cards));
        }
        else{
            // continue
            setScore(prevScore => prevScore + 1);
        }
    }

    return(
        <main>
            {
                imgData.map(img => <Card img={img} key={img.id} handleClick={handleClick}/>)
            }
        </main>
    )
}