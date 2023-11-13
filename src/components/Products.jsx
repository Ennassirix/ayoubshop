import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Row } from 'react-bootstrap'
// import Skeletone from './Skeletone'
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.slice(0,16)))
    }, [])
    return (
        <Row className='mt-5'>
            {

                products.map(product => <Product
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                    category={product.category}
                    thumbnail={product.thumbnail}
                    id={product.id}
                />)

            }

        </Row>
    )
}
