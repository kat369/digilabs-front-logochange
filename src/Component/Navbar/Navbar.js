
import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../Usercontext";
import { Link, useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./Navbar.css"
function Navbar() {
  const[menu,setmenu]=useState(false)
  const[close,setclose]=useState(true)
  const navigate=useNavigate();
  const userContext = useContext(UserContext)
   

  return<>
  <section className='navbar-container'>
      {/* <div className='table-container'>

  </div> */}   
   <img className='logo-container' src={userContext.img} alt='..'/>

<div className={!menu?'nav-list':"navbar-mobile"}>
    <ul className='list-items'>
        <li className={!menu?"dropdown":"dropdown-mobile"} >
         <Link  className='list'><span className='black'>Card access</span>< KeyboardArrowDownIcon/></Link>
      <ul className='sub-list'>
                  <li>
                    <Link >Demo1 Link</Link>
                  </li>
                  <li>
                    <Link className='gap-top'>Demo2 Link</Link>
                  </li>
                </ul>   
        </li>
        <li>
        <Link className='list'>Banking</Link>
        </li>
        <li>
        <Link className='list'>Processing</Link>
        </li>
        <li>
        <Link className='list'>About</Link>
        </li>
        <li>
        <Link className='list'>Carrier</Link>
        </li>
        <li>
        <Link className='list'>Contact</Link>
        </li>

    </ul>
  
</div>
  <div onClick={()=>navigate('/admin-dashboard')} className='login-container'>
      <span>Login</span><LoginIcon/>
    </div>
<div onClick={()=>setmenu(!menu)} className='menu-item'>
{!menu?<MenuIcon className='menu-icon'/>:<CloseIcon  className='menu-icon-close'/>}

</div>
  </section>
  </>
}

export default Navbar