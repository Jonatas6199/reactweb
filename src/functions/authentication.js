import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function authenticated(){
var password = cookies.get('password');
    if(password!== undefined) {
        return true;
    }
    else
        return false;
}
/*
var password = cookies.get('password');
    if(password!= undefined) {
        return true;
    }
    else
        return false;
}*/