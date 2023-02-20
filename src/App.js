import React from 'react';

import { Link } from 'react-router-dom';

import {Routes, Route} from 'react-router-dom';

import Catalog from './components/pages/Catalog/Catalog';

import Game from './components/pages/TicTacToe/Game';

import Quiz from './components/pages/Quiz/Quiz';

//import Form from  './/components/Forms/Form';

import RegForm from './components/Forms/RegForm';

import './App.css';


const onFormSubmit = (data) => {
   console.log(data);
}

function App() {
  return (
   
   <div>
      
     <header className = 'App-header'>
         
         <div><RegForm onFormSubmit = {onFormSubmit}/></div>
         <Link to="/"><div className = 'title'>MINI GAMES</div></Link>
         

      </header> 
     
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
