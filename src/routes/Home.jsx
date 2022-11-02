import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hair from "../components/Hair";
import Other from "../components/Other";
import Footer from "../components/Footer";
function Home(){
 return(
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    title="The Best Barber In Varna"
    text="Shedule Your Appointment Now"
   url="/"
   btnClass="show"
   buttonText = "Reserve Now"
    />

    <Hair/>
    <Other/>
    <Footer/>
    
    </>
 )
}


export default Home;