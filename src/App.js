import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from './Component/Header/Header';
import { createContext } from 'react';
import { useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Checkout from './Component/Checkout/Checkout';
import Admin from './Component/Admin/Admin';
import Orders from './Component/Orders/Orders';
import AddProduct from './Component/AddProduct/AddProduct';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Shipment from './Component/Shipment/Shipment';

export const mainUser = createContext();

function App() {

const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <Container>

    <mainUser.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
     <Header></Header>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/checkout">
           <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
           <Orders/>
          </PrivateRoute>

          <PrivateRoute path="/admin">
           <Admin/>
          </PrivateRoute>

          <PrivateRoute path="/addproduct">
           <AddProduct/>
          </PrivateRoute>

          <PrivateRoute path="/shipment">
           <Shipment/>
          </PrivateRoute>

        </Switch>
        </Router>
    </mainUser.Provider>
    </Container>

  );
}

export default App;
