import React, { useContext, useEffect, useState } from 'react';
import { mainUser } from '../../App';

const Orders = () => {

    const [loggedInUser] = useContext(mainUser);
    const [orderedProducts, setOrderedProducts] =  useState([]);
    console.log(orderedProducts)
    useEffect(() => {

        fetch('https://myshop-koli.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderedProducts(data);
            })

    }, [loggedInUser.email])


    return (
        <div>
            <h2>You Have Total : {orderedProducts.length} Orders </h2>
            {
                
                orderedProducts.map(order=><div>
                        <h3>Order Date: {(new Date(order.orderDate).toDateString('dd/MM/yyyy'))}</h3>
                        
                </div>)
            }
        </div>
    );
};

export default Orders;