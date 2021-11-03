import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import Mercedes from '../img/S500-white-background-2.jpg'

export default function Layout({showDates, setShowDates}) {
    return (
        <div>
        <div className="d-flex justify-content-around">
            <div>
                <h1 className='display-5 text-primary fw-bold mt-5 pt-5 shadow-effect'>Rcars</h1>
                <h1 className="display-3 fw-bold text text-dark opacity1">Luxury <br/>Car Rental </h1>
                <button type="button" className="btn btn-outline-primary btn-lg mt-3 fw-bold button rounded-pill" onClick={()=>setShowDates(!showDates)} >
                    Rent a car
                </button>
            </div>
            <img src={Mercedes} className='w-50 mt-5 
                                           d-none d-sm-block
                                           d-sm-none d-md-block
                                           d-md-none d-lg-block'  alt={Mercedes} />
        </div>
        </div>
    )
}