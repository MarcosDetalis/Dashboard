
import { Navigate, Outlet } from "react-router-dom";
 
import { createContext, useEffect, useState } from "react";
 

export const PrivateRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
     const [reservas, setReservas] = useState([]);

 useEffect(() => {
   fetch("http://localhost:4005/login/toket", {
     headers: { "Content-Type": "application/json" },
     method: "POST",
     body: JSON.stringify({
       token: isAllowed,
     }),
   })
     .then((response) => response.json())
     .then((res) => {
       console.log("resall", res.message.result[0].token);

       if (res === 0) {
         console.log("first ", res.message);
       } else {
         setReservas(res.message.result[0].token);
       }
     });
 }, [isAllowed]);
       console.log("op", reservas);

  if (isAllowed == reservas) {
       return <Navigate to={redirectTo} replace />;
 
  } else if (isAllowed !== reservas) {
 
      return children ? children : <Outlet />;
  }
};
