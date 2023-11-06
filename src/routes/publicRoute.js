import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
const PublicRoutes = () => {
  const token = Cookies.get('token');

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
