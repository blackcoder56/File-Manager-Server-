import react,{useEffect,useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import HomeScreen from './HomeScreen';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
   <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/*" component={HomeScreen} />
    </Switch>
    
    </BrowserRouter>

    </>
  );
}

export default App;
