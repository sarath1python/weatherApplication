import React from  "react"

import "../App.css"
import Title from "./title"
import MapButton from "./buttonPart"



class Button extends React.Component{
    state = {
        locations:["Thrissur","Thiruvananthapuram","Ernamkulam","Kochi"]
    }
    show
    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container__title">
                                    <MapButton locations = {this.state.locations}/>
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
