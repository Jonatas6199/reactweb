import React from 'react'
import Login from '../../functions/Login.js';
import {useHistory} from 'react-router-dom';
import authenticated from '../../functions/authentication.js';

function getUsername(){
    var value =  document.getElementById("username").value;
    return value;
}

function getPassword(){
    var value =  document.getElementById("password").value;
    return value;
}

async function DoLogin(hist){
    var username = getUsername();
    var password = getPassword();
    await Login(username, password);
    if(authenticated()){
        hist.push('/');
    }
    else{
        alert('USUÁRIO OU SENHA INVÁLIDOS!!');
    }
}
function LoginPage(){
    const history = useHistory();
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
                         <button className="button" onClick= {()=> DoLogin(history)} > Login
                         </button>
                    </div>
            </div>
        </div>

    </div>
    )
}

export default LoginPage