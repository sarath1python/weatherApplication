import React from "react"
import "../App.css"

class mapButton extends React.Component {
    render(){
        return (
            <div className="dropdown">
              <button onClick={this.props.createContent} className="dropbtn">Dropdown  
              </button>
              <div className="dropdown-content" id ="location">
                {this.props.locations}
              </div>
          </div>
        )
    }
}

export default mapButton;