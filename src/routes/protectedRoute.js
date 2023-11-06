import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/AppBar/AppBar";
import Cookies from 'js-cookie';
const ProtectedRoute = () => {
  const token = Cookies.get('token');// determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return token ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
