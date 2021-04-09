import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../databaseManager';

const Checkout = () => {

    const [checkoutProducts, setCheckoutProducts] = useState([]);
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const saveKeys = Object.keys(saveCart);

        fetch('https://myshop-koli.herokuapp.com/cartproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saveKeys)
        })
            .then(res => res.json())
            .then(data => {
                const cartProducts = saveKeys.map(key => {
                    const product = data.find(pd => pd.uid === key);
                    product.quantity = saveCart[key];
                    return product;
                });
                setCheckoutProducts(cartProducts)
            })



    }, []);

    const total = checkoutProducts.reduce((total, element) => total + element.price * element.quantity, 0);


    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th> Price</th>
                    </tr>
                </thead>

                {
                    checkoutProducts.map(pd => {
                        return <tbody>
                            <td>{pd.name}</td>
                            <td>{pd.price}</td>
                            <td>{pd.quantity}</td>
                            <td>{pd.quantity * pd.price}</td>
                        </tbody>
                    })
                }
                <tr>


                    <th colSpan="3">Grand Total</th>
                    <th> {total}</th>
                </tr>

            </Table>
            <Link to="/shipment">
                <Button variant="primary">Check Out</Button>
            </Link>
        </div>
    );
};

export default Checkout;