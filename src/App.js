import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import CurrentLocation from "./components/map"
import Form from "./components/form"
import Weather from "./components/weather"
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const GOOGLE_MAP_API_KEY = ""
const API_KEY = "44159c2e7f3c55ed8c3dd953327e23e2"

class App extends React.Component{
  state = {
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined 
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
          error:undefined
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
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <CurrentLocation centerAroundCurrentLocation google={this.props.google} />
                </div>
                <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )    
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVkaJRdSnFp6RhAk3ert03ypJw49uy61g'
})(App);