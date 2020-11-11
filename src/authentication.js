var logged =  false;

function setLogged(login){
    logged = login;
}

function authenticated(){
    return logged;
}

module.exports = {authenticated, setLogged }; 