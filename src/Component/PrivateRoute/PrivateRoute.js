import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { mainUser } from '../../App';



function PrivateRoute({ children, ...rest }) {
    const [loggedInUser] = useContext(mainUser);
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;
