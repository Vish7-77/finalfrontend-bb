import { Component } from "react";
import "./HairStyles.css"
import Hair1 from "../assets/hair1.jpeg"
import Hair2 from "../assets/hair2.jpeg"
import Hair3 from "../assets/hair3.jpeg"
import Hair4 from "../assets/hair4.jpeg"

class HairData extends Component{
    render(){
        return(
            <div className={this.props.className}>
           <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>
                {this.props.text}
            </p>
            </div> 
            <div className="image">
                <img src={this.props.img1} alt="img" />
                <img src={this.props.img2} alt="img" />
            </div>
        </div>
        )
    }
}

export default HairData;