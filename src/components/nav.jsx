import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (<>
        <NavLink to="/" activeClassName="active" style={{color:'red'}}>Home</NavLink>
        <NavLink to="/login" activeClassName="active" style={{margin:'10px',color:'red'}}>Login</NavLink>
    </>)
}

export default Nav;