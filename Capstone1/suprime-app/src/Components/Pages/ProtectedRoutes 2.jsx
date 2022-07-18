import React from "react";
import AdminView from "./Forms/AdminView";
import { Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <AdminView />;
};
export default ProtectedRoutes;
