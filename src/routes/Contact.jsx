import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/main5.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      // text="Shedule Your Appointment Now"
      // buttonText = "Reserve Now" 
     url="/"
     btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
      </>
    )
   }
   
   
   export default Contact;