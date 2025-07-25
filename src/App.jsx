import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/react-router";
import Signup from "./component/pages/Signup";
import Dashboard from "./component/pages/Dashboard";
import HomePage from "./component/HomePage";
import { SignUp } from '@clerk/clerk-react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp routing="path" path="/signup" fallbackRedirectUrl="/login" />} />
      

      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

export default App;
