import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../img/LOGO .png"



const Header = () => {
    return (
        <header>
            <nav className='navigation'>
    
                <Link to="/"><img src={LOGO}/></Link>
                <div className='header__nav__div2'>
                <Link to="/catalog" ><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="my-svg" d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" fill="#E8E8E8"/>
</svg></Link>
                <Link to="/cart"><svg width="32" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="my-svg shop-cart-button" d="M26.2 29a2.477 2.477 0 1 1 .2 0h-.2ZM6.752 26.32a2.68 2.68 0 1 1 5.364 0 2.68 2.68 0 0 1-5.366 0h.002Zm3.8-5.634a1.184 1.184 0 0 1-1.145-.867L4.574 2.364H1.18A1.182 1.182 0 0 1 1.18 0h4.28a1.183 1.183 0 0 1 1.145.868l4.833 17.455h13.178L29 8.275H14.4a1.183 1.183 0 1 1 0-2.365h16.413a1.178 1.178 0 0 1 .986.533 1.191 1.191 0 0 1 .1 1.122l-5.405 12.412a1.185 1.185 0 0 1-1.084.709H10.552Z" fill="#E8E8E8"/></svg></Link>
                </div>
                
            </nav>
        </header>
    );
};

export default Header;