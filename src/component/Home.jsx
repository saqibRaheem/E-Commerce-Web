import React from 'react'
import img from '../images/back.jpg'
import Product from './Product';

console.log(img);
export default function Home() {
    return (
        <>
        <div className="hero">
     <div className="card bg-dark text-white border-0">
  <img src={img} className="card-img rounded" alt="img"  height="500px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON AVAILABLE</h5>
    <p className="card-text lead fs-2">CHACK OUT ALL TRENDS</p>
    
  </div>
  </div>
  <Product/>
</div>
            
        </>
    )
}
