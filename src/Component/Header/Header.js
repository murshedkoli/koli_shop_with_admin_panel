import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { mainUser } from '../../App';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(mainUser);
    return (
        <div>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link><Link>Deals</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link>
    {
      loggedInUser.email ?
      <span style={{color:'black'}}> WelCome, {loggedInUser.displayName}</span> :
      <Button variant="success"><Link to="/login"> Login</Link></Button>
    }
       </Nav.Link>
    </Nav.Item>

    <Nav.Item>
    <Nav.Link>
    {
      loggedInUser.email &&
      <Button variant="danger" onClick={()=>setLoggedInUser({})}> Logout</Button>
    }
       </Nav.Link>
    </Nav.Item>
  </Nav>
        </div>
    );
};

export default Header;