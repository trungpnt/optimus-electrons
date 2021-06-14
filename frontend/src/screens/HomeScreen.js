import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreen( ) {

    {/*useState, data + method to update the state, and original value to pass in */}
    const [ products , setProducts ] = useState( [ ] )

    {/* useEffect is loaded / gets triggered very single time the component loads or when the state attribute / value gets updated */}

    {/* what we want is we want the useEffect to get triggered when component first loaded, arrow function here  */}
    
    useEffect ( ( ) => {
        {/*in here, use axios to make a call,
            load data and then update product */}
            // console.log('Use effect triggered')
            {/*then() will return a promise, that promise , in that promise, we'll get the response
        or instead of using then syntax, we use the await async,  */}

            {/*in order to use await, we need to wrap this call right below in an async function (define yourself) */}

            async function fetchProducts( ){ 
                {/*wrap the call inside an async function, await will get back the promise, reset the state with method referencing */}
                const {data } = await axios.get( '/api/products')
                setProducts(data)
            }
            fetchProducts( )
    } ,[ ])

    {/*at the end of useEffect, we want to put this empty array, because we want this to be updated when the component loads, not when an actual state element gets updated */}

    return (
        <div>
            <h1>Latest Products</h1>

            <Row>
                {products.map(product => (
                    //bootstrap grid system has 12 cols, on large screen set lg=4
                    <Col key={product._id} sm={12} md={6} lg={4} xL={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default HomeScreen
