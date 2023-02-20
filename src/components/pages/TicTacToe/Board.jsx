import React from "react";

import Square from "../TicTacToe/Square";

import '../TicTacToe/Board.css';



const Board = ({squares, click}) => {
    return (
        <div className='board'>
            {
                squares.map((square, i) => (
                    <Square key = {i} value = {square} onClick = {() => click(i)}/>
                ))
            }
            
        </div>
    )
}


export default Board;