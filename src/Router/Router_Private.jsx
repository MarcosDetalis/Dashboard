
import { Navigate, Outlet } from "react-router-dom";
 import { useEffect, useState } from "react";


export const PrivateRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {

 async () => {
    try {
      let res = await fetch("http://localhost:4005/login/toket", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          token: isAllowed,
        }),
      });
      await res.json();
      if (res.status === 200) {
        console.log("first333")
        
      } else {
         console.log("first555");
      }
    } catch (err) {
      console.log(err);
    }
   console.log("oop desde aqui");
  }

  console.log("is", isAllowed);
  if (isAllowed !="1") {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
