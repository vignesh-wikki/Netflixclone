import React,{useState} from "react";
import Signupscreen from "./Signupscreen";
import "./css/Loginscreen.css";


const Loginscreen = ()=>{
  const [signin,setSignin] = useState(false)
  return(
  
    <div className="loginscreen">
    <div className="login-gradient">
    <div className="logo">
   
    <img
          style={{width:150, height:70}}
          src={require("./580b57fcd9996e24bc43c529.png")}
          alt="netflix logo text"
        /> 
        
        <button className="login-button" onClick={()=> setSignin(true)}>
        Sign in
        </button>
        
    </div>
    <div className="login-body">
    {
      signin ?(
        <Signupscreen/>
       ) : (
        <div>
        <h1>Unlimited files, Tv programes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h4>
          Ready to watch? Enter your email to create or restart your
          membership.
        </h4>

        <form>
        <input className="loginscreen__input" type="email" placeholder="Email Address" />
        <button onClick={()=> setSignin(true)} className="login-getstarted" >GET STARTED</button> 
        </form>

      </div>

      )
    }
    </div>

    </div>
    </div>
  )
}

export default Loginscreen;