import React from 'react'
import { useContext } from 'react'
import ContextManipulation from '../Context/Context';
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

  // Add your own authentication on the below line.
  const {userLogged, setUserLogged} = useContext(ContextManipulation);

  return userLogged ? <Outlet /> : <Navigate to="/login" />;
}