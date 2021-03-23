import React from 'react';
import './Card.css';

export default function Card(props){
    // onClick to click on image and increase score

    return(
        <div className="card">
            <img src={props.img.src} alt={props.img.alt} />
            <div className="hover-div"></div>
        </div>
    )
}