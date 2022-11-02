import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/main2.jpg"
import Footer from "../components/Footer";
function Service(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Service"
      // text="Shedule Your Appointment Now"
      // buttonText = "Reserve Now" 
     url="/"
     btnClass="hide"
      />
      <Footer/>
      </>
    )
   }
   
   
   export default Service;