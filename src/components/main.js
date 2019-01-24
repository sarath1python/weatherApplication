import React from "react";

import SimpleMap from "./map"
import Form from "./form"
import Weather from "./weather"

const API_KEY = "44159c2e7f3c55ed8c3dd953327e23e2"

class main extends React.Component{
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
  getWeatherOnLoad = async (city,country) =>{
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    let data = await api_call.json();
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
  async componentDidMount()
  {
    await this.getWeatherOnLoad(this.props.match.params.city,'in')
  }
  render(){
    return(
    <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <SimpleMap lat={this.state.lat} lng={this.state.lng} description={this.state.description}/>
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
export default main;