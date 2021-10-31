import React from 'react'
import Slider from "react-slick";
export default function Brands({availableCars, models, loaded, filterCars, display}) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };
    return (
        <div>
            <div className="display-3 text-info fw-bold App mt-5 pt-2 pb-2 opacity">SELECT YOUR CAR</div>
            {!loaded ? 
            <p className="App">Loading</p>
                :
            <div className='p-5 '>
            <Slider {...settings} className='container'>
           { models && models.map((e)=>
                <div key={e.model} className="mt-5 border-start "> 
                  <ul>
                    <li data-id={e.model} onClick={(e)=>filterCars(e)} >
                      <img src={e.model_image} alt="" className='image'/>
                    </li>
                  </ul>
                </div>
            )}
            </Slider>
            {!display && <div className='text-center mt-5 p-3 fs-1 fw-bold text-muted '>
              CHOOSE A CAR BRAND
              </div>}
            </div>
            }
        </div>
    )
}
