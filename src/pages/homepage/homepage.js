import React from 'react';
import Tabs from '../../components/tabs.js'; 
import GpsMap from  '../../components/map.js';
import './homepage.css'
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
       
       </div> 
       </Tabs> 
        
      </>
    )
}

export default HomePage