
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/main4.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      // text="Shedule Your Appointment Now"
      // buttonText = "Reserve Now" 
     url="/"
     btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
      </>
    )
   }
   
   
   export default About;