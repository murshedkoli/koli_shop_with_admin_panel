import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import {mainUser} from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';



const firebaseConfig = {
    apiKey: "AIzaSyB0JFYqNt-6l4v1KbvHiSrBEErCUjDW7RE",
    authDomain: "myshop-8d75e.firebaseapp.com",
    projectId: "myshop-8d75e",
    storageBucket: "myshop-8d75e.appspot.com",
    messagingSenderId: "737748628926",
    appId: "1:737748628926:web:36521c44cbe465be1775ef"
  };
  
 if(firebase.apps.length === 0){
     
  firebase.initializeApp(firebaseConfig);
 }


const Login = () => {

    let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInuser, setLoggedInUser] = useContext(mainUser);
   


  const signInwithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    console.log(credential);

    var user = result.user;
    const userForSession = JSON.stringify(user);
    sessionStorage.setItem('user', userForSession);
    setLoggedInUser(user);
    history.replace(from);

})
.catch((error) => {
  });
  }


  const signInwithFacebook =()=>{
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    const userForSession = JSON.stringify(user);
    sessionStorage.setItem('user', userForSession);
    setLoggedInUser(user)
    history.replace(from);


  })
  .catch((error) => {

  });



  }
   

    return (
        <div style={{textAlign:'center'}}>
          {
              loggedInuser.email ? 
             <div> <h1>{loggedInuser.displayName} are logged In Now...</h1>
             <Button variant="danger" onClick={()=>setLoggedInUser({})}> Logout</Button> </div>:
             <div>
                  <h2>Login Your Account With</h2>
              <Button variant="success" onClick={signInwithGoogle}> Login with Goole</Button>
              <br/>
              <br/>
              <Button variant="primary" onClick={signInwithFacebook}> Login with Facebook</Button>
             </div>
          }
        </div>
    );
};

export default Login;