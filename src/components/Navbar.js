import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../style/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const  [expandNavbar,setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false);
    },[location]);


  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=>{
                setExpandNavbar((prev) => !prev);
                }}>
                <MenuIcon/></button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experiences">Experiences</Link>
        </div>
      
    </div>
  )
}

export default Navbar
