import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Search from './components/Search';
import Cars from './components/Cars';
import { useEffect, useState } from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import axios from 'axios'
import Brands from './components/Brands';




export default function App() {

  axios.defaults.withCredentials = true

  const history = useHistory()

  const [showDate, setShowDate] = useState(false)

  const [pickUp_date, setPickUp_date]= useState('')
  const [return_date, setReturn_date]= useState('')
  const [loaded, setLoaded]=useState(undefined)
  const [availableCars, setAvailableCars] = useState({})
  const [availableModels, setAvailableModels]=useState({})
  const [showCars, setShowCars]= useState([])
  const [display, setDisplay] = useState(false)

  const schedule ={
    pickup : pickUp_date,
    return : return_date
  }
  useEffect(()=>{
    const data1 = localStorage.getItem('availableCars')
    const data2 = localStorage.getItem('availableModels')
    try {
      if(data1){
        setAvailableCars(JSON.parse(data1))
      }
      if(data2){
        setAvailableModels(JSON.parse(data2))
      }  
      setLoaded(true)
    } catch (error) {
      console.log('The parsing failed Md fuckers lol have a great day .')
    }
  },[] )

  useEffect(()=>{
    localStorage.setItem('availableCars',JSON.stringify(availableCars))
    localStorage.setItem('availableModels', JSON.stringify(availableModels))
  })

  const pickUp_date_changes = (e)=>{
    setPickUp_date(e)
  }
  const return_date_changes =(e)=>{
    setReturn_date(e)
  }
  const filterCars = (mark)=>{
    setDisplay(true)
    const res = availableCars.filter(e=> e.models_model === mark.currentTarget.dataset.id )
    setShowCars({...showCars,
      res
    })
  }

  const onSubmitDates =(e)=>{
    e.preventDefault()
    let availableMarks =[]
    axios.patch("http://localhost:3001/search", schedule)
    .then(response => {
      history.push('/results')
      setAvailableCars(response.data)
      let models = response.data
      models.forEach(e=>{
            let mark = e.models_model
            if(availableMarks.indexOf(mark)===-1){
              availableMarks.push(mark)
            }
          })     
    })
    .then(()=>{
      axios.patch("http://localhost:3001/getMarksImg",{marks:availableMarks})
      .then(res => {
        setAvailableModels(res.data)
        setLoaded(true)
      })
      .catch(err=>{console.error(err)})
    })

    .catch(err=>console.error(err))}

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
        <Route exact path = "/results">
          <Brands availableCars={availableCars} models={availableModels} loaded={loaded} filterCars={filterCars} display={display} />
          {showCars && 
          <Cars Cars={showCars} display={display} /> }
        </Route>

      </Switch>
    </div>

  );
}