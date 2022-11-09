import { Component } from "react";
import "./NavbarStyles.css";
import React,{useState} from "react";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems" ;
  
class Navbar extends Component{
  constructor(props) {
    super(props)

    this.state = {
      isclick:false
    }
}
  signout=()=>{
    console.log('hello')
  };

    state = {clicked:false};
    state = { clicked: false };
    
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  
    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">BarBer</h1>
            
            
            <div className="menu-icons" onClick={this.handleClick}>
                {/* its a dynamic way using state with if statement to
                change the state of the icon between burger/close   */}
                <i className={this.state.clicked ?"fas fa-times" : "fas fa-bars" }></i>
                
            </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {/* mapping the items from the list of menuitems */}
                    {MenuItems.map((item, index) =>{
                        
                      return(  
                      <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i> 
                        {item.title}
                        </Link> 
                     </li>
                      );
                    })}
                 {this.state.isclick ?  <Link to="/sign"> <button>Sign Up</button></Link>:
                   <Link to="/"> <button onClick={this.state.signout}>logout</button></Link>}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;