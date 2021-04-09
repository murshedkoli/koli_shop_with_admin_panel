import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarForAdmin.css';


const SidebarForAdmin = () => {
    return (
        <div className="sidebar">
            <h1>KOLI SHOP</h1>
            
                <ul>
                    <li> <Link className="adminlink" to="/admin">Manage Product</Link></li>
                    <li><Link className="adminlink" to="/addproduct">Add Product</Link></li>
                    <li><Link className="adminlink" onClick={()=>alert("This Will be Added Leter")}>Edite Product</Link></li>
                </ul>
            
        </div>
    );
};

export default SidebarForAdmin;