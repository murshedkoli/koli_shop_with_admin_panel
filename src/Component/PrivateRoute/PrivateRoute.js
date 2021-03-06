import React, { } from 'react';
import { Redirect, Route } from 'react-router';



function PrivateRoute({ children, ...rest }) {
    

const sessionUser = JSON.parse(sessionStorage.getItem('user'));

    return (
      <Route
        {...rest}
        render={({ location }) =>
          sessionUser  ? (
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
