import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import Nav from "../src/Components/Navbar";
import { selectUser } from "./userSlice";
import { auth } from "./Firebaseapp";
import "./css/Profile.css";

const Profilescreen = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info" >
          <img style={{
          left:50
        }}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
             
              <button onClick={logout} className="profileScreen__signOut">
                Sign Out
              </button>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
