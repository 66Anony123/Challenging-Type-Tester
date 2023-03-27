import './Word.css';

import React from 'react'

function Word(props) {
 
  if(props.correctness && props.active){
    return(
      <span className='correct_text active_text'>{props.text} </span>
    )}
   else if(!props.correctness && props.active){
   return(
     <span className='incorrect_text active_text'>{props.text} </span>
   )}
  
   if(props.active ){
    return(
      <span className='active_text'>{props.text} </span>
    )}
  

  return<span>{props.text} </span>
}

export default Word