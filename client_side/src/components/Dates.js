import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mercedes from '../assets/S500-white-background-2.jpg'

export default function Dates({ pickUp_date, return_date, handlePickUp, handleReturn, onSubmit }) {
    return (
        <div>
        <div className="d-flex justify-content-around">
            <div>
                <h1 className='display-5 text-primary fw-bold mt-5 pt-5 shadow-effect'>Rcars</h1>
                <h1 className="display-3 fw-bold dark">Luxury <br/>Car Rental </h1>
                <button type="button" className="btn btn-outline-primary btn-lg mt-3 fw-bold button rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Rent a car
                </button>
            </div>
            <img src={Mercedes} className='w-50 mt-5 
                                           d-none d-sm-block
                                           d-sm-none d-md-block
                                           d-md-none d-lg-block'  alt={Mercedes} />

        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content " >
                    <div className="modal-header ">
                        <h5 className="modal-title title" id="staticBackdropLabel">Introduce the pick-up and the return dates.</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
        <div className="modal-body ">
            <p className='fw-bold  ' >Enter the pick-up date</p>
            <DatePicker placeholderText="12/30/2022" selected={pickUp_date} onChange={(e)=>handlePickUp(e)} className=" mb-3 shadow-none bg-light rounded"/>
            <p className='fw-bold  ' >Enter the return date</p>
            <DatePicker placeholderText="1/15/2023" selected={return_date} onChange={(e)=>handleReturn(e)} className=" mb-3 shadow-none bg-light rounded"/>

        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Save changes</button>
        </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}