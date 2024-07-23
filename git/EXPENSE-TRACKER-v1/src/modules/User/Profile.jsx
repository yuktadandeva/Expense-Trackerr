
import { BillForm } from '../Dashboard/BillForm'
export function Profile({fn,fn2,fn3}) {


const flex={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    
}

const myStyle={
    borderRadius:"50%",
    border:"3px solid black",
    marginTop:"20px",
    position:"relative",
    width:"70%",
    height:"35vh",
    overflow:"hidden"
}

const img={
    width:"100%",
    height:"150%",
}

const textAlign ={
  textAlign:"center"
}


  return (
    <div>
        <div className="flex" style={flex}>
        <div className="profile-pic" style={myStyle}>
            <img style={img} src="" alt="" />
        </div>
        </div>
        <div className="user-info" style={textAlign}>
          <h4>name</h4>
          <h6>userid</h6>
        </div>
        <div className="add-bill row">
         <BillForm fn={fn} fn2={fn2} fn3={fn3}></BillForm>
        </div>
    </div>
  )
}
