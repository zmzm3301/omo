import React from "react";
import {NavLink} from 'react-router-dom'
import './App.css';

const activestyle = {
    color: 'pink' ,
    fontSize: 24,
    textDecoration: 'none',
};


function Header() {


    return (
        <>
        <ul style={{ marginRight:50}}>
            <NavLink to='/' style={({isActive}) => (isActive ? activestyle : undefined) } className="linkstyle" >Home</NavLink>
            <NavLink to='/main' style={({isActive}) => (isActive ? activestyle : undefined) } className="linkstyle" >Main</NavLink>
            <NavLink to='/products' style={({isActive}) => (isActive ? activestyle : undefined) } className="linkstyle" >Products</NavLink>
            <NavLink to='/product/:productid' style={({isActive}) => (isActive ? activestyle : undefined) } className="linkstyle" >Product</NavLink>
        </ul>
        </>
    )
}

export default Header;