import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'


const Nav = () => {
    return(
        <nav>
            <NavLink exact to ="/" activeClassName="active">Home</NavLink>
            <NavLink to ="/artists" activeClassName="active">Artists</NavLink>
            <NavLink to ="/technology" activeClassName="active">Technology</NavLink>
        </nav>
    )
}


export default Nav