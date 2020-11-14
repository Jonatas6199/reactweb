import React from 'react'
import Login from '../functions/Login.js';

function getUsername(){
    var value =  document.getElementById("username").value;
    return value;
}

function getPassword(){
    var value =  document.getElementById("password").value;
    return value;
}

function DoLogin(){
    var username = getUsername();
    var password = getPassword();
    Login(username, password);
}
function LoginPage(){
    return(
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

    </div>
    )
}

export default LoginPage