// src/context/auth.context.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../authService/authService";

const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const authenticateUser = () => {
    const token = localStorage.getItem("authToken");

    
    setIsLoading(true);
 
    if (token) {
        get("/auth/login-test")
            .then((results) => {
                console.log("Are we logged in?", results.data);
                setUser(results.data)
            
            })
            .catch((err) => {
                localStorage.clear();
                setIsLoading(false)
                console.log(err.message);
            })
            .finally(() => {
                setIsLoading(false)
                setIsLoggedIn(true)
                navigate('/')
            });
        } else {
            setIsLoading(false);
            setUser(null);
        }
}

useEffect(() => {
  authenticateUser()
},[])
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, authenticateUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
