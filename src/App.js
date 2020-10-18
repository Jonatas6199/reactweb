import React from 'react';
//import utils from './utils';
import './App.css';
import './index.css';



function App() {
  return (
    <div className="App-style">
      <div className="Form-style" >
        <form>
          <label >
            Usuário:
            <input  type="text" name="name" />
          </label>
          <label>
            Senha:
            <input type="password" name="password" />
          </label>
        </form>
        <div className="relative-position">
       <button className="button">

       </button>
      </div>
      </div>
      
    </div>
  );
}


export default App;
