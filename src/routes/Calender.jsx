import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Consult.css"

// import React from 'react'

const Calender = () => {
  
  
    const [value, onChange] = useState(new Date());
  
  return (
<section className='consultsec'>
<div className="innerconsult">
    

    <div className="conleft">
   <div className="inconleft">
   <span className="slot">
 Slot Available On Today
 </span>
 <span className='gryline'></span>
<div className="timings">
<div className="topt">
    <button>9:00 AM</button>
    <button>9:30 AM</button>
    <button>10:00 AM</button>
</div>
<div className="bottomt">

<button>9:00 AM</button>
    <button>9:30 AM</button>
    <button>10:00 AM</button>

</div>




</div>

   </div>
   <div className="mobnavdw">
  <span className='mobnav01'>Back</span>
  <button className='mobnav02'>
    Book now
  </button>
   </div>

        
    </div>



    <div className="conright">


    <Calendar  onChange={onChange} value={value} />

<div className="bitdiv">
<a href="/doctor">
<button className='back'>
Back
</button>
</a>

<a href="/confirm-pay">
<button className='book'>
Book now
</button>
</a>
</div>

    </div>
    
    
    
    
    </div>    





</section>
  )
}

export default Calender