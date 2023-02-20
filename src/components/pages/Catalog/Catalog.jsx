import React from "react";

import CardGameList from "../../card list/CardGameList";

import { GAMES } from "../../utils/consts";

const Catalog = () => {
    return (
    <>
       <CardGameList games={GAMES}/> 
    </>
           
);
}

export default Catalog;