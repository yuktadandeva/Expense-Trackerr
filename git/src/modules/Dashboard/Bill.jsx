import React from 'react'

export const Bill = ({bill,activity}) => {

const myStyle={margin:"0px", 
               backgroundColor:"Grey", 
               color:"white", 
               padding:"30px",
               textAlign:"center"}
  return (
    <div style={myStyle}>
    <h1>TOTAL BILL : <h2>{bill}</h2></h1>
    Description: &nbsp;
    {activity}
    </div>
  )
}
