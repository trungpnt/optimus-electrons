import React, {useState, useEffect } from 'react'
 
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen({ match }) {
    
    const [ product , setProduct ] = useState( [ ] )
    
    useEffect ( ( ) => {
            async function fetchProduct( ){ 
                const {data } = await axios.get( `/api/products/${match.params.id}`)
                setProduct(data)
            }
            fetchProduct( )
    } ,[ ])

    return (
        <div>
            <Link to='/home' className="btn btn-light my-3" > Go Back </Link>

            <Row>

                <Col md={6}>
                    <Image src={product.image} atl={product.name} fluid />
                </Col>

                <Col>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews}  ratings`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>    
                            Description : {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong> </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock '}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup>
                            <ListGroup.Item>

                                <Button className="btn-block" type="button" disabled={product.countInStock == 0} >Add To Cart </Button>

                            </ListGroup.Item>
                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
