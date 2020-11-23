import Cookies from 'universal-cookie';
const cookies = new Cookies();
var axios = require('axios');
var route = "https://gps-indoor.herokuapp.com/";
var insertRoute = route+"tag/";

export default async function insertTag(tagId){
    var userName = cookies.get('user');
    var password = cookies.get('password'); 
    
    var userInfo =  "Basic " +  Buffer.from(userName + ":" + password).toString('base64');
    var config = {
        headers: {'authorization': userInfo},
        body:{'tag_id':tagId}
    };
    var result;
    await axios.post(insertRoute,config).then((response) => {
        console.log(response);
        
        if(response.status === 200){
            result =  true;
        }
        else{
          result =  false;
        }
  
    });
    return result;
}