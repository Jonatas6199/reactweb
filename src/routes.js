import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './homepage.js';
import LoginPage from './loginpage';

/*definição das rotas : abaixo */ 

const Routes = () => (

    /*dá a habilidade para trabalhar com as rotas do browser, entender a url, etc...*/
   /*o switch tem a função de não deixar mais de uma rota ser chamada ao mesmo tempo*/
   <BrowserRouter>
       
        <Switch>
            <Route exact={true} path="/" component ={LoginPage}/> 
            <Route exact={true} path="/moveblocks" component ={() => <h1>Hello World</h1>}/>
            <Route exact={true} path="/home" component={HomePage} /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;

//
