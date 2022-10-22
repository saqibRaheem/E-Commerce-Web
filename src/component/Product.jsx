import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  Skeleton  from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom'

export default function Product() {

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = () => {
            setloading(true);
           const res =   axios.get('https://fakestoreapi.com/products')
                .then((response) => {

                    if (componentMounted) {
                        setdata(response.data);
                        setfilter(response.data);
                        setloading(false)
                        console.log(filter.length);
                    }
                }).catch((err)=>{console.log(err);})



            // const response = await fetch("https://fakestoreapi.com/products");
            // if (componentMounted) {
            //               setdata( await response.clone().json());
            //                  setfilter(await response.json());
            //             setloading(false)
            //             console.log(filter);
            //          }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, [])
    const Loadeing = () => {
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
                
               </div>
            </>
        )
    }
const filterProudct = (cat)=>{
    const updated = data.filter((x)=>x.category === cat);
    setfilter(updated)
}

    const ShowProduct = () => {
        return (<>
            <div className="bttons mb-2 text-center">
                <button className="btn btn-outline-dark me-2 " onClick={()=>{setfilter(data)}}>All</button>
                <button className="btn btn-outline-dark me-2 " onClick={()=>{filterProudct("men's clothing")}}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2 " onClick={()=>{filterProudct("women's clothing")}}>woMen's Clothing</button>
                <button className="btn btn-outline-dark me-2 " onClick={()=>{filterProudct("jewelery")}}>Jewelery</button>
                <button className="btn btn-outline-dark me-2 " onClick={()=>{filterProudct("electronics")}}>Electronic</button>
            </div>
            {filter.map((product) => {
                return (
                    <>
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text load fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </>)

    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>BRAND NEW PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loadeing /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}
