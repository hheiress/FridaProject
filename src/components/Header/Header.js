import React from "react";
import ShoppingCartPopUp from "./ShoppingCartPopUp";

const Header = () => {

    return(
        <header>
            <a href=""></a>
            <img src="https://cdn.clorian.com/img/clients/FridaKahlo/images/logo_white.png" alt="logo" className ="logo"></img>
            <nav>
            <ShoppingCartPopUp/>
            <select className="navbar-select">
                <option> English</option>
                <option> Español</option>
            </select>
            </nav>
        </header>
    )
}

export default Header;