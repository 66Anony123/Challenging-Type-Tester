
import { clear } from '@testing-library/user-event/dist/clear';
import { useEffect, useState } from 'react';
import './Timer.css'
import { useSelector,useDispatch } from 'react-redux';
import { racerAction } from '../store/state';

 const Timer =()=>{

const timer = useSelector((state)=>state.racer.timer)
const wpm = useSelector((state)=>state.racer.wpm)
const start = useSelector(state => state.racer.start);
const dispatch = useDispatch();



useEffect(()=> { 
    if (start){
const interval = setInterval(()=>
{
  

    dispatch(racerAction.setTimer({type :'normal'}));

},1000);
return ()=>clearInterval(interval);
    }
},[start]); 

useEffect(()=>{
const int = setInterval(()=>{
    dispatch(racerAction.setWpm());
},3000)
},[]);

    return(
        <>
<div className="timer">Time : {timer}</div>
<div className="timer">WPM : {wpm}</div>
</>
    )
}

export default Timer;


// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(seconds++);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Timer: {seconds}</h1>
//     </div>
//   );
// }

// export default Timer;
