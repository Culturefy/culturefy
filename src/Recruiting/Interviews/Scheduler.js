import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

const Schedulera = () => {
  return (
    <div>
        <Scheduler
  view="week"

  events={[
    {
      event_id: 1,
      title:"xyz",
      start: new Date("2022/11/21 09:30"),
      end: new Date("2022/11/21 12:30"),
      user:"a",
     details:"aaaza",
     other: new Date("2022/11/22 12:30"),

    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021/5/4 10:00"),
      end: new Date("2021/5/4 11:00"),
    },
  ]}
  fields={[
    {
      name: "user_id",
      type: "select",
      // Should provide options with type:"select"
      options: [
        { id: 1, text: "John", value: 1 },
        { id: 2, text: "Mark", value: 2 }
      ],
      config: { label: "User", required: true, errMsg: "Plz Select User" }
    },
    {
      name: "Description",
      type: "input",
      default: "Default Value...",
      config: { label: "Details", multiline: true, rows: 4 }
    },
    {
      name: "anotherdate",
      type: "date",
      config: {
        label: "Other Date",
        md: 6,
        modalVariant: "dialog",
        type: "datetime"
      }
    }
  ]}
/>
      
    </div>
  )
}

export default Schedulera
