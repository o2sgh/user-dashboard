import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./protectedRoute";
import PublicRoutes from "./publicRoute";
import VerifyingEmail from "../pages/Verifying/VerifyingEmail";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route exact path="/" element={<PublicRoutes />}>
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="email-verifying/:id" element={<VerifyingEmail />} />

        {/* <Route exact path="/complete-profile" element={<CompleteProfile />} /> */}
        <Route exact path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
