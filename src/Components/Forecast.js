import React ,{ useState }from 'react';
import Conditions from './Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
   let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
   let [responseObj, setResponseObj] = useState({});
   function getForecast(e){
      e.preventDefault();
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=9ed1ce676c2a14c53e7ddea7b7ec0050`, 
      {
	      "method": "GET",
	      "headers": {
            'Content-Type': 'text/plain'
	      }
      }).then(response => response.json())
      .then(response => {
          setResponseObj(response)
      }) .catch(err => {
          console.log(err);
      });
   }
      return (
      <div style={{textAlign:'center'}}>
      <h2 style={{textAlign:'center',color:"white"}}>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    className={classes.textInput}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <br></br>
                <label style={{color:"white"}} className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label style={{color:"white"}} className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
      <Conditions
               responseObj={responseObj} unit={unit}
               />       
      </div>
   )
}
export default Forecast;