import React, { useEffect } from "react";
import Homescreen from "./Homescreen";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginscreen from "./Loginscreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebaseapp";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import Profilescreen from "./Profilescreen";
const App = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profilescreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;