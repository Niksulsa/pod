import React from 'react';
import Logo from '../assets/nasa.png';
import './header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="header__brand">
                 <img className="header__logo" src={Logo}/>
                 <h1 className="header__title">APOD</h1> 
            </div>
            <div className="header__nav">
                <ul className="header__navlist">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>  
        </header>
    )
}
