import React from 'react'
import { TopPropducts } from '../applidore/Apiproducts'
import Product from './Product'

function Products  ()  {
  return <div className="flex flex-wrap p-5 items-center justify-center ">
        {
            TopPropducts.map((product, index) => (
                <Product item = {product} key = {index}/>

            ))

            
        }
    </div>
  
}

export default Products