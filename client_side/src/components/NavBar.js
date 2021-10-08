import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <div className="navbar-brand mb-1 fw-bold" ><p className="text text-primary " style={{display:'inline', fontSize:'35px'}}>R</p>Cars</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto App">
          <li>
            <NavLink exact to ="/" className="fw-bold mx-5 item App-link" activeStyle={{color :'blue'}}>
              Cars        
            </NavLink> 
          </li>
          <li>
            <NavLink exact to='/About-us' className="fw-bold mx-5 item App-link"  activeStyle={{color :'blue'}}>
              About-us
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/Contact-us' className='fw-bold mx-5 item App-link' activeStyle={{color :'blue'}} >
              Contact-us
            </NavLink>
          </li>
        </ul>          
      </div>
    </div>
  </nav>
  )
}

