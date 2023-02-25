import React, { useState } from "react";

import '../Quiz/Quiz.css';


const questions = [
    {
     questionText: 'В каком фильме Леонардо ДиКаприо сыграл главную роль?',
     answerOptions: [
         {answerText: 'Титаник', isCorrect: true},
         {answerText: 'Она написала убийство', isCorrect: false},
         {answerText: 'Один дома', isCorrect: false},
         {answerText: 'Крепкий орешек', isCorrect: false},
     ]
 },
 
     {
     questionText: 'Какая компания разработала React?',
     answerOptions: [
         {answerText: 'Amazon', isCorrect: false},
         {answerText: 'Mail', isCorrect: false},
         {answerText: 'Facebook', isCorrect: true},
         {answerText: 'Google', isCorrect: false},
     ]
 },
 
     {
     questionText: 'Кто НЕ относится к людям Х?',
     answerOptions: [
         {answerText: 'Человек-паук', isCorrect: true},
         {answerText: 'Магнетто', isCorrect: false},
         {answerText: 'Зверь', isCorrect: false},
         {answerText: 'Джин', isCorrect: false},
     ]
 },
 
     {
     questionText: 'Что не является языком программирования?',
     answerOptions: [
         {answerText: 'Go', isCorrect: false},
         {answerText: 'Java Script', isCorrect: false},
         {answerText: 'Python', isCorrect: false},
         {answerText: 'Html', isCorrect: true},
     ]
 },
 
 ]

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState (0);
    const [score, setScore] = useState (0);
    const [showScore, setShowScore] = useState (false);
    const [money, setMoney] = useState (0);

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1)
        setMoney(money + 150)
    }

const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length) {
        setCurrentQuestion (nextQuestion)
    } else {
        setShowScore (true)
    }
}
const refresh = () => {
        setCurrentQuestion (0);
        setScore (0);
        setShowScore (false);
        setMoney (0);
    }
   
    return (
       <div className = 'qwz'>
        {
            showScore 
            ? <div className="section__score">
                <div>Правильных ответов {score} из {questions.length}</div>
                <div>Вы заработали ${money}</div>
                <button 
                className = "refresh__btn"
                onClick = {refresh}
                >Попробовать ещё раз?</button>
              </div>
            : 
             <div className = 'quizz'>
                <div className = 'question__section'>
                <div className = 'question__count'>
                <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                </div>
                <div className = 'question__text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className = 'answer__section'>
                {questions[currentQuestion].answerOptions.map(item => (
                <button className = "answer__btn" onClick = {() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>)
                )}
                <div className="answer__money">Вы заработали ${money}</div>
                </div>
              </div> 
        }              
        </div>
    )
}

export default Quiz;