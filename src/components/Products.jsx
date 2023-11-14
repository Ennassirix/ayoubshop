import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Row } from 'react-bootstrap'
import Cart from '../pages/Cart';
// import Skeletone from './Skeletone'
export default function Products(props) {
    const [products, setProducts] = useState([])
    let filtredProducts = products.filter(product => product.title.includes(props.value))
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.slice(0,16)))
    }, [])
    
    return (
        <Row className='mt-5'>
            {
                products.length !== 0 ? (
                filtredProducts.length === 0 ? <h1>No Product in That Name </h1>:  filtredProducts.map(product => <Product
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                    category={product.category}
                    thumbnail={product.thumbnail}
                    id={product.id}
                />)) : <h1>Loading ....</h1>

            }
            
        </Row>
    )
}
