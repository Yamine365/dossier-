// src/pages/Auth.jsx
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Auth = () => {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      {currentPage === "login" ? (
        <LoginPage onNavigateToSignup={() => setCurrentPage("signup")} />
      ) : (
        <SignupPage onNavigateToLogin={() => setCurrentPage("login")} />
      )}
    </>
  );
};

export default Auth;
