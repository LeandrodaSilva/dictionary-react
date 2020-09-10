import React from "react";
import { BrowserRouter } from 'react-router-dom';
import SignedRoutes from "./SignedRoutes";
import {UnsignedRoutes} from "./UnsignedRoutes";
import {useSelector} from "react-redux";
import {isLogged_map} from "../store/authSlice";

export default function Routes() {
  const isLogged = useSelector(isLogged_map);

  return (
    <BrowserRouter>
      {
        isLogged ? <SignedRoutes /> : <UnsignedRoutes />
      }
    </BrowserRouter>
  )
}


