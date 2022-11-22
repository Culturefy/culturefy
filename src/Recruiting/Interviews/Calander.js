
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, globalizeLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import globalize from 'globalize'
import Dialog from '@mui/material/Dialog';


const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
// const localizer = globalizeLocalizer(globalize)

const events = [
  // {
  //   title: "Big Meeting",
  //   allDay: true,
  //   start: new Date(2022, 11, 15),
  //   end: new Date(2022, 11, 15),
  // },
  // {
  //   title: "Vacation",
  //   start: new Date(2021, 15, 11),
  //   end: new Date(2022, 15, 11),
  // },

  // {
  //   title: "Conference",
  //   start: new Date(2021, 6, 20),
  //   end: new Date(2021, 6, 23),
  // },
];

const Calander = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [open, setOpen] = React.useState(false);
  console.log(allEvents)

  function handleAddEvent() {

    setAllEvents([...allEvents, newEvent]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);

  };


  return (
    <>
      <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        {/* <input type="time"  id=""  selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      {/* <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.job} onChange={(e) => setNewEvent({ ...newEvent, job: e.target.value })} />
      <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.jobapp} onChange={(e) => setNewEvent({ ...newEvent, jobapp: e.target.value })} />
      <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.date} onChange={(date) => setNewEvent({ ...newEvent, date })} /> */}
      {/* <input type="time"  id=""  selected={newEvent.date} onChange={(date) => setNewEvent({ ...newEvent, date })} /> */}
      {/* <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button> */}


      <div className="calander_dialog_box">
        <Dialog onClose={handleClose} open={open}>
          <div className="title">
            <h2> Are you Sure go to Interviews Profile?</h2>
          </div>
          <div className="link_buttons">
            <Link to="/recruiting/interviewspaceprofile"><button className="cal_btn_1">Yes</button></Link>
            <Link to="/recruiting/interviews"><button className="cal_btn_2">No</button></Link>
          </div>
        </Dialog>
      </div>

      {/* <Link to="/recruiting/interviewspaceprofile"></Link> */}
      <Calendar
        step={3}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleClickOpen}
        style={{ height: 500, margin: "50px" }}

      />

    </>


  )
}

export default Calander
