import React from 'react'

export default function Cars({Cars, display}) {
    const Results = Cars.res
    let response;
    if(display){
        response = 
            <div className='container'>
            <div className='d-flex justify-content-between'>
                
                <div className='d-flex flex-column bd-highlight mb-3'>
                    {Results && Results.map(e=>
                        <li className='p-2 bd-highlight' href>{e.car_name} </li>
                    )}
                </div>
                <div className='p-5 bd-highlight'>
                    <div></div>
                </div>
            </div>
        </div>
    }
    return (
        <div>{response}</div>
    )
}
