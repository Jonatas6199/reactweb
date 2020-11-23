import React from 'react';
import Tabs from '../../components/tabs.js'; 
import GpsMap from  '../../components/map.js';
import insertTag from '../../functions/insertTag.js';
import './homepage.css'

async function insert(){
  var tagId = document.getElementById("tagId").value;
  var response = await insertTag(tagId);
  if(response){
    alert("Tag Cadastrada com sucesso");
  }
  else{
    alert("Erro no cadastro da Tag, código já cadastrado!!");
  }
}
function HomePage(){
    return (
      <>
        <header className="header">
          <div>Sistema de Controle GPS Indoor</div>
        </header>
        <div className="company-name">
          Bem vindo GAPO
        </div>
        <Tabs> 
       <div label="MAPA"> 
         <GpsMap>
          
         </GpsMap>
       </div> 
       <div label="Cadastrar Tag"> 
        <div>
          <label> código de tag  </label>
          <input type="text" id="tagId"></input>
        </div>
        <div>
          <button onClick={insert}>
            Cadastrar
          </button>
        </div>
       </div> 
       </Tabs> 
        
      </>
    )
}

export default HomePage