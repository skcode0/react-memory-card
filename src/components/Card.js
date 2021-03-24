import React, { useContext, useState } from 'react';
import './Card.css';

export default function Card(props){
    return(
        <div className="card" >
            <img src={props.img.src} alt={props.img.alt} />
            <div className="hover-div" onClick={props.handleClick} id={props.img.id}></div>
        </div>
    )
}