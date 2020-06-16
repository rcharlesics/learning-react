import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {  useAxiosGet } from '../Hooks/HttpRequests'


function Home(){
    const {id} = useParams()
    const url=`https://5ee7d7f2ffee0c0016a127f2.mockapi.io/Something?page=1&limit=10`

    let products = useAxiosGet(url)
    let content= null

        if(products.error){
            content=<p>
                There was an error. Please refresh or try another page.
            </p>
        }
        if(products.loading){
            content=<Loader></Loader>
        }
        if(products.data){
            content=
            products.data.map((product,key) =>
            <div key={product.id}>
            <ProductCard 
                product={product}
            />
            </div>
            )
        }
     
    
       
    return(
        <div>
            <h1 className="font-bold text-2xl">
            Profiles
            </h1>
            {content}
         
        </div>

    )
}

export default Home