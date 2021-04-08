import React from 'react';
import { Link } from 'react-router-dom';

const SidebarForAdmin = () => {
    return (
        <div>
            <ul>

                <Link to="/admin">Manage Product</Link>
                <br/>
                <Link to="/addproduct">Add Product</Link>
                <br/>
                <Link to="/addproduct">Edite Product</Link>
                
            </ul>
        </div>
    );
};

export default SidebarForAdmin;