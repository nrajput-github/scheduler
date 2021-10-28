import React, { Fragment } from "react";
import "components/Appointment/styles.scss";


export default function Appointment(props) {
  let app;
  app = `${!props.time ? ' No Appointments' : 'Appointment at 12pm'}`;
  return (
    <article className="appointment">{app}</article>
  )
}