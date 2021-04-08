import React from 'react';

const SingleProductForManage = (props) => {

    const {name, price} = props.pd;
    

    return (
        <div>
            <tr>
                        
                        <td>{name}</td>
                        <td>{price}</td>
                        <td><button>Delete</button></td>
                    </tr>
        </div>
    );
};

export default SingleProductForManage;