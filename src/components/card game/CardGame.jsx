import React from "react";

import style from "./style.module.css";

const CardGame = ({ name, img, description }) => {
    return (
    
    <div className = {style.game}>
        <img src={img} alt={description} className = {style.img}/>
        <div className = {style.name}>{name}</div>
        <div className = {style.description}>{description}</div>
    </div>
    );
}

export default CardGame;