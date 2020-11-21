import Cookies from 'universal-cookie';

const cookies = new Cookies();

var axios = require('axios');
var route = "https://gps-indoor.herokuapp.com/";


async function Login(user, password){
    var loginEnd = route+"user/";
    var userInfo =  "Basic " +  Buffer.from(user + ":" + password).toString('base64');
    var config = {
        headers: {'authorization': userInfo}
      };
    
      await axios.get(loginEnd,config).then((response) => {
      if(response.status === 200){
        cookies.set('password',password);
        cookies.set('user',user);
        return true;
      }
      else{
        cookies.set('password','');
        return false;
      }

      });
 }

export default Login

