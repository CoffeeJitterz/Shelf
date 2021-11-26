import React from "react";

export default function Confirm(props){
 //message = "Delete the appointment?";
  return (
      <main className="confirm_before_delete">
        <h1 className="text--semi-bold">{props.message}</h1>
        <section>
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onConfirm}>Confirm</button>
        </section>


      </main>


  )
}