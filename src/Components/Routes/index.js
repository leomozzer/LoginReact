import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from '../Home';
import Login from '../Login';
import {useSelector} from 'react-redux'

export default function AppRoutes() {
    return (
        <div>
            <Router>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home}/>
              <PrivateRoute path="/home" component={Home}/>
            </Router>
        </div>
    )
}

function PrivateRoute(){
    const data = useSelector(response => response)
    return(
        <div>
            {data.login === true ? <Redirect to={{pathname:'/home'}}/> : <Redirect to={{pathname:'/'}}/> }
        </div>
    )
}
