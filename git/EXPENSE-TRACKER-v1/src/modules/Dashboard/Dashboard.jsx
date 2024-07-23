import { Header } from "../../shared/Components/Header"
import { FriendList } from "./FriendList"
import { Profile } from "../User/Profile"
import { Bill } from "./Bill"
import React, { useState, useEffect } from "react"

export const Dashboard = () => {

const [totalBill, setBill] = useState();
const [share, setShare] = useState();
const [activity, setActivity] = useState();

const handleBill= (e)=>{
 setBill(e.target.value);
}
const handleClick=()=>{
  calculateShare(totalBill);
}

const handleActivity=(e)=>{
  setActivity(e.target.value);
  console.log(e.target.value)
}

const calculateShare=()=>{
  setShare(totalBill/4);
}

useEffect(() => {
  console.log(share);
}, [share]);


const font={fontFamily:"Mulish"}
const myStyle ={border:"1px solid grey"}
const margin ={marginTop:"20px"}


  return (
    <div style={font}>
      <Header></Header>
    <div className="container">
        <div className="row" style={margin}>
            <div className="col-8" style={myStyle}>
                <div className="totalMoney">
                 <Bill bill={totalBill} activity={activity}></Bill>
                </div>
                <div className="friends">
                    <FriendList share={share}></FriendList>
                </div>
            </div>
            <div className="col-4" style={myStyle}>
                <Profile fn={handleBill} fn2={handleClick} fn3={handleActivity}></Profile>
            </div>
        </div>
    </div>
    </div>
  )
}
