import React from 'react';
import './Cart.css'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, element) => total + element.price*element.quantity , 0);
let shipping = 0;
    if(total>50){
        shipping = 0;
    }
    else if(total > 20){
        shipping = 10;
    }

    else if(total > 0) {
        shipping = 20;
    }

    const beforTax = total+shipping;
    return (
        <div>
         


            <Table striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3" >Your Cart</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                <td>Item Ordered</td>
                <td>:</td>
                <td>{props.cart.length}</td>
                </tr>
                <tr>
                
                <td>Price </td>
                <td>:</td>
                <td>{ lumsum(total)}</td>
                </tr>
                <tr>
                <td>Shiping and Handling </td>
                <td>:</td>
                <td>{ shipping}</td>
                </tr>

                <tr>
                <td>Total Before Tax </td>
                <td>:</td>
                <td>{ lumsum(beforTax)}</td>
                </tr>

                <tr>
                <td>VAT + Tax  </td>
                <td>:</td>
                <td>{ lumsum(beforTax/100*10)}</td>
                </tr>

                <tr>
                <td>Total </td>
                <td>:</td>
                <td>{ lumsum(beforTax+beforTax/100*10)}</td>
                </tr>
            </tbody>
            </Table>

            {
                props.children
            }
                    </div>
    );
};

const lumsum = number =>{
    // const number2 = Math.ceil(number);
    const number2 = number.toFixed(2);
    return Number (number2)
}

export default Cart;