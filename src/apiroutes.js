//const express = require('express');
var axios = require('axios');
//const app = express();
//const cors = require('cors');
var route = "http://localhost:5000/";

//app.use(cors());

async function Login(user, password){
    var loginEnd = route+"user/";
    var userInfo =  "Basic " +  Buffer.from(user + ":" + password).toString('base64');
    var config = {
        headers: {'authorization': userInfo}
      };
    axios.get(loginEnd,config).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
   // var request = new XMLHttpRequest();
   // request.open("GET",loginEnd);
   // request.setRequestHeader("authorization",userInfo);
    //await request.send();
}

export default Login

