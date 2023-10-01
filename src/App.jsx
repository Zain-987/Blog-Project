import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import { useDispatch } from "react-redux";
import { resetUser } from "./redux/UserSlice";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/profile"
            element={
              <Protected>
                <h1>Profile Page</h1>
              </Protected>
            }
          />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
