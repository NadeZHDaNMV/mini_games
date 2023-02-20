import React, { useState } from "react";

import Board from '../TicTacToe/Board';

import {calcWinner} from '../TicTacToe/helper';

import '../TicTacToe/Game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calcWinner(board);
   

//создать функцию, которая отвечает за клик по ячейке
    const handleClick = (index) => {
        const boardCopy = [...board]

          // определить, был ли клик по ячейке или игра закончилась
          if (winner) {
            return (<p>Game over</p>)
          } else if (boardCopy[index]) {
            return null
          }

          // определить, чей ход Х ? 0
          boardCopy[index] = xIsNext ? 'X' : '0';

          // обновить наш стейт
          setBoard(boardCopy);
          setXIsNext(!xIsNext);


    }
        const startNewGame = () => {
            return (
                <button className = 'start__btn' onClick = {() => setBoard(Array(9).fill(null))}>
                    START NEW GAME
                </button>
            )
        }
    return (
        <div className='wrapper'>
           <p className = 'game__info'>
            { winner ? 'Победитель ' + winner + ' Game over' : 'Сейчас ходит' + (xIsNext ? ' X' : ' 0') }
           </p>
            <Board squares = {board} click = {handleClick}/>
            {startNewGame()}
            
          
        </div>
    )
}



export default Game;