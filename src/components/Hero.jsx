import "./HeroStyles.css"
import {Link} from "react-router-dom"


function Hero(props){
 return(
    <>
  <div className={props.cName}>
    <img src={props.heroImg} alt="herpImg" />
 
  <div className="hero-text">
    <h1>{props.title}</h1>
 
    <p>{props.text}</p>
 
    <Link to="/cal" >
 
      <button  className={props.btnClass} >
 
      {props.buttonText}
 
    </button>
 
    </Link>
 
  </div>
 
  </div>

    </>

)

}


export default Hero;