import React from 'react';

import Home from './components/Home'
import RaceTrack from './components/RaceTrack'; 
import Header from './components/Header'
import Timer from './components/Timer'

import './App.css';

import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Switch>
<Route path='/' exact>
    <Header/>
  <Home/>
  </Route>

  <Route path='/track'>
  <Header/>
  <Timer/>
  <RaceTrack/>
  </Route>
  
  </Switch>
      
  </BrowserRouter>
        
       
      
    </div>
  );
}

export default App;
