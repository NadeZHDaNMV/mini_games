import React from 'react';

import { Link } from 'react-router-dom';

import RegForm from '../Forms/RegForm';


import './header.css';

const Header = () => {
    return (
    <>
    <header className='header'>
    <Link to="/">MINI GAMES</Link>
        <RegForm />
        </header>
    </>
 );
}

export default Header;