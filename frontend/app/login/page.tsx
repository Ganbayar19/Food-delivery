"use client";

import Login from "./Login"

export default function LoginPage() {
  const handleLogin = () => {
    console.log("Logged in");
  };

  const handleGoSignup = () => {
    window.location.href = "/";
  };

  const LoginComponent = Login as any;
  return <LoginComponent goLogin={handleLogin} goSignup={handleGoSignup} />;
}
