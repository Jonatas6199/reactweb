import authentication from  './authentication.js';
var axios = require('axios');
var route = "https://gps-indoor.herokuapp.com/";

//app.use(cors());

async function Login(user, password){
    var loginEnd = route+"user/";
    var userInfo =  "Basic " +  Buffer.from(user + ":" + password).toString('base64');
    var config = {
        headers: {'authorization': userInfo}
      };
    
      axios.get(loginEnd,config).then((response) => {
      if(response.status === 200){
        authentication.setLogged(true);
      }
      else{
        authentication.setLogged(false);
      }

      });
 }

export default Login

