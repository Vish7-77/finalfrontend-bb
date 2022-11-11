import "./styles.css"
// import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom"; 
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Sign from "./routes/Sign";
import { useSelector } from "react-redux";
import Calendar from "./routes/Calender"
// import Demo from "./routes/Demo";
function App() {

const {user} =useSelector(state=>state.custom)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cal" element={user? <Calendar/> :<Login/>}/>
        {/* // <Route path="/sign" element={}/> */}
        <Route path="/cal/reg" element={<Sign/>}/>
      </Routes>
    </div>
  );
}

export default App;
