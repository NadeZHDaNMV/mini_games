import React, { useEffect } from 'react';

import {Routes, Route} from 'react-router-dom';

import Catalog from './components/pages/Catalog/Catalog';

import Game from './components/pages/TicTacToe/Game';

import Quiz from './components/pages/Quiz/Quiz';

import Header  from './components/header/header';

import './App.css';


function App() {

  
   useEffect (() => alert('Welcome! Click one of the games to start playing.'), []); 
   
  return (
   
   <div>
     <Header/>
      <main className='App-main'>
         <Routes>
         <Route path ='/' element ={<Catalog />}></Route>
         <Route path ='/game/tictactoe' element ={<Game/>}></Route>
         <Route path ='/game/quiz' element ={<Quiz/>}></Route>
         <Route path = '/game/*' element = {<>Эта игра еще в разработке...</>}></Route>
      </Routes>
      </main>
   </div>
   );    
           
}

export default App;
