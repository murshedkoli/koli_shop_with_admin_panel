import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleProductForHome = (props) => {

    const {name, price, imgUrl}= props.pd;

    return (
        <div style={{margin:'10px'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <span style={{marginRight:'40px'}}>Price : {price}</span>
                    <Button variant="success" onClick={()=> props.handleAddCart(props.pd)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProductForHome;