import React from  "react"

import "../App.css"
import Title from "./title"
import MapButton from "./mapButton"



class Button extends React.Component{
    state = {
        locations:["Thrissur","Thiruvananthapuram","Ernakulam","Kochi"],
        locationHtml:""
    }
    createContent = async () =>{
        var a = ""
        for (var loc in this.state.locations){
            await (a += "<a href='country/"+this.state.locations[loc]+"'>"+this.state.locations[loc]+"</a>")
        }
        for(let i =0 ;i<100;i++)
        {
            if(i==99)
            {
                this.setState({
                    locationHtml : a
                })
            }
        }
        document.getElementById('location').innerHTML=this.state.locationHtml
    }

    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container__title">
                                    <MapButton 
                                    createContent = {this.createContent}
                                    locations = {this.state.locationHtml}/>
                                </div>
                                <div className="col-xs-6 title-container">
                                    <Title />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;
