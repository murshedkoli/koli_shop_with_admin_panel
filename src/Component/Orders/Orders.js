import React, { useEffect, useState } from 'react';

const Orders = () => {

    const [orderedProducts, setOrderedProducts] =  useState([]);
    const sessionUser = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {

        fetch('https://myshop-koli.herokuapp.com/orders?email='+sessionUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderedProducts(data);
            })

    }, [sessionUser.email])


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