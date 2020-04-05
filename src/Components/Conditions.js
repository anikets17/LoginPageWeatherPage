import React from 'react';
import './conditions.scss';
const conditions = (props) => {
    let unit="Celcius";
    if(props.unit=="imperial"){
        unit="Fahrenheit"
    }
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                <div className="container">
                    <div className="overlay">
                        <div className="login-panel">
                            <header>
                                <div className="logo" align="center">
                                    <span style={{color:"white"}}><strong >{props.responseObj.name}</strong></span>
                                </div>
                            </header>
                            <p style={{color:"white"}}>It is currently {Math.round(props.responseObj.main.temp)} {unit} out with {props.responseObj.weather[0].description}.</p>
                        </div>
                    </div>
                </div>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;