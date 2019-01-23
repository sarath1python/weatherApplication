import React from "react"
import "../App.css"

class mapButton extends React.Component {
    render(){
        return (
            <div className="dropdown">
              <button className="dropbtn">Dropdown  
              </button>
              <div className="dropdown-content">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
              </div>
          </div>
        )
    }
}

export default mapButton;