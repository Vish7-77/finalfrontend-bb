import * as React from 'react';

import dayjs from 'dayjs';
import "./Consult.css"
import { StyledEngineProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';





export default function BasicDateTimePicker() {

  //function to convert the timings
  const myfunc = (_id, time) => {
    let ddy = _id.time
    var s = new Date(ddy).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
    console.log(s)

    return <li className='list' key={_id}> {s} </li>
  }



  //all the managed state for reservation
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [showres, setshowres] = React.useState([])




  //posting the API
  const HandlePush = () => {
    const val = { "time": value };
    axios.post(`http://localhost:8800/api/v1/reservation`, val).then((res) => { console.log(res) })

    alert("booking successfully allotted")
  }




//Fetching the API on REload of the Page
  React.useEffect(() => {
    axios.get(`http://localhost:8800/api/v1/reservation`)
      .then(res => {

        setshowres(res.data.Reseravtions);


      })
  }, [])





  return (
    <>

      <div className="cont">
        <StyledEngineProvider injectFirst>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);

              }}
            />

            <button onClick={HandlePush}>Submit </button>
          </LocalizationProvider>
        </StyledEngineProvider>


        <div className="sideconst">
Slots Booked

          <ul>{showres.map(myfunc)}</ul>


        </div>
      </div>
    </>
  );
}
