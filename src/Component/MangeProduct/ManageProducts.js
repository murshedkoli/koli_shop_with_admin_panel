import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

   
    useEffect(()=>{

        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data=>{
            setProducts(data);
        })

    },[])


    const handeDelete = id=>{
        fetch(`http://localhost:4000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log("deleted successfully")
        })
    }

    return (
        <div style={{padding:'30px'}}>
              <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
               
                {
                products.map(pd=>  {
                   return <tbody><td>{pd.name}</td>
                    <td>{pd.price}</td> 
                    <td><button onClick={()=>handeDelete(pd._id)}>Delete</button></td>
                    </tbody>
                })
            }
                
            </Table>
            
        </div>
    );
};

export default ManageProducts;