import React from "react";
import Homescreen from "./Homescreen";
import Loginscreen from "./Loginscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profilescreen from "./Profilescreen";
class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Loginscreen />} />
        <Route path="/home" element={<Homescreen />}/>
        <Route path="/profile" element={<Profilescreen />}/>
        </Routes>
      </Router>
    );
  }
}
export default Routing;
