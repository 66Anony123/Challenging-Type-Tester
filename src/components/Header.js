
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import  './Header.css'
import {racerAction} from '../store/state'; 
function Header() {

  
const dispatch = useDispatch();

if( window.location.pathname ==='/'){
dispatch(racerAction.startTimer({indicate:false}));
  dispatch(racerAction.setTimer({type:'reset'}))

dispatch(racerAction.setcompleteIndex({ind:0}))
}

  return (

    <div className='heading'>
        <div className='header_logo'>
        <Link to='/'>
        <img src={logo} alt='logo' />
        </Link>
        </div>
    </div>
  )
}

export default Header