import React from 'react'
import SearchBox from '../Widgets/SearchBox'
import Subnav from '../Widgets/Subnav'
import  Logo  from '../Widgets/Logo'

export const Header = () => {
  const myStyle = {backgroundColor:"#D51239",
                   color:"white", 
                   margin:"0px", 
                   padding:"20px",  
                   justifyContent:"space-between", 
                   alignItems: "center",
                   backgroundColor:"#008080",
                   Color:"#001F3F",
                   display: "Flex"}
    return (
      <div style={myStyle}>
         <Logo></Logo>
              <h1>
              
                Fare Enough
              </h1>
                     
                <SearchBox></SearchBox>
                <Subnav></Subnav>              
   
      </div>
    )
  }
  
  
export default Header;


