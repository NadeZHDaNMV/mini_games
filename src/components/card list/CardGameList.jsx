import React from "react";

import { Link } from 'react-router-dom';

import CardGame from "../card game/CardGame";

import style from "./style.module.css";

const CardGameList = ({ games }) => {
    return (
        <div className= {style.games}>
            {games.map((game) => (
            <Link to={`/game/${game.name.toLowerCase()}`}><CardGame key = {game.name} {...game}></CardGame></Link>
            ))}
        </div>
    );
}





export default CardGameList;