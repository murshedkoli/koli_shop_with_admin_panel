import React, { useEffect, useState } from 'react';
import SingleProductForHome from '../SingleProductForHome/SingleProductForHome';
import { addToDatabaseCart, getDatabaseCart } from '../../databaseManager';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import circle from '../../photos/loading.gif';

const Home = () => {

    const [products, setProducts] = useState([]);
    
    const [cart, setCart] = useState([]);

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
                setCart(cartProducts)
            })

            
            
    }, []);

   




    useEffect(() => {

        fetch('https://myshop-koli.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [])




    const handleAddCart = (product) => {
        const sameProduct = cart.find(pd => pd.uid === product.uid)
        let count = 1;
        let newCart;

        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.uid !== product.uid);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.uid, count);

    }


   

    return (
         <div style={{ display: 'flex' }}>

             {
                 products.length > 0?  <div style={{ display: 'flex', flexWrap: 'wrap', width: '85%' }}>
                 {
                     products.map(pd => <SingleProductForHome handleAddCart={handleAddCart} pd={pd}></SingleProductForHome>)
                 }
             </div>
             : <img src={circle} alt=""/>
             }
           
            <div style={{ width: '15%' }}>
                <Cart cart={cart}>

                    <Link to="/checkout">
                        <Button variant="primary">Review Order</Button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Home;