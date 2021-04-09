import React, { useState } from 'react';
import SidebarForAdmin from '../SidebarForAdmin/SidebarForAdmin';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css';


const AddProduct = () => {


    

    const [notification, setNotification] = useState({
        success: '',
        failed: ''
    })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState('');

    const onSubmit = (data, e) => {

        
        const nameForId = data.ProductName.split(' ', 1);
        const eventData = {
            
            name: data.ProductName,
            price: data.ProductPrice,
            uid:nameForId+data.ProductPrice,
            imgUrl: imageUrl
        }
        fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedCount === 1) {
                    const newNotification = { ...notification };
                    newNotification.success = "Your Product Added Successfully";
                    newNotification.failed="";
                    setNotification(newNotification);
                    e.target.reset();
                    
                } else {
                    const newNotification = { ...notification };
                    newNotification.success = "";
                    newNotification.failed="Your Product Add Request Not Successful";
                    setNotification(newNotification);
                }

            })
    };


    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '707ad238025806ece51d9e63679151f7')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageUrl(response.data.data.display_url);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '30%' }}>
                <SidebarForAdmin />
            </div>
            <div style={{ width: '70%', padding:'50px' }}>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"  {...register("ProductName", { required: true })} placeholder="Write Product Name" />
                    <br />


                    <input type="number" {...register("ProductPrice", { required: true })} placeholder="Write Product Price" />
                    <br />

                    <input type="file" {...register("ProductPhoto")} onChange={handleImgUpload} />

                    <br />
                    <hr />


                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit">Add Product</button>
                </form>

                <p style={{color:'green'}}>{notification.success}</p>
                <p style={{color:'red'}}>{notification.failed}</p>
            </div>
        </div>
    );
};

export default AddProduct;