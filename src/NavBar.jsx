import './App.css'
import { useState } from 'react'

export function NavBar(){

    return(
<>
    <div className="navbar">
        
        <div className="nav-left">
            <img src="./logo.png" className='logo' />
        </div>

        <div className='nav-mid'>
            <ul className="menu">
                <li><a href="#about">Char</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    </div>

</>
    )
}