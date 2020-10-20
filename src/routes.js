import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/*definição das rotas : abaixo */ 

const Routes = () => (

    /*dá a habilidade para trabalhar com as rotas do browser, entender a url, etc...*/
   /*o switch tem a função de não deixar mais de uma rota ser chamada ao mesmo tempo*/
   <BrowserRouter>
       
        <Switch>
           <Route exact path="/" component ={() => <h1>Hello World</h1>}/>
           <Route exact path="/teste" component ={() => 
           <div className="App-style">
                <div className="Form-style" >
                    <form className= "transbox">
                         <label className="stgletters" >
                                     Usuário:
                                    <p></p>
                                    <input  type="text" name="name" />
                         </label>
                            <div margin="10px">
                                <label className="stgletters">
                                    <p></p>
                                     Senha:
                                    <p></p>
                                    <input type="password" name="password" />
                                </label>
                            </div>
          
                                <p></p>
                            <div opacity= "1">
                                 <button className="button"> Login
                                 </button>
                            </div>
                    </form>
                </div>
      
            </div>}/>
            <Route exact path="/moveblocks" component ={() => <h1>Hello World</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;