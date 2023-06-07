import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar__container'>
            <div>    
                <NavLink to={"/"} className={"hero__logo"}>W.</NavLink>
            </div>
            <div className='links__container'>
                <NavLink className={"navlinks"}  to={"/"}>Home</NavLink>                    <NavLink className={"navlinks"} to={"/about"}>About</NavLink>
                <NavLink className={"navlinks"} to={"/roadmap"}>Roadmap</NavLink>
                <NavLink className={"navlinks"} to={"/showcase"}>Showcase</NavLink>
                <NavLink className={"navlinks"} to={"/team"}>Team</NavLink>
                <NavLink className={"navlinks"} to={"/faq"}>Faq</NavLink>
            </div>
            <div>
                <button className='collect__btn'>
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Navbar