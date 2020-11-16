import Cookies from 'universal-cookie';
import Login from './Login';
const cookies = new Cookies();


export default async function authenticated(){
    var user = cookies.get('user');
    var password = cookies.get('password');
    if(typeof user === 'undefined'||typeof password === 'undefined' )
        return false;
        
    if(await Login(user, password)) {
        return true;
    }
    else
        return false;
}