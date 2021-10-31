import React from 'react'

export default function Search({pick_up_date , return_date, change_pick_up_date, change_return_date, onSubmitDates}) {
    return (
       <form onSubmit={onSubmitDates}>
        <div className='App mt-2'>
                <div className ="inline">
                    <input type='text'  onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")} placeholder="Pick-up Date"  className='DateInput border-end shadow-lg p-3 mb-2 bg-body rounded ' value={pick_up_date} onChange={(e)=>change_pick_up_date(e.target.value)} />
                </div>
                <div className='inline'>
                    <input type='text' onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")} placeholder="Return Date" className='DateInput shadow-lg p-3 mb-2 bg-body rounded'  value={return_date} onChange={(e)=>change_return_date(e.target.value)} />
                </div>
                <div className='inline '>
                <button type="button" className="btn btn-primary  mb-1 py-3 ps-5 pe-5   " onClick={onSubmitDates}>Search</button>
                </div>
        </div>
        </form>
       
    )
}
