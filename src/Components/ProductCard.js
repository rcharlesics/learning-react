import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
    return(
        <div className="border mb-4 rounded overflow-hidden">
        <Link to={`/products/${props.product.id}`}>
            <div

                style={{
                    'backgroundImage': `url('${props.product.avatar}')`,
                }}

            className="w-full h-64 bg-blue bg-cover"
            >

            </div>
                    </Link>
                    <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        <Link to={`/products/${props.product.id}`}>
                        { props.product.name }
                        </Link>
                    </h3>

                    </div>
        </div>
    )
}
export default ProductCard