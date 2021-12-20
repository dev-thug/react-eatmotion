import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {AuthContextProvider} from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss";


ReactDOM.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthContextProvider>
    ,
    document.getElementById('root')
);

