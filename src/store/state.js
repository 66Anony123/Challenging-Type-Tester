import { createSlice } from "@reduxjs/toolkit";



const racerSlice = createSlice({
name : 'timer',
    initialState : {
        timer:0,
        start: false,
        wpm:0,
        completeIndex:0
    },
    reducers:{

setcompleteIndex(state,action)
{
state.completeIndex =action.payload.ind;
},

startTimer(state,action){
state.start=action.payload.indicate ;
},
        setTimer(state,action)
        {
            if(action.payload.type =='reset')
            state.timer =0;

            if(action.payload.type =='normal')
            state.timer++;
        },
    
    setWpm(state)
    {
state.wpm = Math.ceil(state.completeIndex/((state.timer+1)/60))
    }
}
})

export const racerAction = racerSlice.actions;
export default racerSlice;