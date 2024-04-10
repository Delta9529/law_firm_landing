import React from "react";
// import Button from "../Button";
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="logo">
                <img src="Group 10386.png" alt="logo" width={143} height={30.3} /></div>
            <div className="options">
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button className='navbar-button'>
                    Contact Now
            </button>

        </nav>
    )
}