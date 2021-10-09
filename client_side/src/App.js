import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Search from './components/Search';
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'




export default function App() {

  axios.defaults.withCredentials = true

  const [showDate, setShowDate] = useState(false)

  const [pickUp_date, setPickUp_date]= useState('')
  const [return_date, setReturn_date]= useState('')
  const [availableCars, setAvailableCars] = useState({})

  const schedule ={
    pickup : pickUp_date,
    return : return_date
  }

  const pickUp_date_changes = (e)=>{
    setPickUp_date(e)
  }
  const return_date_changes =(e)=>{
    setReturn_date(e)
  }
  const onSubmitDates =(e)=>{
    e.preventDefault()
    axios.patch("http://localhost:3001/search", schedule)
    .then(response=> {
      setAvailableCars(response.data)
      console.log(availableCars)
    })
    .catch(err=>console.error(err))
  
  }

  return (
    <div>
      <Switch>

        <Route exact path="/">
          <NavBar/> 
          <Layout showDates={showDate}
                  setShowDates={setShowDate}
                  pick_up_date={pickUp_date}
                  return_date={return_date}
                  change_pick_up_date={pickUp_date_changes}
                  change_return_date={return_date_changes}
                  onSubmitDates={onSubmitDates} />
            {showDate  && 
                          <Search pick_up_date={pickUp_date}
                                  return_date={return_date} 
                                  change_pick_up_date={pickUp_date_changes} 
                                  change_return_date={return_date_changes}
                                  onSubmitDates={onSubmitDates}
                                  />}
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


