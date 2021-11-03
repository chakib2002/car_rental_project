import React from 'react'
import RentIt from './RentIt';

export default function Cars({Cars, display}) {
    const Results = Cars.res
    let response;
    if(display){
        response = 
        <div className="container border rounded bg-cars py-2">
           { Results && Results.map(e=>
            <div key={e.id} className="card mx-5 my-5 ">
                <h5 className="card-header">{e.models_model} {e.car_name}</h5>
                <div className="card-body">
                    <div className='container'>
                        <div className='row' >
                            <div className='col-lg-4 border-end'>
                                <img src={e.image_path} alt='car' className='carImage' ></img>
                            </div>
                            <div className='col-lg-4 border-end'>
                                <div className="fs-6 fw-bold text text-dark fs-4 text-muted">{e.car_type}</div>
                                {/* ----------------------------------------- */}
                                <div className='my-2'>
                                    <div style={{width:'20px', height:'20px', display:'inline-block' }} >
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car" className="svg-inline--fa fa-car fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className='mx-2'style={{display:'inline'}}>
                                        <span className='fw-bold'>Engine: </span>{e.engine}
                                    </div>
                                </div>
                                {/* ----------------------------------------- */}
                                <div className='my-2'>
                                    <div style={{width:'20px', height:'20px', display:'inline-block' }} >
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="superpowers" className="svg-inline--fa fa-superpowers fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M448 32c-83.3 11-166.8 22-250 33-92 12.5-163.3 86.7-169 180-3.3 55.5 18 109.5 57.8 148.2L0 480c83.3-11 166.5-22 249.8-33 91.8-12.5 163.3-86.8 168.7-179.8 3.5-55.5-18-109.5-57.7-148.2L448 32zm-79.7 232.3c-4.2 79.5-74 139.2-152.8 134.5-79.5-4.7-140.7-71-136.3-151 4.5-79.2 74.3-139.3 153-134.5 79.3 4.7 140.5 71 136.1 151z" />
                                    </svg>
                                    </div>
                                    <div className='mx-2'style={{display:'inline'}}>
                                        <span className='fw-bold'>Power: </span>{e.power}
                                    </div>
                                </div>
                                {/* ----------------------------------------- */}
                                <div className='my-2'>
                                    <div style={{width:'20px', height:'20px', display:'inline-block' }} >
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
                                    </svg>
                                    </div>
                                    <div className='mx-2'style={{display:'inline'}}>
                                        <span className='fw-bold'>Places : </span>{e.places}
                                    </div>
                                </div>
                                {/* ----------------------------------------- */}
                            </div>
                            <div className="col-lg-4">
                                <div className="text text-primary App fw-bolder fs-5">{e.price}</div>
                                <div className="text text-muted App">per day</div>
                                <RentIt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    }
    return (
        <div>{response}</div>
    )
}