import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const ProtectedRoute = ({ children }) => {


  
  const token = localStorage.getItem("token");
  const naviagate = useNavigate();

  async function validateUserLogin() {
    try {
      await axios.get("http://localhost:3000/student/me", {
        headers : {
          authorization : "Bearer " + token
        }
      });
    }catch(error) {
      console.log("Error!")
      naviagate("/login");
    }
  }

  useEffect(() => {
    validateUserLogin();
  }, []);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
