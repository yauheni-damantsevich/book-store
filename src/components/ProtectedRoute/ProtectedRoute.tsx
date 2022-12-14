import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: any;
}

export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const user = useSelector((state: any) => state.user.userData);

  if (!user) {
    return <Navigate to="/login" />;
  } else return children;
};
