import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './apiroutes.js';

/*definição das rotas : abaixo */ 

function getUsername(){
    return document.getElementById("username").value;
}

function getPassword(){
    return document.getElementById("password").value;
}

function DoLogin(){
    Login(getUsername,getPassword);
}
const Routes = () => (

    /*dá a habilidade para trabalhar com as rotas do browser, entender a url, etc...*/
   /*o switch tem a função de não deixar mais de uma rota ser chamada ao mesmo tempo*/
   <BrowserRouter>
       
        <Switch>
           <Route  path="/" component ={() => 
           <div className="App-style">
                <div className="Form-style" >
                    <div className= "transbox">
                         <label className="stgletters" >
                                     Usuário:
                                    <p></p>
                                    <input  id="username" type="text" name="name" />
                         </label>
                            <div margin="10px">
                                <label className="stgletters">
                                    <p></p>
                                     Senha:
                                    <p></p>
                                    <input id="password" type="password" name="password" />
                                </label>
                            </div>
                                <p></p>
                            <div opacity= "1">
                                 <button className="button" onClick= {DoLogin} > Login
                                 </button>
                            </div>
                    </div>
                </div>
      
            </div>}/>
            <Route exact path="/moveblocks" component ={() => <h1>Hello World</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;