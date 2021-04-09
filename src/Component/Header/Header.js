import React, { useContext } from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { mainUser } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(mainUser);
 const userInSession = JSON.parse(sessionStorage.getItem('user'));


const handleLogOut =()=>{
  setLoggedInUser({});
  sessionStorage.clear();
}


  return (
    <div>

      <Navbar collapseOnSelect expand="lg"  variant="light">
        <Navbar.Brand href="/">KOLI SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto"></Nav>
          <Nav className="navOriginal">
            <Nav.Item >
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
                  userInSession ?
                    <span style={{ color: 'black' }}> WelCome, {userInSession.displayName}</span>
                     :
                    <Button variant="success"><Link to="/login"> Login</Link></Button>
                }
              </Nav.Link>
            </Nav.Item>
           {
              userInSession && <img className="profilePhoto" src={userInSession.photoURL} alt=""/>
           }
            <Nav.Item>
              <Nav.Link>
                {
                 userInSession &&
                  <Button variant="danger" onClick={handleLogOut}> Logout</Button>
                }
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;