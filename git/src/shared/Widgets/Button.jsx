import React from 'react'

export const Button = ({val,fn2}) => {

const myStyle={
   margin:"2px",
   padding:"0px 5px",
   color:"white",
   backgroundColor:"#444444"
}

  return (
    <button onClick={fn2} style={myStyle}>{val}</button>
  )
}
