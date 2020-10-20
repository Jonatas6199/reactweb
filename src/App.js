import React from 'react';
//import utils from './utils';
// importa as rotas da aplicação
import Routes from './routes'; 
import './App.css';
import './index.css';


//transformado o componente em um stateless component
const App = () => <Routes/>

// coment do nosso programa anterior 
/*
function App() {
  return (
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
          
          <p>
          </p>
          <div opacity= "1">
          <button className="button"> Login
          </button>
          </div>
          
        </form>
      </div>
      
    </div>
  );
}
*/

export default App;
