import React from "react";
import { useEffect, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  const trasitionnavbar = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trasitionnavbar);
    return () => {
      window.removeEventListener("scroll", trasitionnavbar);
    };
  });

  return (
    <div className={`Container1 ${show && "navblack"}`}>
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative",
      }}>
      <Link to={"/"}>        
          <img
            className="Logo"
            style={{width:130}}
            src={require("../580b57fcd9996e24bc43c529.png")}
            alt="netflix logo text"
          />
       </Link>
        <Link to={"/profile"}>
          <img
          className="Button"
          style={{width:45,height:35,right:20}}
          src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            
            alt="avatar-img"
    />
    </Link>
      </div>

    </div>
  );
};

export default Nav;
