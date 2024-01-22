import React from "react";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { AuthContextProvider } from "./context/AuthStore.jsx";
import Account from "./components/authentication/Account";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
