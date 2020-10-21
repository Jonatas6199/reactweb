//const express = require('express');
//const axios = require('axios');
//const app = express();
//const cors = require('cors');
const route = "https://localhost:5000/";

//app.use(cors());

async function Login(user, password){
   
    const loginEnd = route+"user";

    var userInfo =  "Basic " +  Buffer.from(user + ":" + password).toString('base64')

    var request = new XMLHttpRequest();
    request.open("GET",loginEnd);
    request.setRequestHeader("authorization",userInfo);
    request.send();
    console.log(request.response);
}

export default Login