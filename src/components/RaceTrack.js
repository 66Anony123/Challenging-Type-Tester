import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { racerAction } from '../store/state';

import Text from '../sample.json'
import './RaceTrack.css'
import Word from './Word';

function RaceTrack() {
const str1 = Text.text1;
// let str2;
let str2=str1.split(' ');
let str3;

const timer = useSelector(state=>state.racer.timer);
const completeIndex = useSelector(state=>state.racer.completeIndex)
const wpm = useSelector(state=> state.racer.wpm);

const dispatch = useDispatch();

const [userInput,setuserInput] = useState('');

const [correctWord,setcorrectWord] = useState(false);

// const [newTrack,setnewTrack ] = useState();

// useEffect(()=>{

//   str2 = str1.split(' ').sort(()=>Math.random()>0.5 ?1:-1)
  
//   if(newTrack)
// {
//   setcompeteIndex(0);
// }
//   },[newTrack])

// if(completeIndex>str2.length-1)
// {
// setnewTrack(true);
// }



if(completeIndex>str2.length-1)
{
dispatch(racerAction.setcompleteIndex({ind:0}));
}


const startRace =()=>
{
  dispatch(racerAction.startTimer({indicate:true}));
}

const inputHandler=(e)=>
{
  let val=e.target.value;
  setuserInput(val);


if(val === str2[completeIndex]){
  setcorrectWord(true);
 //setwordSpeed((completeIndex+1)/)
}
else{
  setcorrectWord(false);
}

if(correctWord)
{
  if(val.endsWith(' '))   //if(e.target.value.includes(' ')) can also be done
  {
    dispatch(racerAction.setcompleteIndex({ind:1+completeIndex}));
    setuserInput('');
  
  }
}
  // if(e.target.value!== str2[completeIndex])
  // {
  // return(<div>error</div>)
  // }
 
}
  return (
    <div className='main_content'>
      
      <div className='sample_text'>{str2.map((item,index)=>{

    return(
    
    <Word
    text={item}
    active = {(completeIndex==index)?item===str2[completeIndex]:false}  
    correctness = {correctWord}
/>
    )}
    )}
      </div>
      <input
      type ='text'
      value = {userInput}
      onChange ={inputHandler}
      onClick ={startRace}
      />


    </div>
  )
}

export default RaceTrack

