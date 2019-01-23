import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import SimpleMap from "./components/map"
import Form from "./components/form"
import Weather from "./components/weather"
import Frame from "./components/Frame"


const API_KEY = "44159c2e7f3c55ed8c3dd953327e23e2"

class App extends React.Component{
  state = {
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    lat:undefined,
    lng:undefined
  }
  getWeather = async (e) => {
     e.preventDefault();
     const City = e.target.elements.city.value;
     const Country = e.target.elements.country.value;
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}`)
     let data = await api_call.json();
     
     if(City && Country) 
     {
      if (data.cod != 404)
      {
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:undefined,
          lat:data.coord.lat,
          lng:data.coord.lon
        })
      }
      else
      {
        this.setState({
         error:data.message,
         temperature:undefined,
         city:undefined,
         country:undefined,
         humidity:undefined,
         description:undefined,
         lat:undefined,
         lng:undefined
        })
      }
     }
     else
     {
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:'please enter values' 
      })
     }
    
    }
  render(){
    return (
      <div>
        <Frame />
      </div>
    )    
  }
}
export default App;