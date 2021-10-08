import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import Dates from './components/Dates';
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom'




export default function App() {
  
  const [pickUp_date, setPickUp_date]= useState('')
  const [return_date, setReturn_date]= useState('')

  const pickUp_date_changes = (e)=>{
    setPickUp_date(e)
  }
  const return_date_changes =(e)=>{
    setReturn_date(e)
  }
  const onSubmitDates =(e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <Switch>

        <Route exact path="/">
          <NavBar/> 
          <Dates pickUp_date={pickUp_date} return_date={return_date} handlePickUp={pickUp_date_changes} handleReturn={return_date_changes} onSubmit={onSubmitDates}/>
        </Route>

        <Route exact path ="/About-us">
          <NavBar/>
          <p className ="App fw-bold">About Us</p>
        </Route>

        <Route exact path= "/Contact-us">
          <NavBar/>
          <p className="App fw-bold">Contact us</p>
        </Route>

      </Switch>
    </div>

  );
}


