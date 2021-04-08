import React from 'react';
import SidebarForAdmin from '../SidebarForAdmin/SidebarForAdmin';
import { useForm } from "react-hook-form";
import ManageProducts from '../MangeProduct/ManageProducts';



const Admin = () => {
    

    return (
        <div style={{display:'flex'}}>
            <div style={{width:'30%'}}>
                <SidebarForAdmin />
            </div>
            <div style={{width:'70%'}}>
               <ManageProducts></ManageProducts>
            </div>
        </div>
    );
};

export default Admin;