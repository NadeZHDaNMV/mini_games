import React, { useState } from "react";

import '../Quiz/Quiz.css';


const questions = [
    {
     questionText: 'Столица США?',
     answerOptions: [
         {answerText: 'Бостон', isCorrect: false},
         {answerText: 'Вашингтон', isCorrect: true},
         {answerText: 'Нью-Йорк', isCorrect: false},
         {answerText: 'Лос-Анджелес', isCorrect: false},
     ]
 },
 
     {
     questionText: 'Какая компания разработала React?',
     answerOptions: [
         {answerText: 'Amazon', isCorrect: false},
         {answerText: 'Mail', isCorrect: true},
         {answerText: 'Facebook', isCorrect: true},
         {answerText: 'Google', isCorrect: false},
     ]
 },
 
     {
     questionText: 'Что НЕ относится ко вселенной Marvel?',
     answerOptions: [
         {answerText: 'Бэтмен', isCorrect: true},
         {answerText: 'Халк', isCorrect: true},
         {answerText: 'Мстители', isCorrect: false},
         {answerText: 'Железный человек', isCorrect: false},
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

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1)
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
    }
   
    return (
       <div className = 'qwz'>
        {
            showScore 
            ? <div className="section__score">
                <div>Правильных ответов {score} из {questions.length}</div>
                <button 
                className = "refresh__btn"
                onClick = {refresh}
                >Попробовать ещё раз...</button>
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
                </div>
              </div> 
        }              
        </div>
    )
}

export default Quiz;