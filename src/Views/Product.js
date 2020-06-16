import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const {id} = useParams()
    const url=`https://5ee7d7f2ffee0c0016a127f2.mockapi.io/Something/${id}`

    let product=useAxiosGet(url)
    let content= null
    


    if(product.error){
        content=<p>
            There was an error. Please refresh or try another page.
        </p>
    }
    if(product.loading){
        content=<Loader></Loader>
    }
        
    if(product.data){
        content=
    <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
       
        <div>
            <img
                src={product.data.avatar}
                alt={product.data.name}
            />
        </div>
 

    </div>
    }

    return(
        <div>
            <h1>
                {content}
            </h1>
        </div>
    )
}

export default Product