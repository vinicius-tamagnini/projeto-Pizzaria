import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import ForgetPsw from './pages/ForgetPsw/ForgetPsw'
import NewUser from './pages/NewUser/NewUser'
import Loading from './components/Loading'
import ListUser from './pages/NewUser/ListUser';
import ListPizza from './pages/ListPizza/ListPizza'
import NewPizza from './pages/NewPizza/NewPizza';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/forget" component={ForgetPsw} />
                <Route path="/newUser" component={NewUser} />
                <Route path="/loading" component={Loading} />
                <Route path="/listuser" component={ListUser} />
                <Route path="/listpizza" component={ListPizza} />
                <Route path="/newpizza" component={NewPizza} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;