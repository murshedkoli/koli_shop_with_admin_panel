import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { mainUser } from '../../App';
import { getDatabaseCart, processOrder } from '../../databaseManager';



const Shipment = () => {

    const [loggedInUser] = useContext(mainUser);
    
const userInSession = JSON.parse(sessionStorage.getItem('user'))

   const history = useHistory();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const saveCart= getDatabaseCart();
        
        const orders= {name: userInSession.displayName, email:userInSession.email, product:saveCart, Shipment:data, orderDate:new Date()}
        
        fetch('https://myshop-koli.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedCount === 1) {
                    e.target.reset();
                    processOrder();
                    history.push('/orders')
                    
                } 

            })
    };

    return (
        <div style={{textAlign:'center', width:'100%'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={userInSession.displayName}  {...register("Name",  {  required: true })} placeholder="Write  Name" />
                    <br />
                    <br />

                    <input defaultValue={userInSession.email} {...register("Email", { required: true })} placeholder="Write Email" />
                    <br />
                    <br />
                    <input {...register("Address", { required: true })} placeholder="Write Your Address" />
                    <br />
                    <br />
                    <input {...register("phoneNumber", { required: true })} placeholder="Write Your Phone Number" />
                    <br />
                    <br />
                    <hr />


                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit">Order Confirm</button>
                </form>
                
        </div>
    );
};

export default Shipment;
