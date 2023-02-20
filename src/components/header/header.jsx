import React from 'react';

import { Link } from 'react-router-dom';

import RegForm from '../Forms/RegForm';

import './header.css';

const Header = () => {
    return (
    <>
    <Link to="/"><header className='header'>
        MINI GAMES
        <RegForm />
        </header>
    </Link>
    </>
 );
}

export default Header;