//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from 'react'
import { Route, Redirect } from 'react-router'
export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render = {props => (
        localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: {from:props.location}}}/>
    )}/>
}