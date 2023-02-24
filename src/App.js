import React from 'react';

import { Link } from 'react-router-dom';

import {Routes, Route} from 'react-router-dom';

import { setItem, getItem } from './components/utils/localStorage';

import Catalog from './components/pages/Catalog/Catalog';

import Game from './components/pages/TicTacToe/Game';

import Quiz from './components/pages/Quiz/Quiz';

import Header  from './components/header/header';

import './App.css';


//const onFormSubmit = (data) => {
 //console.log(data);
//}

function App() {

  const handleRegistrtion = (newUser) => {
   const users = getItem('users');
  } 
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
